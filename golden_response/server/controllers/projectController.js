import Project from '../models/Project.js'

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find()
      .populate('owner', 'name email')
      .populate('members', 'name email')
      .sort({ createdAt: -1 })

    res.json(projects)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
      .populate('owner', 'name email')
      .populate('members', 'name email')

    if (!project) {
      return res.status(404).json({ error: 'Project not found' })
    }

    res.json(project)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const createProject = async (req, res) => {
  try {
    const { name, description, status, members, startDate, endDate } = req.body

    if (!name) {
      return res.status(400).json({ error: 'Project name is required' })
    }

    const project = await Project.create({
      name,
      description,
      status,
      owner: req.userId,
      members: members || [req.userId],
      startDate,
      endDate
    })

    await project.populate('owner', 'name email')
    res.status(201).json(project)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: new Date() },
      { new: true }
    ).populate('owner', 'name email').populate('members', 'name email')

    if (!project) {
      return res.status(404).json({ error: 'Project not found' })
    }

    res.json(project)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id)

    if (!project) {
      return res.status(404).json({ error: 'Project not found' })
    }

    res.json({ message: 'Project deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
