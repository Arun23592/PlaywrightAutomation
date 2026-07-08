import{test, expect, Locator, Page} from "@playwright/test";


test('Dummy ticket booking ', async({page})=>{
  await page.goto("https://www.dummyticket.com/dummy-ticket-for-visa-application/");

  //Asser title
  await expect(page).toHaveTitle(/Dummy ticket/);

  //Choose the correct option
  await page.locator('#product_549').check();

  await expect(page.locator('#product_549')).toBeChecked();

  //passenger details:
  await page.locator('#travname').fill('Arun');

  await page.locator('#travlastname').fill('Subramani');

  //Date of birth

  const birthYear = "1992";
  const birthMonth = "May";
  const birthDate = "23"
  await page.locator('#dob').click();

  await selecDateOfBirth(page, birthYear, birthMonth, birthDate);

  //verify date was selected
  const doubleValue = await page.locator('#dob').inputValue();
  expect(doubleValue).not.toBe('');

  

  



});

async function selecDateOfBirth(page: Page, birthYear: string, birthMonth: string, birthDate: string){

  //select birth year
  await page.locator('select[data-handler="selectYear"]').selectOption(birthYear);

  //select birth month
  await page.locator('select.ui-datepicker-month').selectOption(birthMonth);

  //select birth date
  const dateCells = await page.locator('table.ui-datepicker-calendar td a').all();

  for(const cell of dateCells){
    if(await cell.textContent() === birthDate){
      await cell.click();
      break;
    }
  }

}