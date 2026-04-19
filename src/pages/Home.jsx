import VoiceGenerator from '../components/VoiceGenerator'
import { Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="card p-6">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="w-6 h-6 text-accent-400" />
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
            Text to Speech Generator
          </h2>
        </div>
        <VoiceGenerator />
      </div>
    </div>
  )
}