FROM node:15 as development

ENV PORT 3000

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
RUN mkdir -p /home/node/app/.next && chown -R node:node /home/node/app/.next
WORKDIR /home/node/app

USER node

# Installing dependencies
COPY --chown=node:node package*.json ./
RUN npm install

# Copying source files
COPY --chown=node:node . .

EXPOSE 3000

# Running the app
CMD "npm" "run" "dev-lint"

FROM node:15 as production

ENV PORT 3000

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app 
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

CMD "npm" "run" "start"
