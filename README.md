
# SONAR

> Inspired by the sonic surveillance tech from *The Dark Knight*, SONAR is a real-time tech news intelligence dashboard that uses the Perplexity and Sonar APIs to track, visualize, and analyze the latest happenings in tech, finance, and global trends.

![SONAR Banner](https://raw.githubusercontent.com/itsfingerlickinggood/prompt/refs/heads/main/pics/ChatGPT%20Image%20May%2023%2C%202025%2C%2001_16_44%20AM.png)

## 🚀 Overview

**SONAR** is a one-week hackathon project designed to give users a visually rich and deeply insightful tech digest. It's a research-grade tool with intuitive UX, taking UI inspiration from Perplexity.ai and layered with charts, maps, graphs, and animated data flows.

---

## 🧠 Features

- 🔎 **Quick Tech Digest** — TL;DR of the latest tech & finance news in bite-sized updates.
- 🧭 **Trend Radar** — Track hot topics and emerging technologies.
- 🌐 **Interactive Global Heatmaps** — See where news is trending around the world.
- 📊 **Real-Time Charts & Graphs** — Visualize market moves, funding rounds, and more.
- 🎯 **Ask Anything** — Perplexity-powered smart search to get fast, sourced answers.
- 🗂️ **Newsroom Archives** — Dive deep into a topic's past updates and history.
- 🕵️ **Live Intelligence Mode** — Simulates a detective dashboard with moving nodes, sonar waves, and data pulses.

---

## 💻 Tech Stack

| Layer       | Tech                            |
|-------------|---------------------------------|
| Frontend    | Next.js, Tailwind CSS, ShadCN UI, Framer Motion |
| Backend     | Supabase, Perplexity API, Sonar API |
| Visualization | Recharts, Leaflet.js, D3.js         |
| Deployment  | Vercel                          |

---

## 🎨 UI/UX Design

Inspired by Perplexity and The Dark Knight’s sonar system:
- Dark UI theme with neon blue and electric green highlights.
- Minimalist dashboards with animated radar sweeps and glowing nodes.
- Cards with hover effects and micro-interactions.
- Typography: `IosevkaTerm Nerd Font` or `JetBrains Mono`.

**Figma Preview:** _Coming Soon_

---

## 🛠️ Setup & Installation

```bash
git clone https://github.com/yourusername/sonar.git
cd sonar
pnpm install
pnpm dev
```

Setup environment variables in a `.env.local` file:

```env
PERPLEXITY_API_KEY=your_key
SONAR_API_KEY=your_key
SUPABASE_URL=your_url
SUPABASE_KEY=your_key
```

---

## 🔮 Example Use Cases

- Founders monitoring global startup trends.
- VCs staying ahead with real-time funding alerts.
- Students getting concise daily briefings on tech.
- Reporters researching timelines and event triggers.

---

## 🧪 Future Scope

- Notifications & digest emails.
- Personalized dashboards based on user preferences.
- GPT-based summarization with voice output.
- GitHub Activity Radar.

---

## 🤝 Team

Built solo in 1 week by **Sonu Babu**.
- 🧠 Design, Code & Integration
- 🔗 https://github.com/entropy-com/sonar



---

## 🌌 Acknowledgements

- Inspired by **The Dark Knight’s** sonar surveillance concept.
- Perplexity.ai for their incredible APIs.
- Supabase for effortless backend setup.

# Next.js Tech Trends Dashboard

## 🧭 Architecture Overview

```text
                          🌐 Frontend
┌─────────────────────────────────────────────────────────────┐
│                      Next.js (App Router)                   │
│   Tailwind CSS | ShadCN UI | Framer Motion | Recharts       │
└─────────────────────┬─────────────────────┬─────────────────┘
                      │                     │
                      ▼                     ▼
             API Routes (app/api)        Components/UI
              (Route Handlers)             (Cards, Charts, Maps)

                      │
                      ▼
       External APIs & Services ⤵
  ┌──────────────────────────────────────────────────────────┐
  │  🔹 Perplexity API — smart search                        │
  │  🔹 Mapbox API — global trend maps                       │
  │  🔹 Unsplash API — visual context                        │
  └──────────────────────────────────────────────────────────┘

                      ▼
               🔄 Supabase Backend
      Auth • Realtime DB • Storage • API Logs
```

## 🗂️ Folder Structure

```text
app/
├── public/
│   └── logo.svg
├── app/
│   ├── layout.tsx                  # Global layout
│   ├── globals.css                 # Tailwind + base CSS
│   ├── page.tsx                    # Home dashboard page
│   ├── explore/page.tsx           # Explore trends page
│   ├── api/
│   │   ├── perplexity/route.ts    # Perplexity API handler
│   │   └── maps/route.ts          # Mapbox or Unsplash
│   └── components/
│       ├── Chart.tsx              # Recharts visual
│       ├── Map.tsx                # Mapbox/Leaflet map
│       ├── Card.tsx               # UI card component
│       ├── NodeGraph.tsx          # D3 graph
│       └── RadarSweep.tsx         # Radar animation
├── lib/
│   ├── supabase.ts                # Supabase client config
│   ├── api.ts                     # API request utils
│   └── constants.ts               # Static values
├── types/
│   └── index.ts                   # Shared TS types
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── .env.local
└── README.md
```

## ⚙️ Setup

```bash
pnpm install
pnpm dev
```

---

- **Next.js (App Router)** for routing
- **Tailwind + ShadCN** for fast UI
- **Supabase** for backend & realtime
- **Perplexity + Mapbox + Unsplash** for live data
- **Recharts + D3 + Leaflet** for visualizations
