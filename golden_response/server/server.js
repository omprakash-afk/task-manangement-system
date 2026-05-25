import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import http from 'http'
import { Server } from 'socket.io'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

const app = express()
const server = http.createServer(app)

// Socket.IO configuration
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL || '*',
    credentials: true
  }
})

// Middleware
app.use(cors())
app.use(helmet())
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
})

app.use('/api/', limiter)

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/taskflow')
  .then(() => console.log('✓ MongoDB connected'))
  .catch(err => console.error('✗ MongoDB connection error:', err))

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`)

  // Task events
  socket.on('task:update', (data) => {
    io.emit('task:updated', {
      ...data,
      timestamp: new Date()
    })
  })

  socket.on('task:create', (data) => {
    io.emit('task:created', {
      ...data,
      timestamp: new Date()
    })
  })

  socket.on('task:delete', (taskId) => {
    io.emit('task:deleted', { taskId })
  })

  // Chat events
  socket.on('chat:message', (data) => {
    io.emit('chat:receive', {
      ...data,
      timestamp: new Date()
    })
  })

  // Project events
  socket.on('joinProject', (projectId) => {
    socket.join(projectId)
    socket.to(projectId).emit('user:online', socket.id)
  })

  socket.on('taskUpdated', (data) => {
    io.to(data.projectId).emit('receiveTaskUpdate', {
      ...data,
      timestamp: new Date()
    })
  })

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`)
    socket.broadcast.emit('user:offline', socket.id)
  })
})

// Routes
import authRoutes from './routes/auth.js'
import taskRoutes from './routes/tasks.js'
import projectRoutes from './routes/projects.js'
import notificationRoutes from './routes/notifications.js'
import systemRoutes from './routes/system.js'

app.use('/api/auth', authRoutes)
app.use('/api/tasks', taskRoutes)
app.use('/api/projects', projectRoutes)
app.use('/api/notifications', notificationRoutes)
app.use('/api', systemRoutes)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error'
  })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

// Start server
const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
  console.log(`✓ Server running on port ${PORT}`)
})

export { app, server, io }
