# Personal Finance Dashboard

A comprehensive personal finance management application with AI-powered insights, real-time data visualization, and intelligent budgeting features.

## 🚀 Features

- **Authentication & User Management** - Secure JWT-based authentication with profile management
- **Account Management** - Connect multiple bank accounts and track balances
- **Transaction Management** - Import, categorize, and analyze transactions with AI suggestions
- **Budgeting System** - Create custom budgets with real-time tracking and alerts
- **Financial Goals** - Set and track savings goals with progress visualization
- **Analytics & Insights** - Interactive charts and AI-powered financial recommendations
- **Smart Features** - Bill reminders, recurring transaction detection, and financial health scoring

## 🛠️ Tech Stack

### Frontend
- React 18 with TypeScript
- Tailwind CSS for styling
- Recharts for data visualization
- React Query for state management
- React Hook Form for form handling
- Framer Motion for animations

### Backend
- Node.js with Express
- TypeScript
- JWT for authentication
- Bcrypt for password hashing
- Multer for file uploads
- Node-cron for scheduled tasks

### Database
- PostgreSQL with Prisma ORM
- Redis for caching (optional)

### Additional Services
- Plaid API for bank integration (mock data available)
- OpenAI API for spending insights
- Email service integration

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd personal-finance-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm run install:all
   ```

3. **Set up environment variables**
   ```bash
   # Copy environment files
   cp server/.env.example server/.env
   cp client/.env.example client/.env
   ```

4. **Set up the database**
   ```bash
   cd server
   npm run db:generate
   npm run db:migrate
   npm run db:seed
   ```

5. **Start the development servers**
   ```bash
   npm run dev
   ```

## 🔧 Environment Variables

### Server (.env)
```env
DATABASE_URL=postgresql://username:password@localhost:5432/finance_dashboard
JWT_SECRET=your_jwt_secret_here
PORT=5000
NODE_ENV=development
PLAID_CLIENT_ID=your_plaid_client_id
PLAID_SECRET=your_plaid_secret
OPENAI_API_KEY=your_openai_api_key
REDIS_URL=redis://localhost:6379
EMAIL_SERVICE_API_KEY=your_email_service_key
```

### Client (.env)
```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=Personal Finance Dashboard
```

## 🗄️ Database Schema

The application uses PostgreSQL with the following main tables:
- **Users** - User accounts and profiles
- **Accounts** - Bank accounts and balances
- **Categories** - Transaction categories
- **Transactions** - Financial transactions
- **Budgets** - Budget configurations
- **Goals** - Financial goals and progress

## 🚀 Development

### Available Scripts

- `npm run dev` - Start both client and server in development mode
- `npm run build` - Build both client and server for production
- `npm run test` - Run tests for both client and server
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Seed the database with sample data

### Project Structure

```
personal-finance-dashboard/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── utils/         # Utility functions
│   │   ├── types/         # TypeScript type definitions
│   │   └── services/      # API service functions
├── server/                 # Node.js backend
│   ├── src/
│   │   ├── controllers/   # Route controllers
│   │   ├── middleware/    # Express middleware
│   │   ├── models/        # Database models
│   │   ├── routes/        # API routes
│   │   └── utils/         # Utility functions
├── database/              # Database migrations and seeds
└── docs/                  # Documentation
```

## 🎨 UI/UX Features

- **Responsive Design** - Mobile-first approach with progressive web app capabilities
- **Dark/Light Theme** - Toggle between themes
- **Interactive Charts** - Real-time data visualization with drill-down capabilities
- **Smooth Animations** - Framer Motion powered transitions
- **Accessibility** - WCAG compliant design

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Input validation and sanitization
- SQL injection prevention
- XSS protection
- Rate limiting
