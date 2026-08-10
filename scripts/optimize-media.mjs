// One-off helper: turns the original WhatsApp photos into web-sized WebP files
// in public/media. Kept in the repo so new photos can be added the same way.
import sharp from "sharp";
import { mkdir, copyFile } from "node:fs/promises";
import path from "node:path";

const SRC = process.env.MEDIA_SRC ?? "/root/.claude/uploads/01861854-1ee7-59b9-bfd0-fb3c521af264";
const OUT = path.resolve("public/media");

// slug -> [source file, target width]
const PHOTOS = {
  "roshen-boulder": ["4278701e-IMG20260802WA0026.jpg", 1800],
  "pidurangala-sunset-dog": ["859f75da-IMG20260802WA0028.jpg", 1500],
  "lotus-blessing": ["fdea8c2b-IMG20260802WA0030.jpg", 1400],
  "lion-rock-view": ["955e14fe-IMG20260802WA0019.jpg", 1000],
  "thalkote-wewa": ["3986ac07-IMG20260502WA0038.jpg", 1500],
  "roshen-guest-field": ["b577ada5-IMG20260502WA0040.jpg", 1200],
  "village-evening": ["4b22da2c-IMG20260802WA0008.jpg", 1100],
  "sunset-guests": ["14e5cfaa-IMG20260802WA0018.jpg", 1000],
  "sunrise-meditation": ["29545c2a-IMG20260802WA0014.jpg", 1100],
  "guesthouse-hangout": ["ee79f511-IMG20260802WA0017.jpg", 1100],
  "wild-honey": ["6c16f86c-IMG20260802WA0035.jpg", 1000],
  "rock-puppies": ["5a723d8a-IMG20260802WA0032.jpg", 1000],
  "jungle-mushrooms": ["bd8c173d-IMG20260802WA0015.jpg", 900],
  "rock-lizard": ["ba91461a-IMG20260802WA0016.jpg", 900],
};

const VIDEOS = { "sigiriya-clip": "89eab70c-VID20260802WA0041.mp4" };

await mkdir(OUT, { recursive: true });

const manifest = [];
for (const [slug, [file, width]] of Object.entries(PHOTOS)) {
  const img = sharp(path.join(SRC, file)).rotate();
  const meta = await img.metadata();
  const w = Math.min(width, meta.width);
  const h = Math.round((meta.height / meta.width) * w);
  await img.resize({ width: w }).webp({ quality: 74, effort: 6 }).toFile(path.join(OUT, `${slug}.webp`));
  manifest.push({ slug, w, h });
  console.log(`${slug}.webp  ${w}x${h}`);
}

for (const [slug, file] of Object.entries(VIDEOS)) {
  await copyFile(path.join(SRC, file), path.join(OUT, `${slug}.mp4`));
  console.log(`${slug}.mp4  copied`);
}

console.log("\nDimensions:\n" + manifest.map((m) => `  ${m.slug}: { w: ${m.w}, h: ${m.h} },`).join("\n"));
