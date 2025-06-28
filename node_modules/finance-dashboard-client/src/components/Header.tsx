import { useAuth } from '@/hooks/useAuth'

export default function Header() {
  const { user, logout } = useAuth()

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Personal Finance Dashboard
          </h2>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Welcome, {user?.firstName || 'User'}
          </div>
          <button
            onClick={logout}
            className="btn btn-outline"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  )
} 