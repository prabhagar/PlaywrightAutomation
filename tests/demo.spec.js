const {test, expect} = require('@playwright/test')

test('Validate Orange HRM', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Username').press('Tab');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'Time' }).click();
    await page.getByRole('row', { name: 'manda akhil user 2023-16-01' }).getByRole('button').click();
    await page.getByText('Status: Submitted').click();
    await page.locator('span').filter({ hasText: 'manda user' }).click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
})