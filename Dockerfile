FROM node:19-alpine3.15
WORKDIR /app
ENV PATH="./node_modules/.bin:$PATH"
COPY . .

<<<<<<< Updated upstream
CMD ["node", "src/server.js"]
=======
CMD ["node", "/src/server.js"]
>>>>>>> Stashed changes
