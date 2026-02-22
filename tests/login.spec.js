const { test, expect } = require("@playwright/test");

test("Valid Login", async function ({ page }) {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  await page.getByPlaceholder("Username").fill("Admin");

  await page.locator("input[name='password']").fill("admin123");

  await page.locator("//button[@type=submit]").click();

  await expect(page).toHaveURL(/dashboard/);

  await expect(page).toHaveURL(/dashboard/);

  
});

test.only("Login using API and reuse token", async function({request, page}){

  const resp = await request.post("/auth/login", {
    data: {username: "admin", password: "Test@123"}
  })

  const json = await resp.json();
  const token = json.token;


  await page.addInitScript((token) => {
    localStorage.setItem("token", token);
  }, token);


  await page.goto("https://example.com/dashboard");
  await page.expect(page).toHaveURL(/dashboard/);
});