import { useState } from 'react'
import { motion } from 'framer-motion'

export default function KanbanColumn({ title, tasks: initialTasks, columnKey }) {
  const [tasks, setTasks] = useState(initialTasks)
  const [draggedTask, setDraggedTask] = useState(null)

  const handleDragStart = (task) => {
    setDraggedTask(task)
  }

  const handleDragEnd = () => {
    setDraggedTask(null)
  }

  const handleTaskCreation = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      description: 'Enterprise workflow optimization task.'
    }
    setTasks([...tasks, newTask])
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 rounded-3xl p-5 border border-white/10 h-fit"
    >
      <div className="flex justify-between items-center mb-5">
        <h2 className="capitalize text-xl font-bold">{title}</h2>
        <span className="bg-violet-500 text-white text-sm px-3 py-1 rounded-full">
          {tasks.length}
        </span>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            draggable
            onDragStart={() => handleDragStart(task)}
            onDragEnd={handleDragEnd}
            whileHover={{ scale: 1.02 }}
            className="bg-[#0F172A] rounded-2xl p-5 border border-white/10 hover:border-violet-500/50 cursor-move transition-all"
          >
            <h3 className="font-semibold text-lg">{task.title}</h3>
            <p className="text-sm text-gray-400 mt-2">{task.description}</p>
            <div className="flex gap-2 mt-3">
              <span className="text-xs bg-violet-500/20 text-violet-400 px-2 py-1 rounded">High</span>
              <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">2d</span>
            </div>
          </motion.div>
        ))}
      </div>

      <button
        onClick={() => handleTaskCreation('New Task')}
        className="w-full mt-4 py-3 rounded-2xl bg-white/5 hover:bg-violet-500/20 border border-white/10 text-violet-400 transition-all"
      >
        + Add Task
      </button>
    </motion.div>
  )
}
