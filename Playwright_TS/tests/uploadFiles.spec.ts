import {test, expect, Page} from "@playwright/test";
import fs from 'fs';

test("upload files single", async({page})=> {

  await page.goto("https://testautomationpractice.blogspot.com/");

   await page.locator("#singleFileInput").setInputFiles('uploads/single.txt');
  await page.locator("button:has-text('Upload Single File')").click();


  const msg =await page.locator("#singleFileStatus").textContent();
  expect(msg).toContain('single');
  console.log("Upload successfull....");

  await page.waitForTimeout(5000);


});


test("upload files multiple", async({page})=> {

  await page.goto("https://testautomationpractice.blogspot.com/");

   await page.locator("#multipleFilesInput").setInputFiles(['uploads/single.txt', 'uploads/multiple.txt']);
  await page.locator("button:has-text('Upload Multiple File')").click();


  const msg =await page.locator("#multipleFilesStatus").textContent();
  expect(msg).toContain('single');

  console.log("Upload successfull....");

  await page.waitForTimeout(5000);


});



test.only("Download files", async({page})=> {

  await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html");

  
  await page.locator("#inputText").fill("Download files");

  await page.locator("#generateTxt").click();


  const [downlaodFiles] = await Promise.all([
  page.waitForEvent('download'),
  page.locator("#txtDownloadLink").click()
  ])

  const downloadpath = 'Playwright_TS/downloads'
  await downlaodFiles.saveAs(downloadpath);

  
  // const fileexist = fs.existsSync(downloadpath);
  // expect(fileexist).toBeTruthy();

  await page.waitForTimeout(5000);


});