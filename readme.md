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

### Client
```bash 
cd client && npm i && npm run dev
```
