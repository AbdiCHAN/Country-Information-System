# 🌍 Country Information System

## 📖 Project Overview
Country Information System is a frontend-only React application that consumes data from public country APIs using the Fetch API and custom React hooks. The app demonstrates modern frontend development practices including client-side routing, state management, controlled forms, component testing, and responsive design.

This project was created as part of a summative lab assessment and focuses strictly on frontend concepts. The `package.json` is used solely for dependency management and development scripts; no backend is implemented.

---

## ✨ Features
- Search countries by name with real-time filtering
- Display country flag, name, and capital
- Detailed country information view
- Region-based filtering (Africa, Europe, Asia, etc.)
- Fully responsive design for mobile and desktop
- Optional dark/light theme toggle
- Loading indicators and error handling
- Component and routing tests

---

## 🧭 Application Pages
- **Home Page** – Displays all countries with search and filtering
- **Dashboard Page** – Shows countries grouped by region
- **Country Details Page** – Displays detailed info for a selected country
- **Add Country Page** – Controlled form to add country data (frontend only)
- **About Page** – Project description, tools used, and contributors

---

## 🛠️ Technologies Used
- React & React Router
- JavaScript (ES6+)
- Fetch API
- REST Countries Public API
- Jest & React Testing Library
- HTML5 & CSS3
- Git & GitHub
- Vite

---

## 🔁 State Management & Hooks
- React hooks: `useState`, `useEffect`
- Custom hook: `useFetchCountries`
- Local state for form handling and UI updates

---

## 🌐 API Usage
This project uses the REST Countries public API to retrieve country data. All fetching is client-side.

**API Links**
```
All countries: https://restcountries.com/v3.1/all
Africa: https://restcountries.com/v3.1/region/africa
Americas: https://restcountries.com/v3.1/region/americas
Asia: https://restcountries.com/v3.1/region/asia
Europe: https://restcountries.com/v3.1/region/europe
Oceania: https://restcountries.com/v3.1/region/oceania
Antarctic: https://restcountries.com/v3.1/region/antarctic
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

Visit:
```
http://localhost:5173
```

---

## 🧪 Testing
```bash
npm test
```
Covers:
- Page rendering
- Search functionality
- Routing behavior
- Component interactions

---

## 👥 Team Responsibilities & Branch Workflow

> ⚠️ Rules
> - Work only on your assigned files
> - Do NOT push directly to `main`
> - Pull latest changes before starting
> - Merge to `main` only after completing your task

---

### 👤 Abdirahman — Project Owner & Core Setup
**Responsibilities**
1. Application routing
2. Shared fetching logic (`useFetchCountries.js`)
3. Core layout & global styling
4. About & Add Country pages
5. Navbar and navigation
6. Final integration, testing, bug fixes

**Assigned Files**
- src/pages/About.jsx
- src/pages/AddCountry.jsx
- src/hooks/useFetchCountries.js
- src/components/Navbar.jsx
- src/components/Navbar.css
- src/App.jsx
- src/App.css
- src/main.jsx
- src/index.css
- src/assets/react.svg

**Branch & Workflow**
```bash
1. Switch to branch
git switch feature/about-addcountry-core

2. Pull latest changes
git pull origin feature/about-addcountry-core

3. Make changes
# Edit About, AddCountry, Navbar, fetching logic

4. Stage changes
git add src/pages/About.jsx src/pages/AddCountry.jsx src/hooks/useFetchCountries.js \
src/components/Navbar.jsx src/components/Navbar.css src/App.jsx src/App.css \
src/main.jsx src/index.css src/assets/react.svg

5. Commit changes
git commit -m "Set up core routing, fetching logic, About and Add Country pages"

6. Switch to main
git switch main

7. Pull latest main
git pull origin main

8. Merge branch
git merge feature/about-addcountry-core

9. Push to GitHub
git push origin main
```

---

### 👤 Amon — Home Page
**Responsibilities**
1. Display all countries
2. Implement search functionality
3. Filter countries by name
4. Use existing components only

**Assigned Files**
- src/pages/Home.jsx
- src/pages/Home.css
- src/components/CountryCard.jsx
- src/components/CountryCard.css
- src/components/SearchBar.jsx
- src/components/SearchBar.css
- src/tests/Home.test.jsx
- src/tests/Search.test.jsx

**Branch & Workflow**
```bash
1. Switch to branch
git switch feature/home-page

2. Pull latest changes
git pull origin feature/home-page

3. Make changes
# Edit Home page, CountryCard, SearchBar, tests

4. Stage changes
git add src/pages/Home.jsx src/pages/Home.css src/components/CountryCard.jsx \
src/components/CountryCard.css src/components/SearchBar.jsx src/components/SearchBar.css \
src/tests/Home.test.jsx src/tests/Search.test.jsx

5. Commit changes
git commit -m "Implement Home page with country list and search"

6. Switch to main
git switch main

7. Pull latest main
git pull origin main

8. Merge branch
git merge feature/home-page

9. Push to GitHub
git push origin main
```

---

### 👤 Alvins — Dashboard (Regions Page)
**Responsibilities**
1. Display countries by region
2. Build region summary cards
3. Use region-based API data

**Assigned Files**
- src/pages/Dashboard.jsx
- src/components/RegionCard.jsx
- src/components/RegionCard.css

**Branch & Workflow**
```bash
1. Create and switch branch
git checkout -b feature/dashboard-page

2. Push branch to remote
git push -u origin feature/dashboard-page

3. Pull latest changes
git pull origin feature/dashboard-page

4. Make changes
# Edit Dashboard page and Region cards

5. Stage changes
git add src/pages/Dashboard.jsx src/components/RegionCard.jsx src/components/RegionCard.css

6. Commit changes
git commit -m "Add dashboard page with region cards"

7. Switch to main
git switch main

8. Pull latest main
git pull origin main

9. Merge branch
git merge feature/dashboard-page

10. Push to GitHub
git push origin main
```

---

### 👤 Abdulhadi — Country Details Page
**Responsibilities**
1. Display detailed country information
2. Read route parameters
3. Implement routing tests

**Assigned Files**
- src/pages/CountryDetails.jsx
- src/tests/CountryDetails.test.jsx
- src/tests/Routing.test.jsx

**Branch & Workflow**
```bash
1. Create and switch branch
git checkout -b feature/country-details

2. Push branch to remote
git push -u origin feature/country-details

3. Pull latest changes
git pull origin feature/country-details

4. Make changes
# Edit CountryDetails page and routing tests

5. Stage changes
git add src/pages/CountryDetails.jsx src/tests/CountryDetails.test.jsx src/tests/Routing.test.jsx

6. Commit changes
git commit -m "Implement country details page and routing tests"

7. Switch to main
git switch main

8. Pull latest main
git pull origin main

9. Merge branch
git merge feature/country-details

10. Push to GitHub
git push origin main
```

---

## 🚫 Contribution Rules
- Work only on assigned files
- Do NOT push directly to `main`
- Pull latest changes before starting
- Merge to `main` only after completing your work

---

## 👥 Contributors
| Name | GitHub |
|------|--------|
| Abdirahman Cabdi | https://github.com/AbdiCHAN |
| Alvins Wanjohi | https://github.com/wanjohialvins |
| Amon Ogino | https://github.com/amon-sudo |
| Abdulhadi Mohamed | https://github.com/abdulhadishueb |

---

## 📌 License
Educational purposes – summative lab assessment
