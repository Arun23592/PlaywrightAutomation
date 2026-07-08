import {test, expect, Locator} from '@playwright/test';

test('Blazedemo flight booking flow', async({page})=>{
    await page.goto("https://blazedemo.com/");

    //select depature city option
    await page.locator("select[name='fromPort']").selectOption('San Diego');

    //select destination city option
    await page.locator("select[name='toPort']").selectOption('Paris');

    //click on Find flights button
    await page.locator('input[type=submit]').click();

    //count number of rows
    const rows: Locator = await page.locator('table.table tbody tr');

    const rowCount = await rows.count();
    console.log("Number of rows: ", rowCount);
    expect(rowCount).toBeGreaterThan(0);

    //extract the prices into an array

    const prices: string[]= [];
    for(let i=0; i<rowCount; i++){
      const price = await rows.nth(i).locator('td').nth(5).innerText();
      prices.push(price);
      console.log("price: ", price);
    }

    //Log and sort the prices
    const sortedPrices = [...prices].sort();
    const lowestPrices = sortedPrices[0];
    console.log("lowest priceS: ", lowestPrices);
    expect(lowestPrices).toBeDefined();

    //choose the flight with lowest price
    for(let i=0; i<rowCount; i++){
      const price = await rows.nth(i).locator('td').nth(5).innerText();
      if(price === lowestPrices){
        await rows.nth(i).locator("input[type='submit']").click();
        break;
      }
    }

    //Fill the passsenger details

    await page.getByPlaceholder('First Last').fill('ArunS');

    await page.locator('#address').fill('5, ss st.');

    await page.locator('#city').fill('Tvm.');

    await page.locator('#state').fill('Tn.');

    await page.locator('#zipCode').fill('60606');

    await page.locator('#cardType').selectOption('American Express');

    await page.locator('#creditCardNumber').fill('345699');

    await page.locator('#creditCardMonth').clear();

    await page.locator('#creditCardMonth').fill('8');

    await page.locator('#creditCardYear').fill('2026');

    await page.locator('#nameOnCard').fill('sArun');

    await page.locator('#rememberMe').click();

    await page.locator('input[value="Purchase Flight"]').click();


    //validate success message
    const confirmationMessage = await page.locator('h1').textContent();
    console.log("confirmation mesaage: ", confirmationMessage);
    expect(confirmationMessage).toContain('Thank you for your purchase today!');

    await page.waitForTimeout(3000);




});