import { useState } from 'react'
import { useSelector } from 'react-redux'

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('')
  const { user } = useSelector(state => state.auth)

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
  }

  return (
    <header className="h-20 flex items-center justify-between px-8 border-b border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="bg-white/5 rounded-2xl px-4 py-3 w-[400px] border border-white/10">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-transparent outline-none text-white w-full placeholder-gray-400"
        />
      </div>

      <div className="flex items-center gap-5">
        <button className="relative p-2 hover:bg-white/10 rounded-lg transition-all">
          🔔
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
        </button>

        <div className="flex items-center gap-3">
          <div>
            <p className="text-sm font-semibold">{user?.name}</p>
            <p className="text-xs text-gray-400">{user?.role}</p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-500 flex items-center justify-center font-bold">
            {getInitials(user?.name || 'OP')}
          </div>
        </div>
      </div>
    </header>
  )
}
