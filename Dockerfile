FROM node:8.4

WORKDIR /app
COPY . /app

RUN npm install && \
    npm run build

# this is for virtual host purposes
EXPOSE 80

CMD ["node", "server.js"]
