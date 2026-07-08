import { Page } from './../node_modules/playwright-core/types/types.d';
import { test, expect } from '@playwright/test';


test('Verify page title', async({ page })=> {

  await page.goto("https://playwright.dev/");
  // const title = await page.title();

  await expect(page).toHaveURL(/playwright/);

  await page.getByRole('button').count();
  await page.getByRole('link', {name: 'Get started'}).click();
  const sideMenu = page.locator("//span[text()='Writing tests']").first();
  await sideMenu.click();
  console.log("clicked on side menu - 2");
  await page.pause();

});
