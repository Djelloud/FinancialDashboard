export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Welcome to your personal finance dashboard
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Total Balance
          </h3>
          <p className="text-2xl font-bold text-primary-600">
            $0.00
          </p>
        </div>
        
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Monthly Income
          </h3>
          <p className="text-2xl font-bold text-success-600">
            $0.00
          </p>
        </div>
        
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Monthly Expenses
          </h3>
          <p className="text-2xl font-bold text-danger-600">
            $0.00
          </p>
        </div>
        
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Monthly Savings
          </h3>
          <p className="text-2xl font-bold text-warning-600">
            $0.00
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recent Transactions
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            No transactions yet
          </p>
        </div>
        
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Budget Status
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            No budgets set up yet
          </p>
        </div>
      </div>
    </div>
  )
} 