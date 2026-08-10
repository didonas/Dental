import puppeteer from 'puppeteer';
import { join } from 'path';
import { mkdirSync } from 'fs';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

async function generateSequence() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 1200 }); // Match renderer size exactly
  
  // Create output directory
  const outDir = join('public', 'images', 'teeth_3d');
  try { mkdirSync(outDir, { recursive: true }); } catch (e) {}

  await page.goto('http://localhost:3000/render_3d_tooth.html', { waitUntil: 'networkidle0' });
  
  // Wait until Three.js is ready
  await page.waitForFunction('window.isReady === true');
  await delay(1000); // Give textures an extra second just in case

  const totalFrames = 30;

  for (let i = 0; i < totalFrames; i++) {
    // Tell the page to render the specific frame
    await page.evaluate((frameIndex, frames) => {
      window.renderFrame(frameIndex, frames);
    }, i, totalFrames);
    
    // Slight delay to ensure canvas is updated
    await delay(50);
    
    // Format index to two digits
    const paddedIndex = i.toString().padStart(2, '0');
    const outputPath = join(outDir, `frame_${paddedIndex}.png`);
    
    // Capture the exact canvas element, omitting background
    const canvasElement = await page.$('canvas');
    await canvasElement.screenshot({ 
      path: outputPath, 
      omitBackground: true 
    });
    
    console.log(`Rendered and saved frame ${paddedIndex}`);
  }

  await browser.close();
}

generateSequence().catch(console.error);
