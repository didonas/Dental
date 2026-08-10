import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  
  // Wait a bit for animations to settle
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  await page.screenshot({ path: 'public/images/final_fullpage.png', fullPage: true });
  
  await browser.close();
})();
