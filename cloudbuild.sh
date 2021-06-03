#!/bin/sh

gcloud builds submit --tag gcr.io/${GOOGLE_CLOUD_PROJECT}/$1:$2 .
