FROM node:24-alpine

WORKDIR /
COPY dist dist
COPY node_modules node_modules

ENTRYPOINT ["/src/main"]
