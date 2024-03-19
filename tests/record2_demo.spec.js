import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('Prabhagar Tamizhselvan');
  await page.getByText('tamizhselvani').click();
  await page.getByRole('link', { name: 'Prabhagar Tamizhselvan -' }).click();
  await page.getByRole('button', { name: 'Dismiss' }).click();
});