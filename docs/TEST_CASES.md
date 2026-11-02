
# QA Test Case Matrix — SauceDemo

**Project:** Playwright QA Automation Portfolio  
**Application:** SauceDemo  
**Test Framework:** Playwright with JavaScript  
**Document Version:** 1.0  
**Coverage:** TC-001 through TC-009

---

## 1. Purpose

This document provides traceability between the test scenarios, expected outcomes, risk priorities, and automated Playwright scripts.

The test cases validate critical e-commerce functionality, including authentication, inventory management, shopping cart operations, and checkout.

All scenarios are designed to execute across Chromium, Firefox, and WebKit.

---

## 2. Test Case Summary

| Test ID | Module | Test Scenario | Priority | Automation File |
|---|---|---|---|---|
| TC-001 | Authentication | Successful login | Critical | [login.spec.js](../tests/login.spec.js) |
| TC-002 | Authentication | Invalid credentials | High | [login.spec.js](../tests/login.spec.js) |
| TC-003 | Authentication | Empty username | High | [login.spec.js](../tests/login.spec.js) |
| TC-004 | Authentication | Empty password | High | [login.spec.js](../tests/login.spec.js) |
| TC-005 | Inventory | Verify product listing | High | [inventory.spec.js](../tests/inventory.spec.js) |
| TC-006 | Shopping Cart | Add product to cart | High | [inventory.spec.js](../tests/inventory.spec.js) |
| TC-007 | Shopping Cart | Remove product from cart | High | [inventory.spec.js](../tests/inventory.spec.js) |
| TC-008 | Inventory | Sort products by price | Medium | [inventory.spec.js](../tests/inventory.spec.js) |
| TC-009 | Checkout | Complete successful checkout | Critical | [checkout.spec.js](../tests/checkout.spec.js) |

**Priority definitions:**

- **Critical:** Essential workflow required to complete the primary user journey.
- **High:** Important functionality with a significant effect on user experience.
- **Medium:** Supporting functionality that improves usability.

---

## 3. Authentication Test Cases

### TC-001: Successful Login

**Priority:** Critical  
**Type:** Positive / Functional  
**Precondition:** User is on the SauceDemo login page.

**Test Steps:**
1. Navigate to the SauceDemo application.
2. Enter the valid username `standard_user`.
3. Enter the valid password `secret_sauce`.
4. Click the Login button.
5. Verify navigation to the inventory page.
6. Verify the inventory container is visible.

**Expected Result:** The user successfully authenticates and accesses the inventory page.

**Automated Script:** [TC-001](../tests/login.spec.js)

### TC-002: Invalid Credentials

**Priority:** High  
**Type:** Negative / Functional  
**Precondition:** User is on the SauceDemo login page.

**Test Steps:**
1. Navigate to the application.
2. Enter username `invalid_user`.
3. Enter password `wrong_password`.
4. Click the Login button.
5. Verify the authentication error message.

**Expected Result:** The application displays an error indicating that the username and password do not match.

**Automated Script:** [TC-002](../tests/login.spec.js)

### TC-003: Empty Username Validation

**Priority:** High  
**Type:** Negative / Field Validation  
**Precondition:** User is on the SauceDemo login page.

**Test Steps:**
1. Navigate to the application.
2. Leave the username field empty.
3. Enter password `secret_sauce`.
4. Click the Login button.
5. Verify the username validation message.

**Expected Result:** The application displays "Username is required".

**Automated Script:** [TC-003](../tests/login.spec.js)

### TC-004: Empty Password Validation

**Priority:** High  
**Type:** Negative / Field Validation  
**Precondition:** User is on the SauceDemo login page.

**Test Steps:**
1. Navigate to the application.
2. Enter username `standard_user`.
3. Leave the password field empty.
4. Click the Login button.
5. Verify the password validation message.

**Expected Result:** The application displays "Password is required".

**Automated Script:** [TC-004](../tests/login.spec.js)

---

## 4. Inventory and Shopping Cart Test Cases

**Common Precondition:** The user is authenticated as `standard_user` and has reached the inventory page.

### TC-005: Verify Product Listing

**Priority:** High  
**Type:** Positive / Functional

**Test Steps:**
1. Locate the inventory list.
2. Verify that six inventory items are displayed.
3. Verify that six product name elements are present.
4. Verify that six product price elements are present.

**Expected Result:** Six products are displayed, each with corresponding name and price elements.

**Automated Script:** [TC-005](../tests/inventory.spec.js)

### TC-006: Add Product to Shopping Cart

**Priority:** High  
**Type:** Positive / Functional

**Test Steps:**
1. Add Sauce Labs Backpack to the cart.
2. Verify that the cart badge displays `1`.
3. Open the shopping cart.
4. Verify navigation to the cart page.
5. Verify Sauce Labs Backpack appears in the cart.

**Expected Result:** The correct product is added and displayed in the shopping cart.

**Automated Script:** [TC-006](../tests/inventory.spec.js)

### TC-007: Remove Product from Shopping Cart

**Priority:** High  
**Type:** Positive / Functional

**Test Steps:**
1. Add Sauce Labs Backpack to the cart.
2. Verify that the cart badge displays `1`.
3. Click Remove for Sauce Labs Backpack.
4. Verify that the cart badge is no longer displayed.

**Expected Result:** The cart badge disappears after the product is removed.

**Automated Script:** [TC-007](../tests/inventory.spec.js)

### TC-008: Sort Products by Price

**Priority:** Medium  
**Type:** Positive / Functional

**Test Steps:**
1. Select the price sorting option "Low to High".
2. Retrieve the displayed product prices.
3. Convert the price values into numeric data.
4. Compare the displayed sequence against ascending numeric order.

**Expected Result:** All displayed product prices are ordered from lowest to highest.

**Automated Script:** [TC-008](../tests/inventory.spec.js)

---

## 5. Checkout Test Case

### TC-009: Complete Successful Checkout

**Priority:** Critical  
**Type:** Positive / End-to-End  
**Precondition:** User is authenticated as `standard_user` and is on the inventory page.

**Test Steps:**
1. Add Sauce Labs Backpack to the cart.
2. Open the shopping cart.
3. Verify the correct product is displayed.
4. Proceed to checkout.
5. Enter valid fictional customer information.
6. Click Continue.
7. Verify navigation to the checkout overview.
8. Verify the correct product appears in the order summary.
9. Click Finish.
10. Verify the order confirmation page and success message.

**Expected Result:** The user completes checkout successfully and receives the message "Thank you for your order!".

**Automated Script:** [TC-009](../tests/checkout.spec.js)

---

## 6. Requirements Traceability Matrix

Requirements below are derived from the application's observable functionality for this portfolio demonstration. They are not official SauceDemo requirements.

| Requirement ID | Functional Requirement | Test Cases |
|---|---|---|
| REQ-001 | Valid users can authenticate | TC-001 |
| REQ-002 | Invalid credentials produce an appropriate error | TC-002 |
| REQ-003 | Required login fields are validated | TC-003, TC-004 |
| REQ-004 | Inventory products display names and prices | TC-005 |
| REQ-005 | Users can add products to their cart | TC-006 |
| REQ-006 | Users can remove products from their cart | TC-007 |
| REQ-007 | Users can sort inventory by ascending price | TC-008 |
| REQ-008 | Users can complete an order | TC-009 |

---

## 7. Test Execution Summary

A successful local execution was recorded after test framework refactoring.

| Metric | Observed Result |
|---|---|
| Test Cases | 9 |
| Browser Engines | 3 |
| Executions | 27 |
| Passed | 27 |
| Failed | 0 |
| Pass Rate | 100% |

**Execution configuration:** Three parallel workers.

**Known observation:** An intermittent WebKit checkout navigation failure occurred during an earlier execution. The test passed independently and during a subsequent complete suite run. Root cause remains unconfirmed.

Results reflect a particular execution, not permanent test status.

For current results, refer to the repository's GitHub Actions workflow and generated reports.

---

## 8. Coverage Limitations

The current suite does not comprehensively test all application functionality.

Notable coverage gaps include:

- Locked-out user authentication
- Multiple-item shopping cart behavior
- Checkout field validation errors
- Checkout cancellation
- Product sorting in other directions
- Product detail navigation
- Accessibility and responsive behavior
- Performance and security testing

These scenarios may be prioritized during future expansion.

---

## 9. Related Documentation

- [QA Test Plan](TEST_PLAN.md)
- [Project README](../README.md)
- [Login Automation](../tests/login.spec.js)
- [Inventory Automation](../tests/inventory.spec.js)
- [Checkout Automation](../tests/checkout.spec.js)

---

**Document Classification:** Public QA Portfolio  
**Project Type:** Independent Software Testing Demonstration
