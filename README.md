#  FairSight AI – Bias-Aware Decision System 
### Auditing AI decisions for fairness, transparency, and accountability using Gemma 4

---

##  Objective

FairSight AI is a full-stack web application that:

- Takes structured inputs (region, population, damage level, income level)
- Computes a **resource allocation priority score**
- Uses AI (Gemma 4) to:
  - Explain decisions
  - Detect bias
  - Assign a fairness score (0–100)
  - Suggest improvements
- Allows users to:
  - Interact with the AI (**AI on Trial**)
  - Fix bias and compare results (**before vs after**)

---

##  Core Features

###  Decision Engine
priority = (damage * 0.5 + population * 0.3 - income * 0.2)

---
###  AI Explanation (Gemma 4)

- Explains reasoning behind decisions  
- Detects bias (region, income, etc.)  
- Outputs fairness score (0–100)  
- Suggests improvements  

---

###  AI on Trial

- Ask questions about decisions  
- Understand *why* and *how* outcomes were generated  
- Improves transparency  

---

###  Fix Bias

- Adjust weights or inputs  
- Recompute decision score  
- Compare **before vs after**  

---

###  Fairness Score Visualization

- 🟢 Green → Score > 70 (Fair)  
- 🟡 Yellow → 40–70 (Moderate)  
- 🔴 Red → < 40 (Biased)  

---

## Tech Stack

**Frontend**
- React (Vite)
- Tailwind CSS

**Backend**
- Node.js
- Express.js

**AI**
- Gemma 4 (via OpenRouter)

**Database**
- Firebase Firestore

**Deployment**
- Firebase Hosting (Frontend)
- Google Cloud Run (Backend)

---

## Project Structure
client/ # Frontend (React)
server/ # Backend (Node.js)


---

##  Setup Instructions

###  Backend Setup


cd server
npm install


Create `.env` file:


OPENROUTER_API_KEY=your_api_key_here
PORT=3001


Run server:


npm run dev


---

### Frontend Setup


cd client
npm install
npm run dev


---

## 🔌 API Endpoints

### POST /analyze
- Input: decision parameters  
- Output: score, explanation, bias, fairness score, suggestions  

### POST /ask
- Input: question + context  
- Output: AI-generated answer  

### POST /fix-bias
- Adjust inputs/weights  
- Returns improved results  

---

## UI Components

- Input Form  
- Result Dashboard  
- Fairness Score Display  
- AI Explanation Panel  
- AI Chat (Trial Mode)  
- Fix Bias Button  

---

## Security

- `.env` is ignored via `.gitignore`
- API keys are not exposed
- Use `.env.example` for reference

---

##  Use Cases

- Government resource allocation  
- Loan approval systems  
- Hiring fairness analysis  
- Policy auditing  
- AI ethics research  
