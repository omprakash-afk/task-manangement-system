import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { login } from '../redux/slices/authSlice'
import { motion } from 'framer-motion'

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // Mock login - replace with API call
      if (formData.email && formData.password) {
        dispatch(login({
          user: {
            id: '1',
            name: 'Omprakash',
            email: formData.email,
            role: 'Admin'
          },
          token: 'mock_token_123'
        }))
        navigate('/')
      } else {
        setError('Please fill in all fields')
      }
    } catch (err) {
      setError('Login failed')
    }
  }

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white/5 border border-white/10 rounded-3xl p-10 w-full max-w-md backdrop-blur-xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-black text-white mb-2 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Welcome Back
        </motion.h1>
        <p className="text-gray-400 mb-8">Sign in to your TaskFlow account</p>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm"
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-300 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-gray-500 outline-none focus:border-violet-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-gray-500 outline-none focus:border-violet-500 transition-all"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-violet-500 to-cyan-500 py-4 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-violet-500/50 transition-all"
          >
            Sign In
          </motion.button>
        </form>

        <p className="text-center text-gray-400 mt-6">
          Don't have an account?{' '}
          <Link to="/register" className="text-violet-400 hover:text-violet-300 font-semibold">
            Sign up here
          </Link>
        </p>
      </motion.div>
    </div>
  )
}
