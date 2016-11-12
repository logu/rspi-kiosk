FROM resin/rpi-raspbian:jessie

RUN wget https://launchpad.net/~canonical-chromium-builds/+archive/ubuntu/stage/+build/7916060/+files/chromium-browser_45.0.2454.85-0ubuntu0.15.04.1.1181_armhf.deb

RUN wget https://launchpad.net/~canonical-chromium-builds/+archive/ubuntu/stage/+build/7916060/+files/chromium-codecs-ffmpeg-extra_45.0.2454.85-0ubuntu0.15.04.1.1181_armhf.deb

RUN sudo dpkg -i chromium-codecs-ffmpeg-extra_45.0.2454.85–0ubuntu0.15.04.1.1181_armhf.deb chromium-browser_45.0.2454.85–0ubuntu0.15.04.1.1181_armhf.deb

RUN sudo apt-get install -f

RUN sudo dpkg -i chromium-codecs-ffmpeg-extra_45.0.2454.85–0ubuntu0.15.04.1.1181_armhf.deb chromium-browser_45.0.2454.85–0ubuntu0.15.04.1.1181_armhf.deb