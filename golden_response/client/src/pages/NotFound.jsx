import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-7xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          404
        </h1>
        <p className="text-3xl font-bold text-white mb-4">Page Not Found</p>
        <p className="text-gray-400 mb-8">The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-violet-500 to-cyan-500 px-8 py-3 rounded-2xl font-semibold hover:shadow-lg hover:shadow-violet-500/50 transition-all"
        >
          Back to Dashboard
        </Link>
      </motion.div>
    </div>
  )
}
