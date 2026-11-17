// Writes the topographic backgrounds to public/img/:
//   hero-topo.svg — the hero map (seed 7 is the approved terrain)
//   topo-tile.svg — a seamless, repeating version for section backgrounds (no orange summit)
import { writeFileSync } from 'node:fs';
import { generateTopoSvg } from './topo-background.mjs';
import { generateTopoTileSvg } from './topo-tile.mjs';

const write = (name, svg) => {
  const out = new URL(`../public/img/${name}`, import.meta.url);
  writeFileSync(out, svg);
  console.log(`wrote ${out.pathname}`);
};

write('hero-topo.svg', generateTopoSvg({ seed: 7, summitLabel: '8333' }));
write('topo-tile.svg', generateTopoTileSvg({ seed: 7 }));
