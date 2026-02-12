FROM node:lts-alpine
RUN apk update && apk add bash

WORKDIR /
COPY dist dist
COPY swagger swagger
COPY node_modules node_modules
COPY entrypoint.sh entrypoint.sh
RUN chmod +x ./ entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]

