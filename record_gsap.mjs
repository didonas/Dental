import puppeteer from 'puppeteer';
import { PuppeteerScreenRecorder } from 'puppeteer-screen-recorder';
import { join } from 'path';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

async function capture() {
  const browser = await puppeteer.launch({
    defaultViewport: { width: 1440, height: 900 }
  });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  
  // Trigger initial render
  await page.evaluate(() => window.scrollTo(0, 10));
  await delay(1000);
  await page.evaluate(() => window.scrollTo(0, 0));
  await delay(1000);

  const baseDir = join('C:', 'Users', 'HP', '.gemini', 'antigravity', 'brain', '9887cba9-199e-478f-b5fe-42926591b157');
  const videoPath = join(baseDir, 'stage2_recording.mp4');

  const recorder = new PuppeteerScreenRecorder(page, {
    fps: 30,
    videoFrame: { width: 1440, height: 900 },
    videoCrf: 18,
    videoCodec: 'libx264',
    videoPreset: 'ultrafast',
  });

  await recorder.start(videoPath);
  
  // Scroll down slowly
  const maxScroll = await page.evaluate(() => window.innerHeight * 3.5);
  const steps = 100;
  
  for (let i = 0; i <= steps; i++) {
    const scrollPos = (maxScroll / steps) * i;
    await page.evaluate((pos) => window.scrollTo(0, pos), scrollPos);
    await delay(30); // ~30fps roughly
  }
  
  await delay(1000); // pause at bottom
  
  // Scroll up slowly
  for (let i = steps; i >= 0; i--) {
    const scrollPos = (maxScroll / steps) * i;
    await page.evaluate((pos) => window.scrollTo(0, pos), scrollPos);
    await delay(30);
  }

  await delay(500); // pause at top
  await recorder.stop();
  await browser.close();
  
  console.log(`Video saved to ${videoPath}`);
}

capture().catch(console.error);
