import { useScrollFade } from '../hooks/useScrollFade'

const IMAGES = [
  {
    src: 'https://images.pexels.com/photos/7045557/pexels-photo-7045557.jpeg?auto=compress&cs=tinysrgb&w=800&q=70',
    alt: 'Muay Thai fighter training',
  },
  {
    src: 'https://images.pexels.com/photos/7045409/pexels-photo-7045409.jpeg?auto=compress&cs=tinysrgb&w=800&q=70',
    alt: 'Training session at WPT Wales',
  },
  {
    src: 'https://images.pexels.com/photos/6295855/pexels-photo-6295855.jpeg?auto=compress&cs=tinysrgb&w=800&q=70',
    alt: 'Kickboxing fitness class',
  },
  {
    src: 'https://images.pexels.com/photos/8612013/pexels-photo-8612013.jpeg?auto=compress&cs=tinysrgb&w=800&q=70',
    alt: 'Kids martial arts class',
  },
  {
    src: 'https://images.pexels.com/photos/6295859/pexels-photo-6295859.jpeg?auto=compress&cs=tinysrgb&w=800&q=70',
    alt: 'One-to-one coaching session',
  },
  {
    src: 'https://images.pexels.com/photos/4753885/pexels-photo-4753885.jpeg?auto=compress&cs=tinysrgb&w=800&q=70',
    alt: 'Martial arts sparring',
  },
  {
    src: 'https://images.pexels.com/photos/6339321/pexels-photo-6339321.jpeg?auto=compress&cs=tinysrgb&w=800&q=70',
    alt: 'Boxing training',
  },
  {
    src: 'https://images.pexels.com/photos/4761779/pexels-photo-4761779.jpeg?auto=compress&cs=tinysrgb&w=800&q=70',
    alt: 'Fitness training',
  },
]

export default function Gallery() {
  const { ref, visible } = useScrollFade()

  // Duplicate for seamless loop
  const allImages = [...IMAGES, ...IMAGES]

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-[#111111] relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div ref={ref} className={`fade-in-section ${visible ? 'visible' : ''} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12`}>
        <p className="text-[#C1121F] font-heading text-lg tracking-widest mb-3 uppercase text-center">Inside the Gym</p>
        <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white tracking-widest leading-none text-center mb-4">
          GALLERY
        </h2>
        <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto" />
      </div>

      {/* Infinite scroll track */}
      <div className="relative w-full overflow-hidden" role="region" aria-label="Gallery of training images">
        <div
          className="flex gap-4 gallery-track"
          style={{
            width: 'max-content',
            animation: 'scrollLeft 40s linear infinite',
          }}
        >
          {allImages.map((img, i) => (
            <div
              key={i}
              className="relative w-72 sm:w-80 h-52 sm:h-60 rounded-xl overflow-hidden flex-shrink-0 group border border-white/5"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Edge fade gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#111111] to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#111111] to-transparent pointer-events-none z-10" />
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  )
}
