import { test, expect, Locator } from '@playwright/test';

test('test input actions', async({page})=>{
  await page.goto('https://testautomationpractice.blogspot.com/');
  
  // await expect(page).toBe('Data Entry Form');
  const inputName: Locator = page.locator('#name');
  await inputName.fill('Arun');
  console.log("Name: ", inputName.inputValue());
  const enteredMail = await page.locator('#email').fill('arunsubramani20@gmail.com');
  console.log("Email: ", enteredMail);
  const enteredPhoneNumber = await page.locator('#phone').fill('9831070364');
  console.log("Phone number: ", enteredPhoneNumber);
  const enteredDescription = await page.locator('#textarea').fill('Data entry form filling with my profile details');
  console.log("Description: ", enteredDescription);
  const femaleCheckbox = await page.getByLabel('Female').check();


  // const checkBoxes: Locator = page.getByLabel('Sunday');
  // await checkBoxes.check();
  // await expect(checkBoxes).toBeChecked();

  const days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const checkboxes: Locator[] = days.map(index => page.getByLabel(index));
  expect(checkboxes.length).toBe(7);

  for(const checkboxed of checkboxes.slice(-3)){
    await checkboxed.check();
    await expect(checkboxed).toBeChecked();
  }

  //Toggle checkboxes
  for(const checkboxed of checkboxes){
    if(await checkboxed.isChecked()){
       await checkboxed.uncheck();
       await expect(checkboxed).not.toBeChecked();
    }else {
      await checkboxed.check();
      await expect(checkboxed).toBeChecked();
    }
  }


  //Select by specific indexes e.g (1, 3, 6)

const indexes = [1, 3, 6];
for(const i of indexes){
  await checkboxes[i].check();
  await expect(checkboxes[i]).toBeChecked();



}

//Select checkbox by Label name
const weekname = "Friday";

for(const label of days){
  if(label.toLowerCase() === weekname.toLowerCase()){
    const checkbox = await page.getByLabel(label);
    await checkbox.check();
    await expect(checkbox).toBeChecked();
  }
}
  
});


