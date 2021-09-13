#!/usr/bin/env bash
set -e

cd "$(dirname "$0")/.."


context="zion-eks-prod"
namespace="zion"

release="zion-prod"
chart="helm"
values="helm/values.yaml"

kubectl --context "${context}" create namespace "${namespace}" 2>/dev/null || true

helm upgrade "${release}" "${chart}" --install --kube-context "${context}" --namespace "${namespace}" --values "${values}"
