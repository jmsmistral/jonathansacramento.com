FROM node:14.15.1-alpine3.12

WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY ./ ./
RUN npm run build:blog

CMD ["npm", "run", "build:client:prod"]
