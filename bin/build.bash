#!/usr/bin/env bash
set -e

repo="n2n2/communities"

version="test"

echo "building image: $repo:$version"

docker build -t $repo:$version .

echo
echo "Docker image $repo:$version built"
echo "Do you want to push to docker hub?"
select answer in "yes" "no"; do
  case "${answer}" in
    yes ) echo "pushing"; break;;
    no ) echo "all done"; exit -1;;
  esac
done
echo

docker push $repo:$version