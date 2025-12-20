# Todo-app
A Todo management application developed on the MERN stack (MongoDB, Express, React, Node.js). It delivers basic CRUD functionality for tasks with a modern UI and a REST-driven backend. Project includes preliminary Docker configuration for future containerization.

##Tech Stack
Frontend
1. React
2. Vite
3. Tailwind CSS
4. Shadcn UI

Backend
1. Node.js
2. Express.js
3. MongoDB

Containerization(Planned)
1. Dockerfile for backend
2. Dockerfile for frontend
3. Docker Compose for execution

Project structure
root/
 ├─ client/       # React interface
 ├─ server/       # API and database logic
 ├─ docker-compose.yml (planned)
 └─ README.md

Local Setup(Without Docker)

Prerequisites
---> Node.js
---> MongoDB(local setup)

Installation
Clone this repo and install dependencies
git clone https://github.com/purvapatil11/Todo-app.git
cd <project-folder>

Run: 
Server(backend):
cd server
npm run dev

Client(frontend):
cd client
npm run dev

Environment Variables
Create .env inside /server:
MONGO_URI=<your-mongodb-uri>
PORT=8000

Docker Status
dockerfiles for backend and frontend are committed. Execution will be validated later on a compatible system.






