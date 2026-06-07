from langchain.agents import create_agent
from core.llm import llm
from tools.web_search import web_search

def build_search_agent():
    return create_agent(
        model=llm,
        tools=[web_search]
    )