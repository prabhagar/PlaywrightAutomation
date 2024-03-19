// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ context }) => {
  await context.tracing.start({ screenshots: true, snapshots: true });
});


test('has title', async ({ page}) => {

  // await context.tracing.start({snapshots: true, screenshots: true});
  
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // await context.tracing.stop({path: '/trace.zip'});
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test.afterEach(async ({ context }) => {
  await context.tracing.stop({ path: 'test-trace.zip' });
});