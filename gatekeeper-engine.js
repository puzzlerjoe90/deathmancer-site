(function () {
  const app = document.querySelector("[data-gatekeeper-app]");
  const story = window.GATEKEEPER_STORY;

  if (!app || !story) {
    return;
  }

  const statNodes = {
    health: app.querySelector('[data-stat="health"]'),
    souls: app.querySelector('[data-stat="souls"]'),
    tokens: app.querySelector('[data-stat="tokens"]'),
    gateStability: app.querySelector('[data-stat="gateStability"]'),
    alignmentLabel: app.querySelector('[data-stat="alignmentLabel"]'),
    rewinds: app.querySelector('[data-stat="rewinds"]')
  };
  const gateMeter = app.querySelector('[data-meter="gate"]');
  const alignmentMeter = app.querySelector('[data-meter="alignment"]');
  const chapterTitle = app.querySelector("[data-chapter-title]");
  const sceneTitle = app.querySelector("[data-scene-title]");
  const storyCopy = app.querySelector("[data-story-copy]");
  const choiceList = app.querySelector("[data-choice-list]");
  const rollPanel = app.querySelector("[data-roll-panel]");
  const art = app.querySelector("[data-scene-art]");
  const rewindButton = app.querySelector("[data-rewind]");
  const restartButton = app.querySelector("[data-restart]");
  const diceButton = app.querySelector("[data-dice-roll]");
  const musicButton = app.querySelector("[data-music-toggle]");
  const music = document.querySelector("[data-background-music]");

  let state = clone(story.initialState);
  let currentSceneId = story.startingScene;
  let lastResult = null;
  let checkpoint = null;
  let lastCheckpointSceneId = null;
  let isRolling = false;

  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function currentScene() {
    return story.scenes[currentSceneId];
  }

  function alignmentName(value) {
    if (value <= -35) return "Merciful";
    if (value >= 35) return "Wrathful";
    if (value <= -12) return "Mercy-leaning";
    if (value >= 12) return "Wrath-leaning";
    return "Balanced";
  }

  function modifierFor(stat) {
    const background = state.flags.background;
    const backgroundBonuses = {
      scholar: { truth: 2 },
      creative: { empathy: 2 },
      sportsman: { reflex: 2 },
      strong: { force: 2 }
    };

    if (backgroundBonuses[background]?.[stat]) {
      return backgroundBonuses[background][stat];
    }

    if (stat === "mercy") return Math.round(-state.alignment / 25);
    if (stat === "wrath") return Math.round(state.alignment / 25);
    if (stat === "gate") return state.gateStability >= 55 ? 1 : -1;
    return 0;
  }

  function setFlags(flags) {
    if (!flags) return;

    Object.keys(flags).forEach((key) => {
      state.flags[key] = flags[key];
    });
  }

  function applyEffects(effects) {
    if (!effects) return [];

    const changes = [];
    Object.keys(effects).forEach((key) => {
      const before = state[key] || 0;
      state[key] = before + effects[key];

      if (key === "health") state[key] = clamp(state[key], 0, state.maxHealth);
      if (key === "gateStability") state[key] = clamp(state[key], 0, 100);
      if (key === "alignment") state[key] = clamp(state[key], -60, 60);
      if (key === "souls" || key === "tokens") state[key] = Math.max(0, state[key]);

      const after = state[key];
      if (after !== before) {
        changes.push({ key, delta: after - before, value: after });
      }
    });

    return changes;
  }

  function hasEnough(cost) {
    if (!cost) return true;
    return Object.keys(cost).every((key) => state[key] >= cost[key]);
  }

  function conditionMet(condition) {
    if (!condition) return true;

    if (condition.flagNot && state.flags[condition.flagNot]) return false;
    if (condition.flags && !condition.flags.every((flag) => state.flags[flag])) return false;

    return true;
  }

  function visibleChoices(scene) {
    return (scene.choices || []).filter((choice) => conditionMet(choice.condition)).slice(0, 4);
  }

  function choiceIsDisabled(choice) {
    if (!hasEnough(choice.cost)) return true;
    if (choice.rewind && (!checkpoint || state.rewinds <= 0)) return true;
    return false;
  }

  function costText(cost) {
    if (!cost) return "";

    return Object.keys(cost)
      .map((key) => `${cost[key]} ${key}`)
      .join(", ");
  }

  function formatChange(change) {
    const labels = {
      health: "Health",
      souls: "Souls",
      tokens: "Tokens",
      gateStability: "Gate Stability",
      alignment: "Temper"
    };
    const sign = change.delta > 0 ? "+" : "";
    return `${labels[change.key] || change.key} ${sign}${change.delta}`;
  }

  function rememberCheckpoint(sceneId) {
    const scene = story.scenes[sceneId];

    if (!scene?.checkpoint || lastCheckpointSceneId === sceneId) {
      return;
    }

    state.rewinds = 1;
    checkpoint = {
      sceneId,
      state: clone(state)
    };
    lastCheckpointSceneId = sceneId;
  }

  function failIfNeeded() {
    if (state.health <= 0) {
      currentSceneId = "failure_health";
      return true;
    }

    if (state.gateStability <= 0) {
      currentSceneId = "failure_gate";
      return true;
    }

    return false;
  }

  function changeScene(sceneId) {
    currentSceneId = sceneId;
    rememberCheckpoint(sceneId);
  }

  function rewind() {
    if (!checkpoint || state.rewinds <= 0) {
      lastResult = {
        title: "No rewind",
        body: "The thread will not move. You need a checkpoint with a rewind remaining."
      };
      render();
      return;
    }

    const rewindsLeft = state.rewinds - 1;
    currentSceneId = checkpoint.sceneId;
    state = clone(checkpoint.state);
    state.rewinds = rewindsLeft;
    lastResult = {
      title: "Rewound to checkpoint",
      body: "The mist folds back to the last place the Gates remembered you."
    };
    render(true);
  }

  function restart() {
    state = clone(story.initialState);
    currentSceneId = story.startingScene;
    checkpoint = null;
    lastCheckpointSceneId = null;
    lastResult = null;
    rememberCheckpoint(currentSceneId);
    render(true);
  }

  function choose(choice) {
    if (!hasEnough(choice.cost)) {
      lastResult = {
        title: "Not enough",
        body: `You need ${costText(choice.cost)}.`
      };
      render();
      return;
    }

    if (choice.rewind) {
      rewind();
      return;
    }

    if (choice.restart) {
      restart();
      return;
    }

    if (choice.mockUnlock) {
      lastResult = {
        title: "Mock purchase gate",
        body: choice.text
      };
      render();
      return;
    }

    let changes = [];

    if (choice.cost) {
      const paidCost = {};
      Object.keys(choice.cost).forEach((key) => {
        paidCost[key] = -choice.cost[key];
      });
      changes = changes.concat(applyEffects(paidCost));
    }

    changes = changes.concat(applyEffects(choice.effects));
    setFlags(choice.setFlags);

    lastResult = choice.text
      ? { title: "Consequence", body: choice.text, changes }
      : null;

    changeScene(resolveGoto(choice));
    failIfNeeded();
    render(true);
  }

  function resolveGoto(choice) {
    if (choice.gotoIfFlag) {
      const matchedFlag = Object.keys(choice.gotoIfFlag).find((flag) => state.flags[flag]);

      if (matchedFlag) {
        return choice.gotoIfFlag[matchedFlag];
      }
    }

    return choice.goto || currentSceneId;
  }

  function rollCurrentScene() {
    const scene = currentScene();
    const roll = scene.roll;

    if (!roll || isRolling) {
      return;
    }

    isRolling = true;
    diceButton.disabled = true;

    let ticks = 0;
    const animation = window.setInterval(() => {
      ticks += 1;
      diceButton.textContent = `D20 ${Math.floor(Math.random() * 20) + 1}`;

      if (ticks < 12) return;

      window.clearInterval(animation);

      const die = Math.floor(Math.random() * 20) + 1;
      const total = die + modifierFor(roll.stat) + (roll.modifier || 0);
      const passed = total >= roll.dc;
      const changes = applyEffects(passed ? roll.successEffects : roll.failureEffects);
      setFlags(passed ? roll.successFlags : roll.failureFlags);

      lastResult = {
        title: `D20 Result: ${die}`,
        body: passed ? roll.successText : roll.failureText,
        changes
      };

      isRolling = false;
      changeScene(resolveRollGoto(roll, passed));
      failIfNeeded();
      render(true);
    }, 55);
  }

  function resolveRollGoto(roll, passed) {
    const conditionalRoutes = passed ? roll.successGotoIfFlag : roll.failureGotoIfFlag;

    if (conditionalRoutes) {
      const matchedFlag = Object.keys(conditionalRoutes).find((flag) => state.flags[flag]);

      if (matchedFlag) {
        return conditionalRoutes[matchedFlag];
      }
    }

    return passed ? roll.successGoto : roll.failureGoto;
  }

  function renderStats() {
    statNodes.health.textContent = `${state.health}/${state.maxHealth}`;
    statNodes.souls.textContent = state.souls;
    statNodes.tokens.textContent = state.tokens;
    statNodes.gateStability.textContent = `${state.gateStability}%`;
    statNodes.alignmentLabel.textContent = alignmentName(state.alignment);
    statNodes.rewinds.textContent = state.rewinds;

    gateMeter.style.width = `${state.gateStability}%`;
    alignmentMeter.style.left = `${clamp(((state.alignment + 60) / 120) * 100, 0, 100)}%`;
  }

  function renderResult() {
    if (!lastResult) {
      rollPanel.hidden = true;
      rollPanel.innerHTML = "";
      return;
    }

    const changes = lastResult.changes && lastResult.changes.length
      ? `<ul>${lastResult.changes.map((change) => `<li>${formatChange(change)}</li>`).join("")}</ul>`
      : "";

    rollPanel.hidden = false;
    rollPanel.innerHTML = `
      <strong>${lastResult.title}</strong>
      <p>${lastResult.body}</p>
      ${changes}
    `;
  }

  function renderDice(scene) {
    const roll = scene.roll;
    diceButton.classList.toggle("is-available", Boolean(roll));
    diceButton.disabled = !roll || isRolling;
    diceButton.textContent = roll ? `Roll: ${roll.label}` : "D20 unavailable";
  }

  function renderScene() {
    const scene = currentScene();
    chapterTitle.textContent = scene.chapter;
    sceneTitle.textContent = scene.title;
    art.dataset.sceneArt = scene.art;

    storyCopy.innerHTML = scene.paragraphs
      .map((paragraph) => `<p>${paragraph}</p>`)
      .join("");

    choiceList.innerHTML = "";
    visibleChoices(scene).forEach((choice) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "choice-button";
      button.textContent = choice.label;

      if (choiceIsDisabled(choice)) {
        button.disabled = true;
        button.title = choice.rewind ? "No checkpoint rewind available" : `Need ${costText(choice.cost)}`;
      }

      button.addEventListener("click", () => choose(choice));
      choiceList.append(button);
    });

    renderDice(scene);
  }

  function updateMusicButton() {
    if (!musicButton || !music) return;

    musicButton.textContent = music.paused ? "Music Off" : "Music On";
    musicButton.classList.toggle("is-playing", !music.paused);
  }

  async function toggleMusic() {
    if (!music) return;

    if (music.paused) {
      try {
        music.volume = 0.45;
        await music.play();
      } catch {
        // Browsers may require another direct user gesture before audio can start.
      }
    } else {
      music.pause();
    }

    updateMusicButton();
  }

  function render(shouldScroll) {
    renderStats();
    renderResult();
    renderScene();
    updateMusicButton();

    rewindButton.disabled = !checkpoint || state.rewinds <= 0 || currentSceneId === checkpoint.sceneId;

    if (shouldScroll) {
      window.requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }

  diceButton.addEventListener("click", rollCurrentScene);
  rewindButton.addEventListener("click", rewind);
  restartButton.addEventListener("click", restart);
  musicButton?.addEventListener("click", toggleMusic);
  music?.addEventListener("play", updateMusicButton);
  music?.addEventListener("pause", updateMusicButton);

  rememberCheckpoint(currentSceneId);
  toggleMusic();
  render(true);
})();
