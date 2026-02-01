# 🌍 Country Information System

## 📖 Project Overview
Country Information System is a frontend-only React application that consumes data from public country APIs using the Fetch API and custom React hooks. It demonstrates modern frontend development practices including client-side routing, state management, controlled forms, testing, and responsive UI design.

This project was developed as part of a summative lab assessment and focuses strictly on frontend concepts. No backend server is implemented; `package.json` is used only for dependency management and development scripts.

---

## ✨ Features
- Search countries by name with real-time filtering
- Display country flag, name, and capital
- Detailed country information page
- Region-based filtering (Africa, Europe, Asia, etc.)
- Responsive design (mobile & desktop)
- Loading and error states
- Component and routing tests

---

## 🧭 Application Pages
- **Home Page** – Displays all countries with search
- **Dashboard Page** – Countries grouped by region
- **Country Details Page** – Detailed information for a selected country
- **Add Country Page** – Controlled form (frontend-only state)
- **About Page** – Project description, tools, and contributors

---

## 🛠️ Technologies Used
- React
- React Router
- JavaScript (ES6+)
- Fetch API
- REST Countries API
- Jest & React Testing Library
- HTML5 & CSS3
- Git & GitHub
- Vite

---

## 🔁 State Management & Hooks
- `useState`, `useEffect`
- Custom hook: `useFetchCountries`
- Local component state for forms and UI

---

## 🌐 API Usage
All data is fetched client-side from REST Countries API.

**API Endpoints**
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
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── tests/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── package.json
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

### Run App
```bash
npm run dev
```
Visit: `http://localhost:5173`

---

## 🧪 Testing
```bash
npm test
```

---

## 👥 Team Responsibilities & Git Workflow

> ⚠️ Rules  
> - Do NOT edit files outside your assignment  
> - Do NOT push directly to `main`  
> - Always pull latest changes before working  

---

### 👤 Abdirahman — Project Owner & Core Setup
**Branch:** `about-addcountry`

**Responsibilities**
1. Application routing
2. Navbar & global layout
3. About page
4. Add Country page
5. Data fetching hook
6. Core assets & configuration
7. Integration, testing, and bug fixes

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

**Workflow**
```bash
1. Switch to branch
git switch about-addcountry

2. Pull latest changes
git pull origin about-addcountry

3. Make changes

4. Stage changes
git add src/pages/About.jsx src/pages/AddCountry.jsx src/hooks/useFetchCountries.js \
src/components/Navbar.jsx src/components/Navbar.css src/App.jsx src/App.css \
src/main.jsx src/index.css src/assets/react.svg

5. Commit
git commit -m "Set up core routing, assets, About and Add Country pages"

6. Switch to main
git switch main

7. Pull latest main
git pull origin main

8. Merge branch
git merge about-addcountry

9. Push to GitHub
git push origin main
```


---

### 👤 Amon — Home Page
**Branch:** `home-page`

**Responsibilities**
1. Display all countries
2. Search functionality
3. Filter by country name

**Assigned Files**
- src/pages/Home.jsx
- src/pages/Home.css
- src/components/CountryCard.jsx
- src/components/CountryCard.css
- src/components/SearchBar.jsx
- src/components/SearchBar.css
- src/tests/Home.test.jsx
- src/tests/Search.test.jsx

**Workflow**
```bash
1. Switch to branch
git switch home-page

2. Pull latest changes
git pull origin home-page

3. Make changes

4. Stage files
git add src/pages/Home.jsx src/pages/Home.css \
src/components/CountryCard.jsx src/components/CountryCard.css \
src/components/SearchBar.jsx src/components/SearchBar.css \
src/tests/Home.test.jsx src/tests/Search.test.jsx

5. Commit
git commit -m "Implement Home page with country list and search"

6. Merge into main
git switch main
git pull origin main
git merge home-page
git push origin main
```

---

### 👤 Alvins — Dashboard (Regions Page)
**Branch:** `dashboard` (to be created)

**Responsibilities**
1. Display countries by region
2. Region summary cards
3. Region-based API usage
   

**Assigned Files**
- src/pages/Dashboard.jsx
- src/pages/Dashboard.css
- src/components/RegionCard.jsx
- src/components/RegionCard.css

**Workflow**
```bash
1. Create and switch branch
git checkout -b dashboard

2. Push branch
git push -u origin dashboard

3. Pull latest
git pull origin dashboard

4. Make changes

5. Stage files
git add src/pages/Dashboard.jsx src/components/RegionCard.jsx src/components/RegionCard.css

6. Commit
git commit -m "Add dashboard page with region cards"

7. Merge into main
git switch main
git pull origin main
git merge dashboard
git push origin main
```

---

### 👤 Abdullhadi — Country Details Page
**Branch:** `country-details`

**Responsibilities**
1. Country details page
2. Route parameters
3. Routing tests

**Assigned Files**
- src/pages/CountryDetails.jsx
- src/tests/CountryDetails.test.jsx
- src/tests/Routing.test.jsx

**Workflow**
```bash
1. Switch to branch
git switch country-details

2. Pull latest
git pull origin country-details

3. Make changes

4. Stage files
git add src/pages/CountryDetails.jsx \
src/tests/CountryDetails.test.jsx src/tests/Routing.test.jsx

5. Commit
git commit -m "Implement country details page and routing tests"

6. Merge into main
git switch main
git pull origin main
git merge country-details
git push origin main
```

---

## 👥 Contributors
| Name | GitHub |
|-----|-------|
| Abdirahman Cabdi | https://github.com/AbdiCHAN |
| Alvins Wanjohi | https://github.com/wanjohialvins |
| Amon Ogino | https://github.com/amon-sudo |
| Abdullhadi Mohamed | https://github.com/abdulhadishueb |

---

## 📌 License

Educational project — Summative assessment

