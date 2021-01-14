FROM node:14.15.4-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install --only=production

ENV AUTH_CLIENT_ID $AUTH_CLIENT_ID \
    AUTH_CLIENT_SECRET $AUTH_CLIENT_SECRET

EXPOSE 3000
CMD [ "npm", "start" ]

