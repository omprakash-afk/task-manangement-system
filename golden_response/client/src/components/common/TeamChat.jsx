import { motion } from 'framer-motion'

export default function TeamChat() {
  const messages = [
    { id: 1, author: 'Alex', message: 'Sprint completed successfully! 🎉', time: '2m ago' },
    { id: 2, author: 'Sarah', message: 'Deployment successful, all systems operational', time: '5m ago' },
    { id: 3, author: 'Mike', message: 'Socket.IO integration synced across all clients', time: '10m ago' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 rounded-3xl border border-white/10 h-[600px] flex flex-col"
    >
      <div className="p-5 border-b border-white/10">
        <h2 className="text-2xl font-bold">Team Collaboration</h2>
      </div>

      <div className="flex-1 p-5 space-y-4 overflow-auto">
        {messages.map((msg, idx) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-[#0F172A] rounded-2xl p-5 border border-white/10 hover:border-violet-500/30 transition-all"
          >
            <div className="flex justify-between items-start">
              <p className="font-semibold text-violet-400">{msg.author}</p>
              <span className="text-xs text-gray-500">{msg.time}</span>
            </div>
            <p className="text-sm mt-2 text-gray-300">{msg.message}</p>
          </motion.div>
        ))}
      </div>

      <div className="p-5 flex gap-3 border-t border-white/10">
        <input
          type="text"
          placeholder="Write message..."
          className="flex-1 bg-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:bg-white/20 transition-all"
        />
        <button className="bg-violet-500 hover:bg-violet-600 px-8 rounded-2xl font-semibold transition-all">
          Send
        </button>
      </div>
    </motion.div>
  )
}
