import {test, expect, Page, chromium} from "@playwright/test";


test("handle popups", async()=>{

  const browser = await chromium.launch();

  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto("https://testautomationpractice.blogspot.com/");


  await Promise.all([page.waitForEvent('popup'), await page.locator("#Popup").click()]);

  const allPopupWindows = context.pages();  //return array of pages
  console.log("Number of pages/windows:", allPopupWindows.length);



});