#!/usr/bin/env bash
set -e

HOST=${1:-http://localhost}
PORT=${2:-80}
URL="$HOST:$PORT/"

echo "Waiting for $URL ..."
for i in {1..30}; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "$URL" || echo "000")
  if [ "$code" = "200" ]; then
    echo "SMOKE PASSED: $URL returned 200"
    exit 0
  fi
  sleep 1
done

echo "SMOKE FAILED: $URL did not return 200 in time"
exit 1
