#!/usr/bin/env bash
set -e
mkdir -p artifacts
cp -r dist artifacts || true
echo "Build logs placeholder" > artifacts/build.log
echo "Smoke test results placeholder" > artifacts/smoke.txt
tar -czf artifacts_${GIT_TAG:-latest}.tar.gz artifacts || true
echo "Artifacts archived to artifacts_${GIT_TAG:-latest}.tar.gz"
