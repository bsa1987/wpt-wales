export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Muay Thai fighter training"
          className="w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/70 via-[#111111]/50 to-[#111111]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/60 via-transparent to-[#111111]/30" />
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C1121F] to-transparent z-10" />

      {/* Headline */}
<h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-none tracking-widest text-shadow-lg mb-6 animate-fade-up">
  <span className="text-[#C1121F] inline-block mr-2">W</span>ORK.
  <br />
  <span className="text-[#C1121F] inline-block mr-2">P</span>ROGRESS.
  <br />
  <span className="text-[#C1121F] inline-block mr-2">T</span>RANSFORM.
</h1>

        {/* Subheading */}
        <p
          className="font-body text-white/80 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-up"
          style={{
            animationDelay: "0.2s",
            animationFillMode: "both",
          }}
        >
          Professional Muay Thai, Kickboxing & Fitness classes in Swansea for
          children, adults and complete beginners.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
          style={{
            animationDelay: "0.35s",
            animationFillMode: "both",
          }}
        >
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-[#C1121F] hover:bg-[#E10600] text-white font-heading text-xl tracking-widest px-10 py-4 rounded transition-all duration-200 hover:shadow-xl hover:shadow-red-900/40 active:scale-95"
          >
            BOOK FREE TRIAL
          </button>

          <button
            onClick={() =>
              document
                .querySelector("#timetable")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-transparent border-2 border-white/30 hover:border-white text-white font-heading text-xl tracking-widest px-10 py-4 rounded transition-all duration-200 hover:bg-white/10 active:scale-95"
          >
            VIEW TIMETABLE
          </button>
        </div>
      </div>
    </section>
  );
}
