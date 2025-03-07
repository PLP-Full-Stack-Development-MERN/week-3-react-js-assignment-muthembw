# React + Tailwind CSS Project

## 📌 Project Setup

### 1️⃣ Prerequisites
Ensure you have the following installed:
- **Node.js** (v20+ recommended)
- **npm** (v9+ recommended)
- **VS Code** (or any preferred code editor)

### 2️⃣ Install Node.js & npm (if not installed)
To install using **Node Version Manager (NVM)**:
```sh
nvm install 20
nvm use 20
```
Check versions:
```sh
node -v
npm -v
```

### 3️⃣ Clone the Repository
```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/react-assignment.git
cd react-assignment
```

### 4️⃣ Install Dependencies
```sh
npm install
```

## 🖌️ Tailwind CSS Setup
If Tailwind is not already initialized, run:
```sh
npx tailwindcss init -p
```
Ensure `tailwind.config.js` has the correct content:
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
Update `index.css` to include Tailwind:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 🚀 Running the Project
To start the development server:
```sh
npm run dev
```
The app will be available at: `http://localhost:5173/`

## 📂 Project Structure
```
react-assignment/
│-- src/
│   │-- components/
│   │   │-- Header.jsx
│   │   │-- Profile.jsx
│   │   │-- Counter.jsx
│   │-- App.jsx
│   │-- main.jsx
│-- public/
│-- package.json
│-- tailwind.config.js
│-- README.md
```

## 🛠️ Features
- Functional React components (`Header`, `Profile`, `Counter`)
- State management using `useState`
- Styled with **Tailwind CSS**
- Responsive UI

## 📝 How to Use
1. Click the **Counter** button to increase the count.
2. View user details in the **Profile** component.
3. Modify the **Header** text in `Header.jsx`.

## 📤 Deployment
To build the project for production:
```sh
npm run build
```

## 📝 Contribution
Feel free to fork the repository and create a pull request!

## 📜 License
MIT License © 2025 Bridget Masila.

