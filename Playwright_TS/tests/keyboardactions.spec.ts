import {test, expect, Page} from "@playwright/test";


test('keyboard actions', async({page})=>{

  await page.goto("https://testautomationpractice.blogspot.com/");

  const input1 = await page.locator("#input1");

  //1. focus on the input1
  await input1.focus();  //await input1.click();

  //2. provide the inout text
  await page.keyboard.insertText("welcome");

  //3. Ctrl + A - select text from input1
  await page.keyboard.press('Control+A');
  // await page.keyboard.press('A');
  // await page.keyboard.up('Control');


  //4. Ctrl + C - copy text from input 1
  await page.keyboard.press('Control+C');
  // await page.keyboard.press('C');
  // await page.keyboard.up('Control');

  //5. press TAB - 2 times
  await page.keyboard.press('TAB');
  await page.keyboard.press('TAB');

  //6. Ctrl + V - Past the text in input2
  await page.keyboard.press('Control+V');

  //7. Press TAB - 2 times
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');

  //8. Ctrl+V - past the text input 3
  await page.keyboard.press('Control+V');

  await page.waitForTimeout(5000);

})