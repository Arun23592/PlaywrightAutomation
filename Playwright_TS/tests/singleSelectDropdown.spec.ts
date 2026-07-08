import {test, expect} from '@playwright/test';

test('single select dropdown', async({page})=>{

   await page.goto('https://testautomationpractice.blogspot.com/');
  //  await page.getByLabel('#country').selectOption('India');   // visible text
  //  await page.getByLabel('#country').selectOption({value: 'uk'});  //value attribute
  //  await page.getByLabel('#country').selectOption({label: 'Canada'}); //by using label

  //  await page.getByLabel('#country').selectOption({index:3}); // using index



  //2. count of options
  const options = page.locator('#country>option');
  await expect(options).toHaveCount(10);

  //3. Check if a specific option exists
  const optionText = await page.locator('#country>option').allTextContents();
  expect(optionText).toContain('Japan');

  //4. Print all drop down
  const texts = await page.locator('#colors>option').allTextContents();
  for(const text of texts){
    console.log(text);
  }
   await page.waitForTimeout(5000);

  //5. check for duplicate
  const op = await page.locator('#colors>option').allTextContents();

  const set = new Set();

  const duplicates = [];

  for(const item of op){
    if(set.has(item)){
      duplicates.push(item);
    }else{
      set.add(item);
    }
  }

});