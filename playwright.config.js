const { defineConfig } = require('@playwright/test');
module.exports = defineConfig({
  testDir: './tests',
timeout: 30000,
expect: {
    timeout: 5000
  },

  fullyParallel: false,
retries: 0,
 reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ],

  use: {
    baseURL: 'https://parabank.parasoft.com/',
 headless: true,
screenshot: 'only-on-failure',
video: 'retain-on-failure',
trace: 'retain-on-failure',
browserName: 'chromium'
  }
});