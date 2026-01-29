# 🌍 Country Information System

## 📖 Project Overview
Country Information System is a frontend-only application built with React. The application consumes data from public country APIs using the Fetch API and custom React hooks. It demonstrates modern frontend development practices such as client-side routing, advanced state management, controlled forms, and component testing.

This project was developed as part of a summative lab assessment and focuses strictly on frontend concepts without implementing a backend server. The `package.json` file is used only for dependency management and development scripts and does not function as a backend.

---

## ✨ Features
- Country search by name with real-time filtering
- Display of country flag, name, and capital
- Detailed country information view
- Region-based filtering (Africa, Europe, Asia, etc.)
- Fully responsive design for mobile and desktop
- Optional dark/light theme toggle
- Loading indicators and error handling
- Component and routing tests

---

## 🧭 Application Pages
- **Home Page** – Displays all countries with search and filtering functionality
- **Dashboard Page** – Shows countries grouped by region
- **Country Details Page** – Displays detailed information for a selected country
- **Add Country Page** – Controlled form to add country data (frontend state only)
- **About Page** – Project description, tools used, and contributors

---

## 🛠️ Technologies Used
- React
- React Router
- JavaScript (ES6+)
- Fetch API
- REST Countries Public API
- Jest
- React Testing Library
- HTML5 & CSS3
- Git & GitHub
- Vite

---

## 🔁 State Management & Hooks
- React hooks: `useState`, `useEffect`
- Custom hook: `useFetchCountries`
- Local component state for form handling and UI updates

---

## 🌐 API Usage
This project uses the REST Countries public API to retrieve country data. All data fetching is handled entirely on the client side.

Example endpoint:
```
https://restcountries.com/v3.1/all
```

---

## 📁 Project Structure
```bash
country-information-system/
│
├── public/
│
├── src/
│   ├── assets/
│   │   └── react.svg
│   │
│   ├── components/
│   │   ├── CountryCard.jsx
│   │   ├── CountryCard.css
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── RegionCard.jsx
│   │   ├── RegionCard.css
│   │   ├── SearchBar.jsx
│   │   └── SearchBar.css
│   │
│   ├── hooks/
│   │   └── useFetchCountries.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Dashboard.jsx
│   │   ├── CountryDetails.jsx
│   │   ├── AddCountry.jsx
│   │   └── About.jsx
│   │
│   ├── tests/
│   │   ├── Home.test.jsx
│   │   ├── Search.test.jsx
│   │   ├── Routing.test.jsx
│   │   └── CountryDetails.test.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js
- npm
- Git

### Installation
```bash
git clone https://github.com/your-username/country-information-system.git
cd country-information-system
npm install
```

### Running the Application
```bash
npm run dev
```

The application will be available at:
```
http://localhost:5173
```

---

## 🧪 Testing
This project uses Jest and React Testing Library.

Run tests:
```bash
npm test
```

Tests cover:
- Page rendering
- Search functionality
- Routing behavior
- Component interactions

---

## 👥 Team Responsibilities & Git Workflow

### 👤 Abdirahman — Project Owner & Core Setup

**Responsibilities**
- Set up application routing
- Build About page
- Build Add Country page
- Integrate all application pages
- Final testing and bug fixes

**Files**
```bash
src/
├── pages/
│   ├── About.jsx
│   ├── AddCountry.jsx
│
├── hooks/
│   └── useFetchCountries.js
│
├── components/
│   ├── Navbar.jsx
│   └── Navbar.css
│
├── App.jsx
├── App.css
├── main.jsx
├── index.css
```

**Branch**
```bash
feature/about-addcountry-core
```

---

### 👤 Amon — Home Page

**Responsibilities**
- Display all countries
- Implement search functionality
- Filter countries by name
- Use existing components only

**Files**
```bash
src/
├── pages/
│   ├── Home.jsx
│   └── Home.css
│
├── tests/
│   ├── Home.test.jsx
│   └── Search.test.jsx
```

**Branch**
```bash
feature/home-page
```

---

### 👤 Alvin — Dashboard (Regions Page)

**Responsibilities**
- Display countries by region
- Build region summary cards
- Use region-based API data

**Files**
```bash
src/
├── pages/
│   └── Dashboard.jsx
│
├── components/
│   ├── RegionCard.jsx
│   └── RegionCard.css
```

**Branch**
```bash
feature/dashboard-page
```

---

### 👤 Abdulhadi — Country Details Page

**Responsibilities**
- Display detailed country information
- Read route parameters
- Implement routing tests

**Files**
```bash
src/
├── pages/
│   └── CountryDetails.jsx
│
├── tests/
│   ├── CountryDetails.test.jsx
│   └── Routing.test.jsx
```

**Branch**
```bash
feature/country-details
```

---

## 🚫 Contribution Rules
- Do NOT edit files outside your assignment
- Do NOT push directly to `main`
- Always work in your assigned branch
- Always pull the latest changes before starting work

---

## 👥 Contributors
| Name | GitHub Username |
|------|---------------|
| Abdirahman Cabdi | https://github.com/AbdiCHAN |
| Alvin Wanjohi | https://github.com/wanjohialvins |
| Amon Ogino | https://github.com/amon-sudo |
| Abdulhadi Mohamed | https://github.com/abdulhadishueb |

---

## 📌 License
This project was created for educational purposes as part of a summative assessment.
