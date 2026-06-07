from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.research_routes import router

app = FastAPI(
    title="ResearchMind API",
    version="1.0.0"
)

# CORS

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # change later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes

app.include_router(router)

@app.get("/")
async def root():
    return {
        "message": "ResearchMind API Running"
    }