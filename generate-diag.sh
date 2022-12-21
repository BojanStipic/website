#!/bin/bash

npx -p @mermaid-js/mermaid-cli mmdc \
  -i "$1" \
  -o "${1%.*}.svg" \
  -t neutral
