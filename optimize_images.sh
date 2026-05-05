#!/bin/bash
# optimize_images.sh — Resize + convert all images to WebP
# Usage: bash optimize_images.sh [--dry-run]
#
# What it does:
# 1. Resizes any image wider than 1920px down to 1920px (maintains aspect ratio)
# 2. Converts JPG/PNG → WebP at quality 80
# 3. Reports total savings
#
# Original files are NOT deleted — run cleanup_originals.sh after verifying.

set -e

DRY_RUN=false
if [[ "$1" == "--dry-run" ]]; then
  DRY_RUN=true
  echo "🔍 DRY RUN — no files will be modified"
  echo ""
fi

IMAGE_DIR="public/images"
MAX_WIDTH=1920
WEBP_QUALITY=80

# Counters
total_files=0
converted=0
skipped=0
already_small=0
total_original_bytes=0
total_new_bytes=0

echo "============================================"
echo "  Image Optimization for Bella"
echo "============================================"
echo "  Max width:    ${MAX_WIDTH}px"
echo "  WebP quality: ${WEBP_QUALITY}"
echo "  Source dir:    ${IMAGE_DIR}"
echo "============================================"
echo ""

# Find all jpg/jpeg/png files
while IFS= read -r -d '' file; do
  total_files=$((total_files + 1))
  
  # Get file extension (lowercase)
  ext="${file##*.}"
  ext_lower=$(echo "$ext" | tr '[:upper:]' '[:lower:]')
  
  # Skip non-image files
  if [[ "$ext_lower" != "jpg" && "$ext_lower" != "jpeg" && "$ext_lower" != "png" ]]; then
    continue
  fi
  
  # Get original file size
  original_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
  total_original_bytes=$((total_original_bytes + original_size))
  
  # Determine output path (same name, .webp extension)
  webp_file="${file%.*}.webp"
  
  # Skip if webp already exists and is newer
  if [[ -f "$webp_file" && "$webp_file" -nt "$file" ]]; then
    skipped=$((skipped + 1))
    new_size=$(stat -f%z "$webp_file" 2>/dev/null || stat -c%s "$webp_file" 2>/dev/null)
    total_new_bytes=$((total_new_bytes + new_size))
    continue
  fi
  
  if $DRY_RUN; then
    echo "  Would convert: $file → $webp_file"
    converted=$((converted + 1))
    continue
  fi
  
  # Step 1: Resize if wider than MAX_WIDTH using sips
  current_width=$(sips -g pixelWidth "$file" 2>/dev/null | tail -1 | awk '{print $2}')
  
  if [[ -n "$current_width" && "$current_width" -gt "$MAX_WIDTH" ]]; then
    echo "  📐 Resizing: $file (${current_width}px → ${MAX_WIDTH}px)"
    sips --resampleWidth "$MAX_WIDTH" "$file" --out "$file" > /dev/null 2>&1
  fi
  
  # Step 2: Convert to WebP
  npx -y cwebp-bin -q "$WEBP_QUALITY" -m 6 -quiet "$file" -o "$webp_file" 2>/dev/null
  
  if [[ -f "$webp_file" ]]; then
    new_size=$(stat -f%z "$webp_file" 2>/dev/null || stat -c%s "$webp_file" 2>/dev/null)
    total_new_bytes=$((total_new_bytes + new_size))
    
    # Calculate savings for this file
    if [[ "$original_size" -gt 0 ]]; then
      savings_pct=$(( (original_size - new_size) * 100 / original_size ))
      original_kb=$((original_size / 1024))
      new_kb=$((new_size / 1024))
      echo "  ✅ ${file} → ${webp_file}  (${original_kb}KB → ${new_kb}KB, -${savings_pct}%)"
    fi
    converted=$((converted + 1))
  else
    echo "  ❌ Failed: $file"
    total_new_bytes=$((total_new_bytes + original_size))
  fi

done < <(find "$IMAGE_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -print0)

echo ""
echo "============================================"
echo "  Results"
echo "============================================"

if $DRY_RUN; then
  echo "  Files found:     $total_files"
  echo "  Would convert:   $converted"
  echo ""
  echo "  Run without --dry-run to execute."
else
  total_original_mb=$((total_original_bytes / 1024 / 1024))
  total_new_mb=$((total_new_bytes / 1024 / 1024))
  
  if [[ "$total_original_bytes" -gt 0 ]]; then
    total_savings_pct=$(( (total_original_bytes - total_new_bytes) * 100 / total_original_bytes ))
    saved_mb=$(( (total_original_bytes - total_new_bytes) / 1024 / 1024 ))
  else
    total_savings_pct=0
    saved_mb=0
  fi
  
  echo "  Converted:       $converted files"
  echo "  Skipped:         $skipped files (already done)"
  echo "  Original total:  ${total_original_mb} MB"
  echo "  New total:       ${total_new_mb} MB"
  echo "  Saved:           ${saved_mb} MB (-${total_savings_pct}%)"
  echo ""
  echo "  ⚠️  Original .jpg/.png files are still on disk."
  echo "  After verifying, run: bash cleanup_originals.sh"
fi

echo "============================================"
