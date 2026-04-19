import { Code, Mail, Github, Twitch, Sparkles } from 'lucide-react'

export default function About() {
  const admin = {
    name: 'Aung Myo Kyaw',
    role: 'Full Stack Developer',
    email: 'amk.kyaw92@gmail.com',
    tiktok: '@amkyaw.dev',
    github: 'amkyawDev',
    huggingface: 'AmkyawDev'
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">About</h2>
      <div className="card p-6 space-y-4">
        <div className="flex items-center gap-3 pb-4 border-b border-dark-700">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
            <Code className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{admin.name}</h3>
            <p className="text-sm text-dark-400">{admin.role}</p>
          </div>
        </div>
        
        <div className="space-y-3">
          <p className="flex items-center gap-3 text-dark-300">
            <Mail className="w-4 h-4 text-primary-400" />
            {admin.email}
          </p>
          <p className="flex items-center gap-3 text-dark-300">
            <Twitch className="w-4 h-4 text-accent-400" />
            TikTok: {admin.tiktok}
          </p>
          <p className="flex items-center gap-3 text-dark-300">
            <Github className="w-4 h-4 text-dark-400" />
            GitHub: {admin.github}
          </p>
          <p className="flex items-center gap-3 text-dark-300">
            <Sparkles className="w-4 h-4 text-purple-400" />
            Hugging Face: {admin.huggingface}
          </p>
        </div>
      </div>
    </div>
  )
}