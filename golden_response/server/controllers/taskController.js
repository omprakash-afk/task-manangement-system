import Task from '../models/Task.js'

export const getTasks = async (req, res) => {
  try {
    const { status, priority, assignedTo, projectId } = req.query
    let query = {}

    if (status) query.status = status
    if (priority) query.priority = priority
    if (assignedTo) query.assignedTo = assignedTo
    if (projectId) query.projectId = projectId

    const tasks = await Task.find(query)
      .populate('assignedTo', 'name email')
      .populate('createdBy', 'name')
      .sort({ createdAt: -1 })

    res.json(tasks)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id)
      .populate('assignedTo', 'name email')
      .populate('createdBy', 'name')

    if (!task) {
      return res.status(404).json({ error: 'Task not found' })
    }

    res.json(task)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const createTask = async (req, res) => {
  try {
    const { title, description, priority, status, assignedTo, projectId, dueDate } = req.body

    if (!title || !projectId) {
      return res.status(400).json({ error: 'Title and projectId are required' })
    }

    const task = await Task.create({
      title,
      description,
      priority,
      status,
      assignedTo,
      projectId,
      dueDate,
      createdBy: req.userId
    })

    await task.populate('assignedTo', 'name email')
    res.status(201).json(task)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: new Date() },
      { new: true }
    ).populate('assignedTo', 'name email')

    if (!task) {
      return res.status(404).json({ error: 'Task not found' })
    }

    res.json(task)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id)

    if (!task) {
      return res.status(404).json({ error: 'Task not found' })
    }

    res.json({ message: 'Task deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
