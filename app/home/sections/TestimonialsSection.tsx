"use client";

import { useReveal } from "@/app/components/ui/useReveal";

const TESTIMONIALS = [
  {
    quote:
      "After three months on Herbalin, Body Guard, Jugo Verde, and Herbal Coffee, my diabetic wounds healed completely. I couldn't believe what I was seeing.",
    name: "Maria T.",
    role: "Diabetes Management Program",
    avatar: "MT",
    accentColor: "#40916c",
    bgColor: "#d8f3dc",
  },
  {
    quote:
      "I was on maintenance medicine for hypertension for years. After starting Golden Herbs Tonic, my doctor was genuinely surprised at my readings. No drugs, just herbs.",
    name: "Roberto L.",
    role: "Cardiovascular Wellness Program",
    avatar: "RL",
    accentColor: "#92660a",
    bgColor: "#fef3c7",
  },
  {
    quote:
      "Herbasul Plus gave me my energy back. My mood is stable, my body feels balanced, and I haven't needed synthetic drugs in months. Health really is simple.",
    name: "Ligaya M.",
    role: "Holistic Wellness Journey",
    avatar: "LM",
    accentColor: "#40916c",
    bgColor: "#d8f3dc",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useReveal();

  return (
    <section
      id="testimonials"
      className="py-28 bg-[#f0faf2] relative overflow-hidden"
    >
      {/* Large decorative quote mark */}
      <div
        className="absolute top-12 right-12 font-display text-[18rem] leading-none select-none pointer-events-none"
        style={{ color: "rgba(64,145,108,0.04)" }}
        aria-hidden
      >
        &ldquo;
      </div>

      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="reveal mb-16">
          <div className="section-divider" />
          <div className="text-[0.68rem] font-semibold tracking-[0.18em] uppercase text-[#6b8f72] mb-4">
            Real Stories
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] font-light text-[#0d2b1a] leading-[1.1] tracking-tight">
              Lives Transformed,
              <br />
              <em className="italic text-[#40916c]">Naturally.</em>
            </h2>
            <p className="text-[0.88rem] text-[#3d5a47] max-w-xs leading-relaxed font-light">
              From managing diabetes to restoring vitality — real results from
              real people who chose nature.
            </p>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className="reveal group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5"
              style={{
                transitionDelay: `${i * 90}ms`,
                border: "1px solid rgba(64,145,108,0.06)",
              }}
            >
              {/* Top accent bar — thick gradient */}
              <div
                className="h-1 w-full"
                style={{
                  background: `linear-gradient(90deg, ${t.accentColor}, #f4c430)`,
                }}
              />

              <div className="p-7 flex flex-col h-full">
                {/* Stars + quote icon row */}
                <div className="flex items-center justify-between mb-5">
                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <svg
                        key={j}
                        className="w-3.5 h-3.5 text-[#f4c430]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  {/* Quote icon */}
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: t.bgColor }}
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      style={{ color: t.accentColor }}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                    </svg>
                  </div>
                </div>

                {/* Quote text */}
                <p className="font-display text-[1rem] italic text-[#1a4731] leading-[1.65] flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div
                  className="flex items-center gap-3 pt-5"
                  style={{
                    borderTop: "1px solid rgba(64,145,108,0.08)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-[0.72rem] font-bold shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: t.bgColor,
                      color: t.accentColor,
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-[0.84rem] font-semibold text-[#1a4731]">
                      {t.name}
                    </div>
                    <div className="text-[0.7rem] text-[#6b8f72] flex items-center gap-1.5">
                      <span
                        className="inline-block w-2.5 h-px"
                        style={{
                          background: `linear-gradient(90deg, ${t.accentColor}, transparent)`,
                        }}
                      />
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover gradient overlay */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 60%, rgba(64,145,108,0.03) 100%)",
                }}
              />
            </div>
          ))}
        </div>

        {/* Feature quote banner */}
        <div className="reveal bg-[#1a4731] rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(45,106,79,0.2), transparent)",
            }}
          />
          <div
            className="absolute -bottom-10 -right-10 w-[200px] h-[200px] rounded-full pointer-events-none"
            style={{ border: "1px solid rgba(255,255,255,0.04)" }}
          />
          {/* Top glow line */}
          <div
            className="absolute top-0 left-1/4 right-1/4 h-px pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(244,196,48,0.3), transparent)",
            }}
          />
          <div className="relative z-10">
            <div className="font-display text-[clamp(1.6rem,4vw,2.6rem)] italic text-white leading-[1.3] mb-4">
              &ldquo;Health is simple —{" "}
              <span className="text-[#f4c430] not-italic font-light">
                why make it complicated?
              </span>
              &rdquo;
            </div>
            <div className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[#52b788]">
              5M Wellness Center · Empower Marketing Inc.
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 px-7 py-3 rounded-full bg-[#f4c430] text-[#0d2b1a] text-[0.82rem] font-bold hover:bg-[#d4a017] transition-colors"
            >
              Start Your Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
