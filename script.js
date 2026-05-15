const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");

function setNavOpen(isOpen) {
  nav.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
}

function updateHeaderState() {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
}

navToggle.addEventListener("click", () => {
  setNavOpen(!nav.classList.contains("is-open"));
});

nav.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    setNavOpen(false);
  }
});

window.addEventListener("scroll", updateHeaderState, { passive: true });
updateHeaderState();
