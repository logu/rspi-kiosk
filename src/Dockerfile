# use our prepared Raspberry Pi compatible Docker base image with Node.js
FROM hypriot/rpi-node:0.12.0

# make the src folder available in the docker image
ADD . /src
WORKDIR /src

RUN ls

# make port 80 available outside of the image
EXPOSE 80

# install the dependencies from the package.json file
CMD ["npm", "install"]

# start node with the index.js file of our hello-world application
CMD ["node", "index.js"]