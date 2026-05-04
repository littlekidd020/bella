#!/bin/bash
# update_references.sh — Update all .jpg/.png references to .webp in code
# Run this AFTER optimize_images.sh has completed successfully

set -e

echo "============================================"
echo "  Updating image references to .webp"
echo "============================================"
echo ""

# Files to update
DATA_FILE="src/lib/data.js"
COMPONENTS=(
  "src/app/page.jsx"
  "src/app/collection/page.jsx"
  "src/app/contact-us/page.jsx"
  "src/components/common/AgeGate.jsx"
  "src/components/common/WeChatQRModal.jsx"
)

changes=0

# Update data.js — all .jpg references in image paths
if [[ -f "$DATA_FILE" ]]; then
  # Count matches before
  before=$(grep -c '\.jpg"' "$DATA_FILE" 2>/dev/null || echo 0)
  before_png=$(grep -c '\.png"' "$DATA_FILE" 2>/dev/null || echo 0)
  
  # Replace .jpg with .webp in image/gallery paths (not video paths)
  sed -i '' 's/\.jpg"/\.webp"/g' "$DATA_FILE"
  sed -i '' 's/\.png"/\.webp"/g' "$DATA_FILE"
  
  after=$(grep -c '\.jpg"' "$DATA_FILE" 2>/dev/null || echo 0)
  after_png=$(grep -c '\.png"' "$DATA_FILE" 2>/dev/null || echo 0)
  
  jpg_changed=$((before - after))
  png_changed=$((before_png - after_png))
  echo "  ✅ $DATA_FILE: ${jpg_changed} .jpg + ${png_changed} .png → .webp"
  changes=$((changes + jpg_changed + png_changed))
fi

# Update component files
for comp in "${COMPONENTS[@]}"; do
  if [[ -f "$comp" ]]; then
    before=$(grep -c '\.jpg' "$comp" 2>/dev/null || echo 0)
    before_png=$(grep -c '\.png' "$comp" 2>/dev/null || echo 0)
    
    # Only replace in src= attributes (image paths), not in general text
    sed -i '' 's/\.jpg"/\.webp"/g' "$comp"
    sed -i '' 's/\.png"/\.webp"/g' "$comp"
    
    after=$(grep -c '\.jpg' "$comp" 2>/dev/null || echo 0)
    after_png=$(grep -c '\.png' "$comp" 2>/dev/null || echo 0)
    
    comp_changes=$(( (before - after) + (before_png - after_png) ))
    if [[ "$comp_changes" -gt 0 ]]; then
      echo "  ✅ $comp: ${comp_changes} references updated"
      changes=$((changes + comp_changes))
    else
      echo "  ⏭️  $comp: no changes needed"
    fi
  else
    echo "  ⚠️  $comp: file not found, skipping"
  fi
done

echo ""
echo "  Total references updated: $changes"
echo ""
echo "  ⚠️  Note: .svg and .mp4 files are NOT touched."
echo "  ⚠️  The WeChatQRModal uses a .png — verify the QR code webp looks OK."
echo "============================================"
