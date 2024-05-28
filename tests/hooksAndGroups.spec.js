import { describe, test, expect } from '@playwright/test';


describe('All my tests', () => {


    let context;
    let page;


    test.beforeEach(async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();


        await page.goto('https://www.saucedemo.com/');

        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="username"]').press('Tab');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();

    });

    test.afterAll(async ({ }) => {
        await page.close();
    });


    test('homePage validation', async ({ }) => {

        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.getByText('$15.99').first().click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        await page.locator('[data-test="item-3-img-link"]').click();
        await page.locator('[data-test="add-to-cart"]').click();
        await page.locator('[data-test="inventory-item-price"]').click();

    });

    test('logout', async ({ }) => {

        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.locator('[data-test="logout-sidebar-link"]').click();

    });

});