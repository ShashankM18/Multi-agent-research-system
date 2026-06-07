from agents.search_agent import build_search_agent
from agents.reader_agent import build_reader_agent
from agents.writer_agent import writer_chain
from agents.critic_agent import critic_chain


def run_research_pipeline(topic: str):

    state = {}

    # STEP 1 : SEARCH

    search_agent = build_search_agent()

    search_result = search_agent.invoke({
        "messages": [
            ("user",
             f"Find recent, reliable and detailed information about: {topic}")
        ]
    })

    state["search_results"] = search_result["messages"][-1].content

    # STEP 2 : READER

    reader_agent = build_reader_agent()

    reader_result = reader_agent.invoke({
        "messages": [
            (
                "user",
                f"""
                Based on the following search results about '{topic}',
                pick the most relevant URL and scrape it.

                Search Results:
                {state["search_results"][:800]}
                """
            )
        ]
    })

    state["scraped_content"] = reader_result["messages"][-1].content

    # STEP 3 : WRITER

    research_combined = f"""
    SEARCH RESULTS:
    {state["search_results"]}

    DETAILED SCRAPED CONTENT:
    {state["scraped_content"]}
    """

    state["report"] = writer_chain.invoke({
        "topic": topic,
        "research": research_combined
    })

    # STEP 4 : CRITIC

    state["feedback"] = critic_chain.invoke({
        "report": state["report"]
    })

    return state