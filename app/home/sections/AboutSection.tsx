"use client";

import { useReveal } from "@/app/components/ui/useReveal";

const CREDENTIALS = [
  {
    icon: "🏛️",
    title: "Est. 2001",
    desc: "Over two decades of trusted herbal wellness for Filipino families.",
    bg: "bg-[#f0faf2]",
  },
  {
    icon: "🤝",
    title: "DSAP Member",
    desc: "Proud member of the Direct Selling Association of the Philippines.",
    bg: "bg-[#fffbeb]",
  },
  {
    icon: "🇵🇭",
    title: "100% Filipino",
    desc: "Locally owned, formulated for the Filipino body and lifestyle.",
    bg: "bg-[#f0faf2]",
  },
];

const VALUES = [
  "Synergized formulas that maximize herbal potency",
  "No harmful side effects — in line with nature",
  "You are the driver of your own health",
  "More economical than synthetic maintenance drugs",
];

export default function AboutSection() {
  const sectionRef = useReveal();

  return (
    <section id="about" className="py-28 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-[#f0faf2] to-transparent pointer-events-none" />
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-[60%] bg-gradient-to-b from-transparent via-[#40916c]/20 to-transparent"
      />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT — Visual cluster */}
          <div className="relative">
            {/* Large accent number */}
            <div
              className="reveal font-display text-[10rem] font-light leading-none text-[#40916c]/06 absolute -top-8 -left-4 select-none pointer-events-none"
              aria-hidden
            >
              5M
            </div>

            {/* Credential cards */}
            <div className="reveal grid grid-cols-1 gap-4 relative z-10">
              {CREDENTIALS.map((c) => (
                <div
                  key={c.title}
                  className={`card-lift ${c.bg} rounded-2xl p-6 flex items-start gap-5 border border-[#40916c]/08`}
                >
                  <div className="text-2xl mt-0.5">{c.icon}</div>
                  <div>
                    <div className="font-semibold text-[#1a4731] text-[0.92rem] mb-1">{c.title}</div>
                    <div className="text-[0.82rem] text-[#3d5a47] leading-relaxed">{c.desc}</div>
                  </div>
                </div>
              ))}

              {/* Credo card — dark */}
              <div className="card-lift reveal bg-[#1a4731] rounded-2xl p-6 relative overflow-hidden">
                <div
                  className="absolute right-4 top-4 font-display text-[5rem] font-light leading-none text-white/05 select-none"
                  aria-hidden
                >
                  ✦
                </div>
                <div className="text-[0.62rem] font-semibold tracking-[0.18em] uppercase text-[#f4c430] mb-3">
                  Our Credo
                </div>
                <div className="font-display text-[1.3rem] text-white italic leading-snug mb-2">
                  "Helping those who want to help themselves."
                </div>
                <div className="flex flex-wrap gap-x-5 gap-y-1 mt-4">
                  {["God-Centered", "Family Oriented", "Belief in the Filipino"].map((v) => (
                    <span key={v} className="text-[0.7rem] text-[#52b788] font-medium">
                      · {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Copy */}
          <div className="reveal">
            <div className="section-divider" />
            <div className="text-[0.68rem] font-semibold tracking-[0.18em] uppercase text-[#6b8f72] mb-4">
              Who We Are
            </div>
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] font-light text-[#0d2b1a] leading-[1.1] mb-6 tracking-tight">
              Your Partner in
              <br />
              <em className="italic text-[#40916c]">Natural, Lasting Health</em>
            </h2>

            {/* Quote pull */}
            <blockquote className="border-l-2 border-[#f4c430] pl-5 mb-6">
              <p className="font-display text-[1.15rem] italic text-[#1a4731] leading-snug">
                "Let food be thy medicine. Thy medicine shall be thy food."
              </p>
              <cite className="not-italic text-[0.7rem] font-medium tracking-widest uppercase text-[#6b8f72] mt-2 block">
                — Hippocrates
              </cite>
            </blockquote>

            <p className="text-[0.92rem] text-[#3d5a47] leading-[1.8] mb-8 font-light">
              5M Wellness Center, powered by Empower Marketing Inc., is a 100% Filipino company
              dedicated to helping you achieve{" "}
              <strong className="font-semibold text-[#1a4731]">homeostasis</strong> — your body's
              innate ability to heal and regulate itself — through the precise synergy of herbs,
              nutrition, and modern naturopathic science.
            </p>

            <ul className="space-y-3.5">
              {VALUES.map((v) => (
                <li key={v} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-[#d8f3dc] flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 text-[#2d6a4f]" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-[0.875rem] text-[#3d5a47] leading-relaxed">{v}</span>
                </li>
              ))}
            </ul>

            <a
              href="#services"
              className="inline-flex items-center gap-2 mt-10 text-[0.82rem] font-semibold text-[#1a4731] hover:text-[#2d6a4f] group"
            >
              Explore Our Services
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
