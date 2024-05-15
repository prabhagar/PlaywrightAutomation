import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Search', { exact: true }).fill('prabhagar Tamizhselvan');
  await page.keyboard.press('Enter');
  await page.getByRole('link', { name: 'Prabhagar Tamizhselvan - Chandler Macleod LinkedIn · Prabhagar Tamizhselvan 480' }).click();
});