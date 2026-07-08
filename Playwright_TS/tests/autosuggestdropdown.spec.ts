import {test, expect, Locator} from '@playwright/test';

test('Autosuggest dropdown', async({page})=>{

  await page.goto("https://www.flipkart.com/");

  await page.getByRole('button', { name: '✕' }).click();
  await page.waitForTimeout(5000);

  // await page.locator("input[name='q']").fill("smart");

  await page.locator("(//input[@name='q'])[1]").fill("smart");

  await page.waitForTimeout(5000);

  //Get all suggested options --> Ctrl+Shift+P on DOM --> emulate focused page

  const options:Locator = page.locator("ul>li");

  const count = await options.count();

  console.log("Nuber of suggested options: ", count);



  //print all the suggested options

  console.log("5th option: ", await options.nth(5).innerText());

  console.log("printing all the auto suggestions");

  for(let i=0; i<count; i++){
    console.log(await options.nth(i).textContent());
  }

  //select/click on smartphone option

  for(let i=0; i<count; i++){
    const text= await options.nth(i).innerText();
    if(text === 'smartphone'){
      options.nth(i).click();
      break;
    }
  }

});