FROM duluca/minimal-node-web-server:lts-alpine

WORKDIR /usr/src/app

COPY dist/local-weather-app public

#Overriding default ENTRYPOINT because gcloud doesn't like dumb-init
ENTRYPOINT [ "npm", "start" ]
