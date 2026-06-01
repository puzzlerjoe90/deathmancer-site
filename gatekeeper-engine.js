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

  let state = clone(story.initialState);
  let currentSceneId = story.startingScene;
  let history = [];
  let lastResult = null;

  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function alignmentName(value) {
    if (value <= -35) return "Merciful";
    if (value >= 35) return "Wrathful";
    if (value <= -12) return "Mercy-leaning";
    if (value >= 12) return "Wrath-leaning";
    return "Balanced";
  }

  function modifierFor(stat) {
    if (stat === "mercy") {
      return Math.round(-state.alignment / 25);
    }

    if (stat === "wrath") {
      return Math.round(state.alignment / 25);
    }

    if (stat === "gate") {
      return state.gateStability >= 55 ? 1 : -1;
    }

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

    if (condition.flagNot && state.flags[condition.flagNot]) {
      return false;
    }

    if (condition.flags && !condition.flags.every((flag) => state.flags[flag])) {
      return false;
    }

    return true;
  }

  function visibleChoices(scene) {
    return scene.choices.filter((choice) => conditionMet(choice.condition));
  }

  function pushHistory() {
    history.push({
      sceneId: currentSceneId,
      state: clone(state),
      result: clone(lastResult)
    });
  }

  function rewind() {
    if (state.rewinds <= 0 || history.length === 0) {
      lastResult = {
        title: "No rewind",
        body: "The thread will not move. You have no rewinds left for this chapter."
      };
      render();
      return;
    }

    const snapshot = history.pop();
    const rewindsLeft = state.rewinds - 1;
    currentSceneId = snapshot.sceneId;
    state = snapshot.state;
    state.rewinds = rewindsLeft;
    lastResult = {
      title: "Rewound",
      body: "The mist folds back one judgement. The cost remains."
    };
    render(true);
  }

  function restart() {
    state = clone(story.initialState);
    currentSceneId = story.startingScene;
    history = [];
    lastResult = null;
    render(true);
  }

  function formatChange(change) {
    const labels = {
      health: "Health",
      souls: "Souls",
      tokens: "Tokens",
      gateStability: "Gate Stability",
      alignment: "Alignment"
    };
    const sign = change.delta > 0 ? "+" : "";
    return `${labels[change.key] || change.key} ${sign}${change.delta}`;
  }

  function costText(cost) {
    if (!cost) return "";

    return Object.keys(cost)
      .map((key) => `${cost[key]} ${key}`)
      .join(", ");
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

    pushHistory();

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

    if (choice.roll) {
      const mod = modifierFor(choice.roll.stat) + (choice.roll.modifier || 0);
      const die = Math.floor(Math.random() * 20) + 1;
      const total = die + mod;
      const passed = total >= choice.roll.dc;
      const rollEffects = passed ? choice.roll.successEffects : choice.roll.failureEffects;
      const rollText = passed ? choice.roll.successText : choice.roll.failureText;

      changes = changes.concat(applyEffects(rollEffects));
      setFlags(choice.setFlags);

      lastResult = {
        title: `D20 ${die} ${mod >= 0 ? "+" : ""}${mod} = ${total} vs DC ${choice.roll.dc}`,
        body: rollText,
        changes
      };

      currentSceneId = passed ? choice.roll.successGoto : choice.roll.failureGoto;
      failIfNeeded();
      render(true);
      return;
    }

    changes = changes.concat(applyEffects(choice.effects));
    setFlags(choice.setFlags);

    lastResult = {
      title: choice.text ? "Consequence" : "The mist shifts",
      body: choice.text || "The Gates answer your choice.",
      changes
    };

    currentSceneId = choice.goto || currentSceneId;
    failIfNeeded();
    render(true);
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

  function renderScene() {
    const scene = story.scenes[currentSceneId];
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

      if (!hasEnough(choice.cost)) {
        button.disabled = true;
        button.title = `Need ${costText(choice.cost)}`;
      }

      button.addEventListener("click", () => choose(choice));
      choiceList.append(button);
    });
  }

  function render(shouldScroll) {
    renderStats();
    renderResult();
    renderScene();

    rewindButton.disabled = state.rewinds <= 0 || history.length === 0;

    if (shouldScroll) {
      window.requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }

  rewindButton.addEventListener("click", rewind);
  restartButton.addEventListener("click", restart);

  render(true);
})();
