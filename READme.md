# ScamShield

ScamShield is a full-stack web application that helps users detect potentially fraudulent messages, analyze risk levels, and maintain a history of scam reports through an interactive dashboard.

---

## Why I Built This Project

Online scams are becoming increasingly common through SMS, emails, calls, and social media platforms. I built ScamShield to gain hands-on experience with full-stack development while solving a real-world security problem.

The project focuses on authentication, API development, database integration, dashboard analytics, and scam detection using custom risk analysis logic.

---

## Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Secure Password Hashing with bcrypt.js

### Scam Detection

* Analyze suspicious messages
* Risk Classification:

  * HIGH Risk
  * MEDIUM Risk
  * LOW Risk
* Risk Score Generation
* Detection Reason Explanation

### Dashboard

* Total Scam Checks
* High Risk Reports Count
* Medium Risk Reports Count
* Safe Reports Count
* Real-Time Statistics

### History Tracking

* View Previous Reports
* Risk Level Tracking
* Message Analysis History
* Timestamped Records

### User Profile

* Logged-in User Information
* Protected User Dashboard
* Secure Session Management

### Database Integration

* MongoDB Atlas Cloud Database
* Persistent Report Storage
* User-Specific Data Management

---

## Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Responsive UI Design
* Font Awesome Icons

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication & Security

* JWT (JSON Web Token)
* bcrypt.js

---

## API Endpoints

### Authentication

| Method | Endpoint           | Description                 |
| ------ | ------------------ | --------------------------- |
| POST   | /api/auth/register | Register a new user         |
| POST   | /api/auth/login    | Login and receive JWT token |

### User

| Method | Endpoint          | Description                |
| ------ | ----------------- | -------------------------- |
| GET    | /api/user/profile | Get logged-in user profile |

### Scam Detection

| Method | Endpoint          | Description                |
| ------ | ----------------- | -------------------------- |
| POST   | /api/scam/check   | Analyze suspicious message |
| GET    | /api/scam/history | Get scam report history    |
| GET    | /api/scam/stats   | Get dashboard statistics   |

---

## Project Structure

```text
ScamShield
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   └── server.js
│
├── frontend
│   ├── css
│   ├── js
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   └── history.html
│
└── README.md
```

---

## Implemented Features

✅ MongoDB Atlas Connection

✅ User Registration & Login

✅ JWT Authorization

✅ Protected APIs

✅ Scam Detection Engine

✅ Risk Classification System

✅ Scam Report Storage

✅ Dashboard Statistics

✅ Recent Activity Tracking

✅ History Management

✅ Responsive Frontend

✅ User Profile Section

---

## Screenshots

Project screenshots will be added after deployment.

---

## Future Improvements

* AI-Based Scam Detection
* URL & Phishing Link Scanner
* Email Scam Detection
* Admin Dashboard
* Advanced Risk Scoring Algorithm
* Data Visualization Charts
* Export Reports Feature
* Machine Learning Integration

---

## Learning Outcomes

Through this project I learned:

* REST API Development
* Authentication & Authorization
* JWT Security
* MongoDB Atlas Integration
* Backend Architecture
* Frontend & Backend Communication
* Git & GitHub Workflow
* Full-Stack Project Deployment

---

## Author

**Siddhi Dublish**

Full-Stack Security Focused Project built to strengthen backend development, authentication, database management, and real-world problem-solving skills.

---

⭐ If you like this project, consider giving it a star on GitHub.
