import io from 'socket.io-client'

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || 'http://localhost:5000'

let socket = null

export const initSocket = (token) => {
  if (!socket) {
    socket = io(SOCKET_URL, {
      auth: {
        token
      }
    })
  }
  return socket
}

export const getSocket = () => socket

export const socketEvents = {
  // Connection events
  CONNECT: 'connect',
  DISCONNECT: 'disconnect',

  // Task events
  TASK_UPDATE: 'task:update',
  TASK_UPDATED: 'task:updated',
  TASK_CREATE: 'task:create',
  TASK_CREATED: 'task:created',
  TASK_DELETE: 'task:delete',
  TASK_DELETED: 'task:deleted',

  // Chat events
  CHAT_MESSAGE: 'chat:message',
  CHAT_RECEIVE: 'chat:receive',

  // Project events
  PROJECT_JOIN: 'joinProject',
  PROJECT_UPDATE: 'taskUpdated',
  RECEIVE_PROJECT_UPDATE: 'receiveTaskUpdate',

  // Presence events
  USER_ONLINE: 'user:online',
  USER_OFFLINE: 'user:offline'
}

export const emitEvent = (eventName, data) => {
  if (socket) {
    socket.emit(eventName, data)
  }
}

export const onEvent = (eventName, callback) => {
  if (socket) {
    socket.on(eventName, callback)
  }
}

export const offEvent = (eventName) => {
  if (socket) {
    socket.off(eventName)
  }
}
