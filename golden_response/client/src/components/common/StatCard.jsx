import { motion } from 'framer-motion'

export default function StatCard({ title, value, icon, trend }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-gray-400 text-sm">{title}</h3>
          <p className="text-5xl font-black mt-4">{value}</p>
          {trend && (
            <p className={`text-sm mt-2 ${trend > 0 ? 'text-green-400' : 'text-red-400'}`}>
              {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
            </p>
          )}
        </div>
        <span className="text-4xl">{icon}</span>
      </div>
    </motion.div>
  )
}
