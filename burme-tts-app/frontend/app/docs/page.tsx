'use client'

import { motion } from 'framer-motion'

export default function DocsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <h1 className="text-3xl font-bold">Documentation</h1>

        <div className="bg-gray-800 rounded-xl p-6 space-y-4">
          <h2 className="text-xl font-semibold">Usage</h2>
          <p className="text-gray-300">
            Burme TTS App uses Google's Gemini AI to generate natural-sounding speech from text.
          </p>

          <h3 className="text-lg font-semibold mt-4">How to use:</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>Enter your Gemini API key</li>
            <li>Type or paste your text</li>
            <li>Click "Generate Speech"</li>
            <li>Listen or download the generated audio</li>
          </ol>

          <h3 className="text-lg font-semibold mt-4">Purpose of Construction</h3>
          <p className="text-gray-300">
            This application was built to demonstrate the integration of Google's Gemini AI with text-to-speech technology,
            providing an accessible way to convert written content into natural-sounding speech for various applications
            including accessibility tools, content creation, and language learning.
          </p>

          <h3 className="text-lg font-semibold mt-4">API Endpoints</h3>
          <div className="bg-gray-900 rounded-lg p-4 space-y-2">
            <code className="block text-sm text-gray-300">POST /api/tts/generate - Generate speech from text</code>
            <code className="block text-sm text-gray-300">POST /api/gemini/generate - Generate text using Gemini</code>
            <code className="block text-sm text-gray-300">GET /api/health - Health check endpoint</code>
          </div>
        </div>
      </motion.div>
    </div>
  )
}