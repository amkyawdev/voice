# Burme TTS App

<p align="center">
  <a href="https://github.com/amkyawDev/voice">
    <img src="https://img.shields.io/github/license/amkyawdev/voice?style=for-the-badge" alt="License">
  </a>
  <a href="https://github.com/amkyawdev/voice">
    <img src="https://img.shields.io/github/stars/amkyawdev/voice?style=for-the-badge" alt="Stars">
  </a>
  <a href="https://github.com/amkyawdev/voice">
    <img src="https://img.shields.io/github/forks/amkyawdev/voice?style=for-the-badge" alt="Forks">
  </a>
  <a href="https://github.com/amkyawdev/voice">
    <img src="https://img.shields.io/github/v/release/amkyawdev/voice?include_prereleases&style=for-the-badge" alt="Release">
  </a>
</p>

<p align="center">
  <strong>AI-Powered Text-to-Speech Application</strong><br>
  Built with Next.js, FastAPI, and Google Gemini AI
</p>

---

## ✨ Features

- **AI-Powered Speech Generation** - Convert text to natural-sounding speech using Google's Gemini AI
- **Real-time Audio Preview** - Listen to generated speech instantly
- **Download Support** - Save audio files for offline use
- **Smooth Animations** - Polished UI with Framer Motion animations
- **Responsive Design** - Works on desktop and mobile devices
- **Dark Theme** - Modern gray and black color scheme

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend** | Next.js 14, React, Tailwind CSS, Framer Motion |
| **Backend** | FastAPI, Python |
| **AI** | Google Gemini AI |
| **TTS** | gTTS (Google Text-to-Speech) |
| **Deployment** | Vercel |

---

## 📋 Prerequisites

- Node.js 18+ 
- Python 3.9+
- Google Gemini API Key

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/amkyawdev/voice.git
cd voice
```

### 2. Backend Setup

```bash
cd burme-tts-app/backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # Linux/Mac
# venv\Scripts\activate   # Windows

# Install dependencies
pip install -r requirements.txt

# Run the backend server
uvicorn main:app --reload --port 8000
```

### 3. Frontend Setup

```bash
cd burme-tts-app/frontend

# Install dependencies
npm install

# Run development server
npm run dev
```

### 4. Open in Browser

Navigate to `http://localhost:3000` to view the application.

---

## ⚙️ Environment Variables

### Backend

Create a `.env` file in the backend directory:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### Frontend

Create a `.env.local` file in the frontend directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

---

## 📁 Project Structure

```
burme-tts-app/
├── frontend/                 # Next.js frontend
│   ├── app/
│   │   ├── page.tsx         # Main TTS page
│   │   ├── docs/           # Documentation
│   │   └── about/          # About page
│   ├── components/         # React components
│   └── lib/               # API utilities
├── backend/                # FastAPI backend
│   ├── main.py            # API endpoints
│   └── requirements.txt  # Python dependencies
└── README.md             # This file
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/tts/generate` | Generate speech from text |
| `POST` | `/api/gemini/generate` | Generate text using Gemini |
| `GET` | `/api/health` | Health check |

### Example Request

```bash
curl -X POST http://localhost:8000/api/tts/generate \
  -H "Content-Type: application/json" \
  -d '{"text": "Hello world!", "api_key": "your_api_key"}'
```

---

## 🌐 Deployment

### Deploy Backend to Vercel

```bash
cd burme-tts-app/backend
vercel --prod
```

### Deploy Frontend to Vercel

```bash
cd burme-tts-app/frontend
vercel --prod
```

---

## 📱 Screenshots

| Home Page | Docs | About |
|----------|------|-------|
| Main TTS interface with API key input and text area | Usage instructions and API documentation | Developer information |

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a [Pull Request](https://github.com/amkyawdev/voice/pulls).

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Developer

| | |
|---|---|
| **Name** | Aung Myo Kyaw |
| **Role** | Full Stack Developer |
| **Email** | amk.kyaw92@gmail.com |
| **GitHub** | [amkyawDev](https://github.com/amkyawdev) |
| **TikTok** | [@amkyaw.dev](https://tiktok.com/@amkyaw.dev) |
| **Hugging Face** | [AmkyawDev](https://huggingface.co/AmkyawDev) |

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/amkyawdev">Aung Myo Kyaw</a>
</p>