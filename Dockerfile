FROM duluca/minimal-node-web-server:lts-alpine

WORKDIR /usr/src/app

COPY dist/local-weather-app public

ENTRYPOINT [ "npm", "start" ]
