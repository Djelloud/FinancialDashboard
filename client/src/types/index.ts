// User types
export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  avatarUrl?: string
  emailVerified: boolean
  createdAt: string
  updatedAt: string
}

export interface AuthUser {
  user: User
  token: string
}

// Account types
export interface Account {
  id: string
  userId: string
  accountName: string
  accountType: 'checking' | 'savings' | 'credit' | 'investment'
  bankName: string
  balance: number
  plaidAccountId?: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

// Category types
export interface Category {
  id: string
  userId: string
  name: string
  color: string
  icon: string
  parentCategoryId?: string
  isSystemCategory: boolean
  createdAt: string
  updatedAt: string
}

// Transaction types
export interface Transaction {
  id: string
  accountId: string
  categoryId?: string
  amount: number
  description: string
  transactionDate: string
  merchantName?: string
  transactionType: 'income' | 'expense'
  isRecurring: boolean
  receiptUrl?: string
  plaidTransactionId?: string
  createdAt: string
  updatedAt: string
  account?: Account
  category?: Category
}

// Budget types
export interface Budget {
  id: string
  userId: string
  categoryId?: string
  amount: number
  period: 'monthly' | 'yearly'
  startDate: string
  endDate: string
  isActive: boolean
  createdAt: string
  updatedAt: string
  category?: Category
  spent?: number
  remaining?: number
}

// Goal types
export interface Goal {
  id: string
  userId: string
  name: string
  targetAmount: number
  currentAmount: number
  targetDate: string
  category: string
  isCompleted: boolean
  createdAt: string
  updatedAt: string
}

// API Response types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Form types
export interface LoginForm {
  email: string
  password: string
}

export interface RegisterForm {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

export interface TransactionForm {
  accountId: string
  categoryId?: string
  amount: number
  description: string
  transactionDate: string
  merchantName?: string
  transactionType: 'income' | 'expense'
}

export interface AccountForm {
  accountName: string
  accountType: 'checking' | 'savings' | 'credit' | 'investment'
  bankName: string
  balance: number
}

export interface BudgetForm {
  categoryId?: string
  amount: number
  period: 'monthly' | 'yearly'
  startDate: string
  endDate: string
}

export interface GoalForm {
  name: string
  targetAmount: number
  targetDate: string
  category: string
}

// Dashboard types
export interface DashboardStats {
  totalBalance: number
  monthlyIncome: number
  monthlyExpenses: number
  monthlySavings: number
  budgetStatus: {
    onTrack: number
    overBudget: number
    underBudget: number
  }
  recentTransactions: Transaction[]
  upcomingBills: Transaction[]
  goalsProgress: Goal[]
}

// Analytics types
export interface SpendingByCategory {
  category: Category
  amount: number
  percentage: number
}

export interface MonthlySpending {
  month: string
  income: number
  expenses: number
  savings: number
}

export interface NetWorthData {
  date: string
  netWorth: number
  assets: number
  liabilities: number
} 