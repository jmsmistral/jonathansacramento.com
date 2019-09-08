FROM node:alpine

WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY ./ ./
RUN npm run build:blog

CMD ["npm", "run", "build:client:prod"]