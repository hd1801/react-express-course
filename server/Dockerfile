FROM node:alpine

WORKDIR /app/server

COPY . .

RUN npm install

RUN npm run build

CMD ["npm", "run", "start"]
