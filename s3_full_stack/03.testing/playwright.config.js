// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: 'tests',
  timeout: 30_000,
  use: {
    baseURL: 'http://localhost:3000',
    actionTimeout: 10_000
  },
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]]
});
