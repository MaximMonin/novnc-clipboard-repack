#!/bin/bash

docker build -f Dockerfile-focal --rm --network host -t focal-novnc:latest .
docker save focal-novnc:latest | tar --strip-components=1 --wildcards --to-command='tar -xvf -' -xf - "*/layer.tar"
