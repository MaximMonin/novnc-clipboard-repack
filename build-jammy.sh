#!/bin/bash

docker build -f Dockerfile-jammy --rm --network host -t jammy-novnc:latest .
docker save jammy-novnc:latest | tar --strip-components=2 --wildcards --ignore-command-error --to-command='tar -xvf -' -xf - "*"
