#!/bin/bash

set -e

mkdir -p client

shopt -s extglob dotglob
mv !(client|server|node_modules|.git) client/ 2>/dev/null || true

for file in .??*; do
  if [ "$file" != ".git" ]; then
    mv "$file" client/ 2>/dev/null || true
  fi
done

mkdir -p server

echo "✅ Project restructured for MERN:"
echo "  - React app moved to ./client"
echo "  - Ready to add Express backend in ./server"

