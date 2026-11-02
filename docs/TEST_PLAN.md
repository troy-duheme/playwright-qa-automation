
# QA Test Plan — SauceDemo E-Commerce Application

**Project:** Playwright QA Automation Portfolio  
**Application Under Test:** [SauceDemo](https://www.saucedemo.com/)  
**Test Type:** Functional, Regression, End-to-End, Cross-Browser  
**Automation Framework:** Playwright with JavaScript  
**Document Version:** 1.0  
**Status:** Implemented

---

## 1. Introduction

### 1.1 Purpose

This test plan defines the testing approach, scope, objectives, risks, and acceptance criteria for automated functional testing of the SauceDemo e-commerce application.

The purpose is to validate critical user workflows and demonstrate structured quality assurance practices through automated testing.

### 1.2 Objectives

- Verify successful and unsuccessful authentication scenarios.
- Validate inventory display and product sorting.
- Verify shopping cart operations.
- Validate the end-to-end checkout process.
- Identify functional inconsistencies across supported browsers.
- Maintain repeatable and maintainable automated tests.
- Support regression testing through continuous integration.

---

## 2. Scope of Testing

### 2.1 In Scope

| Module | Functionality |
|---|---|
| Authentication | Valid login, invalid login, required-field validation |
| Inventory | Product listing, product names, prices |
| Shopping Cart | Add product, remove product, cart contents |
| Product Sorting | Price sorting from low to high |
| Checkout | Customer information, order overview, order completion |
| Cross-Browser | Chromium, Firefox, WebKit |

### 2.2 Out of Scope

The following functionality is not covered by the current automated test suite:

- User registration and password recovery
- Payment gateway integration
- Backend database validation
- Performance and load testing
- Security and penetration testing
- Accessibility compliance auditing
- Mobile device testing
- Inventory management outside the customer-facing interface

These areas may be considered for future testing activities where supported by the application.

---

## 3. Test Strategy

### 3.1 Testing Approach

Testing follows a risk-based approach, prioritizing workflows that directly affect the user's ability to access the application, select products, and complete an order.

Automated tests are organized by functional module and use Playwright assertions to verify expected application behavior.

### 3.2 Testing Levels and Types

| Testing Type | Description |
|---|---|
| Functional Testing | Verify features behave according to expected outcomes |
| Positive Testing | Validate successful workflows using valid inputs |
| Negative Testing | Verify error handling for invalid or missing inputs |
| Regression Testing | Re-execute tests following changes |
| End-to-End Testing | Validate the complete customer checkout journey |
| Cross-Browser Testing | Verify functionality across three browser engines |

### 3.3 Test Prioritization

| Priority | Feature | Rationale |
|---|---|---|
| Critical | Authentication | Required to access shopping functionality |
| Critical | Checkout | Directly affects order completion |
| High | Shopping Cart | Essential to purchasing workflows |
| High | Inventory Display | Required for selecting products |
| Medium | Product Sorting | Improves product discovery |

---

## 4. Test Environment

| Component | Configuration |
|---|---|
| Application | SauceDemo |
| Application URL | https://www.saucedemo.com/ |
| Automation Framework | Playwright |
| Programming Language | JavaScript |
| Runtime | Node.js |
| Browsers | Chromium, Firefox, WebKit |
| Local Environment | Windows |
| CI Environment | GitHub Actions |
| Test Reports | Playwright HTML Reporter |

### 4.1 Test Data

The test suite uses SauceDemo's publicly documented demonstration credentials.

**Valid User:** `standard_user`  
**Valid Password:** `secret_sauce`

Invalid credentials and empty-field scenarios are used to validate authentication error handling.

Checkout uses fictional customer information and does not perform a real financial transaction.

---

## 5. Test Case Coverage

### 5.1 Authentication

| Test ID | Test Scenario | Expected Result |
|---|---|---|
| TC-001 | Login using valid credentials | User successfully accesses inventory |
| TC-002 | Login using invalid credentials | Appropriate authentication error displayed |
| TC-003 | Submit login with empty username | Username required error displayed |
| TC-004 | Submit login with empty password | Password required error displayed |

### 5.2 Inventory and Shopping Cart

| Test ID | Test Scenario | Expected Result |
|---|---|---|
| TC-005 | Verify available inventory products | Six products displayed with names and prices |
| TC-006 | Add product to shopping cart | Cart count updates and correct product is displayed |
| TC-007 | Remove product from shopping cart | Product removed and cart badge disappears |
| TC-008 | Sort inventory by ascending price | Product prices displayed in ascending order |

### 5.3 Checkout

| Test ID | Test Scenario | Expected Result |
|---|---|---|
| TC-009 | Complete checkout using valid information | Order confirmation page and success message displayed |

---

## 6. Entry and Exit Criteria

### 6.1 Entry Criteria

Testing may begin when:

- The application is accessible.
- Playwright dependencies and browser binaries are installed.
- Test credentials are available.
- Automated test scripts are configured.
- The selected test environment is operational.

### 6.2 Exit Criteria

The target criteria for a successful regression run are:

- All nine automated test cases are executed.
- All critical workflows pass.
- No unresolved critical defects affect tested functionality.
- Test results are recorded.
- Any failures are investigated and documented.
- Cross-browser results are reviewed.

A passing test suite does not guarantee that the application is defect-free.

---

## 7. Defect Management

When an automated test fails, the failure is investigated to distinguish between:

1. An application defect.
2. A test automation defect.
3. An environment or configuration issue.
4. An intermittent or timing-related failure.

### 7.1 Defect Documentation

Confirmed defects should include:

- Defect ID and descriptive title
- Application and browser environment
- Preconditions
- Steps to reproduce
- Expected result
- Actual result
- Severity and priority
- Supporting screenshots, logs, or traces

### 7.2 Failure Investigation

Playwright HTML reports, error messages, and available execution evidence are used to investigate failures.

An intermittent checkout navigation failure was observed in WebKit during local execution. The test passed when rerun independently, and the full suite subsequently passed using three workers.

The root cause remains unconfirmed. This observation is retained as a reliability risk rather than classified as a confirmed application defect.

---

## 8. Risks and Mitigation

| Risk | Impact | Mitigation |
|---|---|---|
| Application UI changes | Automated tests may fail | Maintain stable locators and update affected tests |
| Browser-specific behavior | Inconsistent test execution | Execute tests across Chromium, Firefox, and WebKit |
| Intermittent navigation failures | Reduced test reliability | Investigate failed runs and review execution evidence |
| External application availability | Tests cannot execute | Confirm application availability before testing |
| Shared test environment | Potential test interference | Use isolated browser contexts and controlled parallelism |
| Limited test coverage | Defects may remain undetected | Expand scenarios based on functional risk |

---

## 9. Test Execution and Reporting

### 9.1 Local Execution

The suite contains nine automated test cases configured to execute across three browser engines.

A successful local run using three workers produced the following results:

| Metric | Result |
|---|---|
| Automated Test Cases | 9 |
| Browser Engines | 3 |
| Total Executions | 27 |
| Passed | 27 |
| Failed | 0 |
| Pass Rate | 100% |

These results represent an observed execution and are not a guarantee of future test outcomes.

### 9.2 Continuous Integration

GitHub Actions executes the Playwright workflow following repository changes.

The workflow supports repeatable automated execution and generates an HTML test report as a downloadable artifact.

Test failures should be reviewed before interpreting the workflow as evidence of an application defect.

---

## 10. Future Testing Improvements

Potential enhancements include:

- Additional negative checkout scenarios
- Boundary-value testing for customer information
- Multiple-product cart validation
- Product sorting in additional directions
- Data-driven authentication tests
- More detailed failure artifacts and traces
- Expanded accessibility checks
- Additional test reporting and trend analysis

---

## 11. Conclusion

The current automation suite provides foundational functional and regression coverage for key SauceDemo e-commerce workflows.

It demonstrates structured test design, positive and negative testing, cross-browser validation, reusable automation components, and continuous integration.

Further coverage expansion and reliability investigation will improve confidence in the tested functionality.

---

**Document Classification:** Public QA Portfolio  
**Project Type:** Independent Software Testing Demonstration  
**Application Ownership:** SauceDemo is a demonstration application provided by Sauce Labs.
