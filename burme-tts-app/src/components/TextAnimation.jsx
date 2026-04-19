import { motion } from 'framer-motion'

export default function TextAnimation({ text }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="inline-block"
    >
      {text}
    </motion.span>
  )
}