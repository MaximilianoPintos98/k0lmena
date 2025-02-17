import { Before, After } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "@playwright/test";

let browser: Browser;
let page: Page;

Before(async function (this: any) {
  browser = await chromium.launch({ headless: false }); 
  page = await browser.newPage();
  this.page = page;
});

After(async function () {
  await browser.close();
});
