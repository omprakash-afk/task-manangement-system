import { motion } from 'framer-motion'

export default function ActivityFeed({ activities }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white/5 rounded-3xl p-6 border border-white/10"
    >
      <h2 className="text-2xl font-bold mb-6">Live Activity</h2>

      <div className="space-y-4">
        {activities.map((activity, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-black/20 p-4 rounded-2xl border border-white/5 hover:border-violet-500/30 transition-all"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm">{activity.message}</p>
              <span className="text-xs text-gray-400">{activity.time}</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">{activity.user}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
