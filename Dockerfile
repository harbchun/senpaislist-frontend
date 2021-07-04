FROM alpine as base

ENV PORT 3000

WORKDIR /home/node/app
RUN apk add --update npm

# Installing dependencies
COPY package*.json .
RUN npm install

FROM base as development

# Copying source files
COPY . .

EXPOSE 3000

# Running the app
CMD "npm" "run" "dev-lint"

FROM base as stagbuild

# Copying source files
COPY . .
COPY --from=base /home/node/app/node_modules /home/node/app/node_modules

RUN npm run build:stag

FROM base as staging

COPY --from=stagbuild /home/node/app/.next /home/node/app/.next
COPY --from=base /home/node/app/node_modules /home/node/app/node_modules
COPY . .

EXPOSE 3000

CMD "npm" "run" "start"

FROM base as prodbuild

# Copying source files
COPY . .
COPY --from=base /home/node/app/node_modules /home/node/app/node_modules

RUN npm run build:prod

FROM base as production

COPY --from=prodbuild /home/node/app/.next /home/node/app/.next
COPY --from=base /home/node/app/node_modules /home/node/app/node_modules
COPY . .

EXPOSE 3000

CMD "npm" "run" "start"
