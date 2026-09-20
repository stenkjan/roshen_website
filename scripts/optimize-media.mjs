// One-off helper: turns the original WhatsApp photos into web-sized WebP files
// in public/media. Kept in the repo so new photos can be added the same way.
import sharp from "sharp";
import { mkdir, copyFile } from "node:fs/promises";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import path from "node:path";

const run = promisify(execFile);

const SRC = process.env.MEDIA_SRC ?? "/root/.claude/uploads/01861854-1ee7-59b9-bfd0-fb3c521af264";
// Second drop of photos (the cycling day). Separate upload folder, so it gets
// its own source path — override with MEDIA_SRC_2 when re-running.
const SRC_2 = process.env.MEDIA_SRC_2 ?? "/root/.claude/uploads/a5d31a99-9c84-5bd7-9e0a-47548b935aa3";
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

// slug -> [source file, target width, crop box on the original]
// The crops trim what the phone happened to include: empty canopy above the
// group, a washed-out white sky, and the printed border around the flyer scan.
const PHOTOS_2 = {
  "bike-tour-guests": ["1.jpg", 1200, { left: 0, top: 380, width: 1125, height: 1120 }],
  "jungle-bike-path": ["3.jpg", 1100, { left: 0, top: 170, width: 1125, height: 1330 }],
  "forest-stupa": ["4.jpg", 1400, { left: 0, top: 150, width: 1600, height: 1050 }],
  "village-tour-flyer": ["2.jpg", 1000, { left: 28, top: 28, width: 1164, height: 1544 }],
};

const VIDEOS = { "sigiriya-clip": "89eab70c-VID20260802WA0041.mp4" };
const VIDEOS_2 = { "lake-bike-ride": "db92a9d9-roshen_vid_1509.mp4" };

// Still used as the thumbnail in the video switcher, so it has to be a frame
// the clip actually contains. slug -> [seconds into the clip, target width]
const POSTERS = {
  "sigiriya-clip": [0.4, 480],
  "lake-bike-ride": [6.2, 480],
};

await mkdir(OUT, { recursive: true });

const manifest = [];

const encode = async (slug, img, width) => {
  const meta = await img.metadata();
  const w = Math.min(width, meta.width);
  const h = Math.round((meta.height / meta.width) * w);
  await img.resize({ width: w }).webp({ quality: 74, effort: 6 }).toFile(path.join(OUT, `${slug}.webp`));
  manifest.push({ slug, w, h });
  console.log(`${slug}.webp  ${w}x${h}`);
};

for (const [slug, [file, width]] of Object.entries(PHOTOS)) {
  await encode(slug, sharp(path.join(SRC, file)).rotate(), width);
}

for (const [slug, [file, width, crop]] of Object.entries(PHOTOS_2)) {
  await encode(slug, sharp(path.join(SRC_2, file)).rotate().extract(crop), width);
}

for (const [slug, file] of Object.entries(VIDEOS)) {
  await copyFile(path.join(SRC, file), path.join(OUT, `${slug}.mp4`));
  console.log(`${slug}.mp4  copied`);
}

for (const [slug, file] of Object.entries(VIDEOS_2)) {
  await copyFile(path.join(SRC_2, file), path.join(OUT, `${slug}.mp4`));
  console.log(`${slug}.mp4  copied`);
}

// Needs ffmpeg on PATH — the only step that does. Everything above still runs
// without it, so a missing ffmpeg is a warning, not a failed build.
for (const [slug, [seconds, width]] of Object.entries(POSTERS)) {
  const frame = path.join(OUT, `${slug}-poster.webp`);
  try {
    await run("ffmpeg", [
      "-v", "error", "-y",
      "-ss", String(seconds),
      "-i", path.join(OUT, `${slug}.mp4`),
      "-frames:v", "1",
      "-vf", `scale=${width}:-2`,
      "-quality", "72",
      frame,
    ]);
    const meta = await sharp(frame).metadata();
    manifest.push({ slug: `${slug}-poster`, w: meta.width, h: meta.height });
    console.log(`${slug}-poster.webp  ${meta.width}x${meta.height}`);
  } catch {
    console.warn(`${slug}-poster.webp  skipped (ffmpeg not available)`);
  }
}

console.log("\nDimensions:\n" + manifest.map((m) => `  ${m.slug}: { w: ${m.w}, h: ${m.h} },`).join("\n"));
