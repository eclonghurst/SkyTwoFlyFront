FROM node:latest

COPY . front-end

WORKDIR front-end

RUN npm install

RUN npm run build

RUN npm install -g serve

ENTRYPOINT ["serve", "-s", "build"]
