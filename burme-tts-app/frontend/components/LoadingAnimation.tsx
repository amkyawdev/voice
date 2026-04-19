import { motion } from 'framer-motion'

export default function LoadingAnimation() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-gray-700 rounded-full loading-spinner"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 bg-gray-500 rounded-full animate-pulse"></div>
        </div>
      </div>
      <div className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-gray-500 rounded-full"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.2 }}
          />
        ))}
      </div>
      <p className="text-gray-400 text-sm">Generating speech...</p>
    </div>
  )
}