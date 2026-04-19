import VoiceGenerator from '../components/VoiceGenerator'

export default function Home() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Text to Speech Generator</h2>
      <VoiceGenerator />
    </div>
  )
}