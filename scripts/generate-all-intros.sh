#!/bin/bash
# Runs generate-city-intros.mjs in batches until all cities have intros.
# Supabase caps at 1000 rows/query, so we loop until 0 cities remain.

cd "$(dirname "$0")/.." || exit 1

BATCH=0
while true; do
  BATCH=$((BATCH + 1))
  echo ""
  echo "===== BATCH $BATCH ====="
  OUTPUT=$(node scripts/generate-city-intros.mjs --limit 31200 --resume 2>&1)
  echo "$OUTPUT"

  # Stop if 0 cities were fetched (match exact start of line to avoid false positives)
  if echo "$OUTPUT" | grep -qE "^📋  0 cities to process|^\s*0 cities to process"; then
    echo ""
    echo "✅  All cities have intros! Total batches: $BATCH"
    break
  fi

  # Small pause between batches to avoid rate limits
  sleep 2
done
