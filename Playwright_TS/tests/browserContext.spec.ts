import {test, expect, Page, chromium} from "@playwright/test";

test("Browser context", async()=>{

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page1 = await context.newPage();
  const page2 = await context.newPage();

  await page1.goto("https://playwright.dev/");
  await page2.goto("https://testautomationpractice.blogspot.com/");

});

/***
 * we work on multiple browser session by handling tabs, pages
 * Indepedent browser session
 */