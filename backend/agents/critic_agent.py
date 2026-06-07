from core.prompts import critic_prompt
from core.llm import llm  
from langchain_core.output_parsers import StrOutputParser

critic_chain = critic_prompt | llm | StrOutputParser()