import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header({ setCurrentPage }) {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = [
    { name: 'Home', page: 'home' },
    { name: 'Index', page: 'index' },
    { name: 'Docs', page: 'docs' },
    { name: 'About', page: 'about' }
  ]

  return (
    <header className="bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-300 hover:text-white focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <h1 className="text-xl font-bold tracking-tight">Burme TTS</h1>
        <div className="w-6"></div>
      </div>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50 border border-gray-700">
          {navItems.map(item => (
            <button
              key={item.page}
              onClick={() => {
                setCurrentPage(item.page)
                setIsOpen(false)
              }}
              className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}