#!/bin/sh


kubectl create deployment $1 --image=gcr.io/${GOOGLE_CLOUD_PROJECT}/$1:$2
kubectl expose deployment $1 --type=LoadBalancer --port 80 --target-port 8080
