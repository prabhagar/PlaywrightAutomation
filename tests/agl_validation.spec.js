import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 11 Pro Max'],
});

test('test', async ({ page }) => {
  await page.goto('https://www.agl.com.au/');
  await page.goto('https://www.agl.com.au/?zcf97o=vlx3ap');
  await page.pause();
  await page.getByRole('heading', { name: 'Energy', exact: true }).click();
  await page.getByRole('link', { name: 'Compare energy plans' }).click();
  await page.locator('#productCardButton1').getByRole('button', { name: 'Check address' }).click();
  await page.getByPlaceholder('e.g. 123 Sample Street,').click();
  await page.getByPlaceholder('e.g. 123 Sample Street,').fill('8 Chalet St');
  await page.getByText('Chalet Street, WYNDHAM VALE VIC 3024').click();
});