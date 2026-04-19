'use client'


import { FaTiktok } from 'react-icons/fa'
import { FiMail, FiGithub, FiUser, FiCode } from 'react-icons/fi'

export default function AboutPage() {
  const adminInfo = {
    name: 'Aung Myo Kyaw',
    role: 'Full Stock Developer',
    email: 'amk.kyaw92@gmail.com',
    tiktok: '@amkyaw.dev',
    github: 'amkyawDev',
    huggingface: 'AmkyawDev'
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div
       
       
        className="space-y-6"
      >
        <h1 className="text-3xl font-bold">About</h1>

        <div className="bg-gray-800 rounded-xl p-6 space-y-4">
          <h2 className="text-xl font-semibold">App Information</h2>
          <p className="text-gray-300">
            Burme TTS App is a cutting-edge text-to-speech application powered by Google's Gemini AI.
            It provides high-quality, natural-sounding speech generation with smooth animations and an intuitive interface.
          </p>
          <p className="text-gray-300">
            Version: 1.0.0 | Built with Next.js, FastAPI, and Google Gemini AI
          </p>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <FiUser size={20} />
            Admin Information
          </h2>

          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg">
              <FiUser className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-400">Name</p>
                <p className="font-semibold">{adminInfo.name}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg">
              <FiCode className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-400">Role</p>
                <p className="font-semibold">{adminInfo.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg">
              <FiMail className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a href={`mailto:${adminInfo.email}`} className="text-blue-400 hover:underline">
                  {adminInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg">
              <FaTiktok className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-400">TikTok</p>
                <a href={`https://tiktok.com/@${adminInfo.tiktok.substring(1)}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  {adminInfo.tiktok}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg">
              <FiGithub className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-400">GitHub</p>
                <a href={`https://github.com/${adminInfo.github}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  {adminInfo.github}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg">
              <FiUser className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-400">Hugging Face</p>
                <a href={`https://huggingface.co/${adminInfo.huggingface}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  {adminInfo.huggingface}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}