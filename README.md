# Dynamic Portfolio Dashboard (Full Stack)

A full stack portfolio analytics dashboard that shows real-time stock performance, sector-wise grouping, and portfolio insights using live market data.

This project was built as part of a Full Stack technical assignment to demonstrate backend API handling, real-time data integration, performance optimization, and frontend data visualization.

---

## 🌐 Live Demo

**Frontend (Vercel)**  
👉 https://portfolio-dashboard-fullst-git-ff49ac-arshwinsajeevans-projects.vercel.app/dashboard  

**Backend (Render)**  
👉 https://portfolio-dashboard-fullstack.onrender.com  

---

## 🚀 Features

- Real-time stock CMP fetching using Yahoo Finance Chart API  
- Sector-wise portfolio grouping  
- Investment vs Present Value calculation  
- Gain / Loss tracking  
- Portfolio summary analytics  
- Interactive sector performance charts  
- Auto data refresh  
- Error handling and retry logic  
- Backend caching to avoid rate limits  

---

## 🛠 Tech Stack

### Frontend
- Next.js (App Router)  
- Tailwind CSS  
- Recharts  
- Axios  

### Backend
- Node.js  
- Express.js  
- Yahoo Finance Chart API integration  
- In-memory caching  
- Retry fetch mechanism  

### Deployment
- Frontend → Vercel  
- Backend → Render  

---

## 📊 Data Source

Live stock price (CMP) is fetched from Yahoo Finance using their chart data endpoint.  
This ensures near real-time market price updates while reducing request failures using caching and retry strategies.

---

## ⚙ Architecture Overview

Frontend communicates with backend REST API.  
Backend fetches live stock price data and processes portfolio analytics before returning structured dashboard data.

Caching is implemented to prevent excessive external API calls and improve response performance.

---

## 🧠 Key Engineering Decisions

- Used Yahoo Chart API instead of quote API for better reliability  
- Added retry logic for network stability  
- Implemented caching to handle rate limits  
- Used environment-based API configuration for deployment  

---

## 📂 Project Structure

frontend/

  src/

  app/

  components/

  services/



backend/

  src/

  routes/

  controllers/

  services/

  utils/

  data/

## 🧪 Running Locally

### Backend
cd backend

npm install

node src/server.js


### Frontend
cd frontend

npm install

npm run dev


---

## 🔐 Environment Variables

### Frontend
NEXT_PUBLIC_API_URL


### Backend
PORT
CACHE_TIME


---

## 📌 Future Improvements

- Add authentication  
- Add historical price charts  
- Add database portfolio storage  
- Add user-based portfolio tracking  

---

## 👨‍💻 Author

**Arshwin Sajeevan**