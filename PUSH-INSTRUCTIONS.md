# Steve Kirkwood — Decision Portal · push to GitHub + Vercel

This folder is ALREADY a git repository, committed and ready. You just make the
empty repo on GitHub and push. No build step — it's plain HTML.

## 1 · Create the empty repo (browser, ~30 sec)
- github.com  →  New repository
- Name: steve-decision-websites   ·   set it to **Private**
- Do NOT tick "Add a README" (this folder already has files)
- Create repository  →  copy the URL it shows you
  (looks like: https://github.com/<your-username>/steve-decision-websites.git)

## 2 · Push from Terminal
Open Terminal and run these (drag the folder onto Terminal after `cd ` to fill the path):

    cd /path/to/steve-decision-websites
    git branch -M main
    git remote add origin https://github.com/<your-username>/steve-decision-websites.git
    git push -u origin main

- If it says git isn't installed, macOS pops up "Install command line developer tools" -> Install, then re-run.
- When it asks to sign in: use the browser pop-up, OR a GitHub Personal Access Token as the password
  (github.com -> Settings -> Developer settings -> Personal access tokens).

## 3 · Go live on Vercel (browser)
- vercel.com  →  Add New  →  Project  →  Import Git Repository  →  steve-decision-websites  →  Deploy
- Framework preset: "Other".  Live at: steve-decision-websites.vercel.app

## 4 · Future updates (this is the "easy push" you wanted)
Edit any file, then:

    git add . && git commit -m "update" && git push

Vercel auto-deploys within seconds. Send Steve the same link — always current.

## Make it private
Vercel  →  your project  →  Settings  →  Deployment Protection  →  turn on password protection.

## What it does
- index.html = the portal + the A/B/C decisions form (emails Steve's picks to pullenmarketing@gmail.com, timestamped)
- bakery.html / sancler.html / island-house.html = the three comparables lookbooks
