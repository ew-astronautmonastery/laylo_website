import { html, useRef, useLayoutEffect, A, scrollToSection, scrollToY, useModal } from "./lib.js";
import { NAV_LINKS } from "./content.js";

// Shared nav row: used fixed at the top of the page and again inside the footer.
export function NavRow({ showLogo = true }) {
  const openModal = useModal();
  const go = (e, id) => { e.preventDefault(); scrollToSection(id); };
  return html`
    <div class="navrow">
      <nav class="navrow__links fA" aria-label="Main">
        ${NAV_LINKS.map((l) => html`<a key=${l.label} href=${"#" + l.target} onClick=${(e) => go(e, l.target)}>${l.label}</a>`)}
      </nav>
      ${showLogo && html`
        <a class="navrow__logo" href="#top" aria-label="Laylo home" onClick=${(e) => { e.preventDefault(); scrollToY(0); }}>
          <img src=${A("logo.svg")} alt="Laylo" width="86.34" height="23" />
        </a>`}
      <div class="navrow__actions fA">
        <button class="navrow__login" onClick=${() => openModal({ type: "login" })}>Log in</button>
        <button class="pill" onClick=${() => openModal({ type: "demo" })}>See a demo</button>
        <button class="pill" onClick=${() => openModal({ type: "signup" })}>Sign up</button>
      </div>
    </div>
  `;
}

// Hides while scrolling down, comes back on scroll up; gets a dark backing once off the hero top.
export function Nav() {
  const ref = useRef();
  useLayoutEffect(() => {
    const el = ref.current;
    let last = window.scrollY;
    // Which section sits under the nav bar decides light or dark text.
    const checkTheme = () => {
      const probe = el.offsetHeight / 2;
      const under = [...document.querySelectorAll("main > section, footer")].find((s) => {
        const r = s.getBoundingClientRect();
        return r.top <= probe && r.bottom > probe;
      });
      el.classList.toggle("on-light", under?.dataset.nav === "light");
    };
    const onScroll = () => {
      checkTheme();
      const y = window.scrollY;
      if (Math.abs(y - last) < 4) return;
      el.classList.toggle("is-solid", y > 40);
      el.classList.toggle("is-hidden", y > last && y > 140);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    checkTheme();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return html`<header class="nav" ref=${ref}><${NavRow} /></header>`;
}
