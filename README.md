# Pathrise-Job-Source

## a)
- Project stack is composed of a few different technologies.
  - Docker-Compose for orchestration of services.
  - Front end container built in vanilla React.js.
  - Middleware REST API server container (accessed by the React front end) built using Node.js and Express.
  - Database Docker container running latest Postgres image.
  - Google Cloud Compute Instance to host docker containers (Public IP: http://34.125.24.177/)

## b)
- https://github.com/zackpcodes/Pathrise-Job-Source/blob/main/Backend/pathrise-DB/data/job.js

## c)
- "react-router-dom": Used to add navigation to React.js.
- 'dotenv': Small module used to load .env files.
- 'pg-promise': Used to query Postgres DB with built in promise resolution.
- 'cors': Used to disable cors in dev environment.
- 'cookie-parser': Used to quickly parse incoming cookies from frontend.

## d)
- http://34.125.24.177/ (GCP instance)

## e)
- https://github.com/zackpcodes/Pathrise-Job-Source/blob/main/Backend/pathrise-DB/data/job_opportunities.csv

## f)
- https://github.com/zackpcodes/Pathrise-Job-Source/blob/main/Backend/pathrise-DB/data/total_job_count.txt
