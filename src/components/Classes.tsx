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
    <span className="text-[#D4AF37] text-xs font-medium uppercase tracking-widest mb-1">
      Ages {ages}
    </span>
  )}

  <h3 className="font-heading text-2xl sm:text-3xl text-white tracking-widest mb-3">
    {name}
  </h3>

  <div className="flex flex-wrap gap-3 mb-5">
    <div className="flex items-center gap-2 text-white/80 text-sm">
      <svg
        className="w-4 h-4 text-[#C1121F]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <span>{days}</span>
    </div>

    <div className="flex items-center gap-2 text-white/80 text-sm">
      <svg
        className="w-4 h-4 text-[#C1121F]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>{time}</span>
    </div>
  </div>

  {name === 'Children & Adults Muay Thai' ? (
    <div className="flex-1 space-y-4 mb-6">

      <div className="border-l-4 border-[#D4AF37] pl-4">
        <p className="text-[#D4AF37] font-heading text-xl tracking-wider">
          AGE 4–7
        </p>
        <p className="text-white font-semibold">
          5:30pm – 6:15pm
        </p>
        <p className="text-[#C1121F] font-bold text-lg">
          £4.50
          <span className="text-white/80 text-sm font-normal">
            {" "}per class
          </span>
        </p>
        <p className="text-white/80">
          or
          <span className="text-[#D4AF37] font-semibold">
            {" "}£30 monthly
          </span>
        </p>
      </div>

      <div className="border-l-4 border-[#D4AF37] pl-4">
        <p className="text-[#D4AF37] font-heading text-xl tracking-wider">
          AGE 8–14
        </p>
        <p className="text-white font-semibold">
          6:15pm – 7:15pm
        </p>
        <p className="text-[#C1121F] font-bold text-lg">
          £4.50
          <span className="text-white/80 text-sm font-normal">
            {" "}per class
          </span>
        </p>
        <p className="text-white/80">
          or
          <span className="text-[#D4AF37] font-semibold">
            {" "}£30 monthly
          </span>
        </p>
      </div>

      <div className="border-l-4 border-[#D4AF37] pl-4">
        <p className="text-[#D4AF37] font-heading text-xl tracking-wider">
          ADULTS
        </p>
        <p className="text-white font-semibold">
          7:15pm – 8:30pm
        </p>
        <p className="text-[#C1121F] font-bold text-lg">
          £5.50
          <span className="text-white/80 text-sm font-normal">
            {" "}per class
          </span>
        </p>
        <p className="text-white/80">
          or
          <span className="text-[#D4AF37] font-semibold">
            {" "}£40 monthly
          </span>
        </p>
      </div>

      <div className="bg-[#111111] border border-[#D4AF37]/30 rounded-xl p-3">
        <p className="text-white font-medium">
          🥊 Private fighters training available by appointment.
        </p>
      </div>

    </div>
  ) : (
    <p className="text-white/80 leading-relaxed mb-6 flex-1">
      {description}
    </p>
  )}

  <button
    onClick={scrollToContact}
    className="w-full bg-transparent border border-[#C1121F]/50 text-[#C1121F] hover:bg-[#C1121F] hover:text-white font-heading text-lg tracking-widest py-3 rounded-xl transition-all duration-200"
  >
    ENQUIRE
  </button>
</div>

const CLASSES = [
  {
    name: 'Children & Adults Muay Thai',
    ages: '4+',
    days: 'Monday & Wednesday',
    time: '5:30pm – 8:30pm',
    description:
      `Age 4–7: 5:30pm–6:15pm (£4.50 per class or £30 monthly)

Age 8–14: 6:15pm–7:15pm (£4.50 per class or £30 monthly)

Adults: 7:15pm–8:30pm (£5.50 per class or £40 monthly)

Private fighters training available by appointment.`,
    image: 'https://images.pexels.com/photos/8612013/pexels-photo-8612013.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    badge: 'Most Popular',
  },
  {
    name: 'Thai Fitness Blast',
    days: 'Tuesday & Thursday',
    time: '6:15pm – 7:15pm',
    description:
      'High-energy fitness sessions using Muay Thai techniques. Perfect for weight loss, fitness and conditioning. Suitable for all abilities.',
    image: 'https://images.pexels.com/photos/6295855/pexels-photo-6295855.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    badge: 'All Abilities',
  },
  {
    name: 'Private Coaching',
    days: 'By Appointment',
    time: 'Flexible',
    description:
      'One-to-one coaching tailored to your goals including beginners, fitness, competition preparation and technical improvement.',
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
