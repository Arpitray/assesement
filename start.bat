@echo off
REM Production Deployment Script for Windows

echo 🚀 Starting React Flow Pipeline Builder...

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Error: Python is not installed
    echo Please install Python from https://python.org/
    pause
    exit /b 1
)

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Error: Node.js is not installed
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Prerequisites check passed

REM Install backend dependencies
echo 📦 Installing backend dependencies...
cd backend
python -m pip install -r requirements.txt
cd ..

REM Install frontend dependencies
echo 📦 Installing frontend dependencies...
cd frontend
call npm install
cd ..

echo ✅ All dependencies installed

echo 🎯 Starting services...

REM Start backend
echo 🔧 Starting backend server...
cd backend
start "Backend Server" cmd /k "python main.py"
cd ..

REM Wait a moment for backend to start
timeout /t 3 /nobreak >nul

REM Start frontend
echo ⚛️ Starting frontend server...
cd frontend
start "Frontend Server" cmd /k "npm start"
cd ..

echo 🎉 Application started successfully!
echo.
echo 📱 Frontend: http://localhost:3000
echo 🔧 Backend:  http://localhost:8000  
echo 📚 API Docs: http://localhost:8000/docs
echo.
echo Both servers are running in separate windows
echo Close the command windows to stop the services

pause