# FitJobs — Job Board Web App

FitJobs is a modern job board platform where users can search, filter, and view job postings. It features Google authentication (via Supabase), a responsive design, and a clean user interface.

---

## 🌐 Live Demo

👉 [View the deployed project on Vercel](https://task-fitofan.vercel.app/)

---

## 🚀 Features

- Google Sign-In with Supabase
- Stores authenticated user info in Supabase Postgres database
- Job posting and filtering
- Responsive UI with Tailwind CSS
- Modular and scalable TypeScript + React architecture

---

## 🛠 Tech Stack

- **Frontend:** React, TypeScript, Vite, Tailwind CSS
- **Auth & DB:** Supabase (Google Login, Postgres)
- **Deployment:** Vercel

---

## ⚙️ Getting Started (Local Setup)

### 1. Clone the repo
```bash
git clone https://github.com/Ebrahim-a/Task-Fitofan.git
cd task-fitofan

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables

add your Supabase credentials in the .env file

```env
VITE_SUPABASE_URL=your-supabase-url  
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### 4. Start the development server
```bash
npm run dev
```
