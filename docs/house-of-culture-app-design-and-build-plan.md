# House of Culture app — design & build plan

**Owner:** Island House / House of Culture desk · **Date:** 28 Jul 2026 · **Status:** design doc, uncommitted for the publisher
**The concept (Dominic):** a location-based historical experience for Laugharne — walk the town, discover artefacts, relics and people with their stories, collect them (Pokémon GO / Assassin's Creed feel) through a camera view — but *also* a dead-simple press-a-button mode an elderly visitor can enjoy from a bench. Grounded entirely in the verified research; extend and enrich the walk around Laugharne's history.

---

## 1. It already fits the architecture you built
Nothing here needs a new data model. The app is a **front end over the register**:
- **Stops** = the physical places on the map (already a table, with GPS-free Unlock method + mandatory Tone).
- **Beats** = the collectibles. A Beat = Thread × Stop — *the story, not the place, is what you collect*, so one spot can yield several relics and one story can run across several spots. Beats already carry Script EN + Script CY and a **publish gate** (a Beat can't go live while any linked Fact is unverified).
- **Facts** = the grounding. The AI "grounded guide" narrates *only* from verified Facts, in English and Welsh.
So the app is: **map of Stops → unlock a Beat → collect it → hear/read its grounded story.** The research already fills it.

## 2. The one design decision that makes it work: THREE modes, driven by Tone + an accessibility toggle
Your two asks ("epic AR treasure hunt" *and* "simple button an elderly person enjoys") aren't a compromise — they're the **same content in three presentations**, chosen automatically:

| Mode | For | How it feels | Game layer |
|---|---|---|---|
| **Explorer (AR)** | able, curious, kids/families | camera view; walk up, an artefact/person appears, tap to collect a relic, "speak to" a character | ON |
| **Guided (Simple)** | elderly, less mobile, low-confidence | a clean list/map of stops; big buttons; tap → read + listen (audio). No camera, no walking required — you can do the whole town from a bench | OFF |
| **Solemn (forced)** | the grave, memorials, sacred spots | just the story, told with respect | **OFF, always** — Tone=Solemn suppresses ALL collection, chimes, badges and modals |

**Why this is the crux:** the Solemn rule is a hard safety — it means the collect-a-relic mechanic can *never* fire at Dylan's grave or a war memorial ("a screenshot at a graveside" was the exact failure to avoid). And the Guided mode makes the whole thing inclusive by design, not as an afterthought. Same Beats, same facts, three doors in.

## 3. Unlocking — not GPS-dependent (per your existing design)
Each Stop's **Unlock method** picks how a Beat is collected, so the game never *requires* GPS or a raised camera:
- **Proximity** (GPS within a radius) — the Explorer default.
- **QR / marker** — a small plaque or card at the site; scan to unlock. Great indoors, in poor signal, and for the Guided mode.
- **Manual** — in Guided mode you simply tap the stop. Nothing gates the elderly user out.
Collection state lives on the device (localStorage) — no login needed to play.

## 4. Tech reality — what's buildable tonight vs the full dream (honest)
- **Full "Pokémon GO" AR** (world-anchored 3D characters, live geofencing) is a **native Unity + ARKit/ARCore + Niantic Lightship/Mapbox** build — weeks-to-months, app-store submission. Not a night, and not the place to start.
- **The right MVP (tonight-to-this-week):** a **PWA** (installable web app, no app store, works on any phone, ideal for elderly) with:
  - a **Leaflet/Mapbox map** of Laugharne with the Stops as pins;
  - the **collect mechanic** (proximity OR QR OR tap → unlock the Beat → it enters your collection);
  - the **content from the register** (Beats/Stops/Facts), EN + CY, text + audio;
  - the **three modes** (Explorer / Guided / Solemn) with Tone-driven suppression;
  - a **camera view** that overlays the artefact/character image on the live camera feed (`getUserMedia`) — the AR *feel* without world-anchoring.
- **Phase 2** adds real marker/world AR (AR.js / WebXR / 8th Wall), richer character dialogue, and the "speak to people" interaction (grounded-guide AI answering in-character, from the facts).

## 5. Build plan (phased so tonight ships something real)
- **P0 — tonight:** the PWA shell + the Laugharne map + Stops as pins + tap-to-open a Stop → its Beats → grounded story (text+audio) + a "collected" screen. Data from a **stops.json exported from the register** (simplest — no runtime token). Mode toggle in. Solemn suppression wired.
- **P1:** proximity + QR unlock; the collection/relic art; progress + the walk routes (incl. a "History of Laugharne" route and the Common Walk); bilingual audio.
- **P2:** camera AR overlay; "speak to" characters via the grounded-guide AI; world-anchored AR.

## 6. Data — reuse the register, add a few app fields to Stops/Beats
Keep the register the source of truth. Add (via the app-build, additive): Stop **lat/long**, **Unlock type** (proximity/QR/manual), **Collectible art** (the relic image), and a **Mode** hint. Beats already have Script EN/CY and the publish gate. Publish gate stays: a Beat only appears in the app when its Facts are Verified **and** Dominic has ticked "Approved for site."

## 7. Guardrails baked in
- **Solemn Tone = no game layer, ever.** Empty Tone is treated as Solemn (fail safe).
- **Facts-grounded only** — every story and every AI character line comes from a Verified Fact; nothing invented; legends shown as legend.
- **Accessibility is a first-class mode, not a toggle we bolt on** — and remember the standing rule: no step-free/accessibility *claims* without an on-site audit.
- **Karen + publish tick** gate anything that goes public.

---

## TONIGHT'S BUILD BRIEF (for the night system)
Build the **P0 PWA** in a new repo/folder `house-of-culture-app`:
1. `index.html` + `app.css` + `app.js` — a mobile-first PWA (manifest + service worker) with a Leaflet map centred on Laugharne (SA33), Stops as pins.
2. A `stops.json` seed: pull 6–10 real Stops from the register with their Beats' Script EN (+ CY where present) and each linked Fact's status — include ONLY Beats whose Facts are Verified. (If you can't reach the register live, ask Dominic to paste a stops export.)
3. Tapping a pin opens the Stop: its Beat story (text; audio slot), a "Collect" button (disabled/hidden if Tone=Solemn), and a bilingual EN/CY toggle.
4. A **mode switch**: Explorer (map + collect) vs Guided (big-button list, no camera). Respect Tone=Solemn everywhere (no collect, no chime).
5. A "Collection" screen (localStorage) showing what's been found.
6. Camera view = a stub button for now ("Explorer AR — coming"), so P2 has its slot.
RULES: grounded in the register only; no invented history; never run git (write uncommitted, the publisher pushes); keep it a PWA (no native, no app store) so it's instant on any phone; log a Handover row when done.
