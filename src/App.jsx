import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Docs from './pages/Docs'
import About from './pages/About'
import IndexPage from './pages/Index'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <Home />
      case 'index': return <IndexPage />
      case 'docs': return <Docs />
      case 'about': return <About />
      default: return <Home />
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <Header setCurrentPage={setCurrentPage} />
      <Sidebar setCurrentPage={setCurrentPage} />
      <main className="ml-16 p-6 transition-all duration-300">
        {renderPage()}
      </main>
    </div>
  )
}