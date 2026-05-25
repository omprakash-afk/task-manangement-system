// Utility functions for frontend
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

export const formatTime = (date) => {
  return new Date(date).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

export const formatRelativeTime = (date) => {
  const now = new Date()
  const diffMs = now - new Date(date)
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMs / 3600000)
  const diffDays = Math.floor(diffMs / 86400000)

  if (diffMins < 1) return 'Just now'
  if (diffMins < 60) return `${diffMins}m ago`
  if (diffHours < 24) return `${diffHours}h ago`
  if (diffDays < 7) return `${diffDays}d ago`

  return formatDate(date)
}

export const truncateText = (text, length = 50) => {
  return text.length > length ? text.slice(0, length) + '...' : text
}

export const getPriorityColor = (priority) => {
  const colors = {
    Low: 'bg-green-500/20 text-green-400 border-green-500/30',
    Medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    High: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    Critical: 'bg-red-500/20 text-red-400 border-red-500/30'
  }
  return colors[priority] || colors.Medium
}

export const getStatusColor = (status) => {
  const colors = {
    Pending: 'bg-gray-500/20 text-gray-400',
    'In Progress': 'bg-blue-500/20 text-blue-400',
    Completed: 'bg-green-500/20 text-green-400',
    Blocked: 'bg-red-500/20 text-red-400'
  }
  return colors[status] || colors.Pending
}
