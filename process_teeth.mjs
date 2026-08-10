import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const IN_DIR = path.join(process.cwd(), 'public', 'images');
const OUT_DIR = path.join(process.cwd(), 'public', 'images', 'teeth');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR);
}

const inputFiles = [
  'tooth_01_damaged_1786365258733.jpg',
  'tooth_02_cleaning_1786365327208.jpg',
  'tooth_04_restoring_1786365365335.jpg',
  'tooth_06_clean_1786365390834.jpg',
  'tooth_08_perfect_1786365413240.jpg'
];

async function removeBackground(inputPath, outputPath) {
  const image = sharp(inputPath);
  const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    // Calculate brightness. The background is mostly dark navy/black.
    // If it's very dark, make it transparent.
    // We use a feathering approach so edges are smooth.
    const maxVal = Math.max(r, g, b);
    const threshold = 35; // Pixels darker than this start becoming transparent
    const feather = 30; // Pixels up to threshold+feather will be semi-transparent

    if (maxVal < threshold) {
      data[i + 3] = 0; // Fully transparent
    } else if (maxVal < threshold + feather) {
      // Semi-transparent
      const alpha = Math.floor(((maxVal - threshold) / feather) * 255);
      data[i + 3] = alpha;
    }
  }

  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4
    }
  }).png().toFile(outputPath);
}

async function compositeImages(img1Path, img2Path, outputPath) {
  const img1 = sharp(img1Path);
  const { width, height } = await img1.metadata();
  
  await img1.composite([{
    input: img2Path,
    blend: 'over' // Actually we need 50% opacity.
  }]).toFile('temp.png'); // Wait, Sharp composite doesn't easily do 50% opacity unless input has it.
}

// Since doing 50% opacity in sharp requires creating a buffer with modified alpha, 
// I'll just write a custom pixel blender for the intermediate frames.
async function blendImages(path1, path2, outputPath, ratio = 0.5) {
  const img1 = sharp(path1);
  const img2 = sharp(path2);
  
  const [buf1, buf2] = await Promise.all([
    img1.ensureAlpha().raw().toBuffer(),
    img2.ensureAlpha().raw().toBuffer()
  ]);
  
  const meta = await img1.metadata();
  const outData = Buffer.alloc(buf1.length);
  
  for (let i = 0; i < buf1.length; i += 4) {
    outData[i] = Math.round(buf1[i] * (1 - ratio) + buf2[i] * ratio);
    outData[i+1] = Math.round(buf1[i+1] * (1 - ratio) + buf2[i+1] * ratio);
    outData[i+2] = Math.round(buf1[i+2] * (1 - ratio) + buf2[i+2] * ratio);
    outData[i+3] = Math.round(buf1[i+3] * (1 - ratio) + buf2[i+3] * ratio);
  }
  
  await sharp(outData, {
    raw: {
      width: meta.width,
      height: meta.height,
      channels: 4
    }
  }).png().toFile(outputPath);
}

async function main() {
  console.log("Removing backgrounds...");
  await removeBackground(path.join(IN_DIR, inputFiles[0]), path.join(OUT_DIR, 'stage_1.png'));
  await removeBackground(path.join(IN_DIR, inputFiles[1]), path.join(OUT_DIR, 'stage_2.png'));
  await removeBackground(path.join(IN_DIR, inputFiles[2]), path.join(OUT_DIR, 'stage_4.png'));
  await removeBackground(path.join(IN_DIR, inputFiles[3]), path.join(OUT_DIR, 'stage_6.png'));
  await removeBackground(path.join(IN_DIR, inputFiles[4]), path.join(OUT_DIR, 'stage_8.png'));
  
  console.log("Generating intermediate frames...");
  await blendImages(path.join(OUT_DIR, 'stage_2.png'), path.join(OUT_DIR, 'stage_4.png'), path.join(OUT_DIR, 'stage_3.png'), 0.5);
  await blendImages(path.join(OUT_DIR, 'stage_4.png'), path.join(OUT_DIR, 'stage_6.png'), path.join(OUT_DIR, 'stage_5.png'), 0.5);
  await blendImages(path.join(OUT_DIR, 'stage_6.png'), path.join(OUT_DIR, 'stage_8.png'), path.join(OUT_DIR, 'stage_7.png'), 0.5);
  
  console.log("Done generating 8 transparent tooth states!");
}

main().catch(console.error);
