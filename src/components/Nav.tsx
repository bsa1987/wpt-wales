import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Classes', href: '#classes' },
  { label: 'Timetable', href: '#timetable' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#111111]/95 backdrop-blur-md shadow-2xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleLink('#home')}
          className="flex items-center gap-2 group"
          aria-label="WPT Wales Home"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded bg-[#C1121F] flex items-center justify-center font-heading text-white text-base sm:text-lg tracking-wider group-hover:bg-[#E10600] transition-colors">
            WPT
          </div>
          <span className="font-heading text-white text-xl sm:text-2xl tracking-widest group-hover:text-[#C1121F] transition-colors">
            WALES
          </span>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8" role="list">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <button
                onClick={() => handleLink(link.href)}
                className="text-white/80 hover:text-white font-body text-sm font-medium uppercase tracking-wider transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C1121F] group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={() => handleLink('#contact')}
            className="bg-[#C1121F] hover:bg-[#E10600] text-white font-heading text-lg tracking-widest px-6 py-2 rounded transition-all duration-200 hover:shadow-lg hover:shadow-red-900/30 active:scale-95"
          >
            BOOK FREE TRIAL
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded focus:outline-none"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } bg-[#111111]/98 backdrop-blur-md border-t border-white/5`}
      >
        <ul className="flex flex-col py-4 px-4" role="list">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <button
                onClick={() => handleLink(link.href)}
                className="w-full text-left text-white/80 hover:text-white font-body text-base font-medium uppercase tracking-wider py-3 px-2 border-b border-white/5 transition-colors last:border-0"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="mt-4">
            <button
              onClick={() => handleLink('#contact')}
              className="w-full bg-[#C1121F] hover:bg-[#E10600] text-white font-heading text-xl tracking-widest py-3 rounded transition-colors"
            >
              BOOK FREE TRIAL
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}
