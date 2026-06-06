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
  const storyPanel = app.querySelector(".story-panel");
  const scorePanel = app.querySelector("[data-chapter-score]");
  const scoreBreakdown = app.querySelector("[data-score-breakdown]");
  const scoreGrade = app.querySelector("[data-score-grade]");
  const scorePoints = app.querySelector("[data-score-points]");
  const gameActions = app.querySelector("[data-game-actions]");
  const effectFlash = app.querySelector("[data-effect-flash]");
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
  let isResolving = false;
  let audioContext = null;

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

  function alignmentPosition(value) {
    return clamp(((value + 60) / 120) * 100, 0, 100);
  }

  function alignmentName(value) {
    const position = alignmentPosition(value);
    if (position < 40) return "Merciful";
    if (position > 60) return "Wrathful";
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
    if (isResolving) return true;
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
      gateStability: "Gate Stability"
    };

    if (change.key === "alignment") {
      return change.delta < 0
        ? `Mercy +${Math.abs(change.delta)}`
        : `Wrath +${Math.abs(change.delta)}`;
    }

    const sign = change.delta > 0 ? "+" : "";
    return `${labels[change.key] || change.key} ${sign}${change.delta}`;
  }

  function ensureAudioContext() {
    if (!window.AudioContext && !window.webkitAudioContext) return null;

    if (!audioContext) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioContext = new AudioContextClass();
    }

    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    return audioContext;
  }

  function playTone(frequency, duration, options = {}) {
    const context = ensureAudioContext();
    if (!context) return;

    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const now = context.currentTime + (options.delay || 0);
    const end = now + duration;

    oscillator.type = options.type || "sine";
    oscillator.frequency.setValueAtTime(frequency, now);
    if (options.endFrequency) {
      oscillator.frequency.exponentialRampToValueAtTime(options.endFrequency, end);
    }

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(options.volume || 0.14, now + 0.025);
    gain.gain.exponentialRampToValueAtTime(0.0001, end);

    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(now);
    oscillator.stop(end + 0.03);
  }

  function playNoise(duration, options = {}) {
    const context = ensureAudioContext();
    if (!context) return;

    const length = Math.max(1, Math.floor(context.sampleRate * duration));
    const buffer = context.createBuffer(1, length, context.sampleRate);
    const data = buffer.getChannelData(0);
    for (let index = 0; index < length; index += 1) {
      data[index] = Math.random() * 2 - 1;
    }

    const source = context.createBufferSource();
    const filter = context.createBiquadFilter();
    const gain = context.createGain();
    const now = context.currentTime + (options.delay || 0);

    filter.type = options.filterType || "lowpass";
    filter.frequency.value = options.frequency || 180;
    gain.gain.setValueAtTime(options.volume || 0.09, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    source.buffer = buffer;
    source.connect(filter);
    filter.connect(gain);
    gain.connect(context.destination);
    source.start(now);
  }

  function playFeedbackSound(type) {
    if (type === "souls") {
      playTone(392, 0.55, { endFrequency: 784, volume: 0.1 });
      playTone(587, 0.5, { delay: 0.09, endFrequency: 1174, volume: 0.07 });
      playTone(880, 0.42, { delay: 0.18, volume: 0.05 });
      return;
    }

    if (type === "tokens") {
      playTone(1568, 0.16, { type: "triangle", endFrequency: 1174, volume: 0.08 });
      playTone(1318, 0.18, { delay: 0.1, type: "triangle", endFrequency: 988, volume: 0.08 });
      playTone(1046, 0.22, { delay: 0.2, type: "triangle", endFrequency: 784, volume: 0.07 });
      return;
    }

    if (type === "health") {
      playNoise(0.36, { filterType: "bandpass", frequency: 120, volume: 0.13 });
      playTone(105, 0.4, { type: "sawtooth", endFrequency: 58, volume: 0.1 });
      return;
    }

    if (type === "gate") {
      playNoise(0.52, { filterType: "lowpass", frequency: 95, volume: 0.14 });
      playTone(82, 0.58, { type: "square", endFrequency: 42, volume: 0.08 });
      playTone(740, 0.22, { delay: 0.08, type: "triangle", endFrequency: 260, volume: 0.05 });
    }
  }

  function restartAnimation(node, className) {
    if (!node) return;
    node.classList.remove(className);
    void node.offsetWidth;
    node.classList.add(className);
  }

  function wait(milliseconds) {
    return new Promise((resolve) => window.setTimeout(resolve, milliseconds));
  }

  async function playChangeSequence(changes) {
    const feedback = [
      changes.find((change) => change.key === "souls" && change.delta > 0)
        ? { type: "souls", duration: 720, node: statNodes.souls.closest(".resource-chip"), className: "is-soul-gain" }
        : null,
      changes.find((change) => change.key === "tokens" && change.delta > 0)
        ? { type: "tokens", duration: 520, node: statNodes.tokens.closest(".resource-chip"), className: "is-token-gain" }
        : null,
      changes.find((change) => change.key === "health" && change.delta < 0)
        ? { type: "health", duration: 520, node: statNodes.health.closest(".resource-chip"), className: "is-health-damage" }
        : null,
      changes.find((change) => change.key === "gateStability" && change.delta < 0)
        ? { type: "gate", duration: 620, node: gateMeter.closest(".meter-block"), className: "is-gate-damage" }
        : null
    ].filter(Boolean);

    for (const item of feedback) {
      restartAnimation(effectFlash, `is-${item.type}`);
      restartAnimation(item.node, item.className);
      playFeedbackSound(item.type);
      await wait(item.duration + 90);
      effectFlash?.classList.remove(`is-${item.type}`);
      item.node?.classList.remove(item.className);
    }
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

  async function choose(choice) {
    if (isResolving) return;
    ensureAudioContext();

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

    isResolving = true;
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
    await playChangeSequence(changes);
    isResolving = false;
    render();
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

    ensureAudioContext();
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
      isResolving = true;
      changeScene(resolveRollGoto(roll, passed));
      failIfNeeded();
      render(true);
      playChangeSequence(changes).finally(() => {
        isResolving = false;
        render();
      });
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
    alignmentMeter.style.left = `${alignmentPosition(state.alignment)}%`;
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
    diceButton.disabled = !roll || isRolling || isResolving;
    diceButton.textContent = roll ? `Roll: ${roll.label}` : "D20 unavailable";
  }

  function calculateScore(scoreConfig) {
    const factors = [
      {
        key: "health",
        label: "Health",
        value: state.health,
        display: `${state.health}/${state.maxHealth}`
      },
      {
        key: "gateStability",
        label: "Gate Stability",
        value: state.gateStability,
        display: `${state.gateStability}/100`
      },
      {
        key: "souls",
        label: "Souls",
        value: state.souls,
        display: `${state.souls}/${scoreConfig.reference.souls}`
      },
      {
        key: "tokens",
        label: "Tokens",
        value: state.tokens,
        display: `${state.tokens}/${scoreConfig.reference.tokens}`
      },
      {
        key: "rewinds",
        label: "Rewinds Unused",
        value: state.rewinds,
        display: `${state.rewinds}/${scoreConfig.reference.rewinds}`
      }
    ].map((factor) => {
      const reference = scoreConfig.reference[factor.key];
      const weight = scoreConfig.weights[factor.key];
      const points = Math.round(clamp(factor.value / reference, 0, 1) * weight);
      return { ...factor, points, weight };
    });

    const total = factors.reduce((sum, factor) => sum + factor.points, 0);
    const maximum = Object.values(scoreConfig.weights).reduce((sum, weight) => sum + weight, 0);
    const grade = scoreConfig.grades.find((entry) => total >= entry.minimum)?.grade || "C";

    return { factors, total, maximum, grade };
  }

  function renderScore(scene) {
    const hasScore = Boolean(scene.score);
    scorePanel.hidden = !hasScore;
    storyPanel.classList.toggle("is-score-scene", hasScore);

    if (!hasScore) {
      scoreBreakdown.innerHTML = "";
      return;
    }

    const score = calculateScore(scene.score);
    scoreBreakdown.innerHTML = `
      <h2>${scene.score.title}</h2>
      <dl>
        ${score.factors.map((factor) => `
          <div>
            <dt>${factor.label}</dt>
            <dd>${factor.display} <small>${factor.points}/${factor.weight} pts</small></dd>
          </div>
        `).join("")}
        <div>
          <dt>Judgement</dt>
          <dd>${alignmentName(state.alignment)}</dd>
        </div>
      </dl>
    `;
    scoreGrade.textContent = score.grade;
    scorePoints.textContent = `${score.total} / ${score.maximum}`;
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

    renderScore(scene);
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

    rewindButton.disabled = isResolving || !checkpoint || state.rewinds <= 0 || currentSceneId === checkpoint.sceneId;
    restartButton.disabled = isResolving;
    gameActions.setAttribute("aria-hidden", currentScene().score ? "true" : "false");

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
