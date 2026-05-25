import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/slices/authSlice'

export default function Sidebar() {
  const dispatch = useDispatch()

  const menuItems = [
    { name: 'Dashboard', path: '/', icon: '📊' },
    { name: 'Projects', path: '/projects', icon: '📁' },
    { name: 'Kanban', path: '/kanban', icon: '📋' },
    { name: 'Analytics', path: '/analytics', icon: '📈' },
    { name: 'Sprint Boards', path: '/sprints', icon: '🏃' },
    { name: 'Teams', path: '/teams', icon: '👥' },
    { name: 'Messages', path: '/messages', icon: '💬' },
    { name: 'Settings', path: '/settings', icon: '⚙️' }
  ]

  return (
    <aside className="w-72 bg-white/5 border-r border-white/10 backdrop-blur-xl min-h-screen p-6 flex flex-col">
      <h1 className="text-3xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-10">
        TaskFlow Enterprise
      </h1>

      <nav className="flex-1 space-y-3">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="flex items-center gap-3 w-full text-left px-5 py-4 rounded-2xl bg-white/5 hover:bg-violet-500 transition-all duration-300"
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </Link>
        ))}
      </nav>

      <button
        onClick={() => dispatch(logout())}
        className="w-full px-5 py-4 rounded-2xl bg-red-500/20 hover:bg-red-500/30 transition-all duration-300 text-red-400 font-semibold"
      >
        Logout
      </button>
    </aside>
  )
}
