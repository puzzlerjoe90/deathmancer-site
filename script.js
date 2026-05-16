const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");

function setNavOpen(isOpen) {
  if (!nav || !navToggle) {
    return;
  }

  nav.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
}

function updateHeaderState() {
  header?.classList.toggle("is-scrolled", window.scrollY > 8);
}

navToggle?.addEventListener("click", () => {
  setNavOpen(!nav.classList.contains("is-open"));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    setNavOpen(false);
  }
});

window.addEventListener("scroll", updateHeaderState, { passive: true });
updateHeaderState();

const scorekeeper = document.querySelector("[data-scorekeeper]");

if (scorekeeper) {
  const storageKey = "deathmancer-scorekeeper-draft";
  const terrain = [
    {
      name: "Cursed Marshlands",
      effect: "Undead gain +1 ATK this round.",
    },
    {
      name: "Holy Grounds",
      effect: "All Living units heal +1 Soul.",
    },
    {
      name: "Obsidian Peaks",
      effect: "Each player draws +1 card.",
    },
    {
      name: "Souls Enclosure",
      effect: "No healing this round.",
    },
    {
      name: "Shadows Binding",
      effect: "No Undead may attack this round.",
    },
    {
      name: "Eternal Night",
      effect: "Each player's multiplier is doubled this round.",
    },
  ];

  const state = {
    round: 1,
    terrainIndex: null,
    notes: "",
    lastSnapshot: null,
    players: getDefaultPlayers(),
  };

  const playerCards = [...scorekeeper.querySelectorAll("[data-player-card]")];
  const roundDisplay = scorekeeper.querySelector("[data-round-display]");
  const roundNote = scorekeeper.querySelector("[data-round-note]");
  const initiativeDisplay = scorekeeper.querySelector("[data-initiative-display]");
  const terrainResult = scorekeeper.querySelector("[data-terrain-result]");
  const notesField = scorekeeper.querySelector("[data-match-notes]");
  const winBanner = scorekeeper.querySelector("[data-win-banner]");
  const purgatoryButton = scorekeeper.querySelector("[data-purgatory]");
  const resetButton = scorekeeper.querySelector("[data-reset-match]");

  function getDefaultPlayers() {
    return [
      { name: "Player 1", score: 0, atk: 0, multiplier: 1, spend: 0 },
      { name: "Player 2", score: 0, atk: 0, multiplier: 1, spend: 0 },
    ];
  }

  function readNumber(input, fallback = 0) {
    const value = Number.parseFloat(input.value);
    return Number.isFinite(value) ? value : fallback;
  }

  function clampScore(value) {
    return Math.max(0, Math.round(value));
  }

  function getPlayerName(index) {
    return state.players[index].name.trim() || `Player ${index + 1}`;
  }

  function scoreForTurn(player) {
    return Math.round(Math.max(0, player.atk) * Math.max(1, player.multiplier));
  }

  function createSnapshot() {
    return {
      round: state.round,
      terrainIndex: state.terrainIndex,
      notes: state.notes,
      players: state.players.map((player) => ({ ...player })),
    };
  }

  function rememberLastAction() {
    state.lastSnapshot = createSnapshot();
  }

  function resetMatch() {
    state.round = 1;
    state.terrainIndex = null;
    state.notes = "";
    state.players = getDefaultPlayers();
  }

  function saveState() {
    localStorage.setItem(storageKey, JSON.stringify(state));
  }

  function updateStateFromInputs() {
    playerCards.forEach((card, index) => {
      const player = state.players[index];
      player.name = card.querySelector("[data-player-name]").value;
      player.score = clampScore(readNumber(card.querySelector("[data-score]")));
      player.atk = Math.max(0, readNumber(card.querySelector("[data-living-atk]")));
      player.multiplier = Math.max(1, readNumber(card.querySelector("[data-multiplier]"), 1));
      player.spend = Math.max(0, readNumber(card.querySelector("[data-spend]")));
    });

    state.notes = notesField?.value || "";
  }

  function render() {
    const suddenDeath = state.round > 6;
    roundDisplay.textContent = suddenDeath ? "Sudden Death" : String(state.round);
    roundNote.textContent = suddenDeath
      ? "Replay Round 6 timing until one player leads."
      : state.round < 3
        ? "Rounds 1-2 have no terrain roll."
        : "Roll terrain at the start of the round.";

    const [firstPlayer, secondPlayer] = state.players;
    const initiativeIndex = firstPlayer.score >= secondPlayer.score ? 0 : 1;
    initiativeDisplay.textContent = getPlayerName(initiativeIndex);

    if (state.terrainIndex === null) {
      terrainResult.textContent = state.round < 3
        ? "No terrain in play yet."
        : "Ready to roll terrain.";
    } else {
      const result = terrain[state.terrainIndex];
      terrainResult.textContent = `${state.terrainIndex + 1}. ${result.name}: ${result.effect}`;
    }

    playerCards.forEach((card, index) => {
      const player = state.players[index];
      card.querySelector("[data-player-name]").value = player.name;
      card.querySelector("[data-score]").value = player.score;
      card.querySelector("[data-living-atk]").value = player.atk;
      card.querySelector("[data-multiplier]").value = player.multiplier.toFixed(1);
      card.querySelector("[data-spend]").value = player.spend;
      card.querySelector("[data-total-score]").textContent = player.score;
      card.querySelector("[data-score-preview]").textContent = scoreForTurn(player);
      card.classList.toggle("has-initiative", index === initiativeIndex);
    });

    const winningPlayers = state.players
      .map((player, index) => ({ player, index }))
      .filter(({ player }) => player.score >= 100);

    if (winningPlayers.length > 0) {
      const leader = winningPlayers.sort((a, b) => b.player.score - a.player.score)[0];
      winBanner.hidden = false;
      winBanner.textContent = `${getPlayerName(leader.index)} reaches ${leader.player.score}. Victory threshold crossed.`;
    } else {
      winBanner.hidden = true;
      winBanner.textContent = "";
    }

    purgatoryButton.disabled = !state.lastSnapshot;

    if (notesField) {
      notesField.value = state.notes;
    }

    saveState();
  }

  function loadState() {
    const savedState = localStorage.getItem(storageKey);

    if (!savedState) {
      return;
    }

    try {
      const parsed = JSON.parse(savedState);
      state.round = Number.isInteger(parsed.round) ? parsed.round : state.round;
      state.terrainIndex = Number.isInteger(parsed.terrainIndex) ? parsed.terrainIndex : null;
      state.notes = typeof parsed.notes === "string" ? parsed.notes : "";
      state.lastSnapshot = parsed.lastSnapshot || null;

      parsed.players?.slice(0, 2).forEach((player, index) => {
        state.players[index] = {
          ...state.players[index],
          ...player,
        };
      });
    } catch {
      localStorage.removeItem(storageKey);
    }
  }

  playerCards.forEach((card, index) => {
    card.addEventListener("input", () => {
      updateStateFromInputs();
      render();
    });

    card.querySelector("[data-apply-score]").addEventListener("click", () => {
      updateStateFromInputs();
      rememberLastAction();
      state.players[index].score = clampScore(state.players[index].score + scoreForTurn(state.players[index]));
      render();
    });

    card.querySelector("[data-apply-spend]").addEventListener("click", () => {
      updateStateFromInputs();
      rememberLastAction();
      state.players[index].score = clampScore(state.players[index].score - state.players[index].spend);
      state.players[index].spend = 0;
      render();
    });
  });

  notesField?.addEventListener("input", () => {
    updateStateFromInputs();
    render();
  });

  scorekeeper.querySelector("[data-round-prev]").addEventListener("click", () => {
    updateStateFromInputs();
    rememberLastAction();
    state.round = Math.max(1, state.round - 1);
    state.terrainIndex = state.round < 3 ? null : state.terrainIndex;
    render();
  });

  scorekeeper.querySelector("[data-round-next]").addEventListener("click", () => {
    updateStateFromInputs();
    rememberLastAction();
    const tiedBelowTarget = state.players[0].score === state.players[1].score && state.players[0].score < 100;

    if (state.round >= 6 && tiedBelowTarget) {
      state.round += 1;
    } else {
      state.round = Math.min(6, state.round + 1);
    }

    if (state.round < 3) {
      state.terrainIndex = null;
    }
    render();
  });

  scorekeeper.querySelector("[data-roll-terrain]").addEventListener("click", () => {
    updateStateFromInputs();
    rememberLastAction();
    if (state.round < 3) {
      state.round = 3;
    }
    state.terrainIndex = Math.floor(Math.random() * terrain.length);
    render();
  });

  resetButton?.addEventListener("click", () => {
    updateStateFromInputs();
    rememberLastAction();
    resetMatch();
    render();
  });

  purgatoryButton.addEventListener("click", () => {
    if (!state.lastSnapshot) {
      return;
    }

    const snapshot = state.lastSnapshot;
    state.round = snapshot.round;
    state.terrainIndex = snapshot.terrainIndex;
    state.notes = snapshot.notes;
    state.players = snapshot.players.map((player) => ({ ...player }));
    state.lastSnapshot = null;
    render();
  });

  loadState();
  render();
}
