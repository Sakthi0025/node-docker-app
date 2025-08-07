pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/Sakthi0025/node-docker-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                docker stop node-app || true
                docker rm node-app || true
                docker rmi node-app-img || true

                docker build -t node-app-img .
                '''
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                docker run -d -p 3000:3000 --name node-app node-app-img
                '''
            }
        }
    }
}
