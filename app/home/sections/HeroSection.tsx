"use client";

import { useEffect, useRef } from "react";

const MARQUEE_ITEMS = [
  "Naturopathy",
  "Herbal Medicine",
  "Root Cause Healing",
  "No Side Effects",
  "Detoxify & Nourish",
  "Homeostasis",
  "Filipino Wellness",
  "Non-Drug Dependent",
];

function BotanicalSVG() {
  return (
    <svg
      viewBox="0 0 420 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden
    >
      {/* Main stem */}
      <path
        d="M210 500 C210 500 205 380 215 300 C225 220 200 160 210 80"
        stroke="#40916c"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      {/* Large leaf left */}
      <path
        d="M210 300 C210 300 120 260 95 190 C70 120 150 100 190 160 C200 180 210 220 210 300Z"
        fill="#40916c"
        opacity="0.12"
      />
      <path
        d="M210 300 C190 270 150 220 110 190"
        stroke="#40916c"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.3"
      />
      {/* Large leaf right */}
      <path
        d="M210 250 C210 250 305 210 330 140 C355 70 270 55 235 115 C222 137 210 190 210 250Z"
        fill="#40916c"
        opacity="0.10"
      />
      <path
        d="M210 250 C235 220 280 175 320 145"
        stroke="#40916c"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.25"
      />
      {/* Small leaf left high */}
      <path
        d="M213 160 C213 160 155 140 140 95 C125 50 185 45 205 90 C210 105 213 135 213 160Z"
        fill="#52b788"
        opacity="0.14"
      />
      {/* Small berries */}
      <circle cx="215" cy="80" r="8" fill="#f4c430" opacity="0.25" />
      <circle cx="228" cy="68" r="5" fill="#f4c430" opacity="0.2" />
      <circle cx="202" cy="70" r="6" fill="#f4c430" opacity="0.18" />
      {/* Vein lines on left leaf */}
      <path d="M210 300 C190 280 165 255 140 235" stroke="#40916c" strokeWidth="1" opacity="0.15" fill="none" />
      <path d="M210 300 C195 275 175 248 155 225" stroke="#40916c" strokeWidth="1" opacity="0.12" fill="none" />
    </svg>
  );
}

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Staggered entrance for hero elements
    const els = heroRef.current?.querySelectorAll<HTMLElement>("[data-hero]");
    els?.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 100 + i * 130);
    });
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col overflow-hidden bg-[#f0faf2]"
    >
      {/* Background gradient mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60%] h-[70%] bg-gradient-to-bl from-[#d8f3dc]/80 via-[#f0faf2]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-gradient-to-tr from-[#fef3c7]/40 via-transparent to-transparent" />
        {/* Fine grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(#1a4731 1px, transparent 1px), linear-gradient(90deg, #1a4731 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Floating botanicals */}
      <div className="absolute right-0 top-0 w-[420px] h-[520px] opacity-70 animate-float-slow pointer-events-none">
        <BotanicalSVG />
      </div>
      <div className="absolute left-[-60px] bottom-20 w-[200px] h-[260px] opacity-40 animate-float-slower rotate-[170deg] pointer-events-none">
        <BotanicalSVG />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-16 w-full">
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
            <div className="max-w-3xl">
              {/* Eyebrow */}
              <div
                data-hero
                className="inline-flex items-center gap-2.5 mb-8 px-4 py-1.5 rounded-full border border-[#f4c430]/40 bg-[#fef3c7]/60 backdrop-blur-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#f4c430] animate-pulse" />
                <span className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[#92660a]">
                  100% Filipino · Empowered by Moreishi
                </span>
              </div>

              {/* Headline */}
              <h1
                data-hero
                className="font-display text-[clamp(3rem,7vw,5.5rem)] leading-[1.0] font-light text-[#0d2b1a] mb-4 tracking-tight"
              >
                Let Food Be
                <br />
                <em className="italic text-[#40916c]">Thy Medicine.</em>
              </h1>

              {/* Sub-headline */}
              <p
                data-hero
                className="text-[clamp(0.95rem,2vw,1.15rem)] text-[#3d5a47] leading-[1.8] mb-10 max-w-xl font-light"
              >
                At 5M Wellness Center, we combine ancient herbal wisdom with modern
                naturopathic science — addressing the{" "}
                <strong className="font-semibold text-[#1a4731]">root cause</strong> of
                illness, not just its symptoms.
              </p>

              {/* Actions */}
              <div data-hero className="flex flex-wrap items-center gap-4 mb-14">
                <a
                  href="#contact"
                  className="group flex items-center gap-2.5 px-7 py-3.5 bg-[#1a4731] text-white text-[0.85rem] font-semibold rounded-full shadow-xl hover:bg-[#2d6a4f] hover:-translate-y-0.5 transition-all duration-300"
                >
                  Book a Consultation
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="#about"
                  className="flex items-center gap-2 text-[0.85rem] font-medium text-[#2d6a4f] hover:text-[#1a4731] underline underline-offset-4 decoration-[#40916c]/40 hover:decoration-[#40916c] transition-all"
                >
                  Discover Our Approach
                </a>
              </div>

              {/* Stats */}
              <div data-hero className="flex flex-wrap items-center gap-0">
                {[
                  { num: "20+", label: "Herbal Ingredients" },
                  { num: "2001", label: "Est. by Empower" },
                  { num: "100%", label: "Natural Formulas" },
                ].map((s, i) => (
                  <div key={s.num} className="flex items-center">
                    <div className="pr-8 pl-0 md:px-8 first:pl-0">
                      <div className="font-display text-[2rem] font-semibold text-[#1a4731] leading-none">
                        {s.num}
                      </div>
                      <div className="text-[0.7rem] font-medium tracking-widest uppercase text-[#6b8f72] mt-1">
                        {s.label}
                      </div>
                    </div>
                    {i < 2 && (
                      <div className="w-px h-10 bg-[#40916c]/20 hidden md:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — floating cards cluster */}
            <div
              data-hero
              className="hidden lg:flex flex-col gap-4 items-end"
            >
              {/* Main card */}
              <div className="glass rounded-2xl p-6 w-[300px] shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#d8f3dc] flex items-center justify-center text-lg">🌱</div>
                  <div>
                    <div className="text-[0.8rem] font-semibold text-[#1a4731]">Holistic Health</div>
                    <div className="text-[0.68rem] text-[#6b8f72]">Simplified</div>
                  </div>
                </div>
                <p className="text-[0.78rem] text-[#3d5a47] leading-relaxed mb-4">
                  Disease = Toxicity or Deficiency. Our answer: Detoxify and Nourish.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["Noni", "Reishi", "Turmeric", "Gotu Kola", "Ginseng"].map((h) => (
                    <span
                      key={h}
                      className="px-2.5 py-1 text-[0.65rem] font-medium rounded-full bg-[#f0faf2] text-[#2d6a4f] border border-[#40916c]/20"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating badge 1 */}
              <div className="glass rounded-xl px-4 py-3 flex items-center gap-2.5 shadow-lg animate-float">
                <span className="text-base">✦</span>
                <span className="text-[0.75rem] font-semibold text-[#1a4731]">Treats the Root Cause</span>
              </div>

              {/* Floating badge 2 */}
              <div className="glass rounded-xl px-4 py-3 flex items-center gap-2.5 shadow-lg animate-float-slow mr-8">
                <span className="text-base">🍃</span>
                <span className="text-[0.75rem] font-semibold text-[#1a4731]">Zero Side Effects</span>
              </div>

              {/* Hippocrates quote */}
              <div className="w-[260px] bg-[#1a4731] rounded-2xl p-5 shadow-2xl">
                <div className="font-display text-[1.1rem] italic text-white leading-snug mb-2">
                  "Thy medicine shall be thy food."
                </div>
                <div className="text-[0.65rem] tracking-widest uppercase text-[#52b788]">— Hippocrates</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="relative z-10 border-t border-b border-[#40916c]/15 bg-[#1a4731]/5 py-3.5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap w-max">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 mx-6">
              <span className="text-[0.72rem] font-semibold tracking-[0.16em] uppercase text-[#2d6a4f]">
                {item}
              </span>
              <span className="text-[#f4c430] text-[0.6rem]">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
