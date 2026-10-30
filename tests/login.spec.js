const { test, expect } = require('@playwright/test');

test.describe('SauceDemo - Login Functionality', () => {

  // TC-001: Successful Login with Valid Credentials
  test('TC-001: Valid user can successfully log in', async ({ page }) => {

    // Step 1: Navigate to the application
    await page.goto('https://www.saucedemo.com/');

    // Step 2: Enter valid credentials
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');

    // Step 3: Submit the login form
    await page.locator('[data-test="login-button"]').click();

    // Step 4: Verify successful navigation
    await expect(page).toHaveURL(/inventory.html/);

    // Step 5: Verify inventory page is displayed
    await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();

  });

  // TC-002: Login with Invalid Credentials
  test('TC-002: Invalid credentials display an error message', async ({ page }) => {

    // Step 1: Navigate to the application
    await page.goto('https://www.saucedemo.com/');

    // Step 2: Enter invalid credentials
    await page.locator('[data-test="username"]').fill('invalid_user');
    await page.locator('[data-test="password"]').fill('wrong_password');

    // Step 3: Submit the login form
    await page.locator('[data-test="login-button"]').click();

    // Step 4: Verify the correct error message
    await expect(page.locator('[data-test="error"]'))
      .toContainText('Username and password do not match');

  });

  // TC-003: Login with Empty Username
  test('TC-003: Empty username displays a required field error', async ({ page }) => {

    // Step 1: Navigate to the application
    await page.goto('https://www.saucedemo.com/');

    // Step 2: Enter password without username
    await page.locator('[data-test="password"]').fill('secret_sauce');

    // Step 3: Submit the login form
    await page.locator('[data-test="login-button"]').click();

    // Step 4: Verify username required error
    await expect(page.locator('[data-test="error"]'))
      .toContainText('Username is required');

  });

  // TC-004: Login with Empty Password
  test('TC-004: Empty password displays a required field error', async ({ page }) => {

    // Step 1: Navigate to the application
    await page.goto('https://www.saucedemo.com/');

    // Step 2: Enter username without password
    await page.locator('[data-test="username"]').fill('standard_user');

    // Step 3: Submit the login form
    await page.locator('[data-test="login-button"]').click();

    // Step 4: Verify password required error
    await expect(page.locator('[data-test="error"]'))
      .toContainText('Password is required');

  });

});
