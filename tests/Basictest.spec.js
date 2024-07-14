const {test,expect} = require('@playwright/test');

// normal function
//  function firstFunction(){
//     console.log("this is a function");
//  }

//arrow function
//  const firstFunction = ()=> {
//    console.log("this is a function")
// }

// const firstFunction = ()=> {(
//     console.log("this is a function")
//  )}

//  const firstFunction = ()=> console.log("this is a function");


 test('Browser Context Playwright test ',async ({browser})=>
 {
    // chrome - plugins/ cookies
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
        console.log(await page.title());
        // expect
        // await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
        await page.locator('#username').fill("rahulshetty");
        await page.locator('#password').fill("learning");
        await page.locator('input[type="submit"]').click();
        console.log(await page.locator("[style*='block']").textContent());
        // await expect(page.locator("[style*='block']")).toContainText('Incorrect'); 
        await expect(page.locator("[style*='block']")).toContainText('Incorrect');
        // await expect(page.locator("[style*='block']")).toContainText('Login'); 

        await page.locator('#username').fill("");
        await page.locator('#username').fill("rahulshettyacademy")
        await page.locator('input[type="submit"]').click();
        console.log(await page.locator('.card-body a').first().textContent());
        console.log(await page.locator('.card-body a').nth(1).textContent());
        const allTitles = await page.locator('.card-body a').allTextContents();
        console.log(allTitles);
 });

test('Page Playwright test', async ({page})=>
{
    await page.goto('https://www.tftus.com/');
    console.log(await page.title());
    // expect
    await expect(page).toHaveTitle("Software Testing and Development Company in Gurgaon, India");
});