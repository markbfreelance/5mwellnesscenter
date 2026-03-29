"use client";

import { useReveal } from "@/app/components/ui/useReveal";
import { PRODUCTS } from "@/app/lib/tokens";

const HERBS = [
  {
    emoji: "🍈",
    name: "Noni",
    sci: "Morinda Citrifolia",
    desc: "Boosts endurance, relieves pain, supports immunity, and reduces cellular damage.",
    gradient: "linear-gradient(135deg, #d8f3dc 0%, #f0faf2 100%)",
  },
  {
    emoji: "🍄",
    name: "Reishi / Ganoderma",
    sci: "Ganoderma Lucidum",
    desc: "Activates white blood cells to fight infection and cancer. Enhances immune function.",
    gradient: "linear-gradient(135deg, #fef3c7 0%, #fffbeb 100%)",
  },
  {
    emoji: "🌿",
    name: "Gotu Kola",
    sci: "Centella Asiatica",
    desc: "Improves blood circulation, supports brain health, and accelerates wound healing.",
    gradient: "linear-gradient(135deg, #d8f3dc 0%, #f0faf2 100%)",
  },
  {
    emoji: "🌱",
    name: "Banaba",
    sci: "Lagerstroemia Speciosa",
    desc: "Reduces diabetes risk, supports kidney and bladder function, achieves glycemic control.",
    gradient: "linear-gradient(135deg, #fef3c7 0%, #f0faf2 100%)",
  },
  {
    emoji: "🫚",
    name: "Turmeric",
    sci: "Curcuma Longa",
    desc: "Powerful anti-inflammatory antioxidant — supports joint health and whole-body detox.",
    gradient: "linear-gradient(135deg, #fef3c7 0%, #fffbeb 100%)",
  },
  {
    emoji: "🌾",
    name: "Ampalaya",
    sci: "Momordica Charantia",
    desc: "Improves insulin secretion and blood sugar regulation. Supports digestive health.",
    gradient: "linear-gradient(135deg, #d8f3dc 0%, #f0faf2 100%)",
  },
  {
    emoji: "🫙",
    name: "Ginseng",
    sci: "Panax Ginseng",
    desc: "Sharpens mental clarity, boosts energy levels, and builds the body's stress resilience.",
    gradient: "linear-gradient(135deg, #d8f3dc 0%, #fef3c7 100%)",
  },
  {
    emoji: "🌊",
    name: "Kelp",
    sci: "Laminaria Digitata",
    desc: "Rich in iodine — regulates thyroid function, metabolism, and cellular detoxification.",
    gradient: "linear-gradient(135deg, #fef3c7 0%, #d8f3dc 100%)",
  },
];

export default function HerbsSection() {
  const sectionRef = useReveal();

  return (
    <section id="herbs" className="py-28 bg-white relative overflow-hidden">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header row */}
        <div className="reveal grid lg:grid-cols-2 gap-10 items-end mb-16">
          <div>
            <div className="section-divider" />
            <div className="text-[0.68rem] font-semibold tracking-[0.18em] uppercase text-[#6b8f72] mb-4">
              Nature&apos;s Pharmacy
            </div>
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] font-light text-[#0d2b1a] leading-[1.1] tracking-tight">
              Key Herbs &amp;
              <br />
              <em className="italic text-[#40916c]">Ingredients</em>
            </h2>
          </div>
          <p className="text-[0.92rem] text-[#3d5a47] leading-[1.8] font-light lg:max-w-sm">
            Each herb is carefully selected for its proven healing properties,
            then blended in precise ratios to maximize synergistic effect —
            amplifying what nature already does best.
          </p>
        </div>

        {/* Herb cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {HERBS.map((h, i) => (
            <div
              key={h.name}
              className="reveal group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5"
              style={{
                transitionDelay: `${i * 50}ms`,
                border: "1px solid rgba(64,145,108,0.08)",
              }}
            >
              {/* Colored top area */}
              <div
                className="relative h-28 flex items-center justify-center overflow-hidden"
                style={{ background: h.gradient }}
              >
                {/* Decorative ring */}
                <div
                  className="absolute -right-4 -top-4 w-20 h-20 rounded-full pointer-events-none"
                  style={{ border: "1px solid rgba(64,145,108,0.08)" }}
                />
                {/* Emoji with hover scale */}
                <span className="text-4xl relative z-10 group-hover:scale-125 transition-transform duration-500 drop-shadow-sm">
                  {h.emoji}
                </span>
                {/* Bottom fade into white */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, white, transparent)",
                  }}
                />
              </div>

              {/* Body */}
              <div className="p-5 pt-3">
                <div className="font-semibold text-[0.9rem] text-[#1a4731] mb-0.5 tracking-tight">
                  {h.name}
                </div>
                <div className="text-[0.68rem] italic text-[#6b8f72] mb-3 flex items-center gap-1.5">
                  <span
                    className="inline-block w-3 h-px"
                    style={{
                      background:
                        "linear-gradient(90deg, #f4c430, #40916c)",
                    }}
                  />
                  {h.sci}
                </div>
                <div className="text-[0.78rem] text-[#3d5a47] leading-relaxed">
                  {h.desc}
                </div>
              </div>

              {/* Hover corner arrow */}
              <div
                className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.85)" }}
              >
                <svg
                  className="w-3 h-3 text-[#40916c]"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    d="M5 11L11 5M11 5H6M11 5V10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Products strip */}
        <div className="reveal rounded-3xl bg-[#0d2b1a] p-8 md:p-12 relative overflow-hidden">
          {/* Decorative rings */}
          <div
            className="absolute -right-20 -top-20 w-[350px] h-[350px] rounded-full pointer-events-none"
            style={{ border: "1px solid rgba(64,145,108,0.15)" }}
          />
          <div
            className="absolute -right-10 -top-10 w-[250px] h-[250px] rounded-full pointer-events-none"
            style={{ border: "1px solid rgba(244,196,48,0.08)" }}
          />
          {/* Background glow */}
          <div
            className="absolute top-0 left-1/3 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(64,145,108,0.08) 0%, transparent 70%)",
            }}
          />

          <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
            <div>
              <div className="text-[0.62rem] font-semibold tracking-[0.18em] uppercase text-[#f4c430] mb-4">
                The Moreishi Line
              </div>
              <h3 className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-light text-white leading-tight mb-4">
                Multiple formulas,
                <br />
                <em className="italic text-[#52b788]">one mission.</em>
              </h3>
              <p
                className="text-[0.85rem] leading-[1.75] mb-8 max-w-sm"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                Each product line is formulated to maximize synergy between
                herbs and ingredients — targeting specific health concerns with
                purity and precision.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#f4c430] text-[#0d2b1a] text-[0.82rem] font-bold hover:bg-[#d4a017] transition-colors"
              >
                Get Your Products
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            {/* Product list — modernized with pill badges */}
            <div className="grid grid-cols-2 gap-2.5">
              {PRODUCTS.map((p, i) => (
                <div
                  key={p}
                  className="group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(244,196,48,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(255,255,255,0.04)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(255,255,255,0.06)";
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#f4c430] flex-shrink-0" />
                  <span
                    className="text-[0.75rem] font-medium"
                    style={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    {p}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
