# use our prepared Raspberry Pi compatible Docker base image with Node.js
FROM hypriot/rpi-node:0.12.0

# make the src folder available in the docker image
ADD . /display
WORKDIR /display

RUN ls

# make port 80 available outside of the image
EXPOSE 3000