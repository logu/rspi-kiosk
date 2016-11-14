#!/bin/bash

LOCKFILE=/tmp/.X0-lock

# Upon exit, remove lockfile.

trap "{ rm -f $LOCKFILE ; exit 255; }" SIGTERM

X -s 0 -dpms -nocursor