#!/bin/bash
# cleanup_originals.sh — Remove original .jpg/.png files after verifying .webp versions work
# ⚠️  Only run this AFTER confirming the site looks correct with .webp images!

set -e

echo "============================================"
echo "  Cleanup: Remove original JPG/PNG files"
echo "============================================"
echo ""

IMAGE_DIR="public/images"
removed=0
saved_bytes=0

while IFS= read -r -d '' file; do
  ext="${file##*.}"
  ext_lower=$(echo "$ext" | tr '[:upper:]' '[:lower:]')
  
  # Only process jpg/jpeg/png
  if [[ "$ext_lower" != "jpg" && "$ext_lower" != "jpeg" && "$ext_lower" != "png" ]]; then
    continue
  fi
  
  # Check if .webp version exists
  webp_file="${file%.*}.webp"
  
  if [[ -f "$webp_file" ]]; then
    file_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
    saved_bytes=$((saved_bytes + file_size))
    rm "$file"
    removed=$((removed + 1))
  else
    echo "  ⚠️  No .webp found for: $file — keeping original"
  fi

done < <(find "$IMAGE_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -print0)

saved_mb=$((saved_bytes / 1024 / 1024))

echo ""
echo "  Removed:     $removed original files"
echo "  Freed:       ${saved_mb} MB"
echo "============================================"
