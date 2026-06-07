from fastapi import APIRouter
from pydantic import BaseModel

from services.research_services import run_research_pipeline

router = APIRouter()


class ResearchRequest(BaseModel):
    topic: str


@router.post("/research")
async def research(req: ResearchRequest):

    result = run_research_pipeline(req.topic)

    return {
        "topic": req.topic,
        "search_results": result["search_results"],
        "scraped_content": result["scraped_content"],
        "report": result["report"],
        "feedback": result["feedback"]
    }


@router.get("/health")
async def health_check():
    return {"status": "ok"}