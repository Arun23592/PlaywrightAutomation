import {test, expect, Page} from "@playwright/test";


test("Scrolling to footer", async({page})=> {
  await page.goto("https://demowebshop.tricentis.com/");
  const footerText:string=await page.locator('.foot section').innerText(); //automatic scrolling
  console.log('Footer text captured:', footerText);



})

test(" scrolling inside dropdown", async({page})=> {
  await page.goto("https://testautomationpractice.blogspot.com/");
  
  await page.locator("#comboBox").click();

  const option = page.locator("#dropdown div:nth-child(100)");

  console.log("option captured from dropdown:", await option.innerText());

  await option.click();





})

test(" scrolling inside table", async({page})=> {
  await page.goto("https://datatables.net/examples/basic_init/scroll_xy.html");
  
  await page.locator('.dt-scroll-body');

  const table = page.locator()





})


test.only(" Infinite scrolling", async({page})=> {

  test.slow(); ///set timewout for single test easy way to triple default timeout i.e. 30 secss(3000ms)
  await page.goto("https://www.booksbykilo.in/new-books?pricerange=201to500");

  //return window.scrollTo(document.body.scrollHeight);
  
  let previousHeight=0;
  let bookFound = false;
  while(true){

    const titles = await page.locator('#productsDiv h3').allTextContents();

    if(titles.includes('Heartstopper Volume Three')){
      console.log("Book found");
      bookFound=true;
      expect(bookFound).toBeTruthy();
      break;
    }

    //scroll down the page
    await page.evaluate( ()=>{
      window.scrollTo(0, document.body.scrollHeight);
    })

    //wait for content to load
    await page.waitForTimeout(2000);


    //capture the current height of the page
    const currentHeight= await page.evaluate( ()=>{
      return document.body.scrollHeight;
    })

    console.log("Previous height: ", previousHeight);
    console.log("Current height: ", currentHeight);


    if(currentHeight===previousHeight){
      break;
    }

    previousHeight=currentHeight;
  }
 


  console.log("Reached end of the page...");

  if(!bookFound){
    console.log("Book not found...");
  }


})