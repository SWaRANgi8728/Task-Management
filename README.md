# Task Management Application
## Overview

A full-stack Task Management Application where users can add, view, edit, and delete tasks.

Frontend: React/Next.js with Material UI and Bootstrap

Backend: Node.js + Express

Data storage: In-memory array or JSON file

## Features

Add, edit, delete tasks

Mark tasks as completed

Responsive UI for desktop, tablet, and mobile

Task priority badges and status indicators

Modal dialogs for task creation and editing

Snackbars for success/error notifications

## Technologies Used

React

Node.js / Express

Bootstrap

Material UI

Axios / Fetch API

Git for version control

# How to Run Locally

## Clone repository

git clone https://github.com/SWaRANgi8728/Task-Management.git
cd Task-Management


Install dependencies
Backend:

cd backend
npm install
node index.js


# Frontend:

cd frontend
npm install
npm start


Open frontend:
Go to http://localhost:3000
Backend API runs at http://localhost:5000

## API Endpoints

GET /tasks – Get all tasks

POST /tasks – Add a new task

PUT /tasks/:id – Update a task

DELETE /tasks/:id – Delete a task
