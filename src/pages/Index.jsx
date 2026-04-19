import { Zap, Sparkles, Globe, Mic } from 'lucide-react'

export default function IndexPage() {
  const features = [
    { icon: Mic, title: 'AI Voice', desc: 'Gemini AI enhances text for natural speech', color: 'text-primary-400' },
    { icon: Sparkles, title: 'Smooth Animations', desc: 'Powered by Framer Motion', color: 'text-accent-400' },
    { icon: Globe, title: 'Multi Language', desc: 'Burmese & English support', color: 'text-purple-400' },
    { icon: Zap, title: 'Fast & Easy', desc: 'Client-side TTS, no backend needed', color: 'text-yellow-400' }
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Index</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {features.map(({ icon: Icon, title, desc, color }) => (
          <div key={title} className="card p-4 flex items-center gap-4">
            <div className={`p-3 rounded-xl bg-dark-800 ${color}`}>
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-white">{title}</h3>
              <p className="text-sm text-dark-400">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}