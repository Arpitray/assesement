# React Flow Pipeline Builder

A professional React Flow application for building and analyzing data pipelines with real-time validation.

## Features

- **Drag & Drop Interface** - Create nodes by dragging from the toolbar
- **Dynamic Text Node** - Auto-expanding textarea with variable detection (`{{ variable }}`)
- **Pipeline Validation** - Real-time DAG (Directed Acyclic Graph) validation
- **Professional UI** - Clean, modern interface with BaseNode architecture
- **Backend Analysis** - NetworkX-powered graph analysis

## Architecture

### Frontend (React + React Flow)
- **React 18** with modern hooks
- **React Flow** for interactive node editor
- **Zustand** for state management
- **Enhanced Node Types**: Input, Output, LLM, Text with BaseNode pattern

### Backend (FastAPI + NetworkX)
- **FastAPI** for high-performance API
- **NetworkX** for graph analysis and cycle detection
- **CORS enabled** for frontend communication

## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- Python 3.8+ 

### Installation

1. **Clone and setup frontend:**
```bash
cd frontend
npm install
```

2. **Setup backend:**
```bash
cd backend
pip install -r requirements.txt
```

### Running the Application

1. **Start the backend:**
```bash
cd backend
python main.py
```
Backend runs on: http://localhost:8000

2. **Start the frontend:**
```bash
cd frontend
npm start
```
Frontend runs on: http://localhost:3000

## Usage

1. **Create Pipeline:**
   - Drag nodes from the toolbar to canvas
   - Connect nodes by dragging from connection handles
   - Use Text nodes with `{{ variable }}` syntax for dynamic inputs

2. **Validate Pipeline:**
   - Click "Submit Pipeline" to analyze structure
   - View node count, edge count, and DAG validation results

## API Reference

### Backend Endpoints

**Health Check:**
```
GET /
Response: {"Ping": "Pong"}
```

**Pipeline Analysis:**
```
POST /pipelines/parse
Content-Type: application/json

Request Body:
{
  "nodes": [{"id": "node1", ...}, {"id": "node2", ...}],
  "edges": [{"source": "node1", "target": "node2"}]
}

Response:
{
  "num_nodes": 2,
  "num_edges": 1,
  "is_dag": true
}
```

## Project Structure

```
├── frontend/
│   ├── src/
│   │   ├── nodes/           # Node components
│   │   │   ├── BaseNode.js  # Base node architecture
│   │   │   ├── inputNode.js
│   │   │   ├── outputNode.js
│   │   │   ├── llmNode.js
│   │   │   └── textNode.js
│   │   ├── App.js          # Main application
│   │   ├── store.js        # Zustand state management
│   │   ├── submit.js       # Pipeline submission logic
│   │   ├── toolbar.js      # Drag & drop toolbar
│   │   └── ui.js          # React Flow interface
│   └── package.json
└── backend/
    ├── main.py            # FastAPI application
    └── requirements.txt   # Python dependencies
```

## Technologies Used

**Frontend:**
- React 18.2.0
- React Flow 11.8.3
- Zustand (state management)
- Modern CSS with professional styling

**Backend:**
- FastAPI 0.104.1
- NetworkX 3.2.1
- Uvicorn (ASGI server)
- Python 3.8+

## Production Deployment

### Frontend (Static Build)
```bash
cd frontend
npm run build
# Deploy the 'build' folder to your hosting service
```

### Backend (Docker/Server)
```bash
cd backend
# Production server
uvicorn main:app --host 0.0.0.0 --port 8000
```

## License

MIT License - feel free to use for personal and commercial projects.