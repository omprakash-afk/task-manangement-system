import express from 'express'
import { authenticate } from '../middleware/auth.js'

const router = express.Router()

// Health check endpoint
router.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date(),
    uptime: process.uptime()
  })
})

// Version endpoint
router.get('/version', (req, res) => {
  res.json({
    version: '1.0.0',
    name: 'TaskFlow Enterprise API',
    environment: process.env.NODE_ENV || 'development'
  })
})

// Status endpoint (requires auth)
router.get('/status', authenticate, (req, res) => {
  res.json({
    status: 'Authenticated',
    user: req.user,
    timestamp: new Date()
  })
})

export default router
