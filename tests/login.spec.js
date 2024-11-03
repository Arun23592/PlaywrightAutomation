const { test, expect } = require("@playwright/test");

test("Valid Login", async function ({ page }) {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  await page.getByPlaceholder("Username").fill("Admin");

  await page.locator("input[name='password']").fill("Admin123");

  await page.locator("//button[@type=submit]").click();

  await expect(page).toHaveURL(/dashboard/);
});
