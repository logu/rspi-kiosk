FROM resin/rpi-raspbian:jessie

RUN sudo apt-get update

RUN sudo apt-get install --no-install-recommends -y xserver-xorg xinit xserver-xorg-video-fbdev

CMD X -s 0 -dpms