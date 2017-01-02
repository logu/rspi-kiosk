#!/bin/bash

LOCKFILE=/tmp/.X0-lock

# remove lockfile before launching X.

rm -f $LOCKFILE ;
openbox &
X -s 0 -quiet -dpms -nocursor -novtswitch vt2 -background none