import puppeteer from 'puppeteer';
import { join } from 'path';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

async function capture() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  
  // Trigger initial render and load images
  await page.evaluate(() => window.scrollTo(0, 10));
  await delay(1000);
  await page.evaluate(() => window.scrollTo(0, 0));
  await delay(3000); // Wait for the 30 images to preload in Hero.tsx

  const baseDir = join('C:', 'Users', 'HP', '.gemini', 'antigravity', 'brain', '9887cba9-199e-478f-b5fe-42926591b157');

  const scrollHeights = [
    { percent: 0, suffix: '00' },
    { percent: 0.25, suffix: '25' },
    { percent: 0.5, suffix: '50' },
    { percent: 0.75, suffix: '75' },
    { percent: 1, suffix: '100' }
  ];

  // 350vh pinned distance
  for (const { percent, suffix } of scrollHeights) {
    await page.evaluate((pct) => {
      window.scrollTo(0, window.innerHeight * 3.5 * pct);
    }, percent);
    
    await delay(1000); // let GSAP catch up
    
    const outputPath = join(baseDir, `stage2_${suffix}.png`);
    await page.screenshot({ path: outputPath });
    console.log(`Saved screenshot at ${percent * 100}% scroll`);
  }

  await browser.close();
}

capture().catch(console.error);
