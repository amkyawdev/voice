import { useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import LoadingSpinner from './LoadingSpinner'
import TextAnimation from './TextAnimation'

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)

export default function VoiceGenerator() {
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [generatedAudio, setGeneratedAudio] = useState(null)
  const [statusMessage, setStatusMessage] = useState('')

  const generateSpeech = async () => {
    if (!text.trim()) return
    setLoading(true)
    setStatusMessage('Connecting to AI...')

    try {
      setStatusMessage('AI is processing your text...')
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' })
      const prompt = `Convert the following text into a natural, expressive speech script:\n\n${text}`
      const result = await model.generateContent(prompt)
      const enhancedText = result.response.text()

      setStatusMessage('Generating voice...')
      const utterance = new SpeechSynthesisUtterance(enhancedText)
      utterance.lang = 'my-MM'
      utterance.rate = 0.9
      utterance.pitch = 1.1

      speechSynthesis.cancel()
      speechSynthesis.speak(utterance)

      setGeneratedAudio('playing')
      setStatusMessage('Playing voice...')

      utterance.onend = () => {
        setLoading(false)
        setStatusMessage('')
      }
    } catch (error) {
      console.error(error)
      setStatusMessage('Error: Check API key or network')
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to convert to speech..."
        className="w-full h-32 p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
      />

      <button
        onClick={generateSpeech}
        disabled={loading || !text.trim()}
        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 rounded-lg transition flex items-center gap-2"
      >
        {loading ? <LoadingSpinner /> : '🔊 Generate Voice'}
      </button>

      {statusMessage && (
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <LoadingSpinner size="small" />
          <TextAnimation text={statusMessage} />
        </div>
      )}

      {generatedAudio === 'playing' && !loading && (
        <div className="text-green-400 text-sm">✅ Voice is playing...</div>
      )}
    </div>
  )
}