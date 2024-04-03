#!/bin/bash

docker build -f Dockerfile-focal --rm --network host -t focal-novnc:latest .
docker save focal-novnc:latest | tar --strip-components=2 --wildcards --ignore-command-error --to-command='tar -xvf -' -xf - "*"
