# React CI Project (DevOps course)

This repository is a ready scaffold for the ISG Sousse DevOps project.
It contains:
- Vite + React simple app
- Multi-stage Dockerfile (build + nginx)
- Smoke test script
- ci-scripts for archiving artifacts
- 3 Jenkinsfiles: Jenkinsfile.pr, Jenkinsfile.dev, Jenkinsfile.release

How to use:
1. Install dependencies: `npm ci`
2. Build locally: `npm run build`
3. Build Docker image: `docker build -t react-ci .`
4. Run container: `docker run -p 8080:80 react-ci`
5. Run smoke test: `bash smoke/smoke_test.sh http://localhost 8080`

Jenkins setup notes:
- Create three multibranch or pipeline jobs and link them to these Jenkinsfiles.
- Configure triggers: PR -> Jenkinsfile.pr, push to dev -> Jenkinsfile.dev, tag -> Jenkinsfile.release
- Provide Docker and Git credentials as needed.
