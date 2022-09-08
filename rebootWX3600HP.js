const puppeteer = require('puppeteer-core');
const { IncomingWebhook } = require("@slack/webhook");
const webhook = new IncomingWebhook("https://hooks.slack.com/services/xxxxxxxxxxxxxxxxxxxxxxxxxxx");

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium-browser'
  })

  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.goto('http://<ip address>page/login_main.html');

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
  
    await webhook.send({
    text: "reboot WX3600HP",
  });
  
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle0' }),
    await page.keyboard.press('Enter')
  ]);
  await browser.close();
})();
