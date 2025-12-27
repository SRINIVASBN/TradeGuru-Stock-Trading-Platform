# TradeGuru — Stock Trading Platform

A full-stack stock trading platform consisting of a backend API service and two React-based applications — a dashboard interface and a frontend application. The platform manages trading-related data such as holdings, positions, and orders, and provides structured UI modules to visualize them with real-time stock market data.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Backend | Node.js, Express, RESTful APIs |
| Frontend | React, Material UI |
| Dashboard | React, Material UI |
| Database | MongoDB (Mongoose) |
| UI Libraries | Font Awesome, MDN, Lottie, Material UI |
| API Integration | Live Stock Market APIs |
| Config | `.env` (Backend) |

---

## 📌 Project Summary

| Section | Details |
|--------:|---------|
| **Project Name** | TradeGuru — Stock Trading Platform |
| **Backend** | Node.js + Express + RESTful APIs |
| **Frontend** | React + Material UI |
| **Dashboard** | React + Material UI |
| **Database** | MongoDB |
| **API Calls** | Live Stock Market APIs |
| **Supports** | Local Development |
| **Purpose** | Store, process, & visually present trading data |

---

## 📖 Abstract

TradeGuru is a modular stock trading platform built to manage and visualize trading-related information. The backend provides secure RESTful APIs and database schemas for orders, holdings, and positions, while the dashboard and frontend React applications handle visual representation and user interaction using Material UI components. The platform integrates with live stock market APIs to fetch real-time trading data. This project is ideal for learning full-stack architecture, RESTful API development, React dashboards, and data handling in trading applications.

---

## ✅ Features

### Backend
- RESTful API using Node.js + Express
- MongoDB schema/models for:
  - Holdings
  - Orders
  - Positions
- Organized route modules
- API calls to live stock market data
- `.env` configuration support

### Dashboard (React)
- Dedicated trading dashboard UI
- Material UI components
- Organized component structure
- Real-time data visualization
- Interactive charts and graphs
- Lottie animations
- Font Awesome icons

### Frontend (React)
- Separate user-facing React app
- Material UI design system
- Clean component structure ready for UI development
- Landing pages and product showcase
- Support and signup modules
- Responsive design with MDN standards

---

## 🎯 Current Outcome

This repository currently contains:
- ✔ Fully structured backend service with RESTful APIs
- ✔ Trading models & schemas
- ✔ React dashboard with Material UI
- ✔ Separate frontend project
- ✔ Live stock market API integration
- ✔ Clean repo (no node_modules / no env pushed)

---

## 🚀 Quick Start Guide

### 1️⃣ Clone Repo
```bash
git clone https://github.com/SRINIVASBN/TradeGuru-Stock-Trading-Platform.git
cd TradeGuru-Stock-Trading-Platform
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```
Create `.env` file in backend (only variables used in backend)

Run backend:
```bash
npm start
```

### 3️⃣ Dashboard Setup
```bash
cd dashboard
npm install
npm start
```

### 4️⃣ Frontend Setup
```bash
cd frontend
npm install
npm start
```

---

## 📁 Project Structure
```
TradeGuru-Stock-Trading-Platform/
├── backend/
│   ├── Add_to_Db_&_Display_to_dash_routes/
│   │   ├── holdingsRoute.js
│   │   ├── ordersRoute.js
│   │   └── positionsRoute.js
│   ├── model/
│   │   ├── HoldingsModel.js
│   │   ├── OrdersModel.js
│   │   └── PositionsModel.js
│   ├── schema/
│   │   ├── HoldingSchema.js
│   │   ├── OrdersSchema.js
│   │   └── PositionsSchema.js
│   ├── package.json
│   └── server.js
│
├── dashboard/
│   ├── public/
│   ├── src/
│   │   ├── Ui_Particles/
│   │   ├── component/
│   │   └── data/
│   └── package.json
│
└── frontend/
    ├── public/
    ├── src/
    │   └── landing_page/
    │       ├── about/
    │       ├── home/
    │       ├── pricing/
    │       ├── products/
    │       ├── signup/
    │       └── support/
    └── package.json
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 👨‍💻 Author

**SRINIVAS BN**

---

## 🔗 Links

- [GitHub Repository](https://github.com/SRINIVASBN/TradeGuru-Stock-Trading-Platform)
