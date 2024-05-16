import { test, expect } from '@playwright/test'

test('Assert fields in Kitchen app', async ({ page }) => {

    await page.goto('https://kitchen.applitools.com');

    if (await page.$('text=The Kitchen')) {
        await expect(page.locator('text=The Kitchen')).toHaveCount(1);
        await expect(page.locator('text=The Kitchen')).toBeVisible();
        await expect(page.locator('text=The Kitchen')).toBeEnabled();
        await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen');
        // await expect(page.locator('selector')).toHaveAttribute('class', /.*value/);
        // await expect(locator).toHaveCSS('selected row');
    }
    else {
        await expect(page.locator('text=The Kitchen')).toBeHidden();
        await expect(page.locator('text=The Kitchen')).toBeDisabled();
        await expect(page.locator('text=The Kitchen')).not.toHaveText('The ABCD');
    }

});