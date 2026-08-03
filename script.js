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

const characterDialog = document.querySelector("[data-character-dialog]");
const characterButtons = document.querySelectorAll("[data-character-modal]");

if (characterDialog && characterButtons.length) {
  const title = characterDialog.querySelector("[data-character-title]");
  const commander = characterDialog.querySelector("[data-character-commander]");
  const type = characterDialog.querySelector("[data-character-type]");
  const unit = characterDialog.querySelector("[data-character-unit]");
  const unitPanel = characterDialog.querySelector("[data-character-unit-panel]");
  const known = characterDialog.querySelector("[data-character-known]");
  const history = characterDialog.querySelector("[data-character-history]");
  const closing = characterDialog.querySelector("[data-character-closing]");
  const image = characterDialog.querySelector("[data-character-image]");
  const closeButton = characterDialog.querySelector("[data-character-close]");

  function setText(target, value) {
    if (!target) {
      return;
    }

    target.textContent = value || "";
    target.hidden = !value;
  }

  function setFormattedText(target, value) {
    if (!target) {
      return;
    }

    target.textContent = "";
    target.hidden = !value;

    if (!value) {
      return;
    }

    value.split("*").forEach((part, index) => {
      if (!part) {
        return;
      }

      const appendTextWithBreaks = (parent, text) => {
        text.split("\n").forEach((line, lineIndex) => {
          if (lineIndex > 0) {
            parent.append(document.createElement("br"));
          }
          if (line) {
            parent.append(document.createTextNode(line));
          }
        });
      };

      if (index % 2 === 1) {
        const emphasis = document.createElement("em");
        appendTextWithBreaks(emphasis, part);
        target.append(emphasis);
      } else {
        appendTextWithBreaks(target, part);
      }
    });
  }

  characterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setText(title, button.dataset.name);
      setText(commander, button.dataset.commander);
      setText(type, button.dataset.type);
      setText(unit, button.dataset.unit);
      if (unitPanel) {
        unitPanel.hidden = !button.dataset.unit;
      }
      setFormattedText(known, button.dataset.known);
      setFormattedText(history, button.dataset.history);
      setText(closing, button.dataset.closing);

      if (image && button.dataset.image) {
        image.src = button.dataset.image;
        image.alt = `${button.dataset.name || "Character"} artwork for Deathmancer.`;
      }

      if (typeof characterDialog.showModal === "function") {
        characterDialog.showModal();
      } else {
        characterDialog.setAttribute("open", "");
      }
    });
  });

  function closeCharacterDialog() {
    if (typeof characterDialog.close === "function") {
      characterDialog.close();
    } else {
      characterDialog.removeAttribute("open");
    }
  }

  closeButton?.addEventListener("click", closeCharacterDialog);

  characterDialog.addEventListener("click", (event) => {
    if (event.target === characterDialog) {
      closeCharacterDialog();
    }
  });
}

const scorekeeper = document.querySelector("[data-scorekeeper]");

if (scorekeeper) {
  const storageKey = "deathmancer-scorekeeper-draft";
  const commanderIcons = [
    "./assets/images/characters/archimedes-undead.jpg",
    "./assets/images/characters/balthazar-undead.jpg",
  ];
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
    roundLog: [],
    players: getDefaultPlayers(),
  };

  const playerCards = [...scorekeeper.querySelectorAll("[data-player-card]")];
  const roundDisplay = scorekeeper.querySelector("[data-round-display]");
  const roundNote = scorekeeper.querySelector("[data-round-note]");
  const initiativeDisplay = scorekeeper.querySelector("[data-initiative-display]");
  const initiativeIcon = scorekeeper.querySelector("[data-initiative-icon]");
  const terrainResult = scorekeeper.querySelector("[data-terrain-result]");
  const notesField = scorekeeper.querySelector("[data-match-notes]");
  const winBanner = scorekeeper.querySelector("[data-win-banner]");
  const purgatoryButton = scorekeeper.querySelector("[data-purgatory]");
  const resetButton = scorekeeper.querySelector("[data-reset-match]");
  const effectOverlay = document.querySelector("[data-scorekeeper-effect]");
  const effectSymbol = effectOverlay?.querySelector("[data-effect-symbol]");
  const effectCopy = effectOverlay?.querySelector("[data-effect-copy]");
  const victoryDialog = document.querySelector("[data-victory-dialog]");
  const victoryTitle = victoryDialog?.querySelector("[data-victory-title]");
  const victoryCopy = victoryDialog?.querySelector("[data-victory-copy]");
  const victoryStats = victoryDialog?.querySelector("[data-victory-stats]");
  const victoryClose = victoryDialog?.querySelector("[data-victory-close]");
  let audioContext = null;
  let effectTimeout = null;

  function getDefaultPlayers() {
    return [
      { name: "Archimedes", score: 12, atk: 8, multiplier: 1, spend: 0 },
      { name: "Balthazar", score: 8, atk: 5, multiplier: 1, spend: 0 },
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
      roundLog: state.roundLog.map((entry) => ({ ...entry })),
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
    state.roundLog = [];
    state.players = getDefaultPlayers();
  }

  function getAudioContext() {
    if (!audioContext) {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    return audioContext;
  }

  function playTone(kind) {
    if (!window.AudioContext && !window.webkitAudioContext) {
      return;
    }

    const context = getAudioContext();
    const scheduleTone = () => {
      const now = context.currentTime;
      const master = context.createGain();
      master.gain.setValueAtTime(0.001, now);
      master.gain.exponentialRampToValueAtTime(0.08, now + 0.018);
      master.gain.exponentialRampToValueAtTime(0.001, now + 0.72);
      master.connect(context.destination);

      const patterns = {
        round: [392, 523.25, 659.25],
        terrain: [146.83, 220, 293.66, 440],
        score: [329.63, 493.88, 659.25],
        spend: [293.66, 220, 164.81],
        victory: [392, 493.88, 587.33, 783.99],
      };

      (patterns[kind] || patterns.score).forEach((frequency, index) => {
        const oscillator = context.createOscillator();
        const gain = context.createGain();
        const start = now + index * (kind === "terrain" ? 0.055 : 0.08);
        const stop = start + (kind === "victory" ? 0.34 : 0.18);

        oscillator.type = kind === "spend" ? "triangle" : "sine";
        oscillator.frequency.setValueAtTime(frequency, start);
        gain.gain.setValueAtTime(0.001, start);
        gain.gain.exponentialRampToValueAtTime(0.12, start + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.001, stop);
        oscillator.connect(gain);
        gain.connect(master);
        oscillator.start(start);
        oscillator.stop(stop + 0.02);
      });
    };

    if (context.state === "suspended") {
      context.resume().then(scheduleTone).catch(() => {});
    } else {
      scheduleTone();
    }
  }

  function showEffect(kind, symbol, copy) {
    if (!effectOverlay || !effectSymbol || !effectCopy) {
      return;
    }

    clearTimeout(effectTimeout);
    effectOverlay.hidden = false;
    effectOverlay.className = `scorekeeper-effect scorekeeper-effect--${kind}`;
    effectSymbol.textContent = symbol;
    effectCopy.textContent = copy;

    effectTimeout = window.setTimeout(() => {
      effectOverlay.hidden = true;
      effectOverlay.className = "scorekeeper-effect";
    }, kind === "victory" ? 1900 : 1250);
  }

  function flashPlayerTotal(index, kind) {
    const target = playerCards[index]?.querySelector("[data-total-score]");

    if (!target) {
      return;
    }

    target.classList.remove("score-flash--gain", "score-flash--spend");
    void target.offsetWidth;
    target.classList.add(kind === "spend" ? "score-flash--spend" : "score-flash--gain");
    window.setTimeout(() => {
      target.classList.remove("score-flash--gain", "score-flash--spend");
    }, 820);
  }

  function addRoundLog(entry) {
    state.roundLog.push({
      round: state.round,
      time: new Date().toISOString(),
      ...entry,
    });

    if (state.roundLog.length > 40) {
      state.roundLog = state.roundLog.slice(-40);
    }
  }

  function saveState() {
    localStorage.setItem(storageKey, JSON.stringify(state));
  }

  function updateStateFromInputs({ includeScores = false } = {}) {
    playerCards.forEach((card, index) => {
      const player = state.players[index];
      player.name = card.querySelector("[data-player-name]").value;
      if (includeScores) {
        player.score = clampScore(readNumber(card.querySelector("[data-score]")));
      }
      player.atk = Math.max(0, readNumber(card.querySelector("[data-living-atk]")));
      player.multiplier = Math.max(1, readNumber(card.querySelector("[data-multiplier]"), 1));
      player.spend = Math.max(0, readNumber(card.querySelector("[data-spend]")));
    });

    state.notes = notesField?.value || "";
  }

  function setInputValue(input, value, preserveFocusedInput) {
    if (preserveFocusedInput && document.activeElement === input) {
      return;
    }

    input.value = value;
  }

  function render({ preserveFocusedInput = false } = {}) {
    const suddenDeath = state.round > 6;
    roundDisplay.textContent = suddenDeath ? "Sudden Death" : String(state.round);
    roundNote.textContent = suddenDeath
      ? "Replay Round 6 timing until one player leads."
      : state.round === 2
        ? "Round 2: remember to resolve Auto-Summons."
        : state.round < 3
        ? "Rounds 1-2 have no terrain roll."
        : "Roll terrain at the start of the round.";

    const [firstPlayer, secondPlayer] = state.players;
    const initiativeIndex = firstPlayer.score >= secondPlayer.score ? 0 : 1;
    initiativeDisplay.textContent = getPlayerName(initiativeIndex);
    if (initiativeIcon) {
      initiativeIcon.src = commanderIcons[initiativeIndex];
      initiativeIcon.alt = `${getPlayerName(initiativeIndex)} initiative icon`;
    }

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
      setInputValue(card.querySelector("[data-player-name]"), player.name, preserveFocusedInput);
      setInputValue(card.querySelector("[data-score]"), player.score, preserveFocusedInput);
      setInputValue(card.querySelector("[data-living-atk]"), player.atk, preserveFocusedInput);
      setInputValue(card.querySelector("[data-multiplier]"), player.multiplier.toFixed(1), preserveFocusedInput);
      setInputValue(card.querySelector("[data-spend]"), player.spend, preserveFocusedInput);
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
      setInputValue(notesField, state.notes, preserveFocusedInput);
    }

    saveState();
  }

  function confirmScoreOverride(card, index) {
    const scoreInput = card.querySelector("[data-score]");
    const nextScore = clampScore(readNumber(scoreInput));
    const currentScore = state.players[index].score;

    if (nextScore === currentScore) {
      scoreInput.classList.remove("is-pending");
      render();
      return;
    }

    const playerName = getPlayerName(index);
    const confirmed = window.confirm(
      `Override ${playerName}'s running score from ${currentScore} to ${nextScore}? Use Post Score for normal scoring.`
    );

    if (confirmed) {
      updateStateFromInputs();
      rememberLastAction();
      const crossedThreshold = currentScore < 100 && nextScore >= 100;
      state.players[index].score = nextScore;
      addRoundLog({
        type: "Override",
        player: playerName,
        amount: nextScore - currentScore,
        before: currentScore,
        after: nextScore,
      });
      render();
      flashPlayerTotal(index, nextScore >= currentScore ? "gain" : "spend");
      if (crossedThreshold) {
        showVictory(index);
      }
      return;
    }

    scoreInput.classList.remove("is-pending");
    render();
  }

  function stepPlayerField(index, field, amount) {
    updateStateFromInputs();
    const player = state.players[index];

    if (field === "multiplier") {
      player.multiplier = Math.max(1, Math.round((player.multiplier + amount) * 10) / 10);
    }

    if (field === "atk") {
      player.atk = Math.max(0, Math.round(player.atk + amount));
    }

    if (field === "spend") {
      player.spend = Math.max(0, Math.round(player.spend + amount));
    }

    render();
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
      state.roundLog = Array.isArray(parsed.roundLog) ? parsed.roundLog : [];

      parsed.players?.slice(0, 2).forEach((player, index) => {
        state.players[index] = {
          ...state.players[index],
          ...player,
        };
      });

      const isLegacyBlankStart = state.round === 1
        && state.terrainIndex === null
        && !state.notes
        && state.players[0].name === "Player 1"
        && state.players[1].name === "Player 2"
        && state.players.every((player) => player.score === 0 && player.atk === 0 && player.multiplier === 1);

      if (isLegacyBlankStart) {
        state.players = getDefaultPlayers();
      }
    } catch {
      localStorage.removeItem(storageKey);
    }
  }

  playerCards.forEach((card, index) => {
    card.addEventListener("input", (event) => {
      if (event.target?.matches("[data-score]")) {
        event.target.classList.add("is-pending");
        return;
      }

      updateStateFromInputs();
      render({ preserveFocusedInput: true });
    });

    card.addEventListener("change", (event) => {
      if (event.target?.matches("[data-score]")) {
        confirmScoreOverride(card, index);
      }
    });

    card.addEventListener("keydown", (event) => {
      if (event.target?.matches("[data-score]") && event.key === "Enter") {
        event.preventDefault();
        confirmScoreOverride(card, index);
      }
    });

    card.addEventListener("click", (event) => {
      const stepButton = event.target.closest("[data-step-field]");

      if (!stepButton) {
        return;
      }

      stepPlayerField(
        index,
        stepButton.dataset.stepField,
        Number.parseFloat(stepButton.dataset.stepAmount)
      );
    });

    card.querySelector("[data-apply-score]").addEventListener("click", () => {
      updateStateFromInputs();
      rememberLastAction();
      const before = state.players[index].score;
      const gain = scoreForTurn(state.players[index]);
      const crossedThreshold = before < 100 && before + gain >= 100;
      state.players[index].score = clampScore(before + gain);
      addRoundLog({
        type: "Post Score",
        player: getPlayerName(index),
        pow: state.players[index].atk,
        multiplier: state.players[index].multiplier,
        amount: gain,
        before,
        after: state.players[index].score,
      });
      render();
      flashPlayerTotal(index, "gain");
      playTone("score");
      if (crossedThreshold) {
        showVictory(index);
      }
    });

    card.querySelector("[data-apply-spend]").addEventListener("click", () => {
      updateStateFromInputs();
      rememberLastAction();
      const before = state.players[index].score;
      const spend = state.players[index].spend;
      state.players[index].score = clampScore(before - spend);
      addRoundLog({
        type: "Spend",
        player: getPlayerName(index),
        amount: spend,
        before,
        after: state.players[index].score,
      });
      state.players[index].spend = 0;
      render();
      flashPlayerTotal(index, "spend");
      playTone("spend");
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

  function nextRound() {
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
    showEffect("round", state.round > 6 ? "SD" : String(state.round), state.round > 6 ? "Sudden Death" : `Round ${state.round}`);
    playTone("round");
  }

  scorekeeper.querySelectorAll("[data-round-next]").forEach((button) => {
    button.addEventListener("click", nextRound);
  });

  scorekeeper.querySelector("[data-roll-terrain]").addEventListener("click", () => {
    updateStateFromInputs();
    rememberLastAction();
    if (state.round < 3) {
      state.round = 3;
    }
    state.terrainIndex = Math.floor(Math.random() * terrain.length);
    render();
    const result = terrain[state.terrainIndex];
    showEffect("terrain", String(state.terrainIndex + 1), result.name);
    playTone("terrain");
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
    state.roundLog = Array.isArray(snapshot.roundLog) ? snapshot.roundLog.map((entry) => ({ ...entry })) : [];
    state.players = snapshot.players.map((player) => ({ ...player }));
    state.lastSnapshot = null;
    render();
  });

  function showVictory(winnerIndex) {
    const winner = state.players[winnerIndex];
    const roundEntries = state.roundLog.filter((entry) => entry.round === state.round);
    winBanner.hidden = false;
    winBanner.textContent = `${getPlayerName(winnerIndex)} reaches ${winner.score}. Victory threshold crossed.`;
    showEffect("victory", "100", `${getPlayerName(winnerIndex)} wins`);
    playTone("victory");

    if (victoryTitle) {
      victoryTitle.textContent = `${getPlayerName(winnerIndex)} wins.`;
    }

    if (victoryCopy) {
      victoryCopy.textContent = `Victory crossed in Round ${state.round > 6 ? "Sudden Death" : state.round} at ${winner.score} score.`;
    }

    if (victoryStats) {
      victoryStats.textContent = "";
      const summary = document.createElement("div");
      summary.className = "victory-dialog__summary";
      state.players.forEach((player, index) => {
        const item = document.createElement("p");
        item.innerHTML = `<strong>${getPlayerName(index)}</strong><span>${player.score} total - POW ${player.atk} - Mult ${player.multiplier.toFixed(1)}</span>`;
        summary.append(item);
      });
      victoryStats.append(summary);

      const log = document.createElement("div");
      log.className = "victory-dialog__log";
      const title = document.createElement("h3");
      title.textContent = "Round log";
      log.append(title);

      if (!roundEntries.length) {
        const empty = document.createElement("p");
        empty.textContent = "No score actions were logged this round.";
        log.append(empty);
      } else {
        roundEntries.forEach((entry) => {
          const item = document.createElement("p");
          if (entry.type === "Post Score") {
            item.textContent = `${entry.player}: POW ${entry.pow} x ${Number(entry.multiplier).toFixed(1)} = +${entry.amount} (${entry.before} to ${entry.after}).`;
          } else if (entry.type === "Override") {
            item.textContent = `${entry.player}: manual total override (${entry.before} to ${entry.after}).`;
          } else {
            item.textContent = `${entry.player}: spent ${entry.amount} (${entry.before} to ${entry.after}).`;
          }
          log.append(item);
        });
      }
      victoryStats.append(log);
    }

    if (typeof victoryDialog?.showModal === "function") {
      victoryDialog.showModal();
    } else {
      victoryDialog?.setAttribute("open", "");
    }
  }

  function closeVictoryDialog() {
    if (typeof victoryDialog?.close === "function") {
      victoryDialog.close();
    } else {
      victoryDialog?.removeAttribute("open");
    }
  }

  victoryClose?.addEventListener("click", closeVictoryDialog);
  victoryDialog?.addEventListener("click", (event) => {
    if (event.target === victoryDialog) {
      closeVictoryDialog();
    }
  });

  loadState();
  render();
}
