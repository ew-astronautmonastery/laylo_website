import { html, useRef, useLayoutEffect, gsap, rem, useModal, DESKTOP } from "./lib.js";
import { TOOLS } from "./content.js";

// Storyboard 6: headline holds while the full tool list scrolls up through a faded window.
export function Tools() {
  const root = useRef();
  const openModal = useModal();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ scrollTrigger: { trigger: root.current, start: "top 80%", end: "top 20%", scrub: 0.6 } })
        .from(".tools__titleInner", { yPercent: 105, ease: "power3.out" }, 0)
        .from(".tool--r0", { y: 80, opacity: 0, stagger: 0.06, ease: "power2.out" }, 0.1);

      const mm = gsap.matchMedia();
      mm.add(DESKTOP, () => {
        const grid = root.current.querySelector(".tools__grid");
        const win = root.current.querySelector(".tools__window");
        // How far the grid must travel for its last row to clear the bottom fade.
        const dist = () => Math.max(0, grid.offsetTop + grid.offsetHeight - win.clientHeight + 120 * rem());
        gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => "+=" + (dist() + window.innerHeight * 0.25),
            pin: ".tools__pin",
            scrub: 0.7,
            invalidateOnRefresh: true,
          },
        })
          .fromTo(grid, { y: 0 }, { y: () => -dist(), ease: "none", duration: 1 }, 0)
          .to({}, { duration: 0.15 });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return html`
    <section class="tools" data-nav="light" id="tools" ref=${root}>
      <div class="tools__pin">
        <div class="tools__window">
          <div class="tools__grid">
            ${TOOLS.map((t, i) => html`
              <article key=${t.name} class=${"tool tool--r" + Math.floor(i / 6)}>
                <span class="tool__icon" aria-hidden="true" style=${{ "--icon": `url("${t.icon}")` }}></span>
                <h3 class="tool__name fB">${t.name}</h3>
                <p class="tool__body fA">${t.body}</p>
                <button class="pill pill--grey fA" onClick=${() => openModal({ type: "demo", context: t.name })}>${t.cta}</button>
              </article>`)}
          </div>
        </div>
        <div class="stage tools__stage">
          <h2 class="h-xl fC tools__title"><span class="mask"><span class="tools__titleInner">Every tool your drop needs.</span></span></h2>
        </div>
      </div>
    </section>
  `;
}
