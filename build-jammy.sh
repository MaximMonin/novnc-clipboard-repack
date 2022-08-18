#!/bin/bash

docker build -f Dockerfile-jammy --rm --network host -t jammy-novnc:latest .
docker save jammy-novnc:latest | tar --strip-components=1 --wildcards --to-command='tar -xvf -' -xf - "*/layer.tar"
