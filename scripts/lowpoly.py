import numpy as np
from PIL import Image, ImageDraw
from scipy.spatial import Delaunay

W, H, SS = 2560, 1440, 2          # SS = supersampling para bordas limpas
rng = np.random.default_rng(20260907)

# Pontos: grade irregular com jitter forte + pontos fixos nas bordas
cols, rows = 9, 6
pts = []
for j in range(rows + 1):
    for i in range(cols + 1):
        x = i / cols * W
        y = j / rows * H
        jx = 0 if i in (0, cols) else rng.uniform(-0.55, 0.55) * (W / cols)
        jy = 0 if j in (0, rows) else rng.uniform(-0.55, 0.55) * (H / rows)
        pts.append((x + jx, y + jy))
pts += [(rng.uniform(0, W), rng.uniform(0, H)) for _ in range(14)]
pts = np.array(pts)
tri = Delaunay(pts)

img = Image.new('RGB', (W * SS, H * SS), (8, 8, 8))
draw = ImageDraw.Draw(img)

for simplex in tri.simplices:
    poly = pts[simplex]
    cx, cy = poly[:, 0].mean() / W, poly[:, 1].mean() / H
    # base: escuro no topo, um pouco mais claro embaixo (como a referência)
    base = 14 + 34 * (cy ** 1.5)
    # iluminação direcional: facetas à esquerda-baixo pegam mais luz
    light = 10 * (1 - cx) * cy
    tone = base + light + rng.normal(0, 3.4)
    v = np.clip(tone, 6, 62)
    # Ultimate Gray #939597 é levemente frio: azul > verde > vermelho
    r, g, b = v * 0.97, v * 0.99, v * 1.06
    draw.polygon([(x * SS, y * SS) for x, y in poly], fill=(int(r), int(g), int(b)))

img = img.resize((W, H), Image.LANCZOS)
img.save('brand/polygon-gray.jpg', quality=92, optimize=True, progressive=True)
print('gerado:', img.size)
