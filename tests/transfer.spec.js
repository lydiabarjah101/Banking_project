const { test, expect } = require('@playwright/test');
const testData = require('../test-data/testData');


// TC017 / TC018
// Verify successful fund transfer
test('TC017 Verify successful fund transfer', async ({ page }) => {

    await page.goto('/');


    // LOGIN
    // Username → Inspect → name="username"
    await page.locator("//input[@name='username']")
        .fill(testData.login.validUsername);


    // Password → Inspect → name="password"
    await page.locator("//input[@name='password']")
        .fill(testData.login.validPassword);


    // Login button → Inspect → value="Log In"
    await page.locator("//input[@value='Log In']")
        .click();


    // TRANSFER FUNDS
    // Inspect "Transfer Funds" link.
    // Check the href attribute.
    // We use XPath with contains() because the href contains "transfer".
    await page.locator(" //a[normalize-space()='Transfer Funds']")
        .click();


    // Verify Transfer Funds page.
    await expect(
        page.locator("//h1[normalize-space()='Transfer Funds']")
    ).toBeVisible();


    // AMOUNT
    // Inspect Amount field.
    // We found id="amount".
    // Since ID is available, we use ID locator.
    await page.locator("//input[@id='amount']")
        .fill(testData.transfer.validAmount);


    // FROM ACCOUNT
    // Inspect From Account dropdown.
    // We found id="fromAccountId".
    await page.locator("//select[@id='fromAccountId']")
        .selectOption({ index: 0 });
    await page.waitForTimeout(3000);


    // TO ACCOUNT
    // Inspect To Account dropdown.
    // We found id="toAccountId".
    await page.locator("//select[@id='toAccountId']")
        .selectOption({ index: 1 });
        await page.waitForTimeout(3000);
        // Transfer button → value="Transfer".
    await page.locator("//input[@value='Transfer']")
        .click();
        await page.waitForTimeout(3000);

});


// TC020
// Verify transfer with zero amount
test('TC20 Verify zero transfer amount', async ({ page }) => {

    await page.goto('/');

    // Username
    await page.locator("//input[@name='username")
        .fill(testData.login.validUsername);

    // Password
    await page.locator("//input[@name='password']")
        .fill(testData.login.validPassword);

    // Login
    await page.locator("//input[@value='Log In']")
        .click();

    // Transfer Funds
    await page.locator(" //a[normalize-space()='Transfer Funds']")
        .click();

    // Amount → ID = amount
    await page.locator("//input[@id='amount']")
        .fill(testData.transfer.zeroAmount);

    // From Account → ID = fromAccountId
    await page.locator("//select[@id='fromAccountId']")
        .selectOption({ index: 0 });

    // To Account → ID = toAccountId
    await page.locator("//select[@id='toAccountId']")
        .selectOption({ index: 1 });

    // Transfer button → value = Transfer
    await page.locator("//input[@value='Transfer']")
        .click();

});