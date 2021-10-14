
#!/usr/bin/env bash
set -e

kubectl apply -f https://github.com/jetstack/cert-manager/releases/download/v1.5.3/cert-manager.crds.yaml

helm upgrade cert-manager jetstack/cert-manager \
  --install \
  --namespace cert-manager \
  --version v1.5.3 \
  --set installCRDs=true
