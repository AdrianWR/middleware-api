FROM node:16-alpine as builder

WORKDIR /app

COPY package*.json .
RUN npm install

COPY . .
RUN npm run build

FROM node:16-alpine

WORKDIR /usr/src/app

COPY --from=builder app/dist dist
COPY package*.json .
RUN npm install --production

ENTRYPOINT ["npm", "start"]