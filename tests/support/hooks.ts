import {Before, After, setDefaultTimeout} from '@cucumber/cucumber';
import {chromium,Browser, BrowserContext, Page} from 'playwright';


setDefaultTimeout(60 * 1000);
export let page: Page;
let browser: Browser;
let context: BrowserContext;   



Before(async function () {
    browser = await chromium.launch({
        headless: false
    });
    context = await browser.newContext();
    page = await context.newPage();
});



After(async function () {
    await page.close();
    await context.close();
    await browser.close();
});