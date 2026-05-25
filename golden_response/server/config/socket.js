// Socket.IO Configuration
import { Server } from 'socket.io'
import jwt from 'jsonwebtoken'

export const configureSocketIO = (server) => {
  const io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL || 'http://localhost:3000',
      credentials: true,
      methods: ['GET', 'POST']
    },
    transports: ['websocket', 'polling']
  })

  // Authentication middleware
  io.use((socket, next) => {
    const token = socket.handshake.auth.token
    if (!token) {
      return next(new Error('Authentication error'))
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key')
      socket.userId = decoded.userId
      socket.userRole = decoded.role
      next()
    } catch (err) {
      next(new Error('Invalid token'))
    }
  })

  // Connection handler
  io.on('connection', (socket) => {
    console.log(`✓ User connected: ${socket.userId}`)

    // Join project room
    socket.on('joinProject', (projectId) => {
      socket.join(`project:${projectId}`)
      socket.to(`project:${projectId}`).emit('user:online', {
        userId: socket.userId,
        timestamp: new Date()
      })
    })

    // Leave project room
    socket.on('leaveProject', (projectId) => {
      socket.leave(`project:${projectId}`)
      socket.to(`project:${projectId}`).emit('user:offline', {
        userId: socket.userId,
        timestamp: new Date()
      })
    })

    // Task events
    socket.on('task:update', (data) => {
      io.to(`project:${data.projectId}`).emit('task:updated', {
        ...data,
        userId: socket.userId,
        timestamp: new Date()
      })
    })

    socket.on('task:create', (data) => {
      io.to(`project:${data.projectId}`).emit('task:created', {
        ...data,
        userId: socket.userId,
        timestamp: new Date()
      })
    })

    socket.on('task:delete', (data) => {
      io.to(`project:${data.projectId}`).emit('task:deleted', {
        taskId: data.taskId,
        userId: socket.userId,
        timestamp: new Date()
      })
    })

    // Chat events
    socket.on('chat:message', (data) => {
      io.to(`project:${data.projectId}`).emit('chat:receive', {
        ...data,
        userId: socket.userId,
        timestamp: new Date()
      })
    })

    // Disconnect handler
    socket.on('disconnect', () => {
      console.log(`✗ User disconnected: ${socket.userId}`)
      socket.broadcast.emit('user:offline', {
        userId: socket.userId,
        timestamp: new Date()
      })
    })
  })

  return io
}
