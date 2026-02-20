// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



// if we use commands we can use the commands everywhere in tests 


// Cypress.Commands.add('loginByAPI', () => {
//   cy.session('naukri-login', () => {
//     cy.request({
//       method: 'POST',
//       url: 'https://www.naukri.com/central-login-services/v1/login',
//       body: {
//         username: Cypress.env('email'),
//         password: Cypress.env('password')
//       }
//     })
//   })
// })

// cypress/support/commands.js
// 
///<refrence types="Cypress"/> 



// cypress/support/commands.js
Cypress.Commands.add('loginViaAPI', (email, password) => {
  // cy.session caches the login state so it only runs once per test run
  cy.session([email, password], () => {
    cy.request({
      method: 'POST',
      url: 'https://www.naukri.com',
      body: {
        username: email,
        password: password,
        client_id: "naukri", // Standard for their web app
        systemid: "naukri"
      },
      headers: {
        'Content-Type': 'application/json',
        'appid': '121',      // Required by many Naukri services
        'systemid': '121'
      }
    }).then((response) => {
      // Ensure the API actually logged you in
      expect(response.status).to.eq(200);
    });
  }, {
    // Optional: Verify session is active by checking for a cookie
    validate() {
      cy.getCookie('n_id').should('exist');
    }
  });
});

