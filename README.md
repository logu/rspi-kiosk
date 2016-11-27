# raspi-kiosk

This project is an attempt to provide a node js kiosk boilerplate. The Idea is to build a kiosk display by using a
raspberry pi and node JS. It takes leverage of the process called Infrastructure as Code (IaC) to provide an
infrastructure and the configuration needed for this display. This will help us reduce manual processes for
configuration and installation of different dependencies.

##Install
1- Flash the sd card

````
flash -s [wifi ssid] -p [wifi pass] http://downloads.hypriot.com/hypriot-rpi-20151115-132854.img.zip
````
2- ssh to raspberry pi
````
ssh pirate@black-pearl.local
password: hypriot
````
3- clone current project
````
git clone https://github.com/logu/rspi-kiosk.git
````
4- launch docker-compose
````
cd rspi-kiosk
docker-compose up -d
````

##Project structure

###Display
Node js project this is what is displayed on the screen .

##### Used technologies

JavaScript
- [Node](https://nodejs.org/)

Templating
- [Jade](https://pugjs.org/api/getting-started.html)

Styles
- [Stylus](http://stylus-lang.com/)

Automation
- [Webpack](https://webpack.github.io/docs/)

Code Management
- [Git](https://git-scm.com/)


#### Build & Deployment Process

This starter kit includes a build system by which source can be transpiled, converted and compressed in preparation for production use. For this task, [Webpack](https://webpack.github.io/docs/) is used.

##### Use Webpack

`webpack` : Buils css and transpile JS

#### Directory structure

The root directory generated for the app :
<pre>
├──  display
├──  tools
├──  wifi-ap
├──  docker-compose.yml
├──  README.md

</pre>
