'use client'

import { useState, useRef } from 'react'
import TextAnimation from '@/components/TextAnimation'
import LoadingAnimation from '@/components/LoadingAnimation'
import { FiPlay, FiDownload } from 'react-icons/fi'

export default function HomePage() {
  const [text, setText] = useState('')
  const [apiKey, setApiKey] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedText, setGeneratedText] = useState('')
  const [audioUrl, setAudioUrl] = useState('')
  const audioRef = useRef(null)

  const handleGenerate = async () => {
    if (!text.trim() || !apiKey) return

    setIsGenerating(true)
    setGeneratedText('')
    setAudioUrl('')

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tts/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, api_key: apiKey })
      })

      if (response.ok) {
        const generatedTextHeader = response.headers.get('X-Generated-Text')
        if (generatedTextHeader) setGeneratedText(generatedTextHeader)

        const blob = await response.blob()
        const url = URL.createObjectURL(blob)
        setAudioUrl(url)

        if (audioRef.current) {
          audioRef.current.src = url
          audioRef.current.play()
        }
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div
       
       
        className="space-y-6"
      >
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
            Burme TTS
          </h1>
          <p className="text-gray-400">AI-Powered Text to Speech with Gemini</p>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Gemini API Key</label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your Gemini API Key"
              className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Your Text</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text to convert to speech..."
              rows={4}
              className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 resize-none"
            />
          </div>

          <button
            onClick={handleGenerate}
            disabled={isGenerating || !text || !apiKey}
            className="w-full py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isGenerating ? (
              <LoadingAnimation />
            ) : (
              <>
                <FiPlay size={18} />
                Generate Speech
              </>
            )}
          </button>
        </div>

        {generatedText && (
          <div
           
           
            className="bg-gray-800 rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold mb-3">Generated Text:</h3>
            <TextAnimation text={generatedText} className="text-gray-300" />
          </div>
        )}

        {audioUrl && (
          <div
           
           
            className="bg-gray-800 rounded-xl p-6"
          >
            <audio ref={audioRef} controls className="w-full" />
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => audioRef.current?.play()}
                className="flex-1 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FiPlay size={16} /> Play
              </button>
              <button
                onClick={() => {
                  const a = document.createElement('a')
                  a.href = audioUrl
                  a.download = 'speech.mp3'
                  a.click()
                }}
                className="flex-1 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FiDownload size={16} /> Download
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}