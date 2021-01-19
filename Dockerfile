FROM node:15

RUN apt-get update && \
      apt-get -y install sudo

ENV PORT 3000

USER root

RUN mkdir -p /home/node/app/node_modules
RUN sudo chown -R node:node /home/node/app

WORKDIR /home/node/app

USER node

# Installing dependencies
COPY --chown=node:node package*.json ./
RUN npm install

# Copying source files
COPY --chown=node:node . .

# Building app
RUN npm run build
EXPOSE 3000

# Running the app
CMD "npm" "run" "dev-lint"
