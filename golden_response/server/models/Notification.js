import mongoose from 'mongoose'

const NotificationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  message: String,
  type: {
    type: String,
    enum: ['task', 'project', 'team', 'system'],
    default: 'system'
  },
  relatedId: mongoose.Schema.Types.ObjectId,
  isRead: {
    type: Boolean,
    default: false
  },
  actionUrl: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  expiresAt: Date
}, { timestamps: true })

// Auto-delete notifications after 30 days
NotificationSchema.index({ createdAt: 1 }, { expireAfterSeconds: 2592000 })

export default mongoose.model('Notification', NotificationSchema)
