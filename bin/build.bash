#!/usr/bin/env bash
set -e

repo="n2n2/communities"

version="test"

echo "building image: $repo:$version"

docker build -t $repo:$version .
