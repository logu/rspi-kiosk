FROM resin/rpi-raspbian:jessie

RUN sudo apt-get update

RUN sudo apt-get install --no-install-recommends -y \
	openbox \
    xserver-xorg \
    xinit \
    xserver-xorg-video-fbdev

COPY x.sh /

RUN chmod 700 /x.sh

CMD ["/x.sh"]