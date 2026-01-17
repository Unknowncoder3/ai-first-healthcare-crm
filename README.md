# 🏥 AI-First Healthcare CRM

An **AI-powered Healthcare CRM** built for pharmaceutical sales workflows.  
This project demonstrates how modern agentic AI can transform traditional CRM systems into **intelligent assistants** that understand, log, analyze, and suggest follow-ups from real-world doctor interactions.

It is designed as an internship task project, but structured like a **real enterprise SaaS product**.

---

## ✨ Features

### 🔧 Backend (FastAPI + Agent Architecture)

- `POST /api/chat`  
  Conversational AI endpoint for:
  - Logging interactions
  - Editing records
  - Querying history
  - Generating follow-up suggestions

- `POST /api/form/log`  
  Traditional form-based logging for structured CRM data.

- Agent-style routing:
  - Intent detection
  - Tool selection
  - Context-aware responses
  - Follow-up generation

- Integrated with **Groq LLM** for fast, production-grade inference.

---

### 🎨 Frontend (React + Tailwind)

- Enterprise CRM layout (Salesforce / HubSpot inspired)
- Pages:
  - **Dashboard** – KPIs & daily focus
  - **AI Assistant** – Chat-style interaction
  - **Log Interaction** – Structured form
  - **History** – Doctor-wise interaction timeline
- Features:
  - Sidebar navigation
  - Light/Dark mode
  - Professional SaaS look
  - Chat-style UI
  - Form-based CRM workflow

---

## 🧱 Tech Stack

### Backend
- FastAPI
- Python 3.11+
- LangGraph / Agent routing
- Groq API
- Uvicorn

### Frontend
- React (Vite)
- Tailwind CSS
- Modern component layout
- Responsive enterprise UI

---

## 🚀 Getting Started

### 1️⃣ Backend Setup

```bash
cd backend
conda activate ai-crm   # or your virtual env
pip install -r requirements.txt
````

Create `.env`:

```env
GROQ_API_KEY=your_api_key_here
```

Run server:

```bash
uvicorn app.main:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

---

### 2️⃣ Frontend Setup

```bash
cd ai-crm-ui
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 🧠 Example Workflows

### AI Assistant

> “Met Dr. Mehta today. He’s concerned about dosage for elderly patients.”

AI will:

* Detect intent
* Log interaction
* Suggest follow-ups
* Return structured data

### Log Interaction Form

Fill:

* Doctor Name
* Interaction Type
* Sentiment
* Summary
* Follow-up Action
* Date

Submit → stored via `/api/form/log`

### History

Search:

```
Show me past interactions with Dr. Mehta
```

AI returns structured history, rendered as timeline cards.

---

## 🎯 What This Project Demonstrates

* Full-stack architecture
* Agentic AI workflows
* Production-style API design
* Enterprise UI thinking
* Real-world business use case
* LLM orchestration beyond “chatbot”

This is **not a demo app** — it is a **mini product**.

---

## 📌 Future Enhancements

* Persistent database
* Auth & user roles
* Streaming AI responses
* Analytics dashboard
* Multi-agent workflows

---

## 🧑‍💻 Author

Built by **Snehasish Das**
As part of an AI-first internship task, with a focus on:

> *“How AI can become a core layer of business software — not just a feature.”*

