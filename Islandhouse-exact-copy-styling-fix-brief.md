# Brief — make the Island House exact copy render styled (Simply Static export fix)

*From Jarvis · 30 Jul 2026. The exact-copy push + Vercel deploy is now working — the block is cleared and the preview is live and Ready at:*
**https://island-house-git-exact-copy-dom-1941s-projects.vercel.app**
*But it renders **unstyled**: all the content/pages are there, but no CSS/layout and images/logo don't load. The commit was exported "media excluded, for preview", and the theme assets aren't resolving. This brief is how to make the next export a true visual mirror.*

## ✅ CONFIRMED ROOT CAUSE (verified live on the preview, 30 Jul)
Diagnosed against the deployed preview. Two things were checked and fixed/found:

1. **Vercel Deployment Protection was ON** (Require Log In / Standard Protection) — it 403'd every asset behind a login wall. **Now turned OFF** by Jarvis, so the preview + production are publicly viewable and assets load. *(This alone did not fix the styling — see below.)*
2. **The `wp-content/uploads/` folder was excluded from the export** — and that is the whole problem. The site uses the **Enfold theme**, whose entire merged layout stylesheet lives at:
   `/wp-content/uploads/dynamic_avia/avia-merged-styles-…css`
   Because uploads was excluded, that file 403s → **no layout**, and every image is missing too. All 8 other stylesheets (plugins, fonts) load fine (200); this one merged Enfold CSS is the only thing missing, and it's the design.

### The fix — one change
**Re-export with `wp-content/uploads/` INCLUDED** (do not exclude media). That single folder restores both the Enfold merged CSS (the whole layout) and all the images. Nothing else needs changing — paths are already correct and resolve to the site root.

*(Belt-and-braces: if the export tool skips the `dynamic_avia` merged file specifically, the clean alternative is to turn OFF Enfold/Autoptimize CSS merging on the WordPress site before exporting, so the theme CSS is served as normal files the crawler will pick up.)*

---
## (original general guidance below, still valid)
1. **Media was excluded** from the export — so images, the logo and uploads 404.
2. **Asset URLs aren't relative/bundled** — the CSS/JS the pages reference isn't being served from the static bundle (paths still point at the live WordPress origin, or were skipped), so the site loads as raw HTML with no styling.

## Fix it in Simply Static (settings)
- **Include media this time.** Do NOT exclude `wp-content/uploads`. Export the full asset tree: `wp-content/themes` (CSS/JS), `wp-content/uploads` (images), `wp-includes` assets, fonts.
- **Make all URLs relative / portable.** Set Simply Static so internal links and asset URLs resolve from the site root, not the live domain:
  - Simply Static → Settings → **Replace URLs / Destination**: use **relative paths** (Pro: "Use relative URLs"; free: choose the **Offline / portable ZIP** mode, which rewrites to relative). This is the key change — it's why the CSS isn't loading.
  - Confirm the **Destination URL** is set to the site root (`/`) so `href="/wp-content/themes/…/style.css"` works on Vercel.
- **Catch what the crawler misses.** Add to **Additional URLs / Additional Files** any assets not reached by crawling — theme CSS referenced only inside other CSS (background images, `@font-face` fonts), and any `wp-content/uploads` folders. Enable "Include a `wp-content/uploads` scan" if available.
- **Force HTTPS** so there's no mixed-content blocking on Vercel.
- Export as a **local directory / ZIP** (not "push to host").

## Then publish (IMPORTANT — the author-email gotcha)
Replace the files in the repo folder with the new export, then commit and push **with a verified author email**, or Vercel will block it again (that was the earlier problem):

```
cd "/Users/dominicpullen/Documents/CEO - Island House/from-wordpress/site-exact-copy"
# copy the new fully-styled export in over the old files first, then:
git add -A
git -c user.email="pullenmarketing@gmail.com" -c user.name="Dominic Pullen" commit -m "Exact copy — full styled export (CSS + media included, relative URLs)"
git push --force-with-lease origin exact-copy
```

*(`pullenmarketing@gmail.com` is the email verified on the dom-3 GitHub account — Vercel only builds commits authored by a verified email. If GitHub Desktop is open on this folder, quit it first so it doesn't re-create `.git` lock files.)*

## Verify
Vercel auto-rebuilds the `exact-copy` preview → wait for **Ready** → open the preview URL. It should now look like **islandhouse.wales**: styled, logo and images loading, layout intact. If any single asset still 404s, check its path in DevTools → Network and add it to Simply Static's Additional Files, then re-export.
