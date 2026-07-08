import {test, expect, Page} from "@playwright/test";


test("shadow dom", async({page})=>{

  await page.goto("https://testautomationpractice.blogspot.com/");


  const text = await page.locator('#shadow_host >> #shadow_content').innerText();
  await expect(text).toContain('Mobiles');

  await page.locator('#shadow_host >> input[type="text"]').fill("Hello shadow dom");

  await page.locator('#shadow_host >> input[type="checkbox"]').click();


  await page.locator('#shadow_host >> input[type="file"]').setInputFiles('uploads/single.txt');


  await page.waitForTimeout(5000);
})