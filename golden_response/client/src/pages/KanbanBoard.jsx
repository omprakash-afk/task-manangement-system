import Sidebar from '../components/common/Sidebar'
import Navbar from '../components/common/Navbar'
import KanbanColumn from '../components/kanban/KanbanColumn'
import { motion } from 'framer-motion'

export default function KanbanBoard() {
  const columns = {
    todo: [
      { id: 1, title: 'Design UI Mockups', description: 'Create comprehensive UI design mockups for the dashboard.' },
      { id: 2, title: 'Create REST APIs', description: 'Build all necessary REST endpoints for task management.' }
    ],
    progress: [
      { id: 3, title: 'Socket.IO Integration', description: 'Implement real-time updates using Socket.IO.' }
    ],
    done: [
      { id: 4, title: 'Authentication System', description: 'JWT-based authentication setup complete.' },
      { id: 5, title: 'Database Schema', description: 'MongoDB schemas designed and implemented.' }
    ]
  }

  return (
    <div className="flex bg-[#020617] min-h-screen text-white">
      <Sidebar />

      <div className="flex-1 overflow-auto">
        <Navbar />

        <motion.div className="p-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-8"
          >
            <div>
              <h1 className="text-4xl font-black">Real-Time Kanban Board</h1>
              <p className="text-gray-400 mt-2">Drag and drop tasks to organize your workflow</p>
            </div>
            <button className="bg-violet-500 hover:bg-violet-600 px-6 py-3 rounded-2xl font-semibold transition-all">
              + Create Task
            </button>
          </motion.div>

          {/* Kanban Board */}
          <div className="grid lg:grid-cols-3 gap-6">
            {Object.entries(columns).map(([key, tasks]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: Object.keys(columns).indexOf(key) * 0.1 }}
              >
                <KanbanColumn title={key} tasks={tasks} columnKey={key} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
