Dockerized Node.js App on AWS EC2

This project is a simple Node.js web application that runs inside a Docker container and is deployed on an AWS EC2 instance.

Output:  
Hello, Dockerized World! â€” available at http://<your-public-ip>:3000

---

## Project Structure

.
â”œâ”€â”€ Dockerfile  
â”œâ”€â”€ app.js  
â”œâ”€â”€ package.json

---

## Tech Stack

- Node.js  
- Express.js  
- Docker  
- AWS EC2 (Ubuntu)

---

## Setup Instructions

1. Clone the Repository

git clone https://github.com/your-username/your-repo-name.git  
cd your-repo-name

2. Build Docker Image

docker build -t node-docker-app .

3. Run Docker Container

docker run -d -p 3000:3000 --name node-docker-app node-docker-app

4. Access the App

Visit in your browser:  
http://<your-ec2-public-ip>:3000

---

## Dockerfile Used

FROM node:20  
WORKDIR /app  
COPY package*.json ./  
RUN npm install  
COPY . .  
EXPOSE 3000  
CMD ["node", "app.js"]

---

## Deployed on

- AWS EC2 Ubuntu Instance  
- Port 3000 exposed in Security Group

---

## Output

Hello, Dockerized World!

---
