#!/bin/bash

LOCKFILE=/tmp/.X0-lock

# remove lockfile before launching X.

rm -f $LOCKFILE ;
X -s 0 -dpms -nocursor -novtswitch vt2