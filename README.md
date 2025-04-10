# Task Manager — Prisma + Next.js

This is a full-stack Task Manager app built using **Next.js (App Router)** for the frontend and API routes, and **Prisma ORM** for interacting with a PostgreSQL database.

The database, Prisma, and API routes are all beautifully integrated and fully synced, enabling smooth CRUD operations for task management.

---

## Stack Used

- **Next.js 15 (App Router + Turbopack)**
- **Prisma ORM**
- **PostgreSQL (via Prisma Accelerate or SQLite for local)**
- **Tailwind CSS** for styling

---

## Project Description

This app is part of an assignment to build a functional **Task Manager** using modern full-stack tools. The backend is complete and fully working — users can:

- Add new tasks
- Toggle task completion
- Delete tasks

The frontend is currently functional and styled with Tailwind. In future iterations, I plan to:

- Improve the UI and UX
- Add support for due dates, time, or calendar views
- Add user authentication
- Deploy it to **Vercel**

---

## GETTING STARTED

If you'd like to run the project locally, follow these steps:

### 1. Clone the Repo

```bash
git clone https://github.com/lemuntu/taskmanager.git
cd taskmanager

### 2. Install Dependencies
npm install

### 3. Set up Environment Variables
Create a .env file in the root and add your database connection string:
DATABASE_URL="your_database_connection_string"

### 4. Run Migrations and Generate Prisma Client
npx prisma migrate dev --name init
npx prisma generate

### 5. Run the Dev Server
npm run dev

Visit: http://localhost:3000
http://localhost:3000/api/tasks

Note: I am also using POSTMAN to run some tests