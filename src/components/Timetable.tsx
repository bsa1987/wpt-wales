import { useState } from 'react'
import { useScrollFade } from '../hooks/useScrollFade'

const SCHEDULE = [
  {
    day: 'Monday',
    classes: [
      { time: '6:00pm–7:00pm', name: 'Kids Muay Thai', type: 'kids', ages: 'Ages 4–13' },
      { time: '7:15pm–8:30pm', name: 'Adults Muay Thai', type: 'adults', ages: 'All levels' },
    ],
  },
  {
    day: 'Tuesday',
    classes: [
      { time: '6:15pm–7:15pm', name: 'Thai Fitness Blast', type: 'fitness', ages: 'All abilities' },
    ],
  },
  {
    day: 'Wednesday',
    classes: [
      { time: '6:00pm–7:00pm', name: 'Kids Muay Thai', type: 'kids', ages: 'Ages 4–13' },
      { time: '7:15pm–8:30pm', name: 'Adults Muay Thai', type: 'adults', ages: 'All levels' },
    ],
  },
  {
    day: 'Thursday',
    classes: [
      { time: '6:15pm–7:15pm', name: 'Thai Fitness Blast', type: 'fitness', ages: 'All abilities' },
    ],
  },
  {
    day: 'Friday',
    classes: [],
  },
  {
    day: 'Saturday',
    classes: [],
  },
  {
    day: 'Sunday',
    classes: [],
  },
]

const TYPE_STYLES: Record<string, string> = {
  kids: 'bg-blue-900/30 border-blue-500/30 text-blue-300',
  adults: 'bg-[#C1121F]/20 border-[#C1121F]/30 text-red-300',
  fitness: 'bg-emerald-900/30 border-emerald-500/30 text-emerald-300',
}

export default function Timetable() {
  const { ref, visible } = useScrollFade()
  const [openDay, setOpenDay] = useState<string | null>(null)

  return (
    <section id="timetable" className="py-24 lg:py-32 bg-[#1B1B1B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`fade-in-section ${visible ? 'visible' : ''} text-center mb-16`}>
          <p className="text-[#C1121F] font-heading text-lg tracking-widest mb-3 uppercase">Weekly Schedule</p>
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white tracking-widest leading-none mb-4">
            CLASS TIMETABLE
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto" />
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          {[
            { type: 'kids', label: 'Kids Muay Thai' },
            { type: 'adults', label: 'Adults Muay Thai' },
            { type: 'fitness', label: 'Thai Fitness Blast' },
          ].map(({ type, label }) => (
            <div key={type} className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium ${TYPE_STYLES[type]}`}>
              <span className="w-2 h-2 rounded-full bg-current" />
              {label}
            </div>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-7 gap-3">
          {SCHEDULE.map(({ day, classes }) => (
            <div key={day} className="bg-[#111111] border border-white/5 rounded-xl overflow-hidden">
              <div className="bg-[#C1121F]/10 border-b border-white/5 py-3 text-center">
                <span className="font-heading text-white text-xl tracking-widest">{day.slice(0, 3).toUpperCase()}</span>
              </div>
              <div className="p-3 space-y-2 min-h-[140px]">
                {classes.length === 0 ? (
                  <div className="flex items-center justify-center h-full min-h-[100px]">
                    <span className="text-white/20 text-xs text-center">Rest Day</span>
                  </div>
                ) : (
                  classes.map(cls => (
                    <div key={cls.name} className={`border rounded-lg p-2 text-center ${TYPE_STYLES[cls.type]}`}>
                      <div className="font-heading text-sm tracking-wider leading-tight mb-0.5">{cls.name}</div>
                      <div className="text-xs opacity-80">{cls.time}</div>
                      <div className="text-xs opacity-60 mt-0.5">{cls.ages}</div>
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden space-y-3">
          {SCHEDULE.filter(d => d.classes.length > 0).map(({ day, classes }) => (
            <div key={day} className="bg-[#111111] border border-white/5 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenDay(openDay === day ? null : day)}
                className="w-full flex items-center justify-between px-5 py-4"
                aria-expanded={openDay === day}
              >
                <span className="font-heading text-white text-2xl tracking-widest">{day}</span>
                <div className="flex items-center gap-3">
                  <span className="text-white/40 text-sm">{classes.length} class{classes.length !== 1 ? 'es' : ''}</span>
                  <svg
                    className={`w-5 h-5 text-[#C1121F] transition-transform duration-300 ${openDay === day ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openDay === day ? 'max-h-64' : 'max-h-0'}`}>
                <div className="px-5 pb-4 space-y-3">
                  {classes.map(cls => (
                    <div key={cls.name} className={`border rounded-xl p-4 ${TYPE_STYLES[cls.type]}`}>
                      <div className="font-heading text-lg tracking-wider">{cls.name}</div>
                      <div className="text-sm opacity-80">{cls.time}</div>
                      <div className="text-xs opacity-60">{cls.ages}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#C1121F] hover:bg-[#E10600] text-white font-heading text-xl tracking-widest px-10 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-red-900/30"
          >
            BOOK FREE TRIAL
          </button>
        </div>
      </div>
    </section>
  )
}
