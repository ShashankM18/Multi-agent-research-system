from langchain.agents import create_agent
from core.llm import llm
from tools.scrape_url import scrape_url

def build_reader_agent():
    return create_agent(
        model = llm,
        tools = [scrape_url]
    )
