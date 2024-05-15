const {test, expect} = require('@playwright/test')
const { hello, helloWorld} = require('./demo/hello')
// import {test, expect} from require('@playwright/test')

test('My first test', async ({page}) => {
    await page.goto('https://google.com')
    await expect(page).toHaveTitle('Google');
    console.log(hello());
    console.log(helloWorld());
});