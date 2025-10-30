from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import networkx as nx

app = FastAPI()

# --- Allow CORS so your React frontend (localhost:3000) can call backend (localhost:8000) ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],     # In production, restrict this
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Health check ---
@app.get("/")
def read_root():
    return {"Ping": "Pong"}


# --- Main pipeline endpoint ---
@app.post("/pipelines/parse")
async def parse_pipeline(request: Request):
    """
    Expects JSON like:
    {
      "nodes": [{ "id": "1", ... }, { "id": "2", ... }],
      "edges": [{ "source": "1", "target": "2" }]
    }
    """
    data = await request.json()

    nodes = data.get("nodes", [])
    edges = data.get("edges", [])

    # Build directed graph
    G = nx.DiGraph()

    # Add nodes
    for node in nodes:
        G.add_node(node.get("id"))

    # Add edges
    for edge in edges:
        source = edge.get("source")
        target = edge.get("target")
        if source and target:
            G.add_edge(source, target)

    num_nodes = len(G.nodes)
    num_edges = len(G.edges)
    is_dag = nx.is_directed_acyclic_graph(G)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
