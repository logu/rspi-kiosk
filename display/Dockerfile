# use our prepared Raspberry Pi compatible Docker base image with Node.js
FROM hypriot/rpi-node:0.12.0

# make the src folder available in the docker image
ADD . /src
WORKDIR /src

RUN ls

# make port 80 available outside of the image
EXPOSE 80