# WPT Wales

A premium Muay Thai, Kickboxing & Fitness website for WPT Wales, Swansea.

## Stack

- **Frontend**: React + TypeScript + Vite + Tailwind CSS
- **Backend**: Express (Node.js)
- **Email**: Resend

## Local Development

```bash
npm install
cp .env.example .env
# Add your RESEND_API_KEY to .env
npm run dev
```

## Production Build

```bash
npm run build
npm start
```

## Railway Deployment

1. Push to GitHub
2. Connect to Railway
3. Add environment variables:
   - `RESEND_API_KEY` — your Resend API key
   - `OWNER_EMAIL` — email to receive enquiries (default: wptmuaythaiandfitness@gmail.com)
4. Railway auto-detects Node.js and runs `npm run build` then `npm start`

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | Yes | Resend API key for email sending |
| `OWNER_EMAIL` | No | Owner notification email (defaults to wptmuaythaiandfitness@gmail.com) |
| `PORT` | No | Server port (Railway sets this automatically) |
