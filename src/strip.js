import { html, useRef, useLayoutEffect, gsap, ScrollTrigger, rem, useModal } from "./lib.js";
import { STRIP } from "./content.js";

const COPIES = 4;

// Storyboard 2: continuous horizontal strip. Drifts on its own, speeds up and follows the
// direction of page scroll, eases to a stop on hover and reveals the caption under the image.
export function Strip() {
  const root = useRef();
  const openModal = useModal();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const track = root.current.querySelector(".strip__track");
      const items = track.children;
      let setW = 0, x = 0, speed = 1, targetSpeed = 1, dir = 1, boost = 0, active = false;

      const measure = () => {
        setW = items[STRIP.length].offsetLeft - items[0].offsetLeft;
        // Figma: first image sits at x = -21.58 with Diplo at x = 228.
        x = -setW - 21.58 * rem();
        gsap.set(track, { x });
      };
      measure();
      ScrollTrigger.addEventListener("refresh", measure);
      const wrap = () => gsap.utils.wrap(-2 * setW, -setW, x);

      const tick = (time, dt) => {
        if (!active) return;
        const f = dt / 16.67;
        speed += (targetSpeed - speed) * 0.06 * f;
        boost *= Math.pow(0.92, f);
        x -= (0.55 * rem() * dir + boost) * speed * f;
        x = wrap();
        gsap.set(track, { x });
      };
      gsap.ticker.add(tick);

      ScrollTrigger.create({
        trigger: root.current,
        start: "top bottom",
        end: "bottom top",
        onToggle: (self) => { active = self.isActive; },
        onUpdate: (self) => {
          dir = self.direction;
          boost = gsap.utils.clamp(-14, 14, self.getVelocity() / 260) * rem();
        },
      });

      track.addEventListener("mouseenter", () => { targetSpeed = 0; });
      track.addEventListener("mouseleave", () => { targetSpeed = 1; });

      // Scroll-linked entrance for the headline, strip and copy.
      gsap.timeline({ scrollTrigger: { trigger: root.current, start: "top 85%", end: "top 15%", scrub: 0.6 } })
        .from(".strip__titleInner", { yPercent: 105, stagger: 0.12, ease: "power3.out" }, 0)
        .from(".strip__viewport", { y: 80, opacity: 0, ease: "power2.out" }, 0.15)
        .from(".strip__copy > *", { y: 30, opacity: 0, stagger: 0.1, ease: "power2.out" }, 0.35);

      return () => {
        gsap.ticker.remove(tick);
        ScrollTrigger.removeEventListener("refresh", measure);
      };
    }, root);
    return () => ctx.revert();
  }, []);

  const all = Array.from({ length: COPIES }, (_, c) => STRIP.map((s, i) => ({ ...s, key: `${c}-${i}` }))).flat();

  return html`
    <section class="strip" id="why" ref=${root}>
      <h2 class="strip__title h-xl fC">
        <span class="mask"><span class="strip__titleInner">The drop marketing platform</span></span>
        <span class="mask"><span class="strip__titleInner">that started it all.</span></span>
      </h2>
      <div class="strip__viewport">
        <div class="strip__track">
          ${all.map((s) => html`
            <figure key=${s.key} class="strip__item">
              <div class="strip__media"><img src=${s.img} alt=${s.name} loading="lazy" /></div>
              <figcaption class="strip__cap">
                <span class="mask"><span class="strip__name fD">${s.name}</span></span>
                <span class="strip__meta fB"><span>${s.meta}</span><span>${s.mult}</span></span>
                <span class="strip__rule"></span>
              </figcaption>
            </figure>`)}
        </div>
      </div>
      <div class="strip__copy">
        <p class="fB">We built everything it takes to sell out your next drop faster. For the artist with 1,000 fans and the festival selling out arenas.</p>
        <button class="outline-pill saans" onClick=${() => openModal({ type: "signup" })}>Create a drop like this</button>
      </div>
    </section>
  `;
}
