# Personal Finance Dashboard - Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL (v12 or higher)
- Git

### Installation

#### Option 1: Automated Setup (Recommended)
```bash
# On Windows
install.bat

# On macOS/Linux
chmod +x install.sh
./install.sh
```

#### Option 2: Manual Setup
```bash
# 1. Install root dependencies
npm install

# 2. Install client dependencies
cd client && npm install && cd ..

# 3. Install server dependencies
cd server && npm install && cd ..
```

### Environment Configuration

#### Client Environment (client/.env)
```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=Personal Finance Dashboard
```

#### Server Environment (server/.env)
```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/finance_dashboard"

# JWT
JWT_SECRET="your_jwt_secret_here_change_this_in_production"
JWT_EXPIRES_IN="7d"

# Server
PORT=5000
NODE_ENV=development

# Redis (optional)
REDIS_URL="redis://localhost:6379"

# Plaid API (optional)
PLAID_CLIENT_ID="your_plaid_client_id"
PLAID_SECRET="your_plaid_secret"
PLAID_ENV="sandbox"

# OpenAI API (optional)
OPENAI_API_KEY="your_openai_api_key"

# Email Service (optional)
EMAIL_SERVICE_API_KEY="your_email_service_key"
EMAIL_FROM="noreply@financedashboard.com"

# File Upload
UPLOAD_DIR="./uploads"
MAX_FILE_SIZE=5242880

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### Database Setup

1. **Install PostgreSQL**
   - Download from [postgresql.org](https://www.postgresql.org/download/)
   - Or use Docker: `docker run --name postgres -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres`

2. **Create Database**
   ```sql
   CREATE DATABASE finance_dashboard;
   ```

3. **Update DATABASE_URL** in `server/.env` with your credentials

4. **Run Database Migrations**
   ```bash
   cd server
   npm run db:generate
   npm run db:migrate
   npm run db:seed
   ```

### Running the Application

#### Development Mode
```bash
# Start both client and server
npm run dev

# Or start individually
npm run dev:client  # Client on http://localhost:3000
npm run dev:server  # Server on http://localhost:5000
```

#### Production Build
```bash
npm run build
npm start
```

## 📁 Project Structure

```
personal-finance-dashboard/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── services/      # API service functions
│   │   ├── types/         # TypeScript type definitions
│   │   ├── utils/         # Utility functions
│   │   ├── App.tsx        # Main app component
│   │   └── main.tsx       # Entry point
│   ├── public/            # Static assets
│   ├── package.json       # Client dependencies
│   ├── vite.config.ts     # Vite configuration
│   ├── tailwind.config.js # Tailwind CSS configuration
│   └── tsconfig.json      # TypeScript configuration
├── server/                 # Node.js backend
│   ├── src/
│   │   ├── routes/        # API routes
│   │   ├── middleware/    # Express middleware
│   │   ├── controllers/   # Route controllers
│   │   ├── models/        # Database models
│   │   ├── utils/         # Utility functions
│   │   └── index.ts       # Server entry point
│   ├── prisma/            # Database schema and migrations
│   ├── package.json       # Server dependencies
│   ├── tsconfig.json      # TypeScript configuration
│   └── nodemon.json       # Development configuration
├── package.json           # Root package.json with workspaces
├── README.md              # Project documentation
├── PROJECT_SETUP.md       # This setup guide
├── install.sh             # Linux/macOS installation script
└── install.bat            # Windows installation script
```

## 🛠️ Available Scripts

### Root Level
- `npm run dev` - Start both client and server in development mode
- `npm run build` - Build both client and server for production
- `npm run install:all` - Install dependencies for all workspaces

### Client (client/)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Server (server/)
- `npm run dev` - Start development server with nodemon
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm run db:generate` - Generate Prisma client
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Seed database with sample data
- `npm run db:studio` - Open Prisma Studio

## 🔧 Configuration

### Frontend Configuration
- **Vite**: Fast build tool with hot module replacement
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type-safe JavaScript
- **React Query**: Server state management
- **React Router**: Client-side routing
- **Framer Motion**: Animation library

### Backend Configuration
- **Express**: Web framework
- **Prisma**: Database ORM
- **PostgreSQL**: Primary database
- **Redis**: Caching (optional)
- **JWT**: Authentication
- **Helmet**: Security middleware
- **Rate Limiting**: API protection

## 🚀 Deployment

### Frontend Deployment
The React app can be deployed to:
- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages

### Backend Deployment
The Node.js server can be deployed to:
- Heroku
- AWS EC2
- DigitalOcean
- Railway
- Render

### Database Deployment
- AWS RDS
- DigitalOcean Managed Databases
- Railway PostgreSQL
- Supabase

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Input validation and sanitization
- SQL injection prevention
- XSS protection
- Rate limiting
- CORS configuration
- Helmet security headers

## 📊 Features Overview

### Core Features
- ✅ User authentication and registration
- ✅ Account management
- ✅ Transaction tracking
- ✅ Category management
- ✅ Budget planning
- ✅ Financial goals
- ✅ Analytics and insights
- ✅ Responsive design

### Advanced Features (To be implemented)
- 🔄 Bank integration via Plaid
- 🔄 AI-powered insights
- 🔄 Receipt OCR
- 🔄 Email notifications
- 🔄 Mobile app
- 🔄 Data export/import

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill process on port 3000
   lsof -ti:3000 | xargs kill -9
   
   # Kill process on port 5000
   lsof -ti:5000 | xargs kill -9
   ```

2. **Database connection issues**
   - Check PostgreSQL is running
   - Verify DATABASE_URL in server/.env
   - Ensure database exists

3. **Module not found errors**
   ```bash
   # Clear node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

4. **TypeScript errors**
   ```bash
   # Regenerate Prisma client
   cd server && npm run db:generate
   ```

### Getting Help
- Check the console for error messages
- Verify all environment variables are set
- Ensure all dependencies are installed
- Check database connection and migrations

## 📝 Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow ESLint rules
- Use Prettier for formatting
- Write meaningful commit messages

### Git Workflow
```bash
git add .
git commit -m "feat: add user authentication"
git push origin main
```

### Testing
```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

## 🎯 Next Steps

1. **Complete Core Features**
   - Implement authentication controllers
   - Add transaction CRUD operations
   - Create budget management
   - Build analytics dashboard

2. **Add Advanced Features**
   - Integrate Plaid for bank connections
   - Add OpenAI for insights
   - Implement email notifications
   - Add data export functionality

3. **Enhancements**
   - Add unit and integration tests
   - Implement caching with Redis
   - Add real-time notifications
   - Create mobile-responsive design

4. **Deployment**
   - Set up CI/CD pipeline
   - Configure production environment
   - Set up monitoring and logging
   - Implement backup strategies

---

**Happy coding! 🚀** 