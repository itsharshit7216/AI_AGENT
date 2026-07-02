# 📈 AI Investment Research Agent

An AI-powered investment research platform that analyzes publicly available company information and generates comprehensive, data-driven investment insights. The application combines real-time market data with Large Language Model (LLM) reasoning to provide explainable investment recommendations, SWOT analysis, financial outlook, and risk assessment.

## 🚀 Live Demo

GitHub Repository: https://github.com/itsharshit7216/AI_AGENT
🌐 **Vercel Deployment:**  
https://ai-agent-6538.vercel.app

---

# ✨ Features

- 🔍 Search any publicly listed company
- 📈 Real-time stock market data using Finnhub API
- 🤖 AI-generated investment analysis using Groq LLM
- 📊 Investment score (0–10)
- 💼 Company overview and business model
- 🏆 Competitive advantages
- 📈 Growth drivers & future catalysts
- 💪 Strengths analysis
- ⚠️ Weaknesses & business risks
- 🌍 Opportunities & threats (SWOT)
- 💰 Financial health assessment
- 📉 Profitability analysis
- 💲 Valuation insights
- 🚀 Innovation assessment
- 👨‍💼 Management quality review
- 🏭 Industry comparison
- 🌎 Macro-economic impact
- 📊 Technical outlook
- ⏳ Short-term outlook
- 📅 Long-term outlook
- ✅ AI investment recommendation
- 🎯 Confidence score

---

# 🛠 Tech Stack

## Frontend

- Next.js 15
- React
- TypeScript
- Tailwind CSS

## Backend

- Next.js API Routes
- TypeScript

## AI

- Groq API (Llama 3.3 70B)

## APIs

- Finnhub API
- Groq API

---

# 📂 Project Structure

```
app/
 ├── api/
 │    ├── search/
 │    └── stock/
 │
 ├── page.tsx
 │
components/
 ├── SearchBar.tsx
 ├── StockCard.tsx
 ├── AnalysisCard.tsx
 ├── Navbar.tsx
 ├── Hero.tsx
 ├── Features.tsx
 └── FeatureCard.tsx

public/

README.md
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/itsharshit7216/AI_AGENT.git
```

Move into the project

```bash
cd AI_AGENT
```

Install dependencies

```bash
npm install
```

Create a `.env.local` file

```env
GROQ_API_KEY=YOUR_GROQ_API_KEY

FINNHUB_API_KEY=YOUR_FINNHUB_API_KEY
```

Run the development server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

# 🧠 How It Works

### Step 1

The user enters a company name.

↓

### Step 2

The application fetches real-time stock information from the Finnhub API.

↓

### Step 3

The backend creates a detailed prompt containing the company information.

↓

### Step 4

The prompt is sent to the Groq LLM for investment reasoning.

↓

### Step 5

The LLM returns structured JSON containing:

- Company Overview
- SWOT Analysis
- Financial Health
- Growth Drivers
- Risks
- Investment Recommendation
- Confidence Score
- Investment Score

↓

### Step 6

The frontend displays the complete investment dashboard.

---

# 📊 API Integrations

## Finnhub API

Provides:

- Current Price
- High
- Low
- Open
- Previous Close
- Daily Change

---

## Groq API

Generates:

- Investment Analysis
- SWOT
- Business Insights
- Future Outlook
- Recommendation
- Confidence
- Score

---

# 📸 Example Analysis

### Company

Tesla Inc.

### Output

- Investment Score: **8.7 / 10**
- Confidence: **91%**
- Recommendation: **Buy**
- Financial Health: Strong
- Valuation: Premium
- Innovation: Excellent
- Bull Case: Expansion in AI & Energy
- Bear Case: High valuation & competition

---

# 🏗 Architecture

```
User

   │

   ▼

Frontend (Next.js)

   │

   ├────────► Finnhub API

   │

   └────────► Groq API

                    │

                    ▼

          Structured JSON Response

                    │

                    ▼

          React Components

                    │

                    ▼

             Investment Dashboard
```

---

# 🎯 Design Decisions

### Why Next.js?

- Full-stack framework
- API Routes
- Fast deployment
- Excellent TypeScript support

### Why Groq?

- Extremely fast inference
- Open-source LLM support
- Low latency
- Cost-efficient

### Why Finnhub?

- Reliable financial data
- Easy REST API
- Real-time market information

---

# ⚖ Trade-offs

### Included

- Real-time market data
- AI investment reasoning
- Explainable outputs
- Modular architecture

### Not Included

- Authentication
- User portfolios
- Watchlists
- Historical chart visualization
- Database persistence
- Multi-language support

---

# 🚀 Future Improvements

- Portfolio tracking
- Stock comparison
- Interactive charts
- Earnings calendar
- News sentiment analysis
- PDF investment reports
- User authentication
- Watchlist functionality
- Historical performance graphs
- AI chat assistant
- Export to Excel/PDF

---

# 🔒 Environment Variables

```env
GROQ_API_KEY=YOUR_API_KEY

FINNHUB_API_KEY=YOUR_API_KEY
```

---

# 📦 Deployment

The project is deployed using **Vercel**.

Live URL

https://ai-agent-6538.vercel.app

---

# 👨‍💻 Author

**Harshit**

B.Tech CSE (AI & ML)

Lovely Professional University

GitHub

https://github.com/itsharshit7216

LinkedIn

(Add your LinkedIn profile here)

---

# 📄 License

This project is developed for educational and placement purposes.

```
⭐ If you found this project useful, consider giving it a star on GitHub.
```
