// One-off script: resizes and compresses all images in src/assets in place.
// Run with: node scripts/compress-images.mjs
import sharp from 'sharp';
import { readdir, rename, stat } from 'node:fs/promises';
import path from 'node:path';

const ASSETS = path.resolve('src/assets');
const MAX_WIDTH = 1280;

const files = await readdir(ASSETS);

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

  const fullPath = path.join(ASSETS, file);
  const tmpPath = fullPath + '.tmp';
  const before = (await stat(fullPath)).size;

  const img = sharp(fullPath).rotate(); // .rotate() applies EXIF orientation
  const isLogo = file.startsWith('logo');

  if (ext === '.png') {
    await img
      .resize({ width: isLogo ? 512 : MAX_WIDTH, withoutEnlargement: true })
      .png({ compressionLevel: 9, palette: true })
      .toFile(tmpPath);
  } else {
    await img
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: 72, mozjpeg: true })
      .toFile(tmpPath);
  }

  await rename(tmpPath, fullPath);
  const after = (await stat(fullPath)).size;
  console.log(`${file}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`);
}
