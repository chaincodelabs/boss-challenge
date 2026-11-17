// BOSS Challenge hero background — "2b Topographic + summits"
// Deterministic generator. Same seed => identical SVG. Default seed used in the mock: 7.
// Usage: const svg = generateTopoSvg({ seed: 7 }); element.innerHTML = svg;
// Or run once at build time and ship the output as a static /hero-topo.svg.

export function generateTopoSvg({ seed = 7, summitLabel = '8333' } = {}) {
  const W = 1200, H = 700;
  const hash = (ix, iy, o) => {
    let n = Math.imul(ix, 374761393) + Math.imul(iy, 668265263) + Math.imul(seed + o, 982451653);
    n = Math.imul(n ^ (n >>> 13), 1274126177);
    return ((n ^ (n >>> 16)) >>> 0) / 4294967296;
  };
  const sm = t => t * t * (3 - 2 * t);
  const vn = (x, y, o) => {
    const ix = Math.floor(x), iy = Math.floor(y), fx = sm(x - ix), fy = sm(y - iy);
    const a = hash(ix, iy, o), b = hash(ix + 1, iy, o), c = hash(ix, iy + 1, o), d = hash(ix + 1, iy + 1, o);
    return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy;
  };
  const fbm = (x, y, o = 0) => {
    let s = 0, amp = .5, f = 1;
    for (let i = 0; i < 5; i++) { s += vn(x * f, y * f, o + i * 17) * amp; f *= 2; amp *= .5; }
    return s / .97;
  };
  const r1 = v => Math.round(v * 10) / 10;

  // Height field: broad terrain + 8% fine texture
  const step = 7, sc = 340, nx = Math.ceil(W / step) + 1, ny = Math.ceil(H / step) + 1, F = [];
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++)
    F[j * nx + i] = fbm(i * step / sc, j * step / sc, 3) * .92 + fbm(i * step / 60, j * step / 60, 41) * .08;

  const levels = []; for (let v = .2; v < .86; v += .014) levels.push(v);
  const labels = [];

  // Marching squares per contour level
  const paths = levels.map((L, li) => {
    let d = ''; const idx = li % 5 === 0;
    for (let j = 0; j < ny - 1; j++) for (let i = 0; i < nx - 1; i++) {
      const a = F[j * nx + i], b = F[j * nx + i + 1], c = F[(j + 1) * nx + i + 1], e = F[(j + 1) * nx + i];
      const k = (a > L ? 8 : 0) | (b > L ? 4 : 0) | (c > L ? 2 : 0) | (e > L ? 1 : 0);
      if (k === 0 || k === 15) continue;
      const x = i * step, y = j * step, t = (p, q) => (L - p) / (q - p);
      const T = [x + step * t(a, b), y], R = [x + step, y + step * t(b, c)], B = [x + step * t(e, c), y + step], Lf = [x, y + step * t(a, e)];
      const seg = (p, q) => {
        d += `M${r1(p[0])} ${r1(p[1])}L${r1(q[0])} ${r1(q[1])}`;
        if (idx && labels.length < 16) {
          const mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2;
          if (mx > 560 && mx < W - 40 && my > 90 && my < H - 30 && labels.every(l => Math.hypot(l.x - mx, l.y - my) > 150)) {
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

  // Spot heights (local maxima)
  const peaks = [];
  for (let j = 6; j < ny - 6; j += 2) for (let i = 6; i < nx - 6; i += 2) {
    const v = F[j * nx + i]; if (v < .66) continue; let top = true;
    for (let dj = -6; dj <= 6 && top; dj++) for (let di = -6; di <= 6; di++) if (F[(j + dj) * nx + i + di] > v) { top = false; break; }
    if (top && peaks.every(p => Math.hypot(p.x - i * step, p.y - j * step) > 120)) peaks.push({ x: i * step, y: j * step, v });
  }
  peaks.sort((a, b) => b.v - a.v);
  { const k = peaks.findIndex(p => p.x > 620 && p.x < 1100 && p.y > 140); if (k > 0) peaks.unshift(peaks.splice(k, 1)[0]); }

  const font = `font-family="IBM Plex Mono, monospace" font-weight="500" font-size="11" letter-spacing="0.88"`;
  let out = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMaxYMid slice" width="100%" height="100%" aria-hidden="true">`;
  for (const p of paths) out += `<path d="${p.d}" fill="none" stroke="${p.idx ? '#3A4654' : '#19212A'}" stroke-width="${p.idx ? 1.3 : .9}"/>`;
  for (const l of labels) out += `<g transform="translate(${r1(l.x)} ${r1(l.y)}) rotate(${r1(l.ang)})"><rect x="-19" y="-8" width="38" height="15" fill="#0B0E12"/><text x="0" y="4" text-anchor="middle" fill="#5E6B7A" ${font}>${l.t}</text></g>`;
  peaks.slice(0, 5).forEach((p, i) => {
    const c = i === 0 ? '#F7931A' : '#8B97A5';
    const t = i === 0 ? summitLabel : String(Math.round((p.v - .2) * 1500)).padStart(4, '0');
    out += `<g transform="translate(${p.x} ${p.y})"><path d="M0 -7L6 4H-6Z" fill="${i === 0 ? c : 'none'}" stroke="${c}" stroke-width="1.2"/><text x="10" y="4" fill="${c}" ${font}>${t}</text></g>`;
  });
  return out + '</svg>';
}
