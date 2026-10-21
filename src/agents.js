import { html, useRef, useState, useEffect, useLayoutEffect, gsap, ScrollTrigger, scrollToY, DESKTOP } from "./lib.js";
import { AUDIENCES, PHASES, AGENTS } from "./content.js";

// Swap displayed content with an out/in animation whenever `value` changes.
function useSwap(value, ref, sel) {
  const [shown, setShown] = useState(value);
  const mounted = useRef(false);
  useEffect(() => {
    const els = ref.current.querySelectorAll(sel);
    gsap.killTweensOf(els);
    if (value === shown) {
      gsap.to(els, { opacity: 1, y: 0, duration: 0.3 });
      return;
    }
    gsap.to(els, { opacity: 0, y: -14, duration: 0.22, stagger: 0.02, ease: "power2.in", onComplete: () => setShown(value) });
  }, [value]);
  useLayoutEffect(() => {
    if (!mounted.current) { mounted.current = true; return; }
    const els = ref.current.querySelectorAll(sel);
    gsap.fromTo(els, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: "power3.out" });
  }, [shown]);
  return shown;
}

const imgStyle = (crop) => crop
  ? { width: crop.w + "%", height: crop.h + "%", left: crop.l + "%", top: crop.t + "%", objectFit: "cover" }
  : { width: "100%", height: "100%", left: 0, top: 0, objectFit: "cover" };

// Image frame: each new image wipes up over the previous one.
function WipeImage({ item }) {
  const [layers, setLayers] = useState([{ ...item, id: 0 }]);
  const ref = useRef();
  const n = useRef(0);
  useEffect(() => {
    const top = layers[layers.length - 1];
    if (top.img === item.img) return;
    n.current += 1;
    setLayers((ls) => [...ls.slice(-1), { ...item, id: n.current }]);
  }, [item.img]);
  useLayoutEffect(() => {
    if (layers.length < 2) return;
    const next = ref.current.children[1];
    gsap.fromTo(next, { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.9, ease: "power3.inOut" });
  }, [layers]);
  return html`
    <div class="ag__img" ref=${ref}>
      ${layers.map((l) => html`<div key=${l.id} class="ag__imgLayer"><img src=${l.img} alt="" style=${imgStyle(l.crop)} /></div>`)}
    </div>`;
}

// Storyboards 3A → 3B → 3C. Headline + audience switch stay pinned; scrolling steps
// Before → During → After. Phase labels and audience pills are clickable too.
export function Agents() {
  const [aud, setAud] = useState("Artists");
  const [phase, setPhase] = useState(0);
  const root = useRef();
  const left = useRef();
  const right = useRef();
  const st = useRef(null);
  const ind = useRef();

  const key = `${aud}|${phase}`;
  const shownL = useSwap(key, left, ".ag-swap");
  const shownR = useSwap(key, right, ".ag-swap");
  const pick = (k) => { const [a, p] = k.split("|"); return AGENTS[a][+p]; };
  const L = pick(shownL), R = pick(shownR);
  const live = AGENTS[aud][phase];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add(DESKTOP, () => {
        st.current = ScrollTrigger.create({
          trigger: root.current,
          start: "top top",
          end: () => "+=" + window.innerHeight * 2.2,
          pin: root.current.querySelector(".ag__pin"),
          onUpdate: (self) => setPhase(Math.min(2, Math.floor(self.progress * 3 * 0.999))),
        });
        return () => { st.current = null; };
      });
      gsap.timeline({ scrollTrigger: { trigger: root.current, start: "top 80%", end: "top top", scrub: 0.6 } })
        .from(".ag__titleInner", { yPercent: 105, stagger: 0.1, ease: "power3.out" }, 0)
        .from(".ag__sub, .ag__tabs", { y: 24, opacity: 0, stagger: 0.08 }, 0.2)
        .from(".ag__body", { y: 70, opacity: 0, ease: "power2.out" }, 0.3);
    }, root);
    return () => ctx.revert();
  }, []);

  // Slide the purple pill under the active audience tab.
  useLayoutEffect(() => {
    const tab = root.current.querySelector(`.ag__tab[data-aud="${aud}"]`);
    gsap.to(ind.current, { x: tab.offsetLeft, width: tab.offsetWidth, duration: 0.5, ease: "power3.inOut" });
  }, [aud]);

  const goPhase = (i) => {
    const s = st.current;
    if (s) scrollToY(s.start + ((i + 0.5) / 3) * (s.end - s.start), { duration: 1 });
    else setPhase(i);
  };

  return html`
    <section class="ag" data-nav="light" id="solutions" ref=${root}>
      <div class="ag__pin">
        <div class="stage ag__stage">
          <h2 class="h-xl fC ag__title">
            <span class="mask"><span class="ag__titleInner">Make every drop</span></span>
            <span class="mask"><span class="ag__titleInner">better than the last.</span></span>
          </h2>
          <p class="ag__sub fB">Let Agents handle the busywork.</p>
          <div class="ag__tabs saans" role="tablist" aria-label="Audience">
            <span class="ag__ind" ref=${ind}></span>
            ${AUDIENCES.map((a) => html`
              <button key=${a} role="tab" aria-selected=${a === aud} class=${"ag__tab" + (a === aud ? " is-active" : "")} data-aud=${a} onClick=${() => setAud(a)}>${a}</button>`)}
          </div>

          <div class="ag__body">
            <div class="ag__left" ref=${left}>
              <div class="ag__phases fB" role="tablist" aria-label="Stage">
                ${PHASES.map((p, i) => html`
                  <button key=${p} role="tab" aria-selected=${i === phase} class=${"ag__phase" + (i === phase ? " is-active" : "")} onClick=${() => goPhase(i)}>${p}</button>`)}
              </div>
              <h3 class="ag__h fB ag-swap">${L.title}</h3>
              <p class="ag__p fA ag-swap">${L.body}</p>
              <ul class="ag__features fA ag-swap">
                ${L.features.map((f) => html`<li key=${f}>${f}</li>`)}
              </ul>
            </div>
            <div class="ag__divider"></div>
            <${WipeImage} item=${live} />
            <div class="ag__right fA" ref=${right}>
              <div>
                <div class="ag__client ag-swap">${R.client}</div>
                <div class="ag__stat fB ag-swap">${R.stat}</div>
                <p class="ag__statSub ag-swap">${R.sub}</p>
              </div>
              <div>
                <p class="ag__quote ag-swap">${R.quote}</p>
                ${R.who && html`<div class="ag__who ag-swap">${R.who[0]}<br />${R.who[1]}</div>`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
