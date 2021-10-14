#!/usr/bin/env bash
set -e

cd "$(dirname "$0")/.."

context="zion-eks-prod"
namespace="zion"

if [[ $1 == "traefik" ]]; then
  echo "Deploying traefik"
  kubectl apply -f "helm/charts/traefik/configmap.yaml" \
    --context "${context}" \
    --namespace "${namespace}" \

  helm upgrade traefik traefik/traefik \
    --install \
    --kube-context "${context}" \
    --namespace "${namespace}" \
    --values "helm/charts/traefik/values.yaml" 
  exit
fi

release="zion-prod"
chart="helm/charts/communities"
values="helm/charts/communities/values.yaml"

kubectl --context "${context}" create namespace "${namespace}" 2>/dev/null || true

helm upgrade "${release}" "${chart}" \
  --install \
  --kube-context "${context}" \
  --namespace "${namespace}" \
  --values "${values}"
