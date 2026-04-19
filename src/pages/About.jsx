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
      <h2 className="text-2xl font-bold">About</h2>
      <div className="bg-gray-800 p-4 rounded-lg space-y-2">
        <p><strong>App:</strong> Burme TTS v1.0</p>
        <p><strong>Admin:</strong> {admin.name} ({admin.role})</p>
        <p>📧 {admin.email}</p>
        <p>📱 TikTok: {admin.tiktok}</p>
        <p>🐙 GitHub: {admin.github}</p>
        <p>🤗 Hugging Face: {admin.huggingface}</p>
      </div>
    </div>
  )
}