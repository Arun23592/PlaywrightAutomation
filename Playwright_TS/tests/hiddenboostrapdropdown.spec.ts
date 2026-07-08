import {test, expect, Locator} from '@playwright/test';

test('test Bootsrap dropdown', async ({page})=> {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');

  await page.getByRole('button', {name: ' Login '}).click();

  await page.getByText('PIM').click();


  await page.locator('form i').nth(2).click();

  const options:Locator = page.locator("div[role='listbox'] span");

  const count = await options.count();

  console.log("Number of options: ", count);

  

  //print all options
  console.log("All the text content: ", await options.allTextContents());
console.log("print all the options..")
for(let i=0; i<count; i++){
    console.log(await options.nth(i).textContent());
  }
  //select/click option
  for(let i=0; i<count; i++){
    const text=await options.nth(i).innerText();
    if(text==='Automation tester'){
      await options.nth(i).click();
      break;
    }
  }

  await page.waitForTimeout(5000);
})