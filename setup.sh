#!/bin/bash

# Raksha Installation & Setup Script

echo "🚨 Raksha - Women Safety Platform Setup"
echo "======================================"

# Check Node.js installation
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 14+ first."
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install root dependencies
echo ""
echo "📦 Installing root dependencies..."
npm install

# Install backend dependencies
echo ""
echo "📦 Installing backend dependencies..."
cd backend
npm install
cd ..

# Install frontend dependencies
echo ""
echo "📦 Installing frontend dependencies..."
cd frontend
npm install
cd ..

echo ""
echo "✅ Installation complete!"
echo ""
echo "🚀 To start the application:"
echo "   npm start"
echo ""
echo "Or run individually:"
echo "   npm run backend    # Terminal 1"
echo "   npm run frontend   # Terminal 2"
echo ""
echo "Frontend: http://localhost:3000"
echo "Backend:  http://localhost:5000"
echo ""
echo "Happy coding! 💪"
