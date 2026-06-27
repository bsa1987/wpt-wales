export default function Hero() {
  const scrollToNext = () => {
    const el = document.querySelector('#about')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/7045557/pexels-photo-7045557.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
          alt="Muay Thai fighter training"
          className="w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/70 via-[#111111]/50 to-[#111111]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/60 via-transparent to-[#111111]/30" />
      </div>

      {/* Animated red accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C1121F] to-transparent z-10" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#C1121F]/20 border border-[#C1121F]/40 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#C1121F] animate-pulse-slow" />
          <span className="text-white/90 text-sm font-medium tracking-widest uppercase">Swansea's Premier Muay Thai Academy</span>
        </div>

        {/* Headline */}
        <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-none tracking-widest text-shadow-lg mb-6 animate-fade-up">
          TRAIN HARD.
          <br />
          <span className="text-[#C1121F]">FIGHT SMART.</span>
          <br />
          BUILD CONFIDENCE.
        </h1>

        {/* Subheading */}
        <p className="font-body text-white/80 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          Professional Muay Thai, Kickboxing & Fitness classes in Swansea for children, adults and complete beginners.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up" style={{ animationDelay: '0.35s', animationFillMode: 'both' }}>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#C1121F] hover:bg-[#E10600] text-white font-heading text-xl tracking-widest px-10 py-4 rounded transition-all duration-200 hover:shadow-xl hover:shadow-red-900/40 active:scale-95"
          >
            BOOK FREE TRIAL
          </button>
          <button
            onClick={() => document.querySelector('#timetable')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-transparent border-2 border-white/30 hover:border-white text-white font-heading text-xl tracking-widest px-10 py-4 rounded transition-all duration-200 hover:bg-white/10 active:scale-95"
          >
            VIEW TIMETABLE
          </button>
        </div>

        {/* Google Rating */}
        <div className="flex items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
          <div className="flex gap-1" aria-label="5 star rating">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-white/70 text-sm font-medium">★★★★★ Google Rated</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 group animate-fade-in"
        style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
        aria-label="Scroll down"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase group-hover:text-white/60 transition-colors">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1 group-hover:border-white/50 transition-colors">
          <div className="w-1.5 h-3 bg-[#C1121F] rounded-full animate-scroll-indicator" />
        </div>
      </button>
    </section>
  )
}
