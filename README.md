# 🔗 Shrinkly — Frontend

A clean, fast URL shortener UI built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. Paste a long URL, hit a button, and get a short link back instantly.

---

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [How It Works](#how-it-works)
- [Tech Stack](#tech-stack)

---

## ✅ Prerequisites

Make sure you have these installed before you begin:

| Tool | Minimum Version | Check with |
|------|----------------|------------|
| [Node.js](https://nodejs.org) | v18+ | `node -v` |
| npm | v9+ | `npm -v` |
| A running backend API | — | See your backend repo |

---

## 🚀 Getting Started

Follow these steps in order and you'll have the app running locally in under a minute.

**1. Clone the repository**
```bash
git clone https://github.com/your-org/url-shortener-frontend.git
cd url-shortener-frontend
```

**2. Install dependencies**
```bash
npm install
```

**3. Set up your environment variables**
```bash
cp .env.example .env
```
Then open `.env` and fill in your values (see [Environment Variables](#environment-variables) below).

**4. Start the development server**
```bash
npm run dev
```

The app will be running at **http://localhost:5173** — open it in your browser and you're good to go! 🎉

---

## 📁 Project Structure

```
url-shortener-frontend/
│
├── public/                 # Static assets (favicon, index.html, etc.)
│
├── src/
│   ├── components/         # Reusable UI components (input, button, result card, etc.)
│   ├── App.tsx             # Root component — wires everything together
│   └── main.tsx            # App entry point — mounts React into the DOM
│
├── .env.example            # Template for environment variables (safe to commit)
├── .env                    # Your real env config (do NOT commit this)
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build tool configuration
```

---

## 🔑 Environment Variables

Copy `.env.example` to `.env` and set the following:

```env
# The base URL of your backend API
VITE_API_BASE_URL=http://localhost:8000
```

> **Why `VITE_` prefix?** Vite only exposes environment variables that start with `VITE_` to the browser for security. Any variable without this prefix stays server-side only.

---

## 📜 Available Scripts

Run these from the project root:

| Command | What it does |
|---------|-------------|
| `npm run dev` | Starts the local development server with hot reload |
| `npm run build` | Compiles and bundles the app for production (outputs to `dist/`) |

---

## ⚙️ How It Works

Here's the full user journey from start to finish:

```
User pastes a long URL
        ↓
Form validates the input (is it actually a URL?)
        ↓
App sends POST api/create to the backend API
        ↓
Backend returns a short URL
        ↓
App displays the short URL with a Copy button
```

**Under the hood:**
- React `useState` tracks the input value, the returned short URL, and loading/error states
- A `fetch` (or `axios`) call hits your backend's `/shorten` endpoint
- While waiting for the response, a loading indicator is shown
- If something goes wrong, an error message is displayed instead

---

## 🛠️ Tech Stack

| Technology | Role |
|-----------|------|
| [React 18](https://react.dev) | UI component framework |
| [TypeScript](https://www.typescriptlang.org) | Type safety on top of JavaScript |
| [Vite](https://vitejs.dev) | Lightning-fast dev server and bundler |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first styling |

---

## 🤝 Contributing

1. Fork the repo and create a new branch: `git checkout -b feature/your-feature`
2. Make your changes and commit them: `git commit -m "Add your feature"`
3. Push to your fork: `git push origin feature/your-feature`
4. Open a Pull Request and describe what you changed

---

> **Note:** This repo is the frontend only. You'll need a running backend service for the URL shortening logic. Check the backend repository for setup instructions.
