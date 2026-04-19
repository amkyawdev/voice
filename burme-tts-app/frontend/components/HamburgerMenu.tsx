'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiMenu, FiX, FiHome, FiFileText, FiInfo } from 'react-icons/fi'

const menuItems = [
  { name: 'Home', path: '/', icon: FiHome },
  { name: 'Docs', path: '/docs', icon: FiFileText },
  { name: 'About', path: '/about', icon: FiInfo },
]

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300"
      >
        {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      {isOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-gray-800 z-40 shadow-xl">
          <div className="flex flex-col pt-20 px-6 gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 p-3 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-all duration-300"
              >
                <item.icon size={18} />
                <span className="text-sm">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}