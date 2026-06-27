import { useScrollFade, useScrollFadeMultiple } from '../hooks/useScrollFade'

const PILLARS = [
  { title: 'Confidence', desc: 'Build unshakeable self-confidence through consistent training and achieving goals.' },
  { title: 'Fitness', desc: 'Improve cardio, strength, flexibility and overall health with every session.' },
  { title: 'Discipline', desc: 'Develop the mental strength and commitment that carries into every area of life.' },
  { title: 'Community', desc: 'Join a welcoming family of like-minded people who push each other to succeed.' },
  { title: 'Self-Defence', desc: 'Learn real, effective striking and defensive techniques used worldwide.' },
  { title: 'Achievement', desc: 'Set targets, reach milestones, and experience the pride of progression.' },
]

export default function About() {
  const { ref: sectionRef, visible: sectionVisible } = useScrollFade()
  const { setRef, visibleItems } = useScrollFadeMultiple(PILLARS.length)

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#111111] relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#C1121F]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className={`fade-in-section ${sectionVisible ? 'visible' : ''} grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20`}
        >
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
              <img
                src="https://images.pexels.com/photos/7045409/pexels-photo-7045409.jpeg?auto=compress&cs=tinysrgb&w=900&q=80"
                alt="WPT Wales training session"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 to-transparent" />
            </div>
            {/* Gold accent border */}
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border-b-2 border-r-2 border-[#D4AF37]/30 rounded-br-2xl pointer-events-none" />
          </div>

          {/* Text */}
          <div>
            <p className="text-[#C1121F] font-heading text-lg tracking-widest mb-3 uppercase">About The Academy</p>
            <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white tracking-widest leading-none mb-6">
              MORE THAN JUST<br />
              <span className="text-[#C1121F]">MARTIAL ARTS</span>
            </h2>
            <div className="w-16 h-0.5 bg-[#D4AF37] mb-6" />
            <div className="space-y-4 text-white/75 font-body leading-relaxed">
              <p>
                WPT Wales is Swansea's dedicated Muay Thai and kickboxing academy, founded on the belief that martial arts can transform lives — not just bodies.
              </p>
              <p>
                We welcome <strong className="text-white">complete beginners, women, children aged 4+</strong> and competitive fighters alike. Whether your goal is weight loss, stress relief, self-defence, or competition — we have a class for you.
              </p>
              <p>
                Under the expert guidance of Head Coach <strong className="text-white">David Johnson</strong> and Instructor <strong className="text-white">Ashleigh Johnson</strong>, our members train in a <strong className="text-white">safe, supportive, and high-energy</strong> environment.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Beginners Welcome', 'Kids & Adults', 'Women\'s Classes', 'Competitive Training'].map(tag => (
                <span key={tag} className="text-xs font-medium tracking-widest uppercase px-3 py-1.5 border border-[#C1121F]/40 text-[#C1121F] rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {PILLARS.map((pillar, i) => (
            <div
              key={pillar.title}
              ref={setRef(i)}
              className={`fade-in-section ${visibleItems[i] ? 'visible' : ''} glass border border-white/5 rounded-xl p-5 sm:p-6 card-hover`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-8 h-0.5 bg-[#D4AF37] mb-3" />
              <h3 className="font-heading text-white text-2xl sm:text-3xl tracking-widest mb-2">{pillar.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  )
}
