"use client";

import { useReveal } from "@/app/components/ui/useReveal";

const COMPARE = [
  { west: "Treats symptoms only", nat: "Treats the root cause" },
  { west: "Quick fix / temporary", nat: "Long-term, lasting results" },
  { west: "Drug dependent", nat: "Non-drug dependent" },
  { west: "Disease managed, not cured", nat: "Disease eradicated (cured)" },
  { west: "Maintenance drugs forever", nat: "No maintenance drugs" },
  { west: "Doctor drives your health", nat: "You drive your health" },
  { west: "Side effects common", nat: "No side effects" },
  { west: "More costly", nat: "More economical" },
];

const PILLARS = [
  { icon: "🌱", title: "Diet & Nutrition", desc: "Food is your first medicine. We guide you to eat in ways that reverse deficiency at its source and nourish every cell." },
  { icon: "🌿", title: "Herbal Medicine", desc: "Nature provides everything your body needs to detoxify, repair, and thrive — without harmful side effects." },
  { icon: "🔬", title: "Modern Diagnostic Tools", desc: "Contemporary science alongside traditional wisdom for accurate, comprehensive health assessment." },
  { icon: "💪", title: "Lifestyle & Exercise", desc: "Movement, rest, and stress management complete the picture — a truly whole-person path to lasting wellness." },
];

export default function ApproachSection() {
  const sectionRef = useReveal();

  return (
    <section id="approach" className="py-28 bg-white relative overflow-hidden">
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#f0faf2] to-transparent pointer-events-none"
      />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="reveal max-w-2xl mb-16">
          <div className="section-divider" />
          <div className="text-[0.68rem] font-semibold tracking-[0.18em] uppercase text-[#6b8f72] mb-4">
            Naturopathy
          </div>
          <h2 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] font-light text-[#0d2b1a] leading-[1.1] tracking-tight mb-5">
            The Smarter Way
            <br />
            <em className="italic text-[#40916c]">to Heal.</em>
          </h2>
          <p className="text-[0.92rem] text-[#3d5a47] leading-[1.8] font-light">
            Naturopathic practitioners treat the cause of disease — not just its symptoms —
            using diet, herbs, exercise, lifestyle, and modern science working in harmony.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: Pillars */}
          <div className="space-y-6">
            {PILLARS.map((p, i) => (
              <div
                key={p.title}
                className="reveal flex gap-5 items-start"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-[#f0faf2] flex items-center justify-center text-xl flex-shrink-0 border border-[#40916c]/10">
                  {p.icon}
                </div>
                <div>
                  <div className="font-semibold text-[0.92rem] text-[#1a4731] mb-1.5">{p.title}</div>
                  <div className="text-[0.82rem] text-[#3d5a47] leading-relaxed">{p.desc}</div>
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="reveal pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#1a4731] text-white text-[0.82rem] font-semibold rounded-full hover:bg-[#2d6a4f] hover:-translate-y-0.5 transition-all shadow-lg"
              >
                Book Your Consultation
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Comparison table */}
          <div className="reveal rounded-2xl overflow-hidden border border-[#40916c]/12 shadow-lg">
            {/* Table header */}
            <div className="grid grid-cols-2">
              <div className="px-6 py-4 bg-[#f4f3ef] text-[0.72rem] font-semibold tracking-widest uppercase text-[#6b8f72] text-center">
                Western Medicine
              </div>
              <div className="px-6 py-4 bg-[#1a4731] text-[0.72rem] font-semibold tracking-widest uppercase text-[#52b788] text-center flex items-center justify-center gap-1.5">
                <span className="text-[#f4c430]">✦</span> Naturopathy
              </div>
            </div>

            {/* Rows */}
            {COMPARE.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-2 border-t border-[#40916c]/08"
              >
                <div className={`px-5 py-3.5 text-[0.78rem] text-[#6b8f72] border-r border-[#40916c]/08 ${i % 2 === 0 ? "bg-white" : "bg-[#fafaf8]"}`}>
                  <span className="flex items-center gap-2">
                    <span className="text-[0.6rem] text-red-300">✗</span>
                    {row.west}
                  </span>
                </div>
                <div className={`px-5 py-3.5 text-[0.78rem] font-medium text-[#2d6a4f] ${i % 2 === 0 ? "bg-[#f0faf2]" : "bg-[#e8f5ec]"}`}>
                  <span className="flex items-center gap-2">
                    <span className="text-[0.6rem] text-[#40916c]">✓</span>
                    {row.nat}
                  </span>
                </div>
              </div>
            ))}

            {/* Footer */}
            <div className="bg-[#0d2b1a] px-6 py-4 text-center">
              <div className="font-display text-[0.9rem] italic text-white/70">
                "The driver of your health is{" "}
                <span className="text-[#f4c430] not-italic font-light">you.</span>"
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
