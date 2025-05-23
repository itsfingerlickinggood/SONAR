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
