pipeline {
  agent any

  stages {
    stage('Select pipeline') {
      steps {
        script {
          if (env.BRANCH_NAME == 'dev') {
            load 'Jenkinsfile.dev'
          } 
          else if (env.BRANCH_NAME.startsWith('pr')) {
            load 'Jenkinsfile.pr'
          } 
          else if (env.BRANCH_NAME == 'main' || env.BRANCH_NAME == 'release') {
            load 'Jenkinsfile.release'
          } 
          else {
            error "No pipeline defined for branch ${env.BRANCH_NAME}"
          }
        }
      }
    }
  }
}
