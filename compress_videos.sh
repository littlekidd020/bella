#!/bin/bash
# compress_videos.sh — Compress all MP4 files to reduce size

set -e

echo "============================================"
echo "  Video Compression for Bella"
echo "============================================"
echo ""

VIDEO_DIR="public/images/girls"
total_original=0
total_new=0
compressed=0

# Find all mp4 files
while IFS= read -r -d '' file; do
  original_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
  total_original=$((total_original + original_size))
  
  temp_file="${file%.*}_compressed.mp4"
  
  echo "🎬 Compressing $file..."
  
  # Compress with ffmpeg: 720p max width, H.264, CRF 28 (good balance of quality/size)
  ffmpeg -y -i "$file" -vf "scale='min(720,iw)':-2" -vcodec libx264 -crf 28 -preset fast -acodec aac -b:a 128k -movflags +faststart "$temp_file" </dev/null >/dev/null 2>&1
  
  if [[ -f "$temp_file" ]]; then
    new_size=$(stat -f%z "$temp_file" 2>/dev/null || stat -c%s "$temp_file" 2>/dev/null)
    
    if [[ "$new_size" -lt "$original_size" ]]; then
      # Replace original if the compressed file is actually smaller
      mv "$temp_file" "$file"
      total_new=$((total_new + new_size))
      
      savings_pct=$(( (original_size - new_size) * 100 / original_size ))
      orig_mb=$(echo "scale=2; $original_size/1048576" | bc)
      new_mb=$(echo "scale=2; $new_size/1048576" | bc)
      echo "  ✅ ${orig_mb}MB → ${new_mb}MB (-${savings_pct}%)"
      compressed=$((compressed + 1))
    else
      echo "  ⏭️ Compressed file was larger, keeping original."
      rm "$temp_file"
      total_new=$((total_new + original_size))
    fi
  else
    echo "  ❌ Compression failed for $file"
    total_new=$((total_new + original_size))
  fi

done < <(find "$VIDEO_DIR" -type f -name "*.mp4" -print0)

orig_total_mb=$(echo "scale=2; $total_original/1048576" | bc)
new_total_mb=$(echo "scale=2; $total_new/1048576" | bc)
if [[ "$total_original" -gt 0 ]]; then
  total_savings_pct=$(( (total_original - total_new) * 100 / total_original ))
else
  total_savings_pct=0
fi

echo ""
echo "============================================"
echo "  Results"
echo "============================================"
echo "  Compressed:     $compressed videos"
echo "  Original total: ${orig_total_mb} MB"
echo "  New total:      ${new_total_mb} MB"
echo "  Saved:          -${total_savings_pct}%"
echo "============================================"
