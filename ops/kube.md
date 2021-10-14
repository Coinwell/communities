# Kubernetes Docs

This document is an overview on how communities is deployed within kubernetes.

## Prerequisites

These tools assume that `kubectl` and `helm` are properly installed and configured. Both
can be installed on MacOS with `brew install kubectl kubernetes-helm`,

Kube configuration files can be downloaded via the aws cli. Get your access key and secret
access key from IAM in aws, configure the aws cli and run:
`aws eks update-kubeconfig --name zion-eks-prod`. The only namespace currently in the cluster
is `zion`.

## Folders

*  `bin`: Helper scripts for building the communities docker image, deploying the cert manager,
deploying to the kubernetes environment and deploying a docker-registry to kubernetes.

*  `helm`: Config for helm charts for deploying communities and the Traefik ingress controller

## Scripts

These scripts provide convenient ways to create and modify environments. They were written
biased towards simplicity and the "typical case" vs. extreme generality. Additionally they
have a minimum of guardrails, which means you need to pay careful attention to what you're
attempting to do, ensuring your setup and parameters are correct, etc. Valar morghulis.

*  `bin/build.bash`: Helper script that will buid a container for communities. After the
    build you will be given the option to push the image to docker hub. You will need
    to be logged into docker hub in order to push the image.

*  `bin/cert-manager.bash`: Command for deploying the cert-manager for communities. This
    uses lets encrypt to fetch the cert and is kept separate from the communities deployment

*  `bin/deploy.bash`: Deploy script to deploy either the traefik helm chart of the communities
    helm chart. Usage `bin/deploy.bash` to deploy the communities helm chart or 
    `bin/deploy.bash traefik` to deploy the traefik helm chart. Deployments only need to be done
    after changes are made to the helm chart or there is a new image to pull in docker hub

*  `bin/docker-registry.bash`: Create a docker registry in a namespace that will allow us to
    pull images from our private docker hub.

## Values

Values YAML files are sets of parameters inserted into the chart templates when deployed.
We currently only have one values file `helm/charts/communities/values.yaml`. Options
can be changed in this file depending on the environment you wish to deploy.

## Secrets

Kubernetes secrets contain sensitive information (e.g. API keys, database creds, SSL certs)
that must not ever be stored in code (either application code or configuration files).

We have the secret.yaml file git ignored so you will need to reach out to someone to get the
contents. Each secret is base64 encoded.
