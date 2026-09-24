const { test, expect } = require('@playwright/test');
const testData = require('../test-data/testData');


// TC009
// Verify Accounts Overview after successful login
test('TC009 Verify Accounts Overview', async ({ page }) => {

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


    // Accounts Overview section has an ID.
    // Inspect the page and identify id="accountOverviewForm".
    await expect(
        page.locator("//h1[normalize-space()='Accounts Overview']")
    ).toBeVisible();

});


// TC010 - TC016
// Verify account information
test('TC010 Verify account information', async ({ page }) => {

    await page.goto('/');


    // Username → name="username"
    await page.locator("//input[@name='username']")
        .fill(testData.login.validUsername);


    // Password → name="password"
    await page.locator("//input[@name='password']")
        .fill(testData.login.validPassword);


    // Login button → value="Log In"
    await page.locator("//input[@value='Log In']")
        .click();


    // Account table → Inspect table.
    // We found id="accountTable".
    await expect(
        page.locator('#accountTable')
    ).toBeVisible();

await page.waitForTimeout(3000);
    // Account number is the first link in the first row.
    // XPath is used because we want the first account link.
    await expect(
        page.locator("//a[normalize-space()='12345']")
    ).toBeVisible();
await page.waitForTimeout(3000);

    // Account details
    // Click the first account number.
    await page.locator("//a[normalize-space()='12345']").click();
await page.waitForTimeout(3000);

    // Verify Account Details heading.
    // Inspect heading and use XPath with its text.
    await expect(
        page.locator("//h1[normalize-space()='Account Details']")
    ).toBeVisible();
await page.waitForTimeout(3000);
});