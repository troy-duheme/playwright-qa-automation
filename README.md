
# Playwright QA Automation Portfolio

Automated UI and end-to-end testing framework built with **Playwright and JavaScript**, demonstrating practical software quality assurance techniques across Chromium, Firefox, and WebKit.

## Project Overview

This project tests [SauceDemo](https://www.saucedemo.com/), a publicly available e-commerce demonstration application.

The test suite covers authentication, inventory management, shopping cart functionality, and the checkout process.

### Objectives

- Validate critical e-commerce user journeys
- Demonstrate positive and negative test coverage
- Verify UI functionality and expected application behavior
- Implement reusable test automation functions
- Execute automated tests across multiple browsers
- Produce test execution reports for troubleshooting

## Technologies & Tools

| Technology | Purpose |
|---|---|
| Playwright | Browser automation and assertions |
| JavaScript | Test scripting |
| Node.js | JavaScript runtime |
| Chromium, Firefox, WebKit | Cross-browser testing |
| Git & GitHub | Version control and repository hosting |
| HTML Reporter | Test execution reporting |

## QA Test Documentation

This project includes a structured QA test plan outlining the testing strategy, scope, risk assessment, test coverage, and execution criteria.


### Test Case Matrix

📊 **[View Test Case Matrix](docs/TEST_CASES.md)**

A structured test case repository containing:

- 9 documented test cases (TC-001 through TC-009)
- Test objectives, preconditions, steps, and expected results
- Risk-based test priorities
- Requirements Traceability Matrix (RTM)
- Direct links to the corresponding Playwright automation scripts
- Test execution results and coverage limitations


### Test Plan

📋 **[View QA Test Plan](docs/TEST_PLAN.md)**

The test plan documents:

- Testing objectives and scope
- Risk-based testing strategy and prioritization
- Test environment and test data
- Test cases TC-001 through TC-009
- Entry and exit criteria
- Defect management and failure investigation
- Test execution results and identified risks

This documentation complements the automated test scripts by demonstrating the planning and analytical aspects of software quality assurance.

## Automated Test Coverage

### Authentication

| Test ID | Test Scenario |
|---|---|
| TC-001 | Successful login with valid credentials |
| TC-002 | Login with invalid credentials |
| TC-003 | Login with empty username |
| TC-004 | Login with empty password |

### Inventory & Shopping Cart

| Test ID | Test Scenario |
|---|---|
| TC-005 | Verify inventory page displays products |
| TC-006 | Add a product to the shopping cart |
| TC-007 | Remove a product from the shopping cart |
| TC-008 | Sort products by price (low to high) |

### Checkout

| Test ID | Test Scenario |
|---|---|
| TC-009 | Complete checkout with valid customer information |

## Test Execution Results

The initial test suite was successfully executed across three browsers.

| Metric | Result |
|---|---|
| Automated Test Cases | 9 |
| Browsers | Chromium, Firefox, WebKit |
| Total Test Executions | 27 |
| Passed | 27 |
| Failed | 0 |
| Pass Rate | 100% |

*Results represent a successful local execution, not a guarantee of future results.*

## Project Structure

```text
playwright-qa-automation/
├── .github/
│   └── workflows/
├── helpers/
│   └── auth.js
├── tests/
│   ├── login.spec.js
│   ├── inventory.spec.js
│   └── checkout.spec.js
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md
```

## Installation & Setup

### Prerequisites

- Node.js
- npm
- Git

### Clone the Repository

```bash
git clone https://github.com/troy-duheme/playwright-qa-automation.git
cd playwright-qa-automation
```

### Install Dependencies

```bash
npm ci
```

### Install Playwright Browsers

```bash
npx playwright install
```

## Running Tests

### Run All Tests

```bash
npx playwright test
```

### Run Individual Test Suites

```bash
npx playwright test tests/login.spec.js
npx playwright test tests/inventory.spec.js
npx playwright test tests/checkout.spec.js
```

### Run Tests in a Specific Browser

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### View Test Reports

```bash
npx playwright show-report
```

## Automation Framework Design

### Reusable Authentication Helper

The project includes a reusable authentication function located in `helpers/auth.js`.

This approach reduces duplicated code across test suites and improves maintainability.

### Test Organization

Tests are separated by application functionality:

- Authentication
- Inventory and shopping cart
- Checkout

Each automated test uses a consistent test case identifier (TC-001 through TC-009), descriptive test names, and numbered test steps.

### Cross-Browser Validation

Playwright tests execute across Chromium, Firefox, and WebKit to help identify browser-specific inconsistencies.

## Future Improvements

- Expand negative checkout scenarios
- Add boundary-value validation
- Introduce data-driven testing
- Improve test data management
- Add API testing coverage
- Expand CI execution and reporting

## About This Project

This is an independent QA automation portfolio project created to demonstrate practical software testing skills, automation framework organization, and continued professional development.

The application under test is SauceDemo. This project is not affiliated with Sauce Labs.