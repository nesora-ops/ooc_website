/**
 * Generates the editorial artwork for the blog / insight image slots.
 *
 * These are deliberately abstract and geometric, not photographic. uiux.md
 * rejects "stock-photo-heavy corporate layouts" and requires imagery to explain
 * a concept, so each piece is a diagram of its article's actual argument, drawn
 * in the site's own tokens (globals.css :root) and in the same gradient/geometry
 * language as .soft-grid, .noise-wash and the /partners orbs.
 *
 * Committed as source so the set is reproducible if the palette moves:
 *   node scripts/generate-blog-art.mjs
 *
 * Output: public/images/blog/<slug>.png at 1600x900.
 *
 * TWO CONSTRAINTS DRIVE EVERY COMPOSITION:
 *
 * 1. CROPPING. One file fills a 16:9 thumbnail, a 16:9 insight card and a 21:9
 *    article hero, all with object-cover. A 21:9 crop removes ~107px from top
 *    and bottom, so every load-bearing mark sits inside y = 170..730.
 *
 * 2. SCALE. The thumbnail renders at ~380px wide — a 4.2x reduction. Strokes
 *    below ~10px here vanish there, so marks are deliberately heavy and the
 *    motif fills the centre of the frame rather than floating in it.
 */
import { mkdir, readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = join(HERE, "..", "public", "images", "blog");

const W = 1600;
const H = 900;
const MID = H / 2;
const CX = W / 2;

const C = {
  navy: "#17324d",
  navyInk: "#102a43",
  gold: "#e4b94f",
  goldInk: "#735a12",
  teal: "#0a7168",
  mint: "#dff4ec",
  coral: "#ff8b70",
  sky: "#dfe9ff",
  butter: "#f7e8a4",
  bg: "#fbfcf8",
};

/** Shared ground: warm paper, two colour washes, a faint rule grid. */
function frame(a, b, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <radialGradient id="w1" cx="14%" cy="16%" r="72%">
      <stop offset="0%" stop-color="${a}" stop-opacity="1"/>
      <stop offset="100%" stop-color="${a}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="w2" cx="88%" cy="86%" r="68%">
      <stop offset="0%" stop-color="${b}" stop-opacity=".95"/>
      <stop offset="100%" stop-color="${b}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
      <path d="M80 0H0v80" fill="none" stroke="${C.navy}" stroke-opacity=".09" stroke-width="1.5"/>
    </pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="${C.bg}"/>
  <rect width="${W}" height="${H}" fill="url(#w1)"/>
  <rect width="${W}" height="${H}" fill="url(#w2)"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  ${body}
</svg>`;
}

const stroke = (c, w = 12) =>
  `fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"`;

/** Brand fill with a navy outline — the set's one repeated shape treatment. */
const solid = (c) => `fill="${c}" stroke="${C.navy}" stroke-width="7" stroke-opacity=".55"`;

// ── One composition per article ────────────────────────────────────────────
// Each is the article's claim as a diagram, not an illustration of an office.

/** 1. An unevidenced claim beside a verified one. */
const claimVsEvidence = () => frame(C.mint, C.butter, `
  <circle cx="510" cy="${MID}" r="230" fill="${C.bg}" fill-opacity=".5"/>
  <circle cx="510" cy="${MID}" r="230" ${stroke(C.navy, 11)} stroke-dasharray="26 30" stroke-opacity=".45"/>
  <path d="M430 ${MID - 78} l160 156 M590 ${MID - 78} l-160 156" ${stroke(C.navy, 13)} stroke-opacity=".3"/>
  <circle cx="1090" cy="${MID}" r="230" ${solid(C.teal)} fill-opacity=".16"/>
  <circle cx="1090" cy="${MID}" r="230" ${stroke(C.teal, 14)}/>
  <path d="M980 ${MID + 6} l78 80 146 -172" ${stroke(C.teal, 26)}/>
  <path d="M760 ${MID} h80" ${stroke(C.navy, 9)} stroke-opacity=".4" stroke-dasharray="2 34"/>`);

/** 2. Attrition draining away, and the lever that arrests it. */
const attrition = () => {
  const bars = [0, 1, 2, 3, 4]
    .map((i) => {
      const h = 380 - i * 68;
      const x = 330 + i * 132;
      return `<rect x="${x}" y="${MID + 200 - h}" width="84" height="${h}" rx="42" fill="${C.navy}" fill-opacity="${0.55 - i * 0.09}"/>`;
    })
    .join("");
  return frame(C.sky, C.butter, `
  ${bars}
  <path d="M330 ${MID + 216} H1270" ${stroke(C.navy, 8)} stroke-opacity=".3"/>
  <path d="M980 ${MID + 120} l250 -290" ${stroke(C.coral, 30)}/>
  <circle cx="1230" cy="${MID - 170}" r="54" fill="${C.coral}"/>
  <circle cx="980" cy="${MID + 120}" r="28" fill="${C.navy}" fill-opacity=".6"/>`);
};

/** 3. Four certification levels as an ascending stair. */
const tiers = () => {
  const tones = [C.sky, C.mint, C.butter, C.gold];
  const steps = tones
    .map((t, i) => {
      const h = 170 + i * 128;
      const x = 350 + i * 232;
      return `<rect x="${x}" y="${MID + 260 - h}" width="196" height="${h}" rx="36" ${solid(t)}/>`;
    })
    .join("");
  return frame(C.mint, C.butter, `${steps}
  <path d="M330 ${MID + 282} H1290" ${stroke(C.navy, 9)} stroke-opacity=".35"/>`);
};

/** 4. Ten questions; one of them is the one that actually lands. */
const questions = () => {
  let dots = "";
  for (let r = 0; r < 2; r += 1) {
    for (let c = 0; c < 5; c += 1) {
      const x = 400 + c * 200;
      const y = MID - 125 + r * 250;
      const live = r === 1 && c === 2;
      dots += live
        ? `<circle cx="${x}" cy="${y}" r="88" fill="${C.coral}"/>
           <circle cx="${x}" cy="${y}" r="122" ${stroke(C.coral, 9)} stroke-opacity=".5"/>`
        : `<circle cx="${x}" cy="${y}" r="88" ${stroke(C.navy, 11)} stroke-opacity=".33"/>`;
    }
  }
  return frame(C.sky, C.mint, dots);
};

/** 5. Four stakeholder voices resolving into one reading. */
const stakeholders = () => {
  const pts = [
    [370, MID - 235, C.teal],
    [370, MID + 235, C.gold],
    [1230, MID - 235, C.coral],
    [1230, MID + 235, C.navy],
  ];
  const spokes = pts
    .map(([x, y]) => `<path d="M${x} ${y} L${CX} ${MID}" ${stroke(C.navy, 8)} stroke-opacity=".3"/>`)
    .join("");
  const nodes = pts
    .map(([x, y, c]) => `<circle cx="${x}" cy="${y}" r="86" ${solid(c)}/>`)
    .join("");
  return frame(C.mint, C.sky, `${spokes}
  <circle cx="${CX}" cy="${MID}" r="172" fill="${C.bg}"/>
  <circle cx="${CX}" cy="${MID}" r="172" ${stroke(C.navy, 16)}/>
  <circle cx="${CX}" cy="${MID}" r="76" fill="${C.navy}" fill-opacity=".9"/>
  ${nodes}`);
};

/** 6. A gauge, and the needle that actually moved. */
const needle = () => {
  const cy = MID + 190;
  const r = 380;
  const arc = (from, to, col, w) => {
    const p = (deg) => [CX + r * Math.cos((deg * Math.PI) / 180), cy + r * Math.sin((deg * Math.PI) / 180)];
    const [x1, y1] = p(from);
    const [x2, y2] = p(to);
    return `<path d="M${x1} ${y1} A${r} ${r} 0 0 1 ${x2} ${y2}" ${stroke(col, w)}/>`;
  };
  return frame(C.butter, C.mint, `
  ${arc(180, 360, C.navy, 34)}
  ${arc(180, 254, C.gold, 34)}
  <path d="M${CX} ${cy} L${CX + 262} ${cy - 262}" ${stroke(C.coral, 26)}/>
  <circle cx="${CX}" cy="${cy}" r="48" fill="${C.navy}"/>`);
};

/** 7. A flat run of survey scores, with the one real signal breaking rank. */
const surveys = () => {
  const vals = [0, 14, -10, 8, -6, 12, -215, 10, -8, 4];
  const pts = vals.map((v, i) => [340 + i * 102, MID + 60 + v]);
  const line = pts.map(([x, y], i) => `${i ? "L" : "M"}${x} ${y}`).join(" ");
  const dots = pts
    .map(([x, y], i) =>
      i === 6
        ? `<circle cx="${x}" cy="${y}" r="44" fill="${C.coral}"/>
           <circle cx="${x}" cy="${y}" r="74" ${stroke(C.coral, 8)} stroke-opacity=".45"/>`
        : `<circle cx="${x}" cy="${y}" r="20" fill="${C.navy}" fill-opacity=".5"/>`
    )
    .join("");
  return frame(C.sky, C.butter, `
  <path d="M320 ${MID + 60} H1280" ${stroke(C.navy, 6)} stroke-opacity=".25" stroke-dasharray="4 26"/>
  <path d="${line}" ${stroke(C.teal, 15)}/>
  ${dots}`);
};

/** 8. Verification: a claim brought into focus, then sealed. */
const verify = () => frame(C.mint, C.sky, `
  <circle cx="660" cy="${MID - 40}" r="250" fill="${C.bg}" fill-opacity=".8"/>
  <circle cx="660" cy="${MID - 40}" r="250" ${stroke(C.navy, 22)}/>
  <path d="M840 ${MID + 140} l190 190" ${stroke(C.navy, 44)}/>
  <path d="M544 ${MID - 36} l82 84 150 -176" ${stroke(C.teal, 28)}/>
  <circle cx="1180" cy="${MID - 150}" r="96" fill="${C.gold}"/>
  <circle cx="1180" cy="${MID - 150}" r="130" ${stroke(C.gold, 9)} stroke-opacity=".5"/>`);

/** 9. An agenda where workplace quality is raised to the top line. */
const boardroom = () => {
  const rows = [0, 1, 2, 3]
    .map((i) => {
      const y = MID - 195 + i * 130;
      const lead = i === 1;
      return lead
        ? `<rect x="330" y="${y - 42}" width="700" height="84" rx="42" ${solid(C.gold)}/>`
        : `<rect x="330" y="${y - 28}" width="${560 - i * 60}" height="56" rx="28" fill="${C.navy}" fill-opacity=".42"/>`;
    })
    .join("");
  return frame(C.butter, C.sky, `${rows}
  <circle cx="1230" cy="${MID}" r="215" fill="${C.mint}"/>
  <circle cx="1230" cy="${MID}" r="215" ${stroke(C.navy, 14)}/>
  <circle cx="1230" cy="${MID}" r="122" ${stroke(C.navy, 10)} stroke-opacity=".45"/>`);
};

/** 10. The journey: application through to a sealed certification. */
const journey = () => {
  const xs = [340, 640, 940, 1250];
  const seg = `<path d="M340 ${MID} H1250" ${stroke(C.navy, 9)} stroke-opacity=".3" stroke-dasharray="3 34"/>`;
  const cols = [C.sky, C.mint, C.teal];
  const nodes = xs
    .map((x, i) =>
      i === xs.length - 1
        ? `<circle cx="${x}" cy="${MID}" r="130" fill="${C.gold}"/>
           <circle cx="${x}" cy="${MID}" r="168" ${stroke(C.gold, 9)} stroke-opacity=".45"/>
           <path d="M${x - 58} ${MID + 6} l46 48 88 -104" ${stroke(C.navyInk, 22)}/>`
        : `<circle cx="${x}" cy="${MID}" r="88" ${solid(cols[i])}/>`
    )
    .join("");
  return frame(C.mint, C.butter, `${seg}${nodes}`);
};

// Concepts in the order the titles appear in src/data/blog-posts.ts.
const CONCEPTS = [
  claimVsEvidence,
  attrition,
  tiers,
  questions,
  stakeholders,
  needle,
  surveys,
  verify,
  boardroom,
  journey,
];

/**
 * Slugs come from blog-posts.ts, not from a copy kept here — hand-copying them
 * silently mismatched one file (an apostrophe slugifies to "-s-", not "s") and
 * left that article with an empty slot. Parsing the real titles means a renamed
 * article fails loudly instead.
 */
const slugify = (t) =>
  t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const source = await readFile(join(HERE, "..", "src", "data", "blog-posts.ts"), "utf8");
const block = source.match(/const titles = \[([\s\S]*?)\n\];/);
if (!block) throw new Error("Could not find the `titles` array in src/data/blog-posts.ts");

// Each entry is one quoted string per line. The closing quote must match the
// opening one, so an apostrophe inside a double-quoted title cannot end it.
const titles = [...block[1].matchAll(/^\s*(['"`])(.*?)\1,\s*$/gm)].map((m) => m[2]);
if (titles.length !== CONCEPTS.length) {
  throw new Error(
    `blog-posts.ts has ${titles.length} titles but this script defines ${CONCEPTS.length} concepts. ` +
      `Add or remove a composition so every article has art.`
  );
}

const ART = titles.map((t, i) => [slugify(t), CONCEPTS[i]]);

await mkdir(OUT, { recursive: true });

for (const [slug, make] of ART) {
  // palette: these are flat graphics, so indexed colour cuts ~85% of the bytes
  // with no visible loss.
  await sharp(Buffer.from(make()))
    .png({ compressionLevel: 9, palette: true, quality: 90 })
    .toFile(join(OUT, `${slug}.png`));
  console.log(`  ${slug}.png`);
}

console.log(`\n${ART.length} images written to public/images/blog/`);
