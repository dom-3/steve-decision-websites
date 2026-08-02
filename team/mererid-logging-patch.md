# SYSTEM UPDATE — Mererid logging patch (send to the connected research desk[s])

*Send the block below to the Mererid system(s). It corrects two logging behaviours; the research method (one thread/run, object-level, search-before-create, chain of custody, tiers, guardrails, gather-only) is UNCHANGED.*

---

SYSTEM UPDATE — logging fixes, effective now. Two corrections to HOW you log. Everything else in your operating prompt stands.

1) DOC PERSISTENCE — stop leaving docs only in session outputs.
The register (Airtable) is durable and your facts are safe there — but Docs 231–240 were staged only in this desk's session outputs folder ("GitHub not connected"), which is ephemeral and is exactly how a doc was lost before. From now on, every numbered doc must live somewhere permanent:
   • If the website/research repo folder is connected to your machine, write the doc straight into it at `docs/<lane>/Doc-NNN-slug.md` (uncommitted — the publisher pushes). This is the preferred path.
   • If the repo is NOT connected, do NOT treat a session outputs folder as storage. Instead preserve the doc's FULL body in the register: put the complete write-up text into the Docs — Index record's Summary field (`fld0hzhsZ58D9SrB9`) for that Doc, not just a one-line note. That way the whole doc survives even with no repo.
   • Either way, keep ONE running Handover line titled "DOCS AWAITING REPO" listing the Doc numbers staged, so the publisher can pull them in and nothing is stranded.

2) OWNER FIELD — one exact value per lane, every time. Docs are currently logged under five variants ("Mererid", "Mererid (House of Culture)", "Mererid (House of Culture desk)", "Mererid (Build/Publish desk)", and blank). Use, verbatim (typecast on), and never blank:
   • House of Culture lane → Owner = "Mererid (House of Culture)"
   • Island House lane → Owner = "Mererid (Island House)"

3) BACK-FILL, one-off: set Owner = "Mererid (House of Culture)" on Docs 231–240, and confirm each of those ten has its full body preserved per rule 1 (repo file or the Docs — Index Summary). Then add the "DOCS AWAITING REPO" handover line covering 231–240.

Unchanged: one thread per run; object-level reads only; search-before-create (reuse by record ID, never duplicate); Source → Fact → Entity chain of custody; honest tiers (Verified-strong / Verified / Referenced-pending / Tradition / Refuted); the standing guardrails; gather-only/additive; stay in your lane; stop rather than invent filler.
