#!/bin/sh

gcloud config set compute/zone us-central1-f
gcloud services enable container.googleapis.com
gcloud services enable cloudbuild.googleapis.com
gcloud container clusters create fancy-cluster --num-nodes 3
