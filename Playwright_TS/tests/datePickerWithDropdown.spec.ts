import {test, expect, Locator, Page} from '@playwright/test';

test('Datepicker with dropdowns - select date', async ({page})=>{
  await page.goto('https://testautomationpractice.blogspot.com/');

  //click on the input field to open date picker
  const dateInput = page.locator('#txtDate');
  await dateInput.click();

  //Desird date
  const year = "2026";
  const month = "Jun";
  const date = "30";


  //select the date using helper function
  await selectDate(page, year, month, date);

  //Assert that correct date is selected in the input box
  await expect(dateInput).toHaveValue('30/6/2026');

});


async function selectDate(page: Page, targetYear: string, targetMonth: string, targetDate: string){
  //select the year
  const yearDropdown = page.locator('select.ui-datepicker-year');
  await yearDropdown.selectOption({label: targetYear});

  //Select the month
  const monthDropdown = page.locator('select.ui-datepicker-month');
  await monthDropdown.selectOption({label: targetMonth});

  //select the desired date

  const allDates = await page.locator('table.ui-datepicker-calendar a').all();
  
  for(let date of allDates){
    const dateText = await date.innerText();
    if(dateText === targetDate){
      await date.click();
      break;
    }
  }
 

}