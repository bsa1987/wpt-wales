import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import { Resend } from 'resend'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, '../dist')))

const resend = new Resend(process.env.RESEND_API_KEY)
const OWNER_EMAIL = process.env.OWNER_EMAIL || 'wptmuaythaiandfitness@gmail.com'

function validateEnquiry(body) {
  const { name, phone, email, service, message } = body
  const errors = []
  if (!name || name.trim().length < 2) errors.push('Name must be at least 2 characters.')
  if (!phone || phone.trim().length < 7) errors.push('A valid phone number is required.')
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('A valid email address is required.')
  if (!service || service.trim().length === 0) errors.push('Please select a service.')
  if (!message || message.trim().length < 10) errors.push('Message must be at least 10 characters.')
  return errors
}

app.post('/api/enquiry', async (req, res) => {
  const errors = validateEnquiry(req.body)
  if (errors.length > 0) {
    return res.status(400).json({ success: false, errors })
  }

  const { name, phone, email, service, message } = req.body

  try {
    await resend.emails.send({
      from: 'WPT Wales Enquiries <noreply@wptwales.co.uk>',
      to: OWNER_EMAIL,
      replyTo: email,
      subject: `New Enquiry: ${service} – ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #111111; color: #ffffff; padding: 32px; border-radius: 8px;">
          <div style="border-bottom: 2px solid #C1121F; padding-bottom: 16px; margin-bottom: 24px;">
            <h1 style="font-size: 24px; margin: 0; color: #ffffff;">New Enquiry – WPT Wales</h1>
          </div>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #D4AF37; font-weight: bold; width: 120px;">Name</td><td style="padding: 8px 0; color: #ffffff;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #D4AF37; font-weight: bold;">Phone</td><td style="padding: 8px 0; color: #ffffff;">${phone}</td></tr>
            <tr><td style="padding: 8px 0; color: #D4AF37; font-weight: bold;">Email</td><td style="padding: 8px 0; color: #ffffff;">${email}</td></tr>
            <tr><td style="padding: 8px 0; color: #D4AF37; font-weight: bold;">Service</td><td style="padding: 8px 0; color: #ffffff;">${service}</td></tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #1B1B1B; border-radius: 6px; border-left: 3px solid #C1121F;">
            <p style="color: #D4AF37; font-weight: bold; margin: 0 0 8px;">Message</p>
            <p style="color: #ffffff; margin: 0; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="margin-top: 24px; color: #666; font-size: 12px;">Reply to this email to respond directly to ${name}.</p>
        </div>
      `,
    })

    await resend.emails.send({
      from: 'WPT Wales <noreply@wptwales.co.uk>',
      to: email,
      subject: 'Thanks for your enquiry – WPT Wales',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #111111; color: #ffffff; padding: 32px; border-radius: 8px;">
          <div style="border-bottom: 2px solid #C1121F; padding-bottom: 16px; margin-bottom: 24px;">
            <h1 style="font-size: 24px; margin: 0; color: #ffffff;">Thanks, ${name}!</h1>
          </div>
          <p style="color: #cccccc; line-height: 1.6;">We've received your enquiry about <strong style="color: #ffffff;">${service}</strong> and will be in touch shortly.</p>
          <p style="color: #cccccc; line-height: 1.6;">In the meantime, feel free to WhatsApp us at <a href="https://wa.me/447966511771" style="color: #C1121F;">07966 511771</a> or follow us on social media for updates.</p>
          <div style="margin-top: 32px; padding: 20px; background: #1B1B1B; border-radius: 6px; border-left: 3px solid #D4AF37;">
            <p style="color: #D4AF37; font-weight: bold; margin: 0 0 8px;">WPT Wales</p>
            <p style="color: #cccccc; margin: 0; font-size: 14px;">Weavers Yard, Approach Road, Manselton, Swansea, SA5 8NL</p>
            <p style="color: #cccccc; margin: 4px 0 0; font-size: 14px;">07966 511771 | wptmuaythaiandfitness@gmail.com</p>
          </div>
        </div>
      `,
    })

    res.json({ success: true, message: 'Enquiry sent successfully.' })
  } catch (err) {
    console.error('Email send error:', err)
    res.status(500).json({ success: false, errors: ['Failed to send enquiry. Please try again or contact us directly.'] })
  }
})

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.listen(PORT, () => {
  console.log(`WPT Wales server running on port ${PORT}`)
})
