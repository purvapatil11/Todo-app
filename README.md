# 📝 Todo App (MERN Stack)

A full‑stack **Todo Management Application** built using the **MERN stack** (MongoDB, Express, React, Node.js). The application provides a clean, modern UI and a REST‑driven backend to perform complete **CRUD operations** on tasks.

This project is designed with scalability in mind and includes **preliminary Docker configuration** for future containerized deployment.

---

## 🚀 Features

* Create, Read, Update, and Delete (CRUD) todos
* RESTful API architecture
* Modern, responsive UI
* Clean project separation (client & server)
* Environment‑based configuration
* Docker support (planned & partially implemented)

---

## 🛠 Tech Stack

### Frontend

* **React** (with Vite)
* **Tailwind CSS**
* **shadcn/ui**

### Backend

* **Node.js**
* **Express.js**
* **MongoDB**

### Containerization (Planned)

* Dockerfile (Frontend)
* Dockerfile (Backend)
* Docker Compose (Execution – planned)

---

## 📁 Project Structure

```
root/
│
├── client/              # React frontend
├── server/              # Backend API & DB logic
├── docker-compose.yml   # Planned
├── README.md
```

---

## ⚙️ Local Setup (Without Docker)

### Prerequisites

Make sure the following are installed on your system:

* **Node.js** (v18+ recommended)
* **MongoDB** (local or cloud instance)

---

### 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/purvapatil11/Todo-app.git
cd Todo-app
```

---

### ▶️ Running the Application

#### Start Backend Server

```bash
cd server
npm install
npm run dev
```

The backend will run on **[http://localhost:8000](http://localhost:8000)**

---

#### Start Frontend Client

```bash
cd client
npm install
npm run dev
```

The frontend will run on **[http://localhost:5173](http://localhost:5173)** (default Vite port)

---

## 🔐 Environment Variables

Create a `.env` file inside the `/server` directory:

```
MONGO_URI=your_mongodb_connection_string
PORT=8000
```
## 🐳 Docker Status

* Dockerfiles for **frontend** and **backend** are committed
* Docker Compose setup is planned
* Full container execution will be validated on a compatible system in future updates

