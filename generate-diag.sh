#!/bin/bash

npx -p @mermaid-js/mermaid-cli mmdc \
  --configFile mermaid-config.json \
  --backgroundColor transparent \
  -i "$1" \
  -o "${1%.*}.svg"
