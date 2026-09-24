
const { test, expect } = require('@playwright/test');
const testData = require('../test-data/testData');


test('TC026 Verify transaction history', async ({ page }) => {

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


    // Account table → Inspect → id="accountTable".
    // Select first account number using XPath.
    await page.locator("//a[normalize-space()='12345']").click();


    // Inspect "Account Activity" / transaction link.
    // Use XPath based on href.
   // await page.locator("//h1[normalize-space()='Account Activity']")
      //  .click();


    // Verify Account Activity page.
    await expect(
        page.locator("//h1[normalize-space()='Account Activity']")
    ).toBeVisible();


    // Transaction table can be identified by inspecting the page.
    // Use an XPath to identify the table containing transaction records.
    await expect(
        page.locator('//table[contains(@id,"transaction")]')
    ).toBeVisible();

});