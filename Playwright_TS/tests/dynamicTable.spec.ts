import {test, expect, Locator} from '@playwright/test';

test('Dynamic tables', async({page})=>{
  await page.goto("https://practice.expandtesting.com/dynamic-table");

  const table:Locator = page.locator("table.table tbody");

  await expect(table).toBeVisible();

  //select all the rows, then find number of rows
  const rows:Locator[] = await table.locator("tr").all();
  console.log("number of rows in a table:", rows.length);
  expect(rows).toHaveLength(4);

  //step 1: For chrome process get value of CPU load.

  let cpuLoad='';

  for(const row of rows){
    const processName:string= await row.locator("td").nth(0).innerText();
    if(processName === "Chrome"){
      cpuLoad = await row.locator('td:has-text("%")').innerText();
      console.log("CPU Load of chrome: ", cpuLoad);
      break;
    }
  }
  await page.waitForTimeout(5000);


  //Lab 2: Extract Data from a paginated table.
})