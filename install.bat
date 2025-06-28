@echo off
echo 🚀 Setting up Personal Finance Dashboard...

REM Install root dependencies
echo 📦 Installing root dependencies...
npm install

REM Install client dependencies
echo 📦 Installing client dependencies...
cd client
npm install
cd ..

REM Install server dependencies
echo 📦 Installing server dependencies...
cd server
npm install
cd ..

REM Create environment files
echo 🔧 Creating environment files...

REM Client environment
if not exist "client\.env" (
    echo VITE_API_URL=http://localhost:5000/api > client\.env
    echo VITE_APP_NAME=Personal Finance Dashboard >> client\.env
    echo ✅ Created client\.env
)

REM Server environment
if not exist "server\.env" (
    (
        echo # Database
        echo DATABASE_URL="postgresql://username:password@localhost:5432/finance_dashboard"
        echo.
        echo # JWT
        echo JWT_SECRET="your_jwt_secret_here_change_this_in_production"
        echo JWT_EXPIRES_IN="7d"
        echo.
        echo # Server
        echo PORT=5000
        echo NODE_ENV=development
        echo.
        echo # Redis ^(optional^)
        echo REDIS_URL="redis://localhost:6379"
        echo.
        echo # Plaid API ^(optional^)
        echo PLAID_CLIENT_ID="your_plaid_client_id"
        echo PLAID_SECRET="your_plaid_secret"
        echo PLAID_ENV="sandbox"
        echo.
        echo # OpenAI API ^(optional^)
        echo OPENAI_API_KEY="your_openai_api_key"
        echo.
        echo # Email Service ^(optional^)
        echo EMAIL_SERVICE_API_KEY="your_email_service_key"
        echo EMAIL_FROM="noreply@financedashboard.com"
        echo.
        echo # File Upload
        echo UPLOAD_DIR="./uploads"
        echo MAX_FILE_SIZE=5242880
        echo.
        echo # Rate Limiting
        echo RATE_LIMIT_WINDOW_MS=900000
        echo RATE_LIMIT_MAX_REQUESTS=100
    ) > server\.env
    echo ✅ Created server\.env
)

echo.
echo 🎉 Setup complete!
echo.
echo 📋 Next steps:
echo 1. Set up PostgreSQL database
echo 2. Update server\.env with your database credentials
echo 3. Run 'npm run dev' to start both client and server
echo 4. Visit http://localhost:3000 to see the application
echo.
echo 🔧 Database setup:
echo 1. Create a PostgreSQL database named 'finance_dashboard'
echo 2. Update DATABASE_URL in server\.env
echo 3. Run 'cd server ^&^& npm run db:generate ^&^& npm run db:migrate'
echo.
pause 