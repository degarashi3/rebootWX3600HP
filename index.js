const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium-browser'
  })
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.goto('http://<your-WX3600HP-IP-address>/page/login_main.html');

  await page.keyboard.press('Tab');
  await page.keyboard.type('admin');
  await page.keyboard.press('Tab');
  await page.keyboard.type('<password>');
  await Promise.all([
    page.waitForNavigation(),
    await page.keyboard.press('Enter')
  ]);

  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await Promise.all([
    page.waitForNavigation(),
    await page.keyboard.press('Enter')
  ]);

  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await Promise.all([
    page.waitForNavigation(),
    await page.keyboard.press('Enter')
  ]);

  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await Promise.all([
    page.waitForNavigation(),
    await page.keyboard.press('Enter')
  ]);

  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();