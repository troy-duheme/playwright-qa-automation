
const { test, expect } = require('@playwright/test');
const { loginAsStandardUser } = require('../helpers/auth');

test.describe('SauceDemo - Inventory and Shopping Cart', () => {

  // Precondition: Authenticate before each inventory test
  test.beforeEach(async ({ page }) => {

    // Step 1: Authenticate using the reusable login helper
    await loginAsStandardUser(page);

  });

  // TC-005: Verify Inventory Page Displays Products
  test('TC-005: Inventory page displays available products', async ({ page }) => {

    // Step 1: Locate the inventory list
    const inventoryItems = page.locator('[data-test="inventory-item"]');

    // Step 2: Verify the expected number of products
    await expect(inventoryItems).toHaveCount(6);

    // Step 3: Verify products have names and prices
    const productNames = page.locator('[data-test="inventory-item-name"]');
    const productPrices = page.locator('[data-test="inventory-item-price"]');

    await expect(productNames).toHaveCount(6);
    await expect(productPrices).toHaveCount(6);

  });

  // TC-006: Add a Product to the Shopping Cart
  test('TC-006: User can add a product to the cart', async ({ page }) => {

    // Step 1: Add Sauce Labs Backpack to the cart
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Step 2: Verify the shopping cart badge displays 1
    await expect(page.locator('[data-test="shopping-cart-badge"]'))
      .toHaveText('1');

    // Step 3: Open the shopping cart
    await page.locator('[data-test="shopping-cart-link"]').click();

    // Step 4: Verify navigation to the shopping cart
    await expect(page).toHaveURL(/cart.html/);

    // Step 5: Verify the correct product is in the cart
    await expect(page.locator('[data-test="cart-list"]')
      .getByText('Sauce Labs Backpack', { exact: true }))
      .toBeVisible();

  });

  // TC-007: Remove a Product from the Shopping Cart
  test('TC-007: User can remove a product from the cart', async ({ page }) => {

    // Step 1: Add Sauce Labs Backpack to the cart
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Step 2: Verify the cart badge displays 1
    await expect(page.locator('[data-test="shopping-cart-badge"]'))
      .toHaveText('1');

    // Step 3: Remove the product
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();

    // Step 4: Verify the cart badge is no longer displayed
    await expect(page.locator('[data-test="shopping-cart-badge"]'))
      .toHaveCount(0);

  });

  // TC-008: Verify Product Sorting by Price
  test('TC-008: User can sort products by price low to high', async ({ page }) => {

    // Step 1: Select price sorting (low to high)
    await page.locator('[data-test="product-sort-container"]')
      .selectOption('lohi');

    // Step 2: Retrieve displayed product prices
    const priceTexts = await page.locator('[data-test="inventory-item-price"]')
      .allTextContents();

    // Step 3: Convert prices to numeric values
    const prices = priceTexts.map(price => Number(price.replace('$', '')));

    // Step 4: Verify prices are sorted in ascending order
    const sortedPrices = [...prices].sort((a, b) => a - b);

    expect(prices).toEqual(sortedPrices);

  });

});
