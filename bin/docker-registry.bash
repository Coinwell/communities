
#!/usr/bin/env bash
set -e

namespace="$1"
password=""

if [[ -z "${namespace}" || -z "${password}" ]]; then
  echo "Usage"
  echo "bin/docker-registry.bash NAMESPACE"
  exit -1
fi

kubectl create secret docker-registry regcred \
  --docker-server=https://index.docker.io/v1/ \
  --docker-username=n2n2 \
  --docker-email=stan@n2n2.co \
  --docker-password="$password" \
  -n "$namespace"
