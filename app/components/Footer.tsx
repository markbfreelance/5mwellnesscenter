import { NAV_LINKS } from "../lib/tokens";

export default function Footer() {
  return (
    <footer className="bg-[#060f09] py-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <div className="font-display text-[1.3rem] font-light text-white tracking-tight">
              5M <span className="text-[#f4c430]">Wellness</span> Center
            </div>
            <div className="text-[0.62rem] font-medium tracking-[0.18em] uppercase text-white/30 mt-1">
              Stronger &amp; Better · Empowered by Moreishi
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-x-7 gap-y-2">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-[0.75rem] text-white/35 hover:text-[#f4c430] transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-[0.7rem] text-white/20">
            © {new Date().getFullYear()} 5M Wellness Center. All rights
            reserved.
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <div className="text-[0.7rem] text-white/20">
              Empower Marketing Inc. · DSAP Member
            </div>
            <span className="hidden sm:block text-white/10">|</span>
            <div className="text-[0.7rem] text-white/30">
              Powered by{" "}
              <a
                href="https://orangelabs-neon.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f4c430]/60 hover:text-[#f4c430] transition-colors font-medium"
              >
                <span style={{ color: "#FF6A00" }}>Orange</span>
                <span className="text-white/40">Labs Dev.</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
