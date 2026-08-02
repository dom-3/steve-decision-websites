# SYSTEM UPDATE v2 — Mererid logging patch (send to the research system[s])

*Supersedes patch v1. Research method (object-level, search-before-create, chain of custody, tiers, guardrails, gather-only) is UNCHANGED. This fixes the bookkeeping that was degrading under parallel every-30-minute runs.*

---

SYSTEM UPDATE v2 — logging fixes, effective now. Four corrections to HOW you log. Everything else stands.

1) DOC NUMBERING — stop the collisions. Multiple runs have grabbed the same number ("Doc 264" was used by three different docs; one run took 264 after 265 already existed). From now on:
   • BEFORE assigning a number, READ the current maximum Doc number in Docs — Index (tblk4jRBUX6bnHTiD) and use max+1. Never assume the next number.
   • RESERVE IT FIRST: the moment you CLAIM your thread, create the Docs — Index row with that number and Status = "In progress" (Title + a one-line intent). Fill it in when you write up. Reserving the row means a concurrent run reads a higher max and can't grab your number.
   • LANE PREFIX so the two lanes can never clash: House of Culture docs = "HoC-269, HoC-270…"; Island House docs = "IH-1, IH-2…". Continue numbering per lane. (Existing "Doc NNN" rows stay as they are; start the new scheme from here.)
   • Current state after today's cleanup: max plain number = Doc 268. If you keep the plain scheme, next = 269; better, switch to the lane prefix now.

2) OWNER — one exact value per lane, every time, never blank (typecast on):
   • House of Culture lane → Owner = "Mererid (House of Culture)"
   • Island House lane → Owner = "Mererid (Island House)"

3) FIELD USAGE — Title = a SHORT title (a dozen words). The full finding goes in the SUMMARY field, not crammed into Title with Summary left blank. Every Docs — Index row must have BOTH a short Title AND a filled Summary at the moment of writing — no blank-summary rows.

4) DOC PERSISTENCE (unchanged from v1, restated): never leave a doc only in a session outputs folder. If the repo is connected, write it into docs/<lane>/. If not, put the doc's FULL body in the Summary field so it survives, and keep one running "DOCS AWAITING REPO" Handover line listing what the publisher must pull in.

Unchanged: one thread per run; object-level reads only; search-before-create (reuse by record ID, never duplicate); Source → Fact → Entity chain of custody; honest tiers (Verified-strong / Verified / Referenced-pending / Tradition / Refuted); the standing guardrails; gather-only/additive; stay in your lane; stop rather than invent filler. Your research quality is high — this is only about keeping the index clean so a doc can always be cited unambiguously.
