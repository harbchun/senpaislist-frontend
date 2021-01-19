FROM node:15

ARG USER_ID=1000

RUN apt-get update && apk upgrade
RUN adduser -D -u ${USER_ID} -s /bin/sh appuser

ENV PORT 3000

USER root

RUN mkdir -p /home/node/app/node_modules
RUN chown -R appuser /home/node/app

WORKDIR /home/node/app

USER node

# Installing dependencies
COPY --chown=appuser package*.json ./
RUN npm install

# Copying source files
COPY --chown=appuser . .

# Building app
RUN npm run build
EXPOSE 3000

# Running the app
CMD "npm" "run" "dev-lint"
