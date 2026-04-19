import { motion } from 'framer-motion'

export default function LoadingSpinner({ size = 'default' }) {
  const sizeClass = size === 'small' ? 'w-4 h-4' : 'w-6 h-6'

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
      className={`border-2 border-gray-400 border-t-transparent rounded-full ${sizeClass}`}
    />
  )
}