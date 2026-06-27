import { useScrollFade, useScrollFadeMultiple } from '../hooks/useScrollFade'

interface ClassCardProps {
  name: string
  ages?: string
  days: string
  time: string
  description: string
  image: string
  badge?: string
  refProp?: (el: HTMLDivElement | null) => void
  visible?: boolean
  delay?: number
}

function ClassCard({ name, ages, days, time, description, image, badge, refProp, visible, delay = 0 }: ClassCardProps) {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      ref={refProp}
      className={`fade-in-section ${visible ? 'visible' : ''} group relative bg-[#1B1B1B] border border-white/5 rounded-2xl overflow-hidden flex flex-col card-hover`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={`${name} class`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B] via-[#1B1B1B]/20 to-transparent" />
        {badge && (
          <div className="absolute top-4 right-4 bg-[#C1121F] text-white font-heading text-sm tracking-widest px-3 py-1 rounded-full">
            {badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {ages && (
          <span className="text-[#D4AF37] text-xs font-medium uppercase tracking-widest mb-1">Ages {ages}</span>
        )}
        <h3 className="font-heading text-2xl sm:text-3xl text-white tracking-widest mb-3">{name}</h3>

        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <svg className="w-4 h-4 text-[#C1121F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{days}</span>
          </div>
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <svg className="w-4 h-4 text-[#C1121F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{time}</span>
          </div>
        </div>

        <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">{description}</p>

        <button
          onClick={scrollToContact}
          className="w-full bg-transparent border border-[#C1121F]/50 text-[#C1121F] hover:bg-[#C1121F] hover:text-white font-heading text-lg tracking-widest py-3 rounded-xl transition-all duration-200 group-hover:border-[#C1121F] group-hover:bg-[#C1121F] group-hover:text-white"
        >
          ENQUIRE
        </button>
      </div>
    </div>
  )
}

const CLASSES = [
  {
    name: 'Kids Muay Thai',
    ages: '4–13',
    days: 'Monday & Wednesday',
    time: '6:00pm – 7:00pm',
    description: 'Build confidence, discipline and fitness in a safe, fun environment. Our kids\' Muay Thai programme develops focus and respect alongside physical skills.',
    image: 'https://images.pexels.com/photos/8612013/pexels-photo-8612013.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    badge: 'Ages 4–13',
  },
  {
    name: 'Adults Muay Thai',
    days: 'Monday & Wednesday',
    time: '7:15pm – 8:30pm',
    description: 'Authentic Muay Thai technique covering strikes, clinch work, footwork and combinations. Suitable for beginners through to competition-level fighters.',
    image: 'https://images.pexels.com/photos/7045557/pexels-photo-7045557.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
  },
  {
    name: 'Thai Fitness Blast',
    days: 'Tuesday & Thursday',
    time: '6:15pm – 7:15pm',
    description: 'High-energy fitness class using Muay Thai techniques. Suitable for all abilities — no sparring required. Perfect for weight loss and cardiovascular health.',
    image: 'https://images.pexels.com/photos/6295855/pexels-photo-6295855.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    badge: 'All Abilities',
  },
  {
    name: 'One-to-One Coaching',
    days: 'By Appointment',
    time: 'Flexible',
    description: 'Accelerate your progress with private coaching sessions tailored entirely to your goals — technique refinement, competition prep or personal development.',
    image: 'https://images.pexels.com/photos/6295859/pexels-photo-6295859.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    badge: 'Private',
  },
]

export default function Classes() {
  const { ref: headRef, visible: headVisible } = useScrollFade()
  const { setRef, visibleItems } = useScrollFadeMultiple(CLASSES.length)

  return (
    <section id="classes" className="py-24 lg:py-32 bg-[#111111] relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headRef} className={`fade-in-section ${headVisible ? 'visible' : ''} text-center mb-16`}>
          <p className="text-[#C1121F] font-heading text-lg tracking-widest mb-3 uppercase">What We Offer</p>
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white tracking-widest leading-none mb-4">
            OUR CLASSES
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-4" />
          <p className="text-white/60 max-w-xl mx-auto leading-relaxed">
            From first-time beginners to competitive fighters — we have a class built for your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLASSES.map((cls, i) => (
            <ClassCard
              key={cls.name}
              {...cls}
              refProp={setRef(i)}
              visible={visibleItems[i]}
              delay={i * 100}
            />
          ))}
        </div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  )
}
