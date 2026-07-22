#!/usr/bin/env python3
"""
The Globe — print menu generator.

Reads the menu straight out of globe-menu.html (the single source of truth) and
writes globe-menu-print.pdf. Change a dish on the web menu, re-run this, and the
printed menu matches. Nothing is retyped.

    python3 make-menu-pdf.py

WHY: set as large as two A4 pages allow. The clientele are older and read this
without glasses, so type is the priority: descriptions 12.5pt and dish names
15.5pt, against roughly 7pt and 8pt in the original — near enough double.

MEASURED TRADE-OFF (this menu, 27 dishes, two columns):
    14pt descriptions (RNIB large-print) -> 3 pages
    13pt                                 -> 3 pages
    12.5pt                               -> 2 pages   <- current
Push SIZES up and it will reflow to three pages; there is no setting that gives
full large print on two A4 sides with this much content.

FONTS: the brand faces (Poiret One / Playfair Display / Cormorant Garamond) are
not installed here, so the closest stand-ins are used automatically. To print
with the real faces, drop the .ttf files into a  fonts/  folder beside this
script and re-run — no code change needed:

    fonts/PoiretOne-Regular.ttf
    fonts/PlayfairDisplay-SemiBold.ttf
    fonts/CormorantGaramond-Regular.ttf

(All free from fonts.google.com.)
"""

import os, re, html
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

HERE = os.path.dirname(os.path.abspath(__file__))
SRC  = os.path.join(HERE, "globe-menu.html")
OUT  = os.path.join(HERE, "globe-menu-print.pdf")

# ---------------------------------------------------------------- palette
INK    = HexColor("#100D0A")
BODY   = HexColor("#3A322A")
GOLD   = HexColor("#8A6C2C")
GOLDLT = HexColor("#C1A05A")
CRUST  = HexColor("#5E4526")
PAPER  = HexColor("#FBF7EE")
MUTED  = HexColor("#6E6355")
DOTS   = HexColor("#DDD3C0")

# ---------------------------------------------------------------- type sizes
SIZES = dict(
    wordmark=27, wordmark_sub=9, place=8,
    section=17,
    feat_name=17, feat_desc=13.5, feat_price=15.5,
    name=15.5, desc=12.5, price=15.5, tag=10.5,
    side=14,
    key_head=9.5, key=12, foot=8.5,
)
LEAD = dict(desc=15.4, feat_desc=17.4)

# LARGE PRINT. Target: readable by an older customer without reading glasses,
# in low light. Body copy is 14pt — RNIB clear-print guidance is 14pt minimum,
# 16pt+ for large print. Two columns would force ~28 characters a line at this
# size, so the menu is set in a SINGLE column: fewer, longer lines, generous
# leading, and the hierarchy carried by size and space rather than by density.

MARGIN_X, MARGIN_BOT = 42, 32
GUTTER = 24

# ---------------------------------------------------------------- fonts
def _reg(name, paths):
    for p in paths:
        if os.path.exists(p):
            try:
                pdfmetrics.registerFont(TTFont(name, p)); return True
            except Exception:
                pass
    return False

def load_fonts():
    local, ok = os.path.join(HERE, "fonts"), True
    if not _reg("Disp", [os.path.join(local, "PoiretOne-Regular.ttf")]):
        ok = False
        _reg("Disp", ["/usr/share/fonts/truetype/google-fonts/Poppins-Light.ttf",
                      "/usr/share/fonts/truetype/lato/Lato-Light.ttf"])
    if not _reg("Head", [os.path.join(local, "PlayfairDisplay-SemiBold.ttf")]):
        ok = False
        _reg("Head", ["/usr/share/texmf/fonts/opentype/public/tex-gyre/texgyrepagella-bold.otf",
                      "/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf"])
    if not _reg("Body", [os.path.join(local, "CormorantGaramond-Regular.ttf")]):
        ok = False
        _reg("Body", ["/usr/share/texmf/fonts/opentype/public/tex-gyre/texgyrepagella-regular.otf",
                      "/usr/share/fonts/truetype/liberation/LiberationSerif-Regular.ttf"])
    _reg("BodyIt", ["/usr/share/texmf/fonts/opentype/public/tex-gyre/texgyrepagella-italic.otf",
                    "/usr/share/fonts/truetype/liberation/LiberationSerif-Italic.ttf"])
    return ok

# ---------------------------------------------------------------- parse
def clean(s):
    s = re.sub(r"<[^>]+>", "", s)
    return re.sub(r"\s+", " ", html.unescape(s)).strip()

TAG_RE = re.compile(r"((?:\b(?:V|VE|GF|GFA)\b[\s·]*)+)$")

def split_tags(desc):
    m = TAG_RE.search(desc)
    if not m:
        return desc, ""
    return desc[:m.start()].strip(" ·"), re.sub(r"\s+", " ", m.group(1)).strip(" ·")

def parse():
    h = open(SRC, encoding="utf-8").read()
    body = h[h.index('<div class="wrap">'):]
    # strip HTML comments first — the Specials block holds a fill-in template
    # with a fake "DISH NAME / £00" that must never reach the printed menu.
    body = re.sub(r"<!--.*?-->", "", body, flags=re.S)

    out = []
    # capture the OPENING TAG too, so hidden sections can be identified
    for opentag, sec in re.findall(r"(<section[^>]*>)(.*?)</section>", body, re.S):
        if 'id="specials"' in opentag or "hidden" in opentag:
            continue
        m = re.search(r"<h2>(.*?)</h2>", sec, re.S)
        if not m:
            continue
        block = {"title": clean(m.group(1)), "entries": [], "note": ""}
        sub = re.search(r'<div class="sec-sub">(.*?)</div>', sec, re.S)
        if sub:
            block["note"] = clean(sub.group(1))
        for mt in re.finditer(
                r'<div class="(feature|item|side-row)"[^>]*>(.*?)'
                r'(?=<div class="(?:feature|item|side-row)"|</div>\s*</section>|$)', sec, re.S):
            kind, chunk = mt.group(1), mt.group(2)
            nm = re.search(r'class="(?:item-name|n)">(.*?)</span>', chunk, re.S)
            if not nm:
                continue
            pr = re.search(r'class="price">(.*?)</span>', chunk, re.S)
            ds = re.search(r'class="desc">(.*?)(?:</div>|$)', chunk, re.S)
            raw = ds.group(1) if ds else ""
            # the source marks dietary codes AND notes like "for two" as .tag,
            # and extras like "Add charcuterie meats — £3" as .add
            tags = " · ".join(clean(t) for t in re.findall(r'class="tag">(.*?)</span>', raw, re.S))
            add  = re.search(r'class="add">(.*?)</span>', chunk, re.S)
            desc = clean(re.sub(r'<span class="tag">.*?</span>', '', raw, flags=re.S))
            block["entries"].append(dict(kind=kind, name=clean(nm.group(1)),
                                         price=clean(pr.group(1)) if pr else "",
                                         desc=desc, tags=tags,
                                         add=clean(add.group(1)) if add else ""))
        if block["entries"]:
            out.append(block)

    key = re.search(r'<div class="key">(.*?)</div>\s*</div>', h + "</div>", re.S)
    allergy = re.search(r'<p class="allergy">(.*?)</p>', h, re.S)
    return out, (clean(key.group(1)) if key else ""), (clean(allergy.group(1)) if allergy else "")

# ---------------------------------------------------------------- text helpers
def track(c, text, x, y, font, size, space, colour, centre=None):
    """Letter-spaced text via a text object's setCharSpace — reliable, unlike
    drawing glyph by glyph (which dropped characters)."""
    if centre is not None:
        w = pdfmetrics.stringWidth(text, font, size) + space * len(text)
        x = centre - (w - space) / 2
    c.saveState()                      # contain charSpace — it leaks otherwise
    t = c.beginText(x, y)
    t.setFont(font, size)
    t.setCharSpace(space)
    t.setFillColor(colour)
    t.textOut(text)
    c.drawText(t)
    c.restoreState()
    c._charSpace = 0

def wrap(text, font, size, width):
    if not text: return []
    words, lines, cur = text.split(), [], ""
    for wd in words:
        t = (cur + " " + wd).strip()
        if pdfmetrics.stringWidth(t, font, size) <= width:
            cur = t
        else:
            if cur: lines.append(cur)
            cur = wd
    if cur: lines.append(cur)
    return lines

# ---------------------------------------------------------------- generator
class Menu:
    def __init__(self, c):
        self.c, (self.W, self.H) = c, A4
        self.col_w = (self.W - 2*MARGIN_X - GUTTER) / 2
        self.page = 0
        self.start_page(first=True)

    # ---- page furniture
    def emblem(self, cx, cy, r):
        c = self.c
        c.setStrokeColor(GOLDLT); c.setLineWidth(.7)
        c.circle(cx, cy, r, stroke=1, fill=0)
        c.line(cx - r, cy, cx + r, cy)
        for k in (0.45, 0.82):
            c.ellipse(cx - r*k, cy - r, cx + r*k, cy + r, stroke=1, fill=0)

    def start_page(self, first=False):
        c = self.c
        if not first: c.showPage()
        self.page += 1
        c.setFillColor(PAPER); c.rect(0, 0, self.W, self.H, stroke=0, fill=1)
        cx = self.W / 2
        if first:
            y = self.H - 56
            self.emblem(cx, y, 13); y -= 34
            track(c, "THE GLOBE", 0, y, "Disp", SIZES["wordmark"], 5.0, INK, centre=cx); y -= 15
            track(c, "BAR AND RESTAURANT", 0, y, "Disp", SIZES["wordmark_sub"], 3.2, GOLD, centre=cx); y -= 12
            track(c, "LAUGHARNE", 0, y, "Disp", SIZES["place"], 2.8, MUTED, centre=cx); y -= 16
        else:
            y = self.H - 52
            track(c, "THE GLOBE", 0, y, "Disp", 13, 4.0, INK, centre=cx); y -= 16
        c.setStrokeColor(GOLDLT); c.setLineWidth(.6)
        c.line(cx - 42, y, cx + 42, y)
        self.y = y - 26

    def footer(self):
        c = self.c
        track(c, "THE GLOBE  ·  LAUGHARNE  ·  SUMMER 2026", 0, MARGIN_BOT - 16,
              "Disp", SIZES["foot"], 1.8, MUTED, centre=self.W/2)

    def room(self):
        return self.y - (MARGIN_BOT + 14)

    # ---- measuring
    def h_item(self, e):
        lines = wrap(e["desc"], "Body", SIZES["desc"], self.col_w)
        n = max(len(lines), 1)
        # only reserve an extra line when the codes genuinely won't sit inline
        if e["tags"]:
            last = lines[-1] if lines else ""
            lw = pdfmetrics.stringWidth(last + "  ", "Body", SIZES["desc"])
            tw = pdfmetrics.stringWidth(e["tags"].upper(), "Disp", SIZES["tag"]) + 1.2*len(e["tags"])
            if lw + tw > self.col_w:
                n += 1
        return (22 if e["kind"] == "feature" else 17) + n*LEAD["desc"] \
               + (14 if e.get("add") else 0) + 7

    def h_feature(self, e):
        n = len(wrap(e["desc"], "Body", SIZES["feat_desc"], self.W - 2*MARGIN_X - 110))
        return 15 + 13 + n*LEAD["feat_desc"] + (11 if e["tags"] else 0) + (16 if e.get("add") else 0) + 9

    def h_side(self, e):
        return 19

    # ---- drawing
    def draw_feature(self, e):
        c = self.c; cx = self.W/2
        track(c, e["name"].upper(), 0, self.y, "Head", SIZES["feat_name"], 1.8, INK, centre=cx)
        self.y -= 15
        if e["price"]:
            c.setFont("Body", SIZES["feat_price"]); c.setFillColor(GOLD)
            c.drawCentredString(cx, self.y, e["price"])
        self.y -= 13
        c.setFont("Body", SIZES["feat_desc"]); c.setFillColor(BODY)
        for ln in wrap(e["desc"], "Body", SIZES["feat_desc"], self.W - 2*MARGIN_X - 110):
            c.drawCentredString(cx, self.y, ln); self.y -= LEAD["feat_desc"]
        if e["tags"]:
            track(c, e["tags"].upper(), 0, self.y, "Disp", SIZES["tag"], 1.5, GOLD, centre=cx)
            self.y -= 11
        if e.get("add"):
            c.setFont("BodyIt", SIZES["feat_desc"] - .5); c.setFillColor(MUTED)
            c.drawCentredString(cx, self.y, e["add"]); self.y -= 16
        self.y -= 9

    def leader(self, x, y, nw, pw):
        if nw + pw + 18 >= self.col_w: return
        c = self.c
        c.setStrokeColor(DOTS); c.setLineWidth(.6); c.setDash(.8, 3.4)
        c.line(x + nw + 6, y + 2.6, x + self.col_w - pw - 6, y + 2.6)
        c.setDash()

    def draw_item(self, e, x, y):
        c = self.c
        feat = (e["kind"] == "feature")
        if feat:                                   # hairline over a highlighted dish
            c.setStrokeColor(GOLDLT); c.setLineWidth(.7); c.setDash()
            c.line(x, y + 15, x + self.col_w, y + 15)
        name = e["name"].upper()
        pw = pdfmetrics.stringWidth(e["price"], "Body", SIZES["price"])
        # shrink an over-long name until it clears the price (floor 9.5pt)
        # Shrink an over-long name to clear its price. Prefer 12pt as the floor,
        # but keep going rather than let the price collide — an overlap is far
        # worse than a slightly smaller name.
        ns = SIZES["name"] + (1.5 if feat else 0)
        while ns > 10 and pdfmetrics.stringWidth(name, "Head", ns) + pw + 16 > self.col_w:
            ns -= 0.25
        c.setFont("Head", ns); c.setFillColor(INK)
        c.drawString(x, y, name)
        nw = pdfmetrics.stringWidth(name, "Head", ns)
        c.setFont("Body", SIZES["price"]); c.setFillColor(GOLD)
        c.drawString(x + self.col_w - pw, y, e["price"])
        self.leader(x, y, nw, pw)
        y -= 17
        lines = wrap(e["desc"], "Body", SIZES["desc"], self.col_w)
        c.setFont("Body", SIZES["desc"]); c.setFillColor(BODY)
        for i, ln in enumerate(lines):
            c.drawString(x, y, ln)
            if i == len(lines)-1 and e["tags"]:
                # codes sit inline after the last line — saves a line per dish,
                # but only if they actually fit inside the column
                lw = pdfmetrics.stringWidth(ln + "  ", "Body", SIZES["desc"])
                tw = pdfmetrics.stringWidth(e["tags"].upper(), "Disp", SIZES["tag"]) \
                     + 1.2*len(e["tags"])
                if lw + tw <= self.col_w:
                    track(c, e["tags"].upper(), x+lw, y, "Disp", SIZES["tag"], 1.2, GOLD)
                else:
                    y -= LEAD["desc"]
                    track(c, e["tags"].upper(), x, y, "Disp", SIZES["tag"], 1.2, GOLD)
            y -= LEAD["desc"]
        if not lines and e["tags"]:
            track(c, e["tags"].upper(), x, y, "Disp", SIZES["tag"], 1.2, GOLD); y -= LEAD["desc"]
        if e.get("add"):
            c.setFont("BodyIt", SIZES["desc"]-.5); c.setFillColor(MUTED)
            c.drawString(x, y, e["add"]); y -= 14
        return y - 7

    def draw_side(self, e, x, y):
        c = self.c
        c.setFont("Body", SIZES["side"]); c.setFillColor(INK)
        c.drawString(x, y, e["name"])
        nw = pdfmetrics.stringWidth(e["name"], "Body", SIZES["side"])
        c.setFillColor(GOLD)
        pw = pdfmetrics.stringWidth(e["price"], "Body", SIZES["side"])
        c.drawString(x + self.col_w - pw, y, e["price"])
        self.leader(x, y, nw, pw)
        return y - 19

    def section_head(self, title, note):
        c = self.c; cx = self.W/2
        need = 52 + (12 if note else 0)
        if self.room() < need + 70:
            self.footer(); self.start_page()
        else:
            self.y -= 8                       # breathing space above the head
        track(c, title.upper(), 0, self.y, "Disp", SIZES["section"], 4.0, CRUST, centre=cx)
        self.y -= 11
        if note:
            track(c, note.upper(), 0, self.y, "Disp", 7.5, 2.2, MUTED, centre=cx)
            self.y -= 12
        c.setStrokeColor(GOLDLT); c.setLineWidth(.6)
        c.line(MARGIN_X + 100, self.y, self.W - MARGIN_X - 100, self.y)
        self.y -= 20

    # ---- two columns.
    # If the block fits in the space left on this page it is balanced left/right
    # (looks composed). If it does not, it FLOWS across the page break instead of
    # being pushed wholesale to the next page — that fragmentation was costing a
    # page on its own.
    def columns(self, entries):
        heights = [self.h_side(e) if e["kind"]=="side-row" else self.h_item(e) for e in entries]
        total   = sum(heights)

        # try balanced
        best, split = None, 1
        for i in range(1, len(heights)):            # try every split, keep the evenest
            a, b = sum(heights[:i]), sum(heights[i:])
            if best is None or max(a, b) < best:
                best, split = max(a, b), i
        L = sum(heights[:split]); R = sum(heights[split:])
        if self.room() >= max(L,R):
            top=self.y
            for col,bucket in enumerate((entries[:split], entries[split:])):
                x=MARGIN_X+col*(self.col_w+GUTTER); y=top
                for e in bucket:
                    if e["kind"]=="feature": y -= 5
                    y = self.draw_side(e,x,y) if e["kind"]=="side-row" else self.draw_item(e,x,y)
            self.y = top - max(L,R) - 4
            return

        # otherwise flow: fill this column, then the next, then a new page
        col, y, top = 0, self.y, self.y
        for e, need in zip(entries, heights):
            if y - need < MARGIN_BOT + 12:
                if col == 0:
                    col, y = 1, top
                else:
                    self.footer(); self.start_page()
                    col, top, y = 0, self.y, self.y
            x = MARGIN_X + col*(self.col_w+GUTTER)
            if e["kind"]=="feature": y -= 5
            y = self.draw_side(e,x,y) if e["kind"]=="side-row" else self.draw_item(e,x,y)
        self.y = (min(y, top) if col==1 else y) - 4

    def key_block(self, key, allergy):
        """Compact footer: a rule, the codes on one line, the allergy note on the
        next. Previously a titled panel — that cost a whole third page for the
        sake of a heading nobody needs when the codes are spelled out anyway."""
        c = self.c; cx = self.W/2
        ks, als = SIZES["key"], SIZES["key"] - 1
        keyline = "V  vegetarian    ·    VE  vegan    ·    GF  gluten free    ·    GFA  gluten free available"
        # shrink the allergy note a touch if it would wrap
        while als > 9 and pdfmetrics.stringWidth(allergy, "BodyIt", als) > self.W - 2*MARGIN_X:
            als -= .25
        need = 8 + 12 + als + 2
        if self.room() < need:
            self.footer(); self.start_page()
        self.y -= 2
        c.setStrokeColor(GOLDLT); c.setLineWidth(.6)
        c.line(cx - 120, self.y, cx + 120, self.y)
        self.y -= 13
        c.setFont("Body", ks); c.setFillColor(BODY)
        c.drawCentredString(cx, self.y, keyline)
        self.y -= als + 3
        c.setFont("BodyIt", als); c.setFillColor(MUTED)
        c.drawCentredString(cx, self.y, allergy)

# ---------------------------------------------------------------- build
def build():
    brand_ok = load_fonts()
    sections, key, allergy = parse()
    c = canvas.Canvas(OUT, pagesize=A4)
    c.setTitle("The Globe — Menu"); c.setAuthor("The Globe, Laugharne")
    m = Menu(c)

    for s in sections:
        m.section_head(s["title"], s["note"])
        run = []                                   # consecutive item/side entries
        for e in s["entries"]:
            # Sharers/specials now flow in the two-column grid rather than as
            # big centred blocks — that is what buys the two-page format. They
            # keep a hairline rule and a larger name so they still read as
            # "the special one".
            run.append(e)
        if run: m.columns(run)
        m.y -= 9

    m.key_block(key, allergy)
    m.footer()
    c.save()

    e_all = [e for s in sections for e in s["entries"]]
    print(f"  wrote {os.path.basename(OUT)} — {m.page} page(s)")
    print(f"  {len(sections)} sections · "
          f"{sum(1 for e in e_all if e['kind']=='feature')} features · "
          f"{sum(1 for e in e_all if e['kind']=='item')} items · "
          f"{sum(1 for e in e_all if e['kind']=='side-row')} sides")
    print(f"  brand fonts: {'YES' if brand_ok else 'NO — stand-ins (see docstring)'}")
    return m.page

if __name__ == "__main__":
    build()
