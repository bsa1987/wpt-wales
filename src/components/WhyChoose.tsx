import { useScrollFade, useScrollFadeMultiple } from '../hooks/useScrollFade'

const FEATURES = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Professional Coaching',
    desc: 'Learn from experienced coaches with competition backgrounds and proven coaching records.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Beginner Friendly',
    desc: 'No experience required. We meet you where you are and guide you every step of the way.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Kids Classes',
    desc: 'Dedicated children\'s sessions for ages 4–13. Building confidence, focus and fitness safely.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Supportive Community',
    desc: 'Train alongside people who push you forward. Our gym family will have your back from day one.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Improve Fitness',
    desc: 'Full-body training that burns calories, builds strength, improves cardio and gets results fast.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: 'Authentic Muay Thai',
    desc: 'Train the art of eight limbs as it was meant to be taught — technically precise and battle-tested.',
  },
]

const STATS = [
  { value: '5★', label: 'Google Rating' },
  { value: '4+', label: 'Age Groups' },
  { value: '4', label: 'Classes Weekly' },
  { value: '100%', label: 'Beginner Safe' },
]

export default function WhyChoose() {
  const { ref: headRef, visible: headVisible } = useScrollFade()
  const { setRef, visibleItems } = useScrollFadeMultiple(FEATURES.length)

  return (
    <section className="py-24 lg:py-32 bg-[#1B1B1B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headRef} className={`fade-in-section ${headVisible ? 'visible' : ''} text-center mb-16`}>
          <p className="text-[#C1121F] font-heading text-lg tracking-widest mb-3 uppercase">Why Train With Us</p>
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white tracking-widest leading-none mb-4">
            WHY CHOOSE<br />
            <span className="text-[#C1121F]">WPT WALES</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto" />
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {STATS.map(stat => (
            <div key={stat.label} className="text-center py-5 border border-white/5 rounded-xl bg-[#111111]">
              <div className="font-heading text-4xl sm:text-5xl text-[#D4AF37] tracking-widest mb-1">{stat.value}</div>
              <div className="text-white/50 text-xs uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <div
              key={feature.title}
              ref={setRef(i)}
              className={`fade-in-section ${visibleItems[i] ? 'visible' : ''} group bg-[#111111] border border-white/5 rounded-2xl p-7 card-hover`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-[#C1121F]/10 border border-[#C1121F]/20 flex items-center justify-center text-[#C1121F] mb-5 group-hover:bg-[#C1121F]/20 group-hover:border-[#C1121F]/40 transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-heading text-2xl text-white tracking-widest mb-2">{feature.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
