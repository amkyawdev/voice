import { Home, BookOpen, Info, Hash } from 'lucide-react'

export default function Sidebar({ setCurrentPage }) {
  const items = [
    { icon: Home, label: 'Home', page: 'home' },
    { icon: Hash, label: 'Index', page: 'index' },
    { icon: BookOpen, label: 'Docs', page: 'docs' },
    { icon: Info, label: 'About', page: 'about' }
  ]

  return (
    <div className="fixed left-0 top-16 h-full w-16 bg-gray-800 flex flex-col items-center py-4 space-y-6 z-40 shadow-lg">
      {items.map(({ icon: Icon, label, page }) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className="p-2 rounded-lg hover:bg-gray-700 transition-colors group relative"
          title={label}
        >
          <Icon size={20} />
          <span className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
            {label}
          </span>
        </button>
      ))}
    </div>
  )
}