Country Information System

## 📖 Project Overview
Stitch is a frontend-only Country Information System built with React. The application consumes data from public country APIs using the Fetch API and custom React hooks. It demonstrates modern frontend development practices such as client-side routing, advanced state management, controlled forms, and component testing.

This project was developed as part of a summative lab assessment and focuses strictly on frontend concepts without implementing a backend server.

---

## ✨ Features
- Fetch and display country data from public APIs
- Dynamic search functionality to filter countries by name
- Dashboard showing regions and country counts
- Add country form using controlled inputs (client-side state)
- Edit country details such as population, capital, and region (frontend state)
- Client-side routing with multiple pages
- Responsive design aligned with the provided mock-up
- Component and interaction testing

---

## 🧭 Application Pages
- **Home Page** – Overview of the system, list of countries fetched from an API, and search functionality
- **Dashboard Page** – Region overview and country counts based on fetched data
- **Add Country Page** – Form to add a new country using controlled inputs (frontend state only)
- **Country Details Page** – View and edit country information using local state
- **About Page** – Project description, tools used, and contributors

---

## 🛠️ Technologies Used
- **React**
- **React Router**
- **JavaScript (ES6+)**
- **Fetch API**
- **REST Countries Public API**
- **Jest**
- **React Testing Library**
- **HTML5 & CSS3**
- **Git & GitHub**

---

## 🔁 State Management & Hooks
- Standard React hooks: `useState`, `useEffect`
- Custom fetch hook for reusable API data retrieval
- Local component state used for form handling and data updates

---

## 🌐 API Usage
This project uses the REST Countries public API to retrieve country data. All data operations are handled entirely on the client side using fetch requests and React state.

Example endpoint:
https://restcountries.com/v3.1/all

---

## 📁 Project Structure
country-information-system/
│
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── CountryCard.jsx
│ │ ├── SearchBar.jsx
│ │ └── RegionCard.jsx
│ │
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── Dashboard.jsx
│ │ ├── AddCountry.jsx
│ │ ├── CountryDetails.jsx
│ │ └── About.jsx
│ │
│ ├── hooks/
│ │ └── useFetchCountries.js
│ │
│ ├── tests/
│ │ ├── Home.test.jsx
│ │ ├── Search.test.jsx
│ │ ├── Routing.test.jsx
│ │ └── CountryDetails.test.jsx
│ │
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── README.md
├── package.json
└── .gitignore

---

## 🚀 Getting Started

### Prerequisites
- Node.js
- npm
- Git

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/stitch-country-information-system.git

#
2. Navigate into the project directory:
cd stitch-country-information-system

#
3. Install Dependencies:
npm install

# Running the Application
npm run dev

The application will be available at:
http://localhost:5173

# Testing 
This project uses Jest and React Testing library to test components and user interactions.

To run tests:

npm test
Tests cover:

Page rendering

Search functionality

Routing behavior

Component interactions

🌱 Git Workflow

Feature-based branching strategy

Separate branches for routing, hooks, UI, and testing

Pull requests merged into the main branch

Clean and descriptive commit messages

## 👥 Contributors

| Name | GitHub Username |
|------|----------------|
| Abdirahman Cabdi | [AbdiCHAN](https://github.com/AbdiCHAN) |
| Alvin Wanjohi | [wanjohialvins](https://github.com/wanjohialvins) |
| Amon Ogino | [amon-sudo](https://github.com/amon-sudo) |
| Abdulhadi Mohamed | [abdulhadishueb](https://github.com/abdulhadishueb) |

📌 License

This project was created for educational purposes as part of a summative assessment.
