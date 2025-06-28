#!/bin/bash

echo "🚀 Setting up Personal Finance Dashboard..."

# Install root dependencies
echo "📦 Installing root dependencies..."
npm install

# Install client dependencies
echo "📦 Installing client dependencies..."
cd client
npm install
cd ..

# Install server dependencies
echo "📦 Installing server dependencies..."
cd server
npm install
cd ..

# Create environment files
echo "🔧 Creating environment files..."

# Client environment
if [ ! -f "client/.env" ]; then
    echo "VITE_API_URL=http://localhost:5000/api" > client/.env
    echo "VITE_APP_NAME=Personal Finance Dashboard" >> client/.env
    echo "✅ Created client/.env"
fi

# Server environment
if [ ! -f "server/.env" ]; then
    cat > server/.env << EOF
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
EOF
    echo "✅ Created server/.env"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Set up PostgreSQL database"
echo "2. Update server/.env with your database credentials"
echo "3. Run 'npm run dev' to start both client and server"
echo "4. Visit http://localhost:3000 to see the application"
echo ""
echo "🔧 Database setup:"
echo "1. Create a PostgreSQL database named 'finance_dashboard'"
echo "2. Update DATABASE_URL in server/.env"
echo "3. Run 'cd server && npm run db:generate && npm run db:migrate'"
echo "" 