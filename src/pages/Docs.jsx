import { BookOpen, Zap, Globe, Sparkles } from 'lucide-react'

export default function Docs() {
  const features = [
    { icon: Zap, title: 'AI Enhancement', desc: 'Gemini AI enhances text before converting to speech', color: 'text-primary-400' },
    { icon: Globe, title: 'Multi Language', desc: 'Supports Burmese and English languages', color: 'text-accent-400' },
    { icon: Sparkles, title: 'Smooth Animations', desc: 'Beautiful UI powered by Framer Motion', color: 'text-purple-400' }
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
        Documentation
      </h2>
      <div className="card p-6 space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-5 h-5 text-accent-400" />
            <h3 className="text-xl font-semibold text-white">Usage</h3>
          </div>
          <p className="text-dark-300 pl-7">Enter text in the box, click generate, and AI will convert it to speech.</p>
        </div>
        
        <div className="grid gap-4 pt-4">
          {features.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="flex items-start gap-3 p-3 rounded-lg bg-dark-800/50">
              <Icon className={`${color} w-5 h-5 mt-0.5`} />
              <div>
                <h4 className="font-medium text-white">{title}</h4>
                <p className="text-sm text-dark-400">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}