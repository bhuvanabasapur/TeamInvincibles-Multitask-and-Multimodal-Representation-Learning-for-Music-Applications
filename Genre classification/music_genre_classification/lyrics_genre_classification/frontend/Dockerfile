FROM node:12.4.0-alpine
ENV NODE_ENV production
WORKDIR /app
COPY server/* ./
RUN npm install --production --silent
COPY design/build/ public/
EXPOSE 3000
# CMD node server.js
ENTRYPOINT [ "node", "server.js" ]