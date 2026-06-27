import { useState } from 'react'
import { useScrollFade } from '../hooks/useScrollFade'

const REVIEWS = [
  {
    name: 'Sarah M.',
    rating: 5,
    text: 'Absolutely love WPT Wales! I joined as a complete beginner with zero confidence and now I train 3 times a week. David and Ashleigh are amazing coaches — patient, encouraging and knowledgeable. Highly recommend to anyone thinking about giving it a try!',
    date: 'Google Review',
  },
  {
    name: 'James R.',
    rating: 5,
    text: 'My son has been coming to Kids Muay Thai for 6 months and the transformation has been incredible. He\'s more focused, confident and disciplined both at the gym and at school. The coaches are fantastic with the kids — firm but fun. 10/10.',
    date: 'Google Review',
  },
  {
    name: 'Emma L.',
    rating: 5,
    text: 'Thai Fitness Blast is the best class in Swansea. I\'ve tried loads of gyms and nothing compares to the energy here. Lost over a stone in 8 weeks and I actually look forward to training. The community is so welcoming — don\'t hesitate, just book your trial!',
    date: 'Google Review',
  },
  {
    name: 'Tom C.',
    rating: 5,
    text: 'I\'ve trained Muay Thai at gyms across the UK and WPT Wales is genuinely world-class coaching in a great atmosphere. David\'s technical knowledge is exceptional and the standard of teaching is higher than gyms I\'ve paid double for. Proud to be a member.',
    date: 'Google Review',
  },
  {
    name: 'Rebecca W.',
    rating: 5,
    text: 'As a woman who was nervous about joining a martial arts gym, I cannot recommend WPT Wales highly enough. From my very first trial class I felt safe, welcome and valued. Ashleigh is an incredible role model and coach. This place has changed my life.',
    date: 'Google Review',
  },
  {
    name: 'Mark P.',
    rating: 5,
    text: 'Started the one-to-one sessions with David to prepare for my first fight and the improvement in my technique and ring IQ has been massive. Professional, structured and genuinely invested in my progress. Worth every penny.',
    date: 'Google Review',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  const { ref, visible } = useScrollFade()
  const [index, setIndex] = useState(0)

  const prev = () => setIndex(i => (i - 1 + REVIEWS.length) % REVIEWS.length)
  const next = () => setIndex(i => (i + 1) % REVIEWS.length)

  const VISIBLE = 3
  const visibleReviews = Array.from({ length: VISIBLE }, (_, i) => REVIEWS[(index + i) % REVIEWS.length])

  return (
    <section id="reviews" className="py-24 lg:py-32 bg-[#111111] relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`fade-in-section ${visible ? 'visible' : ''} text-center mb-16`}>
          <p className="text-[#C1121F] font-heading text-lg tracking-widest mb-3 uppercase">What Our Members Say</p>
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white tracking-widest leading-none mb-4">
            REVIEWS
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-4" />
          <div className="flex items-center justify-center gap-2">
            <Stars count={5} />
            <span className="text-white/60 text-sm ml-1">5.0 on Google</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {visibleReviews.map((review, i) => (
            <article
              key={`${review.name}-${i}`}
              className="glass border border-white/5 rounded-2xl p-7 flex flex-col transition-all duration-500"
            >
              <Stars count={review.rating} />
              <blockquote className="text-white/70 text-sm leading-relaxed mt-4 flex-1">
                "{review.text}"
              </blockquote>
              <footer className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="w-9 h-9 rounded-full bg-[#C1121F]/20 border border-[#C1121F]/30 flex items-center justify-center">
                  <span className="text-[#C1121F] font-heading text-base">{review.name[0]}</span>
                </div>
                <div>
                  <cite className="text-white text-sm font-medium not-italic">{review.name}</cite>
                  <div className="text-white/40 text-xs">{review.date}</div>
                </div>
                {/* Google logo-ish indicator */}
                <div className="ml-auto">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              </footer>
            </article>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#C1121F] hover:text-[#C1121F] transition-colors"
            aria-label="Previous reviews"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-2" role="tablist" aria-label="Review pagination">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                role="tab"
                aria-selected={i === index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === index ? 'bg-[#C1121F] w-6' : 'bg-white/20 hover:bg-white/40'}`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#C1121F] hover:text-[#C1121F] transition-colors"
            aria-label="Next reviews"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  )
}
