import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = path.join(process.cwd(), 'public');

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      files.push(...await walk(full));
    } else {
      files.push(full);
    }
  }
  return files;
}

function isRasterImage(file) {
  return /\.(png|jpg|jpeg)$/i.test(file);
}

async function convertToWebP(file) {
  try {
    const { dir, name } = path.parse(file);
    const out = path.join(dir, `${name}.webp`);
    const img = sharp(file);
    await img.webp({ quality: 75 }).toFile(out);
    console.log('Converted', path.relative(PUBLIC_DIR, file), '->', path.relative(PUBLIC_DIR, out));
  } catch (err) {
    console.error('Failed to convert', file, err.message);
  }
}

(async function main(){
  try {
    const files = await walk(PUBLIC_DIR);
    const images = files.filter(isRasterImage);
    if (!images.length) {
      console.log('No raster images found in public folder.');
      return;
    }
    for (const f of images) {
      await convertToWebP(f);
    }
    console.log('Image optimization complete.');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
