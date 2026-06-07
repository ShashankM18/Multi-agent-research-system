# 🔬 ResearchMind – Multi-Agent AI Research Assistant

ResearchMind is an AI-powered multi-agent research system that automates the process of gathering, analyzing, and generating research reports on any topic.

The system combines multiple specialized AI agents that collaborate to:

* Search the web for relevant information
* Read and extract content from sources
* Generate structured research reports
* Critique and evaluate the generated report

Built using **FastAPI**, **React**, **LangChain**, **OpenAI**, and **Tavily Search API**.

---

## 🚀 Features

### 🔍 Search Agent

* Searches the web using Tavily Search API
* Retrieves recent and reliable information
* Collects source URLs and summaries

### 📄 Reader Agent

* Scrapes selected web pages
* Extracts clean textual content
* Removes unnecessary HTML elements

### ✍️ Writer Agent

* Generates detailed research reports
* Creates structured sections:

  * Introduction
  * Key Findings
  * Conclusion
  * Sources

### 🧐 Critic Agent

* Reviews generated reports
* Assigns quality scores
* Provides strengths and improvement suggestions

### 🌐 Modern Web Interface

* Built with React + Tailwind CSS
* Responsive and professional UI
* Research report visualization
* Critic feedback display

---

## 🏗️ Architecture

```text
User Query
     │
     ▼
Search Agent
     │
     ▼
Reader Agent
     │
     ▼
Writer Agent
     │
     ▼
Critic Agent
     │
     ▼
Final Research Report
```

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* Axios
* Framer Motion

### Backend

* FastAPI
* LangChain
* OpenAI GPT-4o-mini
* Tavily Search API
* BeautifulSoup

### Tools & Utilities

* Python
* dotenv
* Git & GitHub

---

## 📂 Project Structure

```text
Multi-agent-research-system/

├── backend/
│
│   ├── agents/
│   │   ├── search_agent.py
│   │   ├── reader_agent.py
│   │   ├── writer_agent.py
│   │   └── critic_agent.py
│   │
│   ├── api/
│   │   └── research_routes.py
│   │
│   ├── services/
│   │   └── research_services.py
│   │
│   ├── tools/
│   │   ├── web_search.py
│   │   └── scrape_url.py
│   │
│   ├── core/
│   │   ├── llm.py
│   │   ├── config.py
│   │   └── prompts.py
│   │
│   ├── main.py
│   └── .env
│
├── frontend/
│
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/your-username/Multi-agent-research-system.git

cd Multi-agent-research-system
```

---

### 2. Backend Setup

```bash
cd backend

pip install -r requirements.txt
```

Create a `.env` file:

```env
OPENAI_API_KEY=your_openai_api_key
TAVILY_API_KEY=your_tavily_api_key
```

Run FastAPI:

```bash
uvicorn main:app --reload
```

Backend URL:

```text
http://localhost:8000
```

Swagger Documentation:

```text
http://localhost:8000/docs
```

---

### 3. Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

## 📡 API Endpoint

### Run Research

```http
POST /research
```

Request:

```json
{
  "topic": "Artificial Intelligence in Healthcare"
}
```

Response:

```json
{
  "topic": "Artificial Intelligence in Healthcare",
  "search_results": "...",
  "scraped_content": "...",
  "report": "...",
  "feedback": "..."
}
```

---


