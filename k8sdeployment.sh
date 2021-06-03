#!/bin/sh

deployname=$1
if [ $deployname == orders ]; then
deployappport=8081
elif [ $deployname ==  products ];then
deployappport=8082
else
deployappport=8080
fi
kubectl create deployment $1 --image=gcr.io/${GOOGLE_CLOUD_PROJECT}/$1:$2
kubectl expose deployment $1 --type=LoadBalancer --port 80 --target-port $deployappport
