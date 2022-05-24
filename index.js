
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium-browser'
  })
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.goto('http://<ipaddress>/page/login_main.html');

  await page.keyboard.press('Tab');
  await page.keyboard.type('admin');
  await page.keyboard.press('Tab');
  await page.keyboard.type('<password>');
  await page.keyboard.press('Tab');
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle0' }),
    await page.keyboard.press('Enter')
  ]);

  for (let i = 0; i < 28; i++) {
    await page.keyboard.press('Tab');
  }
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle0' }),
    await page.keyboard.press('Enter')
  ]);

  for (let i = 0; i < 6; i++) {
    await page.keyboard.press('Tab');
  }
  await page.keyboard.press('Enter');

  for (let i = 0; i < 7; i++) {
    await page.keyboard.press('Tab');
  }
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle0' }),
    await page.keyboard.press('Enter')
  ]);
  await page.screenshot({ path: 'example.png' });
  await browser.close();
})();
