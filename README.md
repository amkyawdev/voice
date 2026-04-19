<!-- markdownlint-disable -->

<div align="center">

![Burme TTS](https://img.shields.io/badge/Burme-TTS-FF6B6B?style=for-the-badge&logo=speech&logoColor=white)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![License](https://img.shields.io/badge/License-MIT-4CAF50?style=flat-square)](LICENSE)
[![Stars](https://img.shields.io/github/stars/amkyawdev/voice?style=for-the-badge)](https://github.com/amkyawdev/voice/stargazers)

# 🗣️ Burme TTS

### AI-Powered Burmese Text-to-Speech Application

Convert text to natural Burmese speech using Google Gemini AI and Web Speech API.

[Features](#-features) • [Tech Stack](#-tech-stack) • [Quick Start](#-quick-start) • [Deploy](#-deploy) • [License](#-license)

</div>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🧠 **AI-Powered** | Gemini AI enhances text before converting to speech |
| 🎙️ **Natural Voice** | Web Speech API for Burmese language support |
| ✨ **Smooth Animations** | Polished UI with Framer Motion |
| 📱 **Responsive** | Works on desktop and mobile devices |
| 🌙 **Dark Theme** | Modern gray and black color scheme |
| 🚀 **Vercel Ready** | Deploy instantly with zero configuration |

---

## 🛠️ Tech Stack

```txt
┌─────────────┬────────────────────────────────────┐
│   Frontend  │  React 18 + Vite + Tailwind CSS   │
├─────────────┼────────────────────────────────────┤
│   Animation│  Framer Motion                    │
├─────────────┼────────────────────────────────────┤
│    Icons   │  Lucide React                     │
├─────────────┼────────────────────────────────────┤
│     AI    │  Google Gemini AI                │
├─────────────┼────────────────────────────────────┤
│    TTS    │  Web Speech API                │
├─────────────┼────────────────────────────────────┤
│  Deploy   │  Vercel                       │
└─────────────┴────────────────────────────────────┘
```

---

## 🚀 Quick Start

### 1. Clone

```bash
git clone https://github.com/amkyawdev/voice.git
cd voice
```

### 2. Install

```bash
npm install
```

### 3. Environment

Create `.env`:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

### 4. Run

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## 🌐 Deploy to Vercel

### Option 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/amkyawdev/voice)

### Option 2: Manual

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_GEMINI_API_KEY` | Your Google Gemini API key |

---

## 📁 Project Structure

```
voice/
├── src/
│   ├── components/
│   │   ├── Header.jsx         # Navigation header with hamburger menu
│   │   ├── Sidebar.jsx       # Side navigation
│   │   ├── VoiceGenerator.jsx # Main TTS component
│   │   ├── TextAnimation.jsx # Animated text
│   │   └── LoadingSpinner.jsx
│   ├── pages/
│   │   ├── Home.jsx         # Main TTS page
│   │   ├── Docs.jsx        # Documentation
│   │   ├── About.jsx       # Developer info
│   │   └── Index.jsx      # Features index
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css         # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── .gitignore
```

---

## 📱 Pages

| Page | Route | Description |
|------|-------|-------------|
| 🏠 Home | `/` | Text-to-speech generator |
| 📋 Index | `/index` | Features list |
| 📖 Docs | `/docs` | Usage documentation |
| ℹ️ About | `/about` | Developer info |

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a [Pull Request](https://github.com/amkyawdev/voice/pulls).

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Developer

<div align="center">

| | |
|:---:|:---|
| **Name** | **Aung Myo Kyaw** |
| **Role** | Full Stack Developer |
| **Email** | [amk.kyaw92@gmail.com](mailto:amk.kyaw92@gmail.com) |
| **GitHub** | [@amkyawdev](https://github.com/amkyawdev) |
| **TikTok** | [@amkyaw.dev](https://tiktok.com/@amkyaw.dev) |
| **Hugging Face** | [AmkyawDev](https://huggingface.co/AmkyawDev) |

</div>

---

<p align="center">
  Made with ❤️ using React + Vite
</p>

<!-- markdownlint-enable -->