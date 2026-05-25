import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { motion } from 'framer-motion'

export default function ProductivityChart({ data }) {
  const chartData = data || [
    { day: 'Mon', tasks: 35 },
    { day: 'Tue', tasks: 60 },
    { day: 'Wed', tasks: 80 },
    { day: 'Thu', tasks: 55 },
    { day: 'Fri', tasks: 90 },
    { day: 'Sat', tasks: 70 },
    { day: 'Sun', tasks: 95 }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="xl:col-span-2 bg-white/5 rounded-3xl p-6 border border-white/10"
    >
      <h2 className="text-2xl font-bold mb-6">Productivity Analytics</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="day" stroke="rgba(255,255,255,0.5)" />
          <YAxis stroke="rgba(255,255,255,0.5)" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(0,0,0,0.8)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px'
            }}
          />
          <Bar dataKey="tasks" fill="#7C3AED" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
