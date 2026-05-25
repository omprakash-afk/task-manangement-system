// Additional Dashboard Cards Component
import { motion } from 'framer-motion'

export default function MetricCard({ title, value, icon, bgColor, trend }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`${bgColor} rounded-2xl p-6 text-white`}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-sm font-semibold opacity-80">{title}</h3>
        <span className="text-2xl">{icon}</span>
      </div>
      <p className="text-3xl font-bold">{value}</p>
      {trend && (
        <p className={`text-xs mt-2 ${trend.positive ? 'text-green-400' : 'text-red-400'}`}>
          {trend.positive ? '↑' : '↓'} {trend.value}% vs last week
        </p>
      )}
    </motion.div>
  )
}
