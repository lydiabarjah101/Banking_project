const { test, expect } = require('@playwright/test');
const testData = require('../test-data/testData');

// Set timeout for all tests in this file (60 seconds)
test.setTimeout(60000);

// TC001 - Verify successful login
test('TC001 - Verify successful login', async ({ page }) => {

    await page.goto('/', { timeout: 30000 });

    await page.locator("//input[@name='username']")
        .fill(testData.login.validUsername);

    await page.locator("//input[@name='password']")
        .fill(testData.login.validPassword);

    await page.locator("//input[@value='Log In']")
        .click();

    await expect(
        page.locator("//h1[normalize-space()='Accounts Overview']")
    ).toBeVisible({ timeout: 10000 });
});

// TC002 - Verify invalid username
test('TC002 - Verify invalid username', async ({ page }) => {

    await page.goto('/', { timeout: 30000 });

    await page.locator("//input[@name='username']")
        .fill(testData.login.invalidUsername);

    await page.locator("//input[@name='password']")
        .fill(testData.login.validPassword);

    await page.locator("//input[@value='Log In']")
        .click();

    await expect(
        page.locator("//p[@class='error']")
    ).toBeVisible({ timeout: 10000 });
});

// TC003 - Verify invalid password
test('TC003 - Verify invalid password', async ({ page }) => {

    await page.goto('/', { timeout: 30000 });

    await page.locator("//input[@name='username']")
        .fill(testData.login.validUsername);

    await page.locator("//input[@name='password']")
        .fill(testData.login.invalidPassword);

    await page.locator("//input[@value='Log In']")
        .click();

    await expect(
        page.locator("//p[@class='error']")
    ).toBeVisible({ timeout: 10000 });
});

// TC004 - Verify both invalid credentials
test('TC004 - Verify both invalid credentials', async ({ page }) => {

    await page.goto('/', { timeout: 30000 });

    await page.locator("//input[@name='username']")
        .fill(testData.login.invalidUsername);

    await page.locator("//input[@name='password']")
        .fill(testData.login.invalidPassword);

    await page.locator("//input[@value='Log In']")
        .click();

    await expect(
        page.locator("//p[@class='error']")
    ).toBeVisible({ timeout: 10000 });
});

// TC005 - Verify blank username
test('TC005 - Verify blank username', async ({ page }) => {

    await page.goto('/', { timeout: 30000 });

    await page.locator("//input[@name='username']")
        .fill('');

    await page.locator("//input[@name='password']")
        .fill(testData.login.validPassword);

    await page.locator("//input[@value='Log In']")
        .click();

    await expect(
        page.locator("//p[@class='error']")
    ).toBeVisible({ timeout: 10000 });
});

// TC006 - Verify blank password
test('TC006 - Verify blank password', async ({ page }) => {

    await page.goto('/', { timeout: 30000 });

    await page.locator("//input[@name='username']")
        .fill(testData.login.validUsername);

    await page.locator("//input[@name='password']")
        .fill('');

    await page.locator("//input[@value='Log In']")
        .click();

    await expect(
        page.locator("//p[@class='error']")
    ).toBeVisible({ timeout: 10000 });
});