const { test, expect } = require('@playwright/test');
const testData = require('../test-data/testData');

test('TC032 Verify logout functionality', async ({ page }) => {

    await page.goto('/');


    // Username → Inspect → name="username"
    await page.locator("//input[@name='username']")
        .fill(testData.login.validUsername);


    // Password → Inspect → name="password"
    await page.locator("//input[@name='password']")
        .fill(testData.login.validPassword);


    // Login → Inspect → value="Log In"
    await page.locator("//input[@value='Log In']")
        .click();


    // Logout
    // Right-click "Log Out" → Inspect.
    // Check href attribute.
    // We use XPath because href contains "logout".
    await page.locator("//a[normalize-space()='Log Out']")
        .click();


    // Verify user has returned to Customer Login.
    // Inspect Customer Login heading.
    await expect(page.getByRole('heading', { name: 'Customer Login' })).toBeVisible();
    await page.waitForTimeout(6000);

});