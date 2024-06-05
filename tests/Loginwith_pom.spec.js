import { test, expect } from '@playwright/test'
import { LoginPage } from './pages/login'

test('Validate login in with page object model', async ({ page }) => {

    const Login = new LoginPage(page)

    await Login.goToLoginPage();
    
    await Login.login('tosmith', 'SuperSecretPassword!');

    // await page.getByLabel('Username').click();
    // await page.getByLabel('Username').fill('https://the-internet.herokuapp.com/login');
    // await page.getByLabel('Username').press('Meta+z');
    // await page.getByLabel('Username').fill('tomsmith');
    // await page.getByLabel('Username').press('Tab');
    // await page.getByLabel('Password').fill('SuperSecretPassword!');
    // await page.getByRole('button', { name: ' Login' }).click();
    // await page.getByRole('link', { name: 'Logout' }).click();
});