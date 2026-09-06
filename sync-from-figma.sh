#!/bin/bash
FIGMA_IMPORTS="/workspaces/default/code/src/imports/Home"
NEXT_IMPORTS="./src/imports/Home"
PUBLIC_IMAGES="./public/images"

echo "Syncing Figma imports..."
mkdir -p "$PUBLIC_IMAGES"

# Copy PNGs to public/images for static serving
cp "$FIGMA_IMPORTS"/*.png "$PUBLIC_IMAGES/"

# Copy TS/TSX source files
cp "$FIGMA_IMPORTS/svg-faniy7js1a.ts" "$NEXT_IMPORTS/"
cp "$FIGMA_IMPORTS/index.tsx" "$NEXT_IMPORTS/index.tsx"

# Prepend "use client"
if ! head -1 "$NEXT_IMPORTS/index.tsx" | grep -q '"use client"'; then
  sed -i '1s/^/"use client";\n/' "$NEXT_IMPORTS/index.tsx"
fi

# Replace PNG imports with public path string constants
sed -i 's/^import \(img[A-Za-z0-9_]*\) from "\.\(\/[a-f0-9]*\.png\)";$/const \1 = "\/images\2";/' "$NEXT_IMPORTS/index.tsx"

echo "Done."
