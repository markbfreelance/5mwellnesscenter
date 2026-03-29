"use client";

import { useState } from "react";
import { useReveal } from "@/app/components/ui/useReveal";

const CONCERNS = [
  "Diabetes / Blood Sugar",
  "Hypertension / Heart Health",
  "Immune System Support",
  "Kidney / Thyroid / Bladder",
  "Weight Management",
  "Cancer Support",
  "General Wellness",
  "Other",
];

const CONTACT_INFO = [
  { icon: "📍", label: "Location", value: "5M Wellness Center, Philippines" },
  { icon: "📞", label: "Phone / Viber", value: "+63 XXX XXX XXXX" },
  { icon: "✉️", label: "Email", value: "hello@5mwellnesscenter.com" },
  { icon: "🕐", label: "Hours", value: "Mon–Sat · 9:00 AM – 6:00 PM" },
];

export default function ContactSection() {
  const sectionRef = useReveal();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", concern: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-28 bg-[#0d2b1a] relative overflow-hidden">
      {/* Radial glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#40916c]/06 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#f4c430]/04 blur-3xl pointer-events-none" />
      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div className="reveal">
            <div className="w-12 h-0.5 bg-gradient-to-r from-[#f4c430] to-[#40916c] mb-6" />
            <div className="text-[0.68rem] font-semibold tracking-[0.18em] uppercase text-[#52b788] mb-5">
              Get In Touch
            </div>
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] font-light text-white leading-[1.1] tracking-tight mb-6">
              Begin Your
              <br />
              <em className="italic text-[#52b788]">Wellness Journey</em>
              <br />
              Today.
            </h2>
            <p className="text-[0.9rem] text-white/55 leading-[1.8] mb-12 font-light max-w-sm">
              Book a free consultation with one of our naturopathic practitioners and take the
              first step toward a healthier, drug-free life.
            </p>

            {/* Contact info */}
            <div className="space-y-5">
              {CONTACT_INFO.map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/06 border border-white/08 flex items-center justify-center text-base flex-shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-[0.62rem] font-semibold tracking-[0.15em] uppercase text-[#f4c430] mb-0.5">
                      {c.label}
                    </div>
                    <div className="text-[0.85rem] text-white/70">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="mt-14 pt-8 border-t border-white/08">
              <div className="font-display text-[1rem] italic text-white/40 leading-snug">
                "See, I have given you every herb that yields seed… to you it shall be for food."
              </div>
              <div className="text-[0.62rem] tracking-widest uppercase text-[#52b788]/60 mt-2">— Genesis 1:29</div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="reveal">
            <div className="bg-[#f9f8f4] rounded-3xl p-8 md:p-10 shadow-2xl">
              <h3 className="font-display text-[1.5rem] font-light text-[#1a4731] mb-7 tracking-tight">
                Book a Free Consultation
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "firstName", label: "First Name", placeholder: "Juan" },
                    { name: "lastName", label: "Last Name", placeholder: "dela Cruz" },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="block text-[0.68rem] font-semibold tracking-[0.12em] uppercase text-[#6b8f72] mb-2">
                        {f.label}
                      </label>
                      <input
                        type="text"
                        name={f.name}
                        placeholder={f.placeholder}
                        value={form[f.name as keyof typeof form]}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#40916c]/15 bg-white text-[0.875rem] text-[#1a4731] placeholder:text-[#b0c4b1] outline-none focus:border-[#40916c] focus:ring-2 focus:ring-[#40916c]/10 transition-all"
                        required
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-[0.68rem] font-semibold tracking-[0.12em] uppercase text-[#6b8f72] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="juan@email.com"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#40916c]/15 bg-white text-[0.875rem] text-[#1a4731] placeholder:text-[#b0c4b1] outline-none focus:border-[#40916c] focus:ring-2 focus:ring-[#40916c]/10 transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[0.68rem] font-semibold tracking-[0.12em] uppercase text-[#6b8f72] mb-2">
                    Phone / Viber
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+63 XXX XXX XXXX"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#40916c]/15 bg-white text-[0.875rem] text-[#1a4731] placeholder:text-[#b0c4b1] outline-none focus:border-[#40916c] focus:ring-2 focus:ring-[#40916c]/10 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[0.68rem] font-semibold tracking-[0.12em] uppercase text-[#6b8f72] mb-2">
                    Primary Health Concern
                  </label>
                  <select
                    name="concern"
                    value={form.concern}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#40916c]/15 bg-white text-[0.875rem] text-[#1a4731] outline-none focus:border-[#40916c] focus:ring-2 focus:ring-[#40916c]/10 transition-all appearance-none cursor-pointer"
                    required
                  >
                    <option value="">Select your concern…</option>
                    {CONCERNS.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[0.68rem] font-semibold tracking-[0.12em] uppercase text-[#6b8f72] mb-2">
                    Message <span className="font-normal normal-case tracking-normal text-[#b0c4b1]">(optional)</span>
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your health goals…"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-[#40916c]/15 bg-white text-[0.875rem] text-[#1a4731] placeholder:text-[#b0c4b1] outline-none focus:border-[#40916c] focus:ring-2 focus:ring-[#40916c]/10 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full mt-2 py-4 rounded-xl text-[0.88rem] font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${sent
                    ? "bg-[#40916c] text-white"
                    : "bg-[#1a4731] text-white hover:bg-[#2d6a4f] hover:-translate-y-0.5 shadow-lg"
                    }`}
                >
                  {sent ? (
                    <>
                      <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M3 8l3.5 3.5 6.5-7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Request Sent!
                    </>
                  ) : (
                    <>
                      Send My Request
                      <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
