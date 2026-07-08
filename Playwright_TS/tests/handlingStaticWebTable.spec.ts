import {test, expect, Locator} from '@playwright/test';

test('Handle static webtable', async({page})=>{

  await page.goto('https://testautomationpractice.blogspot.com/');

  const table = page.locator("table[name='BookTable'] tbody ");

  //counting rows
  const rows = table.locator('tr');

  const countRows = await rows.count();

  console.log("count coulums: ", countRows);

  //counting columns
  const column = table.locator('th');

  const countColumns = await column.count();

  console.log("count coulums: ", countColumns);


  //Reading data from specific rows

  const secondRowCells = rows.nth(2).locator('td');

  const secondRowTexts = await secondRowCells.allInnerTexts();

  console.log("Row texts: ", secondRowTexts);

  await expect(secondRowCells).toHaveText([ 'Learn Java', 'Mukesh', 'Java', '500' ]);

  console.log('printing secind row data')



  for(let text of secondRowTexts){
      console.log(text);
  }

    //Reading all Data(excluding header)

    console.log('printing all the data....');

    const allRowData = await rows.all();

    console.log("BookName Author subject price");
    for(let row of allRowData.slice(1)){
      const cols = await row.locator('td').allInnerTexts();
      console.log(cols.join('\t'));
    }


    // print book names where author 
    console.log("\nprinting author by mukesh...")
    for(let row of allRowData.slice(1)){
      const cells = await row.locator('td').allInnerTexts();
     const author = cells[1];
     const book = cells[1];

     if(author === 'Mukesh'){
        console.log(`${author} \t ${book}`);
     }
    }


    //calculate total price of all books

    let totalprice:number = 0;

    for(let row of allRowData.slice(1)){
      const cells = await row.locator('td').allInnerTexts();
      const price = cells[3];

      totalprice = totalprice + parseInt(price);
    }

    console.log("Total price: ", totalprice);

});