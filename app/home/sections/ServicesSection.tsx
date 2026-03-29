"use client";

import { useReveal } from "@/app/components/ui/useReveal";

const SERVICES = [
  {
    icon: "🩺",
    title: "Naturopathic Consultation",
    desc: "A comprehensive health assessment identifying root causes through modern and traditional methods. We craft a personalized natural protocol — no guesswork, no symptom masking.",
    tags: ["Root Cause Analysis", "Personalized", "Drug-Free"],
    accent: false,
    number: "01",
  },
  {
    icon: "🌿",
    title: "Herbal Supplement Programs",
    desc: "Access our complete Moreishi product line — each formula scientifically synergized to detoxify, nourish, and restore balance across every system in your body.",
    tags: ["Golden Herbs", "Herbasul Plus", "Jugo Verde"],
    accent: true,
    number: "02",
  },
  {
    icon: "🍵",
    title: "Wellness & Lifestyle Coaching",
    desc: "Health is simple — we teach you how. Our educators guide you through diet, nutrition, exercise, and mindful lifestyle adjustments for long-term vitality.",
    tags: ["Nutrition", "Diet Planning", "Detox"],
    accent: false,
    number: "03",
  },
  {
    icon: "🔬",
    title: "Modern Diagnostic Support",
    desc: "Contemporary scientific tools integrated with naturopathic wisdom. We monitor your progress with precision, fine-tuning your protocol as your body heals.",
    tags: ["Evidence-Based", "Progress Tracking"],
    accent: false,
    number: "04",
  },
  {
    icon: "💊",
    title: "Targeted Health Protocols",
    desc: "Specialized regimens for diabetes, hypertension, cardiovascular health, immune support, kidney and thyroid concerns — built entirely around natural solutions.",
    tags: ["Diabetes", "Cardiovascular", "Immunity"],
    accent: false,
    number: "05",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family Wellness Plans",
    desc: "Family-oriented at our core. We offer whole-household wellness packages — keeping every generation from children to seniors strong, naturally and affordably.",
    tags: ["All Ages", "Family Plans", "Economical"],
    accent: false,
    number: "06",
  },
];

function AccentCard({ s, i }: { s: (typeof SERVICES)[0]; i: number }) {
  return (
    <div
      className="reveal group relative rounded-3xl overflow-hidden"
      style={{
        transitionDelay: `${i * 60}ms`,
        background: "linear-gradient(135deg, #1a4731 0%, #0d2b1a 100%)",
      }}
    >
      {/* Shimmer border effect via pseudo-like layering */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          padding: "1px",
          background:
            "linear-gradient(135deg, rgba(244,196,48,0.5), rgba(82,183,136,0.3), rgba(244,196,48,0.5))",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Background glow orbs */}
      <div
        className="absolute -top-20 -right-20 w-60 h-60 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(244,196,48,0.12) 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(82,183,136,0.10) 0%, transparent 70%)" }}
      />

      <div className="relative p-8 flex flex-col h-full">
        {/* Top accent line */}
        <div
          className="absolute top-0 left-1/2 w-3/5 h-px pointer-events-none"
          style={{
            transform: "translateX(-50%)",
            background:
              "linear-gradient(90deg, transparent, rgba(244,196,48,0.6), transparent)",
          }}
        />

        {/* Large ghost icon */}
        <div
          className="absolute top-6 right-6 text-[5rem] leading-none select-none pointer-events-none"
          style={{ opacity: 0.06 }}
        >
          {s.icon}
        </div>

        {/* Number + line */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#f4c430] flex items-center justify-center text-[0.7rem] font-bold text-[#0d2b1a]">
            {s.number}
          </div>
          <div
            className="h-px flex-1"
            style={{
              background:
                "linear-gradient(90deg, rgba(244,196,48,0.4), transparent)",
            }}
          />
        </div>

        {/* Icon */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.10)",
          }}
        >
          {s.icon}
        </div>

        <h3 className="text-[#f4c430] font-semibold text-[1.05rem] mb-3 tracking-tight">
          {s.title}
        </h3>
        <p
          className="text-[0.82rem] leading-[1.72] flex-1 mb-6"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          {s.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {s.tags.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full text-[0.65rem] font-medium"
              style={{
                border: "1px solid rgba(244,196,48,0.25)",
                color: "rgba(244,196,48,0.9)",
                background: "rgba(244,196,48,0.08)",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 w-fit px-6 py-3 rounded-full bg-[#f4c430] text-[#0d2b1a] text-[0.78rem] font-bold hover:bg-[#d4a017] transition-all duration-300"
        >
          Book Now
          <svg
            className="w-3.5 h-3.5"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

function StandardCard({ s, i }: { s: (typeof SERVICES)[0]; i: number }) {
  return (
    <div
      className="reveal group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
      style={{
        transitionDelay: `${i * 60}ms`,
        border: "1px solid rgba(64,145,108,0.08)",
      }}
    >
      {/* Hover gradient glow */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(64,145,108,0.04) 0%, transparent 50%, rgba(244,196,48,0.04) 100%)",
        }}
      />

      {/* Bottom highlight on hover */}
      <div
        className="absolute bottom-0 left-[15%] right-[15%] h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(64,145,108,0.35), transparent)",
        }}
      />

      <div className="relative p-7 flex flex-col h-full">
        {/* Number + separator */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-[0.6rem] font-bold text-[#40916c] group-hover:bg-[#40916c] group-hover:text-white transition-all duration-300"
            style={{ border: "1px solid rgba(64,145,108,0.18)" }}
          >
            {s.number}
          </div>
          <div
            className="h-px flex-1"
            style={{
              background:
                "linear-gradient(90deg, rgba(64,145,108,0.15), transparent)",
            }}
          />
        </div>

        {/* Icon */}
        <div
          className="w-12 h-12 rounded-2xl bg-[#f0faf2] flex items-center justify-center text-xl mb-5 group-hover:scale-110 group-hover:bg-[#d8f3dc] transition-all duration-500"
          style={{ border: "1px solid rgba(64,145,108,0.10)" }}
        >
          {s.icon}
        </div>

        <h3 className="font-semibold text-[0.95rem] text-[#1a4731] mb-3 tracking-tight group-hover:text-[#2d6a4f] transition-colors">
          {s.title}
        </h3>
        <p className="text-[0.82rem] text-[#3d5a47] leading-[1.72] flex-1 mb-5">
          {s.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {s.tags.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-full text-[0.65rem] font-medium text-[#2d6a4f] bg-[#f0faf2] transition-colors duration-300"
              style={{ border: "1px solid rgba(64,145,108,0.12)" }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Arrow indicator on hover */}
        <div
          className="absolute top-7 right-7 w-8 h-8 rounded-full bg-[#f0faf2] flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300"
          style={{ border: "1px solid rgba(64,145,108,0.10)" }}
        >
          <svg
            className="w-3.5 h-3.5 text-[#40916c]"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M5 3l5 5-5 5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const sectionRef = useReveal();

  return (
    <section id="services" className="py-28 bg-[#f0faf2] relative overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#d8f3dc]/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-[#fef3c7]/30 blur-3xl pointer-events-none" />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="reveal max-w-xl mb-16">
          <div className="section-divider" />
          <div className="text-[0.68rem] font-semibold tracking-[0.18em] uppercase text-[#6b8f72] mb-4">
            What We Offer
          </div>
          <h2 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] font-light text-[#0d2b1a] leading-[1.1] tracking-tight mb-4">
            Services &amp;
            <br />
            <em className="italic text-[#40916c]">Programs</em>
          </h2>
          <p className="text-[0.92rem] text-[#3d5a47] leading-[1.8] font-light">
            From personalized consultations to curated herbal regimens — we
            craft a health plan as unique as the person wearing it.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) =>
            s.accent ? (
              <AccentCard key={s.title} s={s} i={i} />
            ) : (
              <StandardCard key={s.title} s={s} i={i} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
