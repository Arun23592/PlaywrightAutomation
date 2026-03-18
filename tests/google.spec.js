const { test, expect } = require("@playwright/test");

test("Verify application title", async ({ page }) => {
  await page.goto("https://www.google.com");
  const url = await page.url();
  console.log("Title is " + url);
  const title = await page.title();
  console.log("Title is " + title);

  await page.getByTitle("Search").fill("playwright");

  // await page.getByText("Google Search").click();
  
  await page.getByRole('button', { name: 'Google Search' }).click();
  console.log("Google search button clicked");

});
