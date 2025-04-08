#!/bin/bash

docker build -f Dockerfile-noble --rm --network host -t noble-novnc:latest .
docker save noble-novnc:latest | tar --strip-components=2 --wildcards --ignore-command-error --to-command='tar -xvf -' -xf - "*"
