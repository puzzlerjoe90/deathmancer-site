(function () {
  const app = document.querySelector("[data-gatekeeper-app]");
  const gate = document.querySelector("[data-prototype-gate]");
  const form = document.querySelector("[data-prototype-form]");
  const passwordInput = document.querySelector("[data-prototype-password]");
  const status = document.querySelector("[data-prototype-status]");
  const sessionKey = "gatekeeperPrototypeAccess";
  const passwordHash = "9ac787e8e8f4248d172c550d1afd1e96da9a3693e72c414323e5c80b6abf0fe8";

  if (!app || !gate || !form || !passwordInput || !status) {
    return;
  }

  function toHex(buffer) {
    return Array.from(new Uint8Array(buffer))
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
  }

  async function digest(value) {
    const bytes = new TextEncoder().encode(value);
    const hash = await window.crypto.subtle.digest("SHA-256", bytes);
    return toHex(hash);
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.body.append(script);
    });
  }

  async function unlock() {
    gate.hidden = true;
    app.hidden = false;

    if (!window.GATEKEEPER_STORY) {
      await loadScript("./gatekeeper-story.js");
    }

    await loadScript("./gatekeeper-engine.js");
  }

  if (window.sessionStorage.getItem(sessionKey) === passwordHash) {
    unlock();
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.textContent = "";

    const enteredHash = await digest(passwordInput.value);
    passwordInput.value = "";

    if (enteredHash !== passwordHash) {
      status.textContent = "That password did not open the Gate.";
      passwordInput.focus();
      return;
    }

    window.sessionStorage.setItem(sessionKey, enteredHash);
    await unlock();
  });
})();
