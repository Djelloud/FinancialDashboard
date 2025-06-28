import { Router } from 'express'
import { register, login, getCurrentUser, logout } from '../controllers/authController'
import { authenticateToken } from '../middleware/auth'

const router = Router()

// Public routes
router.post('/register', register)
router.post('/login', login)

// Protected routes
router.get('/me', authenticateToken, getCurrentUser)
router.post('/logout', logout)

export default router 