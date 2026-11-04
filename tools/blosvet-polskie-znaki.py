# Dorysowuje polskie litery w Blosvet z jego własnych elementów (akcent z ó, kropka z i) + ogonek i kreska ł
import sys
from fontTools.ttLib import TTFont
from fontTools.pens.recordingPen import RecordingPen
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.t2CharStringPen import T2CharStringPen
from fontTools.pens.transformPen import TransformPen

src, dst = sys.argv[1], sys.argv[2]
f = TTFont(src)
gs = f.getGlyphSet()
cff = f["CFF "].cff
top = cff.topDictIndex[0]
cs_index = top.CharStrings
private = top.Private
gsubrs = cff.GlobalSubrs

def contours(g):
    p = RecordingPen(); gs[g].draw(p); out, cur = [], []
    for op, args in p.value:
        cur.append((op, args))
        if op in ("closePath", "endPath"): out.append(cur); cur = []
    return out

def bounds(cs):
    bp = BoundsPen(gs)
    for c in cs:
        for op, a in c: getattr(bp, op)(*a)
    return bp.bounds

def replay(pen, cs, dx=0, dy=0):
    tp = TransformPen(pen, (1, 0, 0, 1, dx, dy))
    for c in cs:
        for op, a in c: getattr(tp, op)(*a)

# Elementy bazowe
o_c, oa_c = contours("o"), contours("oacute")
acute = [max(oa_c, key=lambda c: bounds([c])[1])]  # najwyżej położony kontur ó to akcent
O_c, Oa_c = contours("O"), contours("Oacute")
Acute = [max(Oa_c, key=lambda c: bounds([c])[1])]
dot = max(contours("i"), key=lambda c: bounds([c])[1])

def cx(b): return (b[0] + b[2]) / 2
ab, Ab, db = bounds(acute), bounds(Acute), bounds([dot])
acute_off = cx(ab) - cx(bounds(o_c))   # pochylenie akcentu względem środka litery
Acute_off = cx(Ab) - cx(bounds(O_c))

def ogonek(pen, x, scale=1.0):
    # Cienki haczyk pod literą, zaczepiony przy linii bazowej
    s = scale
    pen.moveTo((x, 2))
    pen.curveTo((x - 60*s, -40*s), (x - 75*s, -135*s), (x - 20*s, -175*s))
    pen.curveTo((x + 5*s, -192*s), (x + 40*s, -190*s), (x + 62*s, -172*s))
    pen.lineTo((x + 56*s, -158*s))
    pen.curveTo((x + 35*s, -172*s), (x + 10*s, -172*s), (x - 2*s, -160*s))
    pen.curveTo((x - 38*s, -125*s), (x - 22*s, -45*s), (x + 30*s, 2))
    pen.closePath()

def bar(pen, x0, y0, x1, y1, t=24):
    # Ukośna kreska litery ł / Ł (równoległobok)
    pen.moveTo((x0, y0)); pen.lineTo((x1, y1)); pen.lineTo((x1, y1 + t)); pen.lineTo((x0, y0 + t)); pen.closePath()

new = {}
def make(name, uni, base, extra):
    w = gs[base].width
    pen = T2CharStringPen(w, gs)
    replay(pen, contours(base))
    extra(pen, bounds(contours(base)))
    cs = pen.getCharString(private=private, globalSubrs=gsubrs)
    new[name] = (cs, w, uni)

def with_acute(caps):
    def fn(pen, b):
        a, off, ref = (Acute, Acute_off, Ab) if caps else (acute, acute_off, ab)
        replay(pen, a, cx(b) + off - cx(ref), 0)
    return fn

def with_dot(caps):
    def fn(pen, b):
        dy = (725 - db[1]) if caps else 0
        replay(pen, [dot], cx(b) - cx(db), dy)
    return fn

def with_ogonek(caps, inset=75):
    # inset: odległość zaczepu ogonka od prawej krawędzi litery
    def fn(pen, b):
        ogonek(pen, b[2] - inset, 1.15 if caps else 1.0)
    return fn

def with_bar(caps):
    def fn(pen, b):
        stem = b[0] + 38
        if caps: bar(pen, stem - 70, 285, stem + 120, 395)
        else: bar(pen, cx(b) - 95, 295, cx(b) + 95, 405)
    return fn

for name, uni, base, ex in [
    ("aogonek", 0x105, "a", with_ogonek(False)), ("Aogonek", 0x104, "A", with_ogonek(True, 40)),
    ("eogonek", 0x119, "e", with_ogonek(False)), ("Eogonek", 0x118, "E", with_ogonek(True, 60)),
    ("cacute", 0x107, "c", with_acute(False)), ("Cacute", 0x106, "C", with_acute(True)),
    ("nacute", 0x144, "n", with_acute(False)), ("Nacute", 0x143, "N", with_acute(True)),
    ("sacute", 0x15B, "s", with_acute(False)), ("Sacute", 0x15A, "S", with_acute(True)),
    ("zacute", 0x17A, "z", with_acute(False)), ("Zacute", 0x179, "Z", with_acute(True)),
    ("zdotaccent", 0x17C, "z", with_dot(False)), ("Zdotaccent", 0x17B, "Z", with_dot(True)),
    ("lslash", 0x142, "l", with_bar(False)), ("Lslash", 0x141, "L", with_bar(True)),
]:
    make(name, uni, base, ex)

order = f.getGlyphOrder()
for name, (cs, w, uni) in new.items():
    if getattr(cs_index, "charStringsAreIndexed", False):
        cs_index.charStringsIndex.append(cs)
        cs_index.charStrings[name] = len(cs_index.charStringsIndex) - 1
    else:
        cs_index.charStrings[name] = cs
    order.append(name)
    f["hmtx"][name] = (w, 0)
    for t in f["cmap"].tables:
        if t.isUnicode(): t.cmap[uni] = name
top.charset = order
f.setGlyphOrder(order)
f["maxp"].numGlyphs = len(order)
f.flavor = "woff"
f.save(dst)
print("dodano", len(new), "znaków")
