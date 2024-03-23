# Vite express app

## Prerequisites

You need following to run the app
- [Node JS](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs) 
- [Docker](https://docs.docker.com/get-docker/)

## Steps to run the project

### Database
```bash 
docker compose up
```

### Migration
```bash
cd server
&& npm i
&& npx tsx ./db/migrate.ts
``` 

### Server
```bash
cd server && npm run dev
```

### Add mock data
With the server running run the following scripts ( does'nt rely on seeders uses the Rest api to create entities ).
```bash
node ./generate-authors.js
node ./generate-courses.js
```

### Client
```bash 
cd client && npm i && npm run dev
```
