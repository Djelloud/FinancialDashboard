import axios from 'axios'
import { User, AuthUser, LoginForm, RegisterForm } from '@/types'

const API_URL = import.meta.env['VITE_API_URL'] || 'http://localhost:5000/api'

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Handle token expiration
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export const authService = {
  async login(email: string, password: string): Promise<AuthUser> {
    const response = await api.post('/auth/login', { email, password })
    return response.data.data // Backend returns { success: true, data: { user, token } }
  },

  async register(userData: RegisterForm): Promise<AuthUser> {
    const response = await api.post('/auth/register', userData)
    return response.data.data // Backend returns { success: true, data: { user, token } }
  },

  async getCurrentUser(): Promise<User> {
    const response = await api.get('/auth/me')
    return response.data.data // Backend returns { success: true, data: user }
  },

  async updateProfile(userData: Partial<User>): Promise<User> {
    const response = await api.put('/auth/profile', userData)
    return response.data.data
  },

  async changePassword(passwordData: { currentPassword: string; newPassword: string }): Promise<void> {
    await api.put('/auth/change-password', passwordData)
  },

  async forgotPassword(email: string): Promise<void> {
    await api.post('/auth/forgot-password', { email })
  },

  async resetPassword(token: string, newPassword: string): Promise<void> {
    await api.post('/auth/reset-password', { token, newPassword })
  },

  async verifyEmail(token: string): Promise<void> {
    await api.post('/auth/verify-email', { token })
  },

  async resendVerificationEmail(): Promise<void> {
    await api.post('/auth/resend-verification')
  },
} 