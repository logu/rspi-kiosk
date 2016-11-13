FROM resin/rpi-raspbian:jessie

RUN useradd -ms /bin/bash chromium

RUN sudo apt-get update

RUN sudo apt-get install wget curl

RUN sudo apt-get install ttf-mscorefonts-installer

RUN curl -sSL https://github.com/hypriot/x11-on-HypriotOS/raw/master/install-chromium-browser.sh | bash

USER chromium