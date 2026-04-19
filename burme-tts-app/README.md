# Burme TTS App

AI-Powered Text to Speech with Gemini

## Project Structure

```
burme-tts-app/
├── frontend/                 # Next.js frontend
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx         # Main TTS page
│   │   ├── docs/
│   │   │   └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── HamburgerMenu.tsx
│   │   ├── TextAnimation.tsx
│   │   ├── LoadingAnimation.tsx
│   │   ├── VoiceSelector.tsx
│   │   └── GeneratorButton.tsx
│   ├── lib/
│   │   └── api.ts
│   ├── package.json
│   └── next.config.js
├── backend/                  # Python backend
│   ├── main.py
│   ├── tts_engine.py
│   ├── requirements.txt
│   └── vercel.json
└── README.md
```

## Quick Start

### Backend (FastAPI)

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

### Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

## Deployment

Deploy to Vercel - see documentation in project files.