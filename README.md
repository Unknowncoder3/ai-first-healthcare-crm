# 🏥 AI-First Healthcare CRM

<p align="center"><b>Full-stack CRM prototype combining structured pharmaceutical-sales workflows with an AI assistant.</b></p>

---

## 📌 Overview

This project explores how an AI assistant can sit on top of a traditional CRM workflow to help users **log interactions, retrieve history and generate follow-up suggestions**.

It was built as an internship/task project with an enterprise-style architecture using FastAPI, React and an LLM integration.

> This is a software prototype, not a clinical decision-support system. It should not be used to provide medical advice or make patient-care decisions.

---

## ✨ Features

### 🤖 AI Assistant
- Conversational CRM interaction
- Intent detection
- Tool/action routing
- Interaction logging
- History queries
- Follow-up suggestions

### 📝 Structured CRM
- Log doctor interactions
- Interaction type
- Sentiment field
- Summary
- Follow-up action
- Date

### 📊 Dashboard
- KPI-oriented overview
- Daily focus
- CRM workflow navigation

### 🕒 Interaction History
- Doctor-specific history
- Timeline-style presentation
- Search-oriented workflow

---

## 🏗️ Architecture

```text
React + Vite Frontend
        ↓
FastAPI REST API
        ↓
Agent / Intent Router
        ↓
CRM Tools & Business Logic
        ↓
LLM Integration
        ↓
Structured CRM Response
```

---

## 🧰 Tech Stack

### Backend
- Python 3.11+
- FastAPI
- Uvicorn
- LangGraph / agent routing where configured
- Groq API

### Frontend
- React
- Vite
- Tailwind CSS

---

## 📂 Main Workflows

### AI Interaction Logging

Example input:

```text
Met Dr. Mehta today. He is concerned about dosage for elderly patients.
```

The assistant can interpret the request and route it into the appropriate CRM workflow.

### History Query

```text
Show me past interactions with Dr. Mehta.
```

The backend retrieves relevant CRM information for presentation in the UI.

---

## ⚙️ Local Setup

### Backend

```bash
cd backend
python -m venv .venv
pip install -r requirements.txt
```

Create `.env`:

```env
GROQ_API_KEY=your_api_key_here
```

Run:

```bash
uvicorn app.main:app --reload
```

### Frontend

```bash
cd ai-crm-ui
npm install
npm run dev
```

---

## 🔐 Security & Data Considerations

Healthcare-related applications require strong safeguards. Any production deployment would need:

- Authentication and authorization
- Secure secret management
- Encryption
- Audit logging
- Data retention controls
- Access boundaries between users/organizations
- Appropriate healthcare/privacy compliance review

The repository should not contain real patient or sensitive healthcare data.

---

## 🎯 Engineering Skills Demonstrated

- Full-stack application architecture
- REST API development
- React frontend development
- Agentic workflow design
- LLM integration
- Structured data workflows
- Enterprise UI thinking
- Separation of AI and deterministic business logic

---

## 🔮 Future Improvements

- Persistent database
- Authentication and role-based access
- Streaming responses
- Automated tests
- Observability/logging
- Analytics dashboard
- Stronger tool validation
- Production deployment architecture

---

## 👨‍💻 Author

**Snehasish Das** — Data Analyst | Applied AI Developer

- GitHub: https://github.com/Unknowncoder3
- LinkedIn: https://www.linkedin.com/in/snehasish-das-b75a551b0/
