import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

async function capture() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  
  // Scroll down to trigger lazy loading
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 100;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight - window.innerHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
  
  await delay(2000); // Wait for images to load
  await page.evaluate(() => window.scrollTo(0, 0)); // Scroll back to top
  await delay(500);

  const outputPath = join('C:', 'Users', 'HP', '.gemini', 'antigravity', 'brain', '9887cba9-199e-478f-b5fe-42926591b157', 'screenshot_v3.png');
  await page.screenshot({ path: outputPath, fullPage: true });
  
  await browser.close();
  console.log('Screenshot saved to', outputPath);
}

capture();
