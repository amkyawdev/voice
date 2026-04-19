import { useState } from 'react'
import { Menu, X, Mic } from 'lucide-react'

export default function Header({ setCurrentPage }) {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = [
    { name: 'Home', page: 'home' },
    { name: 'Index', page: 'index' },
    { name: 'Docs', page: 'docs' },
    { name: 'About', page: 'about' }
  ]

  return (
    <header className="bg-dark-900/80 backdrop-blur-lg shadow-lg shadow-dark-950/50 sticky top-0 z-50 border-b border-dark-700">
      <div className="flex items-center justify-between px-4 py-3">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-dark-300 hover:text-accent-400 focus:outline-none p-2 rounded-lg hover:bg-dark-800 transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <div className="flex items-center gap-2">
          <Mic className="w-6 h-6 text-primary-500" />
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
            Burme TTS
          </h1>
        </div>
        
        <div className="w-10"></div>
      </div>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-56 bg-dark-800/95 backdrop-blur-xl rounded-xl shadow-xl shadow-dark-950/50 py-2 z-50 border border-dark-700 mx-4">
          {navItems.map(item => (
            <button
              key={item.page}
              onClick={() => {
                setCurrentPage(item.page)
                setIsOpen(false)
              }}
              className="block w-full text-left px-4 py-2.5 text-sm text-dark-300 hover:bg-dark-700 hover:text-accent-400 transition rounded-lg mx-2"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}