FROM node:19-alpine3.15
WORKDIR /app
ENV PATH="./node_modules/.bin:$PATH"
COPY . .

CMD ["node", "/src/server.js"]
