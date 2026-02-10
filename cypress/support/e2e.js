// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
Cypress.on('uncaught:exception', () => false)

import 'cypress-mochawesome-reporter/register'

// import 'cypress-mochawesome-reporter/register'

//For Screenshots after every test execution
afterEach(function () {
  const testName = this.currentTest.title;
  const status = this.currentTest.state; 

  cy.screenshot(`${testName} -- ${status}`);
}); // write in test files 



