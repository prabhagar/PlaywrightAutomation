import { test, expect } from '@playwright/test'

test('Validate login page for applitools website', async ({ page }) => {

    await page.goto('https://demo.applitools.com/');
    await page.getByPlaceholder('Enter your username').click();
    await page.getByPlaceholder('Enter your username').fill('Praba');
    await page.getByPlaceholder('Enter your username').press('Tab');
    await page.getByPlaceholder('Enter your password').fill('1234');
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.getByText('Jack Gomez').click();
    await page.getByText('Customer', { exact: true }).click();
    await page.getByText('Total Balance').click();
    await page.getByText('Credit Available').click();
    await page.getByRole('link', { name: 'View Statement ' }).click();
    await page.getByRole('link', { name: 'Request Increase ' }).click();
    await page.getByRole('heading', { name: 'Recent Transactions' }).click();
    await page.getByRole('link', { name: '  Credit cards' }).click();
    await page.getByRole('link', { name: '  Debit cards' }).click();
    await page.getByText('Lending').click();
    await page.getByRole('link', { name: '  Loans' }).click();
    await page.getByRole('link', { name: '  Mortgages' }).click();
    await page.getByRole('link', { name: ' Add Account' }).click();
    await page.getByRole('link', { name: ' Make Payment' }).click();
    await page.locator('.avatar-w > img').first().click();
    await page.locator('.top-icon > i').click();
    await page.locator('.os-icon').first().click();

});

test('Validate login page for orange HRM website website', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Username').press('Tab');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByText('Time at Work').click();
    await page.getByText('Quick Launch').click();
    await page.getByRole('heading', { name: 'Dashboard' }).click();
    await page.getByText('My Actions').click();
    await page.getByText('Buzz Latest Posts').click();
    await page.getByText('Sachinpatrick24 Singh').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();

});

test('Validate login page for commerce website', async ({ page }) => {
    await page.goto('https://admin-demo.nopcommerce.com/login');
    await page.getByLabel('Email:').click();
    await page.getByLabel('Email:').press('Meta+a');
    await page.getByLabel('Email:').press('Meta+c');
    await page.getByLabel('Email:').fill('admin@yourstore.com');
    await page.getByLabel('Password:').click();
    await page.getByLabel('Password:').press('Meta+a');
    await page.getByLabel('Password:').fill('admin');
    await page.locator('form div').filter({ hasText: 'Log in' }).click();
    await page.getByRole('heading', { name: 'Dashboard' }).click();
    await page.getByText('NopCommerce News').click();
    await page.getByText('Common statistics').click();
    await page.getByRole('link', { name: 'logo.png' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
});

