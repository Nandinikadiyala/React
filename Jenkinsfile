pipeline{
    agent any
    
    environment{
                IMAGE_NAME = 'kadiyalanandini2002/docker_repository'
                TAG = 'latest'
                DOCKERHUB_CREDENTIALS_ID = 'kadiyalanandini2002'
    }
    stages{
        stage('code checkout'){
            steps{
              git credentialsId: '0e69b32e-629c-4b9a-ace9-6ecf11871d60', url: 'https://github.com/Nandinikadiyala/React.git'
           }
        }
        stage('Build Docker Image'){
            steps{
               script{
                       docker.build("${IMAGE_NAME}:${TAG}")
               }
           }
       }
        stage('push to Docker hub'){
          steps{
              script{
                  docker.withRegistry('https://index.docker.io/v1/', "${DOCKERHUB_CREDENTIALS_ID}") {
                      dockerImage.push()
                  }
              }
          }  
        }
    }
 }