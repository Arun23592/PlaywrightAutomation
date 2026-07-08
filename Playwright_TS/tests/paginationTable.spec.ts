import {test, expect, Locator} from '@playwright/test';

test('Paginated table', async({page})=> {

  await page.goto("https://testautomationpractice.blogspot.com/");

  //Get all pagination links
  const pages = await page.locator('ul#pagination li').all();
  console.log("Number of pages", pages.length);
  
  for(let i=0; i<pages.length; i++){
    await pages[i].click(); //click on each pagination

      //get all table rows on the page
      const rows = await page.locator('table#productTable tbody tr').all();

      //printing all the rows from the table
      for(const row of rows){
        const rowText = await row.innerText();
        console.log(rowText.trim());
      }

      await page.waitForTimeout(3000);

      //select check boxes for all the rows from the table
      for(let i=0; i<rows.length; i++){
        const id = await rows[i].locator('td').nth(0).innerText();
        const name = await rows[i].locator('td').nth(1).innerText();
        const price = await rows[i].locator('td').nth(2).innerText();
        await rows[i].locator('td').nth(3).innerText();
        console.log(id, '\t', name, '\t', price);
      }

      await page.waitForTimeout(3000);
      
  }
  
  


});