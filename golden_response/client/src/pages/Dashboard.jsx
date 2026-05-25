import Sidebar from '../components/common/Sidebar'
import Navbar from '../components/common/Navbar'
import StatCard from '../components/common/StatCard'
import ActivityFeed from '../components/common/ActivityFeed'
import ProductivityChart from '../components/dashboard/ProductivityChart'
import TeamChat from '../components/common/TeamChat'
import { motion } from 'framer-motion'

export default function Dashboard() {
  const stats = [
    { title: 'Total Tasks', value: 128, icon: '📋', trend: 12 },
    { title: 'Completed', value: 89, icon: '✅', trend: 8 },
    { title: 'In Progress', value: 35, icon: '⚡', trend: 5 },
    { title: 'Team Members', value: 24, icon: '👥', trend: 3 }
  ]

  const activities = [
    { message: 'Alex updated task "Design UI"', user: 'by Alex', time: '2m ago' },
    { message: 'Sarah completed sprint "Q1 Release"', user: 'by Sarah', time: '5m ago' },
    { message: 'Mike uploaded deployment file', user: 'by Mike', time: '10m ago' },
    { message: 'Team meeting scheduled for tomorrow', user: 'by System', time: '1h ago' }
  ]

  return (
    <div className="flex bg-[#020617] min-h-screen text-white">
      <Sidebar />

      <div className="flex-1 overflow-auto">
        <Navbar />

        <motion.div className="p-8 space-y-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-between items-center"
          >
            <div>
              <h1 className="text-4xl font-black">Dashboard</h1>
              <p className="text-gray-400 mt-2">Welcome back! Here's your project overview.</p>
            </div>
            <button className="bg-gradient-to-r from-violet-500 to-cyan-500 px-8 py-3 rounded-2xl font-semibold hover:shadow-lg hover:shadow-violet-500/50 transition-all">
              + New Project
            </button>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <StatCard {...stat} />
              </motion.div>
            ))}
          </div>

          {/* Analytics Section */}
          <div className="grid xl:grid-cols-3 gap-6">
            <ProductivityChart />
            <ActivityFeed activities={activities} />
          </div>

          {/* Team Collaboration */}
          <TeamChat />
        </motion.div>
      </div>
    </div>
  )
}
