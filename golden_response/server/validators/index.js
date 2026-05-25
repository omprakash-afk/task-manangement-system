// Input Validation Utilities
import { body, validationResult } from 'express-validator'

export const validateRegister = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Invalid email format'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
  body('role')
    .optional()
    .isIn(['Admin', 'Manager', 'Employee'])
    .withMessage('Invalid role')
]

export const validateLogin = [
  body('email').isEmail().withMessage('Invalid email format'),
  body('password').notEmpty().withMessage('Password is required')
]

export const validateTask = [
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('projectId').notEmpty().withMessage('Project ID is required'),
  body('priority')
    .optional()
    .isIn(['Low', 'Medium', 'High', 'Critical'])
    .withMessage('Invalid priority'),
  body('status')
    .optional()
    .isIn(['Pending', 'In Progress', 'Completed', 'Blocked'])
    .withMessage('Invalid status')
]

export const validateProject = [
  body('name').trim().notEmpty().withMessage('Project name is required'),
  body('status')
    .optional()
    .isIn(['Planning', 'Active', 'On Hold', 'Completed'])
    .withMessage('Invalid status')
]

export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  next()
}
