import { useState } from 'react'
import { useScrollFade } from '../hooks/useScrollFade'

const SERVICES = [
  'General Enquiry',
  'Kids Muay Thai',
  'Adults Muay Thai',
  'Thai Fitness Blast',
  'One-to-One Coaching',
  'Free Trial',
]

interface FormState {
  name: string
  phone: string
  email: string
  service: string
  message: string
}

const INITIAL: FormState = {
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
}

export default function EnquiryForm({ defaultService = '' }: { defaultService?: string }) {
  const [form, setForm] = useState<FormState>({ ...INITIAL, service: defaultService })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<string[]>([])

  const set = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [key]: e.target.value }))
    setErrors([])
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrors([])

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setForm(INITIAL)
      } else {
        setStatus('error')
        setErrors(data.errors || ['Something went wrong. Please try again.'])
      }
    } catch {
      setStatus('error')
      setErrors(['Network error. Please check your connection and try again.'])
    }
  }

  const inputClass = 'w-full bg-[#1B1B1B] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#C1121F] focus:ring-1 focus:ring-[#C1121F] transition-colors text-sm'
  const labelClass = 'block text-white/70 text-xs uppercase tracking-widest mb-1.5 font-medium'

  if (status === 'success') {
    return (
      <div className="text-center py-12 px-6">
        <div className="w-16 h-16 rounded-full bg-[#C1121F]/20 border-2 border-[#C1121F] flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-[#C1121F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading text-3xl text-white tracking-widest mb-3">ENQUIRY SENT!</h3>
        <p className="text-white/60 text-sm leading-relaxed mb-6">Thanks! We've received your enquiry and will be in touch shortly. Check your inbox for a confirmation email.</p>
        <button
          onClick={() => setStatus('idle')}
          className="text-[#C1121F] text-sm underline hover:text-[#E10600] transition-colors"
        >
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={submit} noValidate>
      {errors.length > 0 && (
        <div className="mb-5 p-4 bg-[#C1121F]/10 border border-[#C1121F]/30 rounded-xl">
          {errors.map((err, i) => (
            <p key={i} className="text-[#C1121F] text-sm">{err}</p>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="enquiry-name" className={labelClass}>Full Name *</label>
          <input
            id="enquiry-name"
            type="text"
            className={inputClass}
            placeholder="Your full name"
            value={form.name}
            onChange={set('name')}
            required
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="enquiry-phone" className={labelClass}>Phone Number *</label>
          <input
            id="enquiry-phone"
            type="tel"
            className={inputClass}
            placeholder="07xxx xxxxxx"
            value={form.phone}
            onChange={set('phone')}
            required
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="enquiry-email" className={labelClass}>Email Address *</label>
        <input
          id="enquiry-email"
          type="email"
          className={inputClass}
          placeholder="your@email.com"
          value={form.email}
          onChange={set('email')}
          required
          autoComplete="email"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="enquiry-service" className={labelClass}>I'm Interested In *</label>
        <select
          id="enquiry-service"
          className={`${inputClass} cursor-pointer`}
          value={form.service}
          onChange={set('service')}
          required
        >
          <option value="" disabled>Select a service...</option>
          {SERVICES.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="enquiry-message" className={labelClass}>Your Message *</label>
        <textarea
          id="enquiry-message"
          className={`${inputClass} resize-none`}
          rows={4}
          placeholder="Tell us about your goals, experience, questions..."
          value={form.message}
          onChange={set('message')}
          required
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-[#C1121F] hover:bg-[#E10600] disabled:opacity-60 disabled:cursor-not-allowed text-white font-heading text-xl tracking-widest py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-red-900/30 active:scale-[0.99]"
      >
        {status === 'loading' ? 'SENDING...' : 'SEND ENQUIRY'}
      </button>

      <p className="text-center text-white/30 text-xs mt-4">
        We'll respond within 24 hours. No spam, ever.
      </p>
    </form>
  )
}
