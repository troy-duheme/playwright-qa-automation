
const { expect } = require('@playwright/test');

// Helper: Authenticate with valid SauceDemo credentials
async function loginAsStandardUser(page) {

  // Step 1: Navigate to the application
  await page.goto('https://www.saucedemo.com/');

  // Step 2: Enter valid credentials
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');

  // Step 3: Submit the login form
  await page.locator('[data-test="login-button"]').click();

  // Step 4: Verify successful authentication
  await expect(page).toHaveURL(/inventory.html/);

}

module.exports = { loginAsStandardUser };
