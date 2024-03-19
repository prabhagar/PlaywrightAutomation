import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 11 Pro Max'],
});

test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('https://www.google.com/?gws_rd=ssl');
  await page.locator('#mib').click();
  await page.locator('#mib').fill('agl ');
  await page.locator('#mib').press('Enter');
  await page.getByRole('link', { name: 'AGL www.agl.com.au' }).click();
  await page.getByText('Up to $150 in sign-up credits').click();
  await page.getByRole('link', { name: 'My Account' }).click();
  await page.getByText('Sorry, this page can no').click();
});