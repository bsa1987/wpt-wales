import { useScrollFade } from '../hooks/useScrollFade'

const COACHES = [
  {
    name: 'David Johnson',
    title: 'Head Coach',
    bio: 'David is WPT Wales\' founding coach with years of competitive Muay Thai experience. His passion for the sport and talent for instruction have built one of Swansea\'s most respected training academies. David is dedicated to developing every student — from nervous beginners to championship contenders.',
    image: 'https://images.pexels.com/photos/4761422/pexels-photo-4761422.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    specialisms: ['Muay Thai', 'Competition Prep', 'Technique'],
  },
  {
    name: 'Ashleigh Johnson',
    title: 'Instructor',
    bio: 'Ashleigh brings energy, expertise and a warm coaching style that makes every student feel welcome. She leads the Kids Muay Thai programme and Thai Fitness Blast sessions, combining technical precision with fun and encouragement to bring out the best in every student.',
    image: 'https://images.pexels.com/photos/6295863/pexels-photo-6295863.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    specialisms: ['Kids Classes', 'Thai Fitness', 'Beginners'],
  },
]

export default function Coaches() {
  const { ref, visible } = useScrollFade()

  return (
    <section className="py-24 lg:py-32 bg-[#1B1B1B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`fade-in-section ${visible ? 'visible' : ''} text-center mb-16`}>
          <p className="text-[#C1121F] font-heading text-lg tracking-widest mb-3 uppercase">Meet The Team</p>
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white tracking-widest leading-none mb-4">
            OUR COACHES
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {COACHES.map((coach, i) => (
            <div
              key={coach.name}
              className="group bg-[#111111] border border-white/5 rounded-2xl overflow-hidden card-hover"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={coach.image}
                  alt={`${coach.name}, ${coach.title} at WPT Wales`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <div className="inline-flex items-center gap-2 bg-[#C1121F] text-white text-xs font-heading tracking-widest px-3 py-1 rounded-full">
                    {coach.title}
                  </div>
                </div>
              </div>

              <div className="p-7">
                <h3 className="font-heading text-3xl text-white tracking-widest mb-1">{coach.name}</h3>
                <div className="w-10 h-0.5 bg-[#D4AF37] mb-4" />
                <p className="text-white/60 text-sm leading-relaxed mb-5">{coach.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {coach.specialisms.map(spec => (
                    <span key={spec} className="text-xs px-3 py-1 border border-[#C1121F]/30 text-[#C1121F] rounded-full font-medium uppercase tracking-wider">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
