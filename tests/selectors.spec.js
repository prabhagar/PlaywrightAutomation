import {test, events} from '@playwright/test'

test('Selectors Demo', async ({page}) => {
    await page.goto('https://www.saucedemo.com')
    await page.pause()
    
    // Using any object property
    await page.locator('data-test=username').fill('standard_user')
    await page.locator('[data-test="username"]').fill('visual_user')
    await page.locator('[type="password"]').fill('secret_sauce')

    // Using CSS locator - Click #login-button
    await page.locator('#login-button').click()

    //button[@name='add-to-cart-sauce-labs-backpack']
    await page.locator('xpath=//button[@name="add-to-cart-sauce-labs-backpack"]').click();

    // Using Xpath locator - //*[@id="add-to-cart-sauce-labs-backpack"]
    await page.locator('//*[@id="remove-sauce-labs-backpack"]').click();

});
