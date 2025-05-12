const {test} = require('@playwright/test');


test('Browser context First Playwright test', async ({browser})=> 
{

    //create new browser context
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
      await expect(page).toHaveTitle(/Free/);
})

test('Page First Playwright test', async ({page})=> 
    {
    
        //create new browser context
        // const context = await browser.newContext();
        // const page = await context.newPage();
        await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    })