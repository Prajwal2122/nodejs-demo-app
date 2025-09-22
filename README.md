# Node.js Demo App with CI/CD (GitHub Actions + DockerHub)

This is a simple Node.js application built with **Express.js**, containerized with **Docker**, and automated using a **CI/CD pipeline** via **GitHub Actions**.  
The pipeline runs tests, builds the Docker image, and pushes it to **DockerHub** on every push to the `main` branch.

---

## 🚀 Features
- Node.js + Express.js demo API
- Unit testing with **Jest** and **Supertest**
- Dockerized for containerized deployment
- CI/CD pipeline using **GitHub Actions**
- Automatic Docker image push to **DockerHub**

---

## 📂 Project Structure
# Node.js Demo App with CI/CD (GitHub Actions + DockerHub)

This is a simple Node.js application built with **Express.js**, containerized with **Docker**, and automated using a **CI/CD pipeline** via **GitHub Actions**.  
The pipeline runs tests, builds the Docker image, and pushes it to **DockerHub** on every push to the `main` branch.

---

## 🚀 Features
- Node.js + Express.js demo API
- Unit testing with **Jest** and **Supertest**
- Dockerized for containerized deployment
- CI/CD pipeline using **GitHub Actions**
- Automatic Docker image push to **DockerHub**

---

## 📂 Project Structure
nodejs-demo-app/
│
├── app.js # Express app logic
├── server.js # Entry point
├── package.json # Project metadata & scripts
├── Dockerfile # Docker build instructions
├── .dockerignore # Ignore files in Docker build
├── .gitignore # Ignore files in Git
├── test/
│ └── app.test.js # Jest test file
└── .github/
└── workflows/
└── main.yml # GitHub Actions workflow

---

## 🛠️ Run Locally

### 1. Clone repo
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/nodejs-demo-app.git
cd nodejs-demo-app
### 2. Install dependencies
npm ci
### 3. Run tests
npm test
### 4. Start server
npm start
### Visit http://localhost:3000 - should return
 "message": "Hello from Node.js demo app" }

Run with Docker
Build Docker image
bash
Copy code
docker build -t YOUR_DOCKERHUB_USERNAME/nodejs-demo-app:latest .
Run container
bash
Copy code
docker run -p 3000:3000 YOUR_DOCKERHUB_USERNAME/nodejs-demo-app:latest
Open: http://localhost:3000

CI/CD Pipeline (GitHub Actions)
Workflow file: .github/workflows/main.yml

Pipeline steps:

Checkout repo

Setup Node.js

Install dependencies

Run tests

Login to DockerHub (with GitHub Secrets)

Build & push Docker image

Required GitHub Secrets

DOCKERHUB_USERNAME → your DockerHub username
DOCKERHUB_PASSWORD → your DockerHub password or access token

Screenshots (to be added)
GitHub Actions successful workflow run

DockerHub repository with pushed image

Local application running in browser

(Create a folder images/ in the repo and place your screenshots there, then update these file paths.)

📦 DockerHub
Docker images are automatically pushed to:

bash
Copy code
docker pull YOUR_DOCKERHUB_USERNAME/nodejs-demo-app:latest

Deliverables
Source code in GitHub repo

.github/workflows/main.yml (CI/CD pipeline)

Screenshots of:

Passing GitHub Actions workflow

DockerHub repo with pushed image

Local app running

README.md (this file)

yaml 
---

Would you like me to also **generate a sample folder structure with the `images/` folder and placeholder `.png` files** so you can commit it directly to GitHub without errors, or do you just want the README.md alone?

