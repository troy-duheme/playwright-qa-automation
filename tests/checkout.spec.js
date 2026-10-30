
const { test, expect } = require('@playwright/test');
const { loginAsStandardUser } = require('../helpers/auth');

test.describe('SauceDemo - Checkout Functionality', () => {

  // Precondition: Authenticate before each checkout test
  test.beforeEach(async ({ page }) => {

    // Step 1: Authenticate using the reusable login helper
    await loginAsStandardUser(page);

  });

  // TC-009: Complete Checkout with Valid Customer Information
  test('TC-009: User can successfully complete checkout', async ({ page }) => {

    // Step 1: Add a product to the cart
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Step 2: Open the shopping cart
    await page.locator('[data-test="shopping-cart-link"]').click();

    // Step 3: Verify the correct product is in the cart
    await expect(page.locator('[data-test="cart-list"]')
      .getByText('Sauce Labs Backpack', { exact: true }))
      .toBeVisible();

    // Step 4: Proceed to checkout
    await page.locator('[data-test="checkout"]').click();

    // Step 5: Enter customer information
    await page.locator('[data-test="firstName"]').fill('Test');
    await page.locator('[data-test="lastName"]').fill('User');
    await page.locator('[data-test="postalCode"]').fill('12345');

    // Step 6: Continue to checkout overview
    await page.locator('[data-test="continue"]').click();

    // Step 7: Verify checkout overview page
    await expect(page).toHaveURL(/checkout-step-two.html/);

    // Step 8: Verify order summary contains the product
    await expect(page.locator('[data-test="inventory-item-name"]'))
      .toHaveText('Sauce Labs Backpack');

    // Step 9: Complete the order
    await page.locator('[data-test="finish"]').click();

    // Step 10: Verify order confirmation
    await expect(page).toHaveURL(/checkout-complete.html/);
    await expect(page.locator('[data-test="complete-header"]'))
      .toHaveText('Thank you for your order!');

  });

});
