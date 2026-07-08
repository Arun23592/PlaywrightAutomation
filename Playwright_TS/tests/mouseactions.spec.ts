import {test, expect, Page} from "@playwright/test";

test("mouse actions", async({page})=>{

  await page.goto("https://testautomationpractice.blogspot.com/");

  const pointme = page.locator(".dropbtn");
  await pointme.hover();

  const laptops=page.locator('.dropdown-content a:nth-child(2)');
  laptops.hover();
  laptops.click();


  await page.waitForTimeout(5000);
})


test("Right click", async({page})=>{

  await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");

  const button = page.locator("span.context-menu-one");
  
  await button.click({button: 'right'});
  


  await page.waitForTimeout(5000);
})


test("Double click", async({page})=>{

  await page.goto("https://testautomationpractice.blogspot.com/");

  const buttoncopy = page.locator("button[ondblclick='myFunction1()']");
  
  await buttoncopy.dblclick(); //performs double click actions
  

  const field2 = page.locator('#field2');
  await expect(field2).toHaveValue('Hello World!');
  await page.waitForTimeout(5000);
})


test.only("Drag and drop", async({page})=>{

  await page.goto("https://testautomationpractice.blogspot.com/");

  const dragme = page.locator("#draggable");
  const drophere = page.locator('#droppable');
  
  //mouse drag and drop manually
  await dragme.hover();
  await page.mouse.down();
  await drophere.hover();
  await page.mouse.up();


  //Approach 2: 
  await dragme.dragTo(drophere);

  await page.waitForTimeout(5000);
})