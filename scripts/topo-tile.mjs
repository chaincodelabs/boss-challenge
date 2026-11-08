// Seamless, repeatable version of the hero's topographic map (see topo-background.mjs) for use
// as a tiled section background. Same noise, contour levels, colors and labels, but the noise
// wraps at the tile edges so copies line up without seams. No orange summit: every spot
// height is drawn in the neutral outline style.

export function generateTopoTileSvg({ seed = 7, cols = 4, rows = 3, cell = 340, fineCell = 68, spotHeights = 4 } = {}) {
  // cell/fineCell must divide the tile size exactly for the noise to wrap.
  const W = cols * cell, H = rows * cell;
  const hash = (ix, iy, o) => {
    let n = Math.imul(ix, 374761393) + Math.imul(iy, 668265263) + Math.imul(seed + o, 982451653);
    n = Math.imul(n ^ (n >>> 13), 1274126177);
    return ((n ^ (n >>> 16)) >>> 0) / 4294967296;
  };
  const sm = t => t * t * (3 - 2 * t);
  const wrap = (i, p) => ((i % p) + p) % p;
  // Value noise whose lattice repeats every px × py units.
  const vn = (x, y, o, px, py) => {
    const ix = Math.floor(x), iy = Math.floor(y), fx = sm(x - ix), fy = sm(y - iy);
    const x0 = wrap(ix, px), x1 = wrap(ix + 1, px), y0 = wrap(iy, py), y1 = wrap(iy + 1, py);
    const a = hash(x0, y0, o), b = hash(x1, y0, o), c = hash(x0, y1, o), d = hash(x1, y1, o);
    return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy;
  };
  const fbm = (x, y, o, px, py) => {
    let s = 0, amp = .5, f = 1;
    for (let i = 0; i < 5; i++) { s += vn(x * f, y * f, o + i * 17, px * f, py * f) * amp; f *= 2; amp *= .5; }
    return s / .97;
  };
  const r1 = v => Math.round(v * 10) / 10;

  // Height field on a grid whose last row/column coincide with the first (the noise wraps).
  const nx = 200, ny = Math.round(nx * H / W), step = W / nx, F = [];
  for (let j = 0; j <= ny; j++) for (let i = 0; i <= nx; i++) {
    const X = i * step, Y = j * step;
    F[j * (nx + 1) + i] = fbm(X / cell, Y / cell, 3, cols, rows) * .92 + fbm(X / fineCell, Y / fineCell, 41, W / fineCell, H / fineCell) * .08;
  }
  const at = (i, j) => F[j * (nx + 1) + i];

  const levels = []; for (let v = .2; v < .86; v += .014) levels.push(v);
  const labels = [];
  const edge = 40; // keep labels and spot heights off the tile edges so they aren't cut in half

  // Marching squares per contour level
  const paths = levels.map((L, li) => {
    let d = ''; const idx = li % 5 === 0;
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
      const a = at(i, j), b = at(i + 1, j), c = at(i + 1, j + 1), e = at(i, j + 1);
      const k = (a > L ? 8 : 0) | (b > L ? 4 : 0) | (c > L ? 2 : 0) | (e > L ? 1 : 0);
      if (k === 0 || k === 15) continue;
      const x = i * step, y = j * step, t = (p, q) => (L - p) / (q - p);
      const T = [x + step * t(a, b), y], R = [x + step, y + step * t(b, c)], B = [x + step * t(e, c), y + step], Lf = [x, y + step * t(a, e)];
      const seg = (p, q) => {
        d += `M${r1(p[0])} ${r1(p[1])}L${r1(q[0])} ${r1(q[1])}`;
        if (idx && labels.length < 40) {
          const mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2;
          if (mx > edge && mx < W - edge && my > edge && my < H - edge && labels.every(l => Math.hypot(l.x - mx, l.y - my) > 150)) {
            let ang = Math.atan2(q[1] - p[1], q[0] - p[0]) * 180 / Math.PI;
            if (ang > 90) ang -= 180; if (ang < -90) ang += 180;
            labels.push({ x: mx, y: my, ang, t: String(Math.round((L - .2) * 1500)).padStart(4, '0') });
          }
        }
      };
      switch (k) {
        case 1: case 14: seg(Lf, B); break; case 2: case 13: seg(B, R); break; case 3: case 12: seg(Lf, R); break;
        case 4: case 11: seg(T, R); break; case 6: case 9: seg(T, B); break; case 7: case 8: seg(Lf, T); break;
        case 5: seg(Lf, T); seg(B, R); break; case 10: seg(T, R); seg(Lf, B); break;
      }
    }
    return { d, idx };
  });

  // Spot heights (local maxima), neutral style only
  const peaks = [];
  for (let j = 6; j <= ny - 6; j += 2) for (let i = 6; i <= nx - 6; i += 2) {
    const v = at(i, j); if (v < .66) continue; let top = true;
    for (let dj = -6; dj <= 6 && top; dj++) for (let di = -6; di <= 6; di++) if (at(i + di, j + dj) > v) { top = false; break; }
    const x = i * step, y = j * step;
    if (top && x < W - 60 && peaks.every(p => Math.hypot(p.x - x, p.y - y) > 120)) peaks.push({ x, y, v });
  }
  peaks.sort((a, b) => b.v - a.v);

  const font = `font-family="IBM Plex Mono, monospace" font-weight="500" font-size="11" letter-spacing="0.88"`;
  let out = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" aria-hidden="true">`;
  for (const p of paths) out += `<path d="${p.d}" fill="none" stroke="${p.idx ? '#3A4654' : '#19212A'}" stroke-width="${p.idx ? 1.3 : .9}"/>`;
  for (const l of labels) out += `<g transform="translate(${r1(l.x)} ${r1(l.y)}) rotate(${r1(l.ang)})"><rect x="-19" y="-8" width="38" height="15" fill="#0B0E12"/><text x="0" y="4" text-anchor="middle" fill="#5E6B7A" ${font}>${l.t}</text></g>`;
  for (const p of peaks.slice(0, spotHeights)) {
    const t = String(Math.round((p.v - .2) * 1500)).padStart(4, '0');
    out += `<g transform="translate(${r1(p.x)} ${r1(p.y)})"><path d="M0 -7L6 4H-6Z" fill="none" stroke="#8B97A5" stroke-width="1.2"/><text x="10" y="4" fill="#8B97A5" ${font}>${t}</text></g>`;
  }
  return out + '</svg>';
}
