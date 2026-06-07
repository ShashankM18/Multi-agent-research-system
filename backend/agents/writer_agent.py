from core.prompts import writer_prompt
from core.llm import llm
from langchain_core.output_parsers import StrOutputParser

writer_chain = writer_prompt | llm | StrOutputParser()