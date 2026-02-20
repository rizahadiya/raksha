#!/bin/bash

# Raksha - Development Server Launcher
# Run this to start both frontend and backend with proper logging

echo "🚨 Starting Raksha - Women Safety Platform"
echo "=========================================="
echo ""

# Check if Node modules are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing root dependencies..."
    npm install
fi

if [ ! -d "backend/node_modules" ]; then
    echo "📦 Installing backend dependencies..."
    cd backend && npm install && cd ..
fi

if [ ! -d "frontend/node_modules" ]; then
    echo "📦 Installing frontend dependencies..."
    cd frontend && npm install && cd ..
fi

echo ""
echo "✅ All dependencies ready!"
echo ""
echo "🚀 Starting services..."
echo ""
echo "📍 Frontend: http://localhost:3000"
echo "📍 Backend:  http://localhost:5000"
echo ""
echo "Press Ctrl+C to stop both services"
echo ""

# Export colors for output
export FORCE_COLOR=1

# Use npm concurrently to run both
npm start
