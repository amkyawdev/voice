import { Home, BookOpen, Info, Hash, Zap } from 'lucide-react'

export default function Sidebar({ setCurrentPage }) {
  const items = [
    { icon: Home, label: 'Home', page: 'home', color: 'text-primary-400' },
    { icon: Hash, label: 'Index', page: 'index', color: 'text-accent-400' },
    { icon: BookOpen, label: 'Docs', page: 'docs', color: 'text-blue-400' },
    { icon: Info, label: 'About', page: 'about', color: 'text-purple-400' }
  ]

  return (
    <div className="fixed left-0 top-16 h-full w-16 bg-dark-900/50 backdrop-blur-lg flex flex-col items-center py-4 space-y-4 z-40 border-r border-dark-700">
      {items.map(({ icon: Icon, label, page, color }) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className="p-3 rounded-xl hover:bg-dark-800 transition-all duration-300 group relative border border-transparent hover:border-dark-600"
          title={label}
        >
          <Icon className={`${color} group-hover:scale-110 transition-transform`} size={20} />
          <span className="absolute left-full ml-3 px-3 py-1.5 bg-dark-800 text-xs rounded-lg opacity-0 group-hover:opacity-100 whitespace-nowrap shadow-xl border border-dark-700">
            {label}
          </span>
        </button>
      ))}
    </div>
  )
}