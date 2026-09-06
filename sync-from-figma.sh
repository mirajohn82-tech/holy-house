#!/bin/bash
FIGMA_IMPORTS="/workspaces/default/code/src/imports/Home"
NEXT_IMPORTS="./src/imports/Home"
echo "Syncing Figma imports..."
cp "$FIGMA_IMPORTS"/*.png "$NEXT_IMPORTS/"
cp "$FIGMA_IMPORTS/svg-faniy7js1a.ts" "$NEXT_IMPORTS/"
cp "$FIGMA_IMPORTS/index.tsx" "$NEXT_IMPORTS/index.tsx"
if ! head -1 "$NEXT_IMPORTS/index.tsx" | grep -q '"use client"'; then
  sed -i '1s/^/"use client";\n/' "$NEXT_IMPORTS/index.tsx"
fi
echo "Done."
