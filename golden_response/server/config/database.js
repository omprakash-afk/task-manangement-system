// MongoDB Connection Configuration
import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/taskflow', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      retryWrites: true,
      w: 'majority'
    })
    console.log(`✓ MongoDB Connected: ${conn.connection.host}`)
    return conn
  } catch (error) {
    console.error(`✗ Error connecting to MongoDB: ${error.message}`)
    process.exit(1)
  }
}

export const disconnectDB = async () => {
  try {
    await mongoose.disconnect()
    console.log('✓ MongoDB Disconnected')
  } catch (error) {
    console.error(`✗ Error disconnecting from MongoDB: ${error.message}`)
    process.exit(1)
  }
}
