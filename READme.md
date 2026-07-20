# ScamShield

ScamShield is a full-stack web application that helps users identify potentially fraudulent messages and maintain a history of scam reports.

## Why I Built This Project

Online scams are becoming increasingly common through SMS, emails, calls, and social media. I built ScamShield to learn backend development, authentication, database integration, and API development while working on a real-world problem.

The goal of this project is to analyze suspicious messages, classify their risk level, and help users keep track of scam reports in one place.

## Features

* User Registration and Login
* Secure Authentication using JWT
* Protected Routes
* Scam Message Detection
* Risk Classification (High, Medium, Low)
* Scam Report History
* Dashboard Statistics
* MongoDB Atlas Integration

## Tech Stack

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

### Authentication

* JWT (JSON Web Token)
* bcrypt.js

## API Endpoints

### Authentication

| Method | Endpoint             | Description                 |
| ------ | -------------------- | --------------------------- |
| POST   | `/api/auth/register` | Register a new user         |
| POST   | `/api/auth/login`    | Login and receive JWT token |

### User

| Method | Endpoint            | Description                |
| ------ | ------------------- | -------------------------- |
| GET    | `/api/user/profile` | Get logged-in user profile |

### Scam Detection

| Method | Endpoint            | Description                                  |
| ------ | ------------------- | -------------------------------------------- |
| POST   | `/api/scam/check`   | Analyze a message and generate a scam report |
| GET    | `/api/scam/history` | View previously analyzed scam reports        |
| GET    | `/api/scam/stats`   | Get dashboard statistics and report counts   |

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
│   └── server.js
│
├── frontend
│
└── README.md
```

## Current Status

### Backend Completed

* MongoDB Atlas Connection
* User Authentication
* JWT Authorization
* Protected Routes
* Scam Detection API
* Scam Report Storage
* Scam History API
* Dashboard Statistics API

### Frontend Development In Progress

The frontend will be built using HTML, CSS, and JavaScript and will include:

* Login Page
* Registration Page
* Dashboard
* Scam Checker
* History Page

## Future Improvements

* AI-Based Scam Detection
* URL Scam Scanner
* Admin Dashboard
* Advanced Risk Scoring
* Data Visualization and Analytics

## Author

**Siddhi Dublish**

Built as a learning project to strengthen full-stack web development skills and explore security-focused web applications.
