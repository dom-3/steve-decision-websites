#!/usr/bin/env python3
"""
Patch island-house-history.html with the new 26-stop S array.

USAGE — from inside the repo root (where island-house-history.html lives):
    python3 patch-trail.py /path/to/_S_array.js

It will:
  1. find the existing `S = [ ... ]` declaration (bracket-matched, string-aware)
  2. replace it with the new array
  3. update the stale footer attribution
  4. write island-house-history.html.new and show you a summary
  5. NOT touch the original until you say so — rename it yourself when happy

Safe by default: writes a .new file and a .bak, never clobbers in place.
"""
import sys, re, os, shutil

HTML = "island-house-history.html"

def find_array(src):
    """Locate `S=[...]` / `const S = [...]` and return (start, end) of the whole statement."""
    m = re.search(r'(?:const|let|var)?\s*\bS\s*=\s*\[', src)
    if not m:
        return None
    start = m.start()
    i = src.index('[', m.start())
    depth = 0
    in_str = None
    esc = False
    while i < len(src):
        c = src[i]
        if in_str:
            if esc:
                esc = False
            elif c == '\\':
                esc = True
            elif c == in_str:
                in_str = None
        else:
            if c in '"\'`':
                in_str = c
            elif c == '[':
                depth += 1
            elif c == ']':
                depth -= 1
                if depth == 0:
                    end = i + 1
                    # swallow a trailing semicolon
                    if end < len(src) and src[end] == ';':
                        end += 1
                    return (start, end)
        i += 1
    return None

def main():
    if len(sys.argv) < 2:
        sys.exit("usage: python3 patch-trail.py /path/to/_S_array.js")
    arr_path = sys.argv[1]

    if not os.path.exists(HTML):
        sys.exit(f"ERROR: {HTML} not found. Run this from the repo root.")
    if not os.path.exists(arr_path):
        sys.exit(f"ERROR: {arr_path} not found.")

    src = open(HTML, encoding='utf-8').read()
    new_arr = open(arr_path, encoding='utf-8').read().strip()
    if not new_arr.endswith(';'):
        new_arr += ';'

    span = find_array(src)
    if not span:
        sys.exit("ERROR: could not locate the S array declaration.\n"
                 "Open the file and search for 'S=[' or 'const S ='.\n"
                 "Nothing has been changed.")

    start, end = span
    old = src[start:end]
    old_count = old.count('id:')
    new_count = new_arr.count('id:')
    print(f"found existing S array: {len(old):,} chars, ~{old_count} stops")
    print(f"new array:              {len(new_arr):,} chars, ~{new_count} stops")

    out = src[:start] + new_arr + src[end:]

    # footer
    OLD_FOOT = "Docs 22–24, 45–48"
    NEW_FOOT = "Docs 22–24, 44–83 — Threads 1–29, and the discovery programme continuing"
    if OLD_FOOT in out:
        out = out.replace(OLD_FOOT, NEW_FOOT)
        print(f"footer updated: '{OLD_FOOT}' -> '{NEW_FOOT}'")
    else:
        print(f"WARNING: footer string '{OLD_FOOT}' not found — check it by hand.")

    shutil.copy(HTML, HTML + ".bak")
    open(HTML + ".new", "w", encoding='utf-8').write(out)
    print(f"\nwrote {HTML}.new  ({len(out):,} chars)")
    print(f"backed up original to {HTML}.bak")
    print("\nNEXT:")
    print(f"  1. open {HTML}.new in a browser and click through the stops")
    print(f"  2. if it looks right:  mv {HTML}.new {HTML}")
    print(f"  3. git add {HTML} && git commit && git push")
    print(f"  4. if it's broken:     rm {HTML}.new   (original untouched)")

if __name__ == "__main__":
    main()
