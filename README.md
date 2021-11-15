# Job-Source-Resolution

## Intro
- Project allows for the selection and display of jobs from a particular job source (linkedin, Google Jobs, etc.)

## Stack
- Project stack is composed of a few different technologies.
  - Docker-Compose for orchestration of services.
  - Front end container built in vanilla React.js.
  - Middleware REST API server container (accessed by the React front end) built using Node.js and Express.
  - Database Docker container running latest Postgres image.
  - Google Cloud Compute Instance to host docker containers (Public IP: http://34.125.24.177/)
