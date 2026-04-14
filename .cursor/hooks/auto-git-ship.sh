#!/usr/bin/env bash
# Agent leállásakor: ha van lokális változás, commit + push (nem interaktív).
set -euo pipefail

# Hook JSON beolvasása (Cursor), nem támaszkodunk rá
cat >/dev/null 2>&1 || true

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
cd "$ROOT"

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  exit 0
fi

export GIT_TERMINAL_PROMPT=0

git add -A

# Üres index → nincs mit commitolni
if git diff --cached --quiet; then
  exit 0
fi

MSG="Automatikus mentés $(date '+%Y-%m-%d %H:%M')"
git commit -m "$MSG" || exit 0

git push || exit 0

exit 0
