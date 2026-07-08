import {test, expect, Page, chromium} from "@playwright/test";

test("handle tabs", async()=>{

  const browser = await chromium.launch();
  const context = browser.newContext();

  const Parentpage = (await context).newPage();
  await (await Parentpage).goto("https://testautomationpractice.blogspot.com/");

  const [childPage] = await Promise.all([(await context).waitForEvent('page'), (await Parentpage).locator("button:has-text('New tab')").click()]);

  //Approach 1: switch between pages and get titles (using context)

  const pages=(await context).pages(); //return array
  console.log("Number of pages created:", pages.length);

  console.log("title of the parent page", await pages[0].title());
  console.log("title of the child page", await pages[1].title());


//Approach 2: alternate
console.log("Title of the parent page", await (await Parentpage).title());
console.log("Title of the chile page", await childPage.title());

});