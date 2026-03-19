# Amaljosh Maadhav J Portfolio

Modern single-page AI developer portfolio built with `React + Vite`, `Tailwind CSS`, `Framer Motion`, `GSAP`, `Three.js`, and a `Node.js + Nodemailer` contact backend.

## Features

- Single landing page with scroll-aware navbar highlighting
- Three.js animated background
- Responsive About, Education, Skills, Certifications, Projects, and Contact sections
- GitHub contribution panel
- Contact form backed by Node.js and Nodemailer

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- GSAP + ScrollTrigger
- Three.js
- Express
- Nodemailer

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Create a local `.env` file in the project root and copy the contents of [.env.example](C:/Users/admin/Portfolio/.env.example).

3. Fill in your actual mail settings:

```env
PORT=3001
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-google-app-password
MAIL_TO=amal018josephmathi@gmail.com
MAIL_FROM=your-email@gmail.com
```

4. Start the app:

```bash
npm run dev
```

This runs:
- the Vite frontend on `http://localhost:5173`
- the Express mail server on `http://localhost:3001`

## Gmail Setup

If you use Gmail with Nodemailer:

1. Enable `2-Step Verification` in your Google account.
2. Create a Google `App Password`.
3. Use that app password as `SMTP_PASS`.
4. Do not use your normal Gmail password in `.env`.

## Security Notes

- `.env` is ignored by Git and should never be committed.
- `.env.example` contains placeholders only and is safe to commit.
- If a real app password was ever pasted into a tracked file, revoke it in Google and create a new one.

## Build

```bash
npm run build
```

## Project Structure

- [src](C:/Users/admin/Portfolio/src)
- [server.js](C:/Users/admin/Portfolio/server.js)
- [vite.config.js](C:/Users/admin/Portfolio/vite.config.js)
- [.env.example](C:/Users/admin/Portfolio/.env.example)
