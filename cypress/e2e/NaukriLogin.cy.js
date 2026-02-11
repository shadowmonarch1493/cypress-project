// import LoginPage from '../pages/LoginPage'
// import loginData from '../fixtures/loginData.json'

// const loginPage = new LoginPage()
// describe('Naukri Login', () => {

  
//   beforeEach(() => {
//      cy.intercept('POST', '**/central-login-services/v1/login').as('loginAPI')


//      cy.visit(Cypress.env('baseUrl'))
//   });

//   it('Valid email + Valid password', () => {
//     loginPage.login( Cypress.env('validEmail'),Cypress.env('validPassword')
//     )
//     loginPage.login(
//   Cypress.env('validEmail'),
//   Cypress.env('validPassword'),
//     cy.wait('@loginAPI')
// )

//     cy.url().should('include', 'homepage')
//   })


//   it('Valid email + Invalid password', () => {

//    // cy.visit(Cypress.env('baseUrl'))

//     loginPage.login(
//       Cypress.env('validEmail'),
//       loginData.invalidPassword
//     )

//     cy.contains('Invalid').should('be.visible')
//   })



//   it('Invalid email + Valid password', () => {

//    // cy.visit(Cypress.env('baseUrl'))

//     loginPage.login(
//       loginData.invalidEmail,      Cypress.env('validPassword')
//     )

//     cy.contains('Invalid').should('be.visible')
//   })


//   it('Invalid email + Invalid password', () => {

//     // cy.visit(Cypress.env('baseUrl'))

//     loginPage.login(
//       loginData.invalidEmail,loginData.invalidPassword
//     )

//     cy.contains('Invalid').should('be.visible')
//   })

// })


//==================================================================================================================================================================

   // // 2️⃣ ADD THIS BLOCK HERE 👇
    // cy.wait('@loginAPI').then((interception) => {

    //   cy.task(
    //     'log',
    //     `LOGIN API CALLED → ${interception.request.url}`
    //   )

    //   cy.task(
    //     'log',
    //     `LOGIN API STATUS → ${interception.response.statusCode}`
    //   )

    //   expect(interception.response.statusCode).to.eq(200)
    // })


    // =============================================================================================================================================

// import LoginPage from '../pages/LoginPage'
// import loginData from '../fixtures/loginData.json'

// const loginPage = new LoginPage()

// describe('Naukri Login', () => {

//   beforeEach(() => {
//     cy.intercept('POST', '**/central-login-services/v1/login')
//       .as('loginAPI')

//     cy.visit(Cypress.env('baseUrl'))
//       })

//   it('Valid email + Valid password', () => {

//     // 1️ UI action (triggers API)
//     loginPage.login(
//       loginData.valid.email,
//       loginData.valid.password
//     )

//  cy.log(Cypress.env('email'))


// //--------------------------------to get API response in console------------------------------------------------------------------------------------------------------------- 
//     cy.wait('@loginAPI').then(({ response }) => {

//     expect(response.statusCode).to.eq(200)

//   cy.task('log', '========== LOGIN API RESPONSE ==========')
//   cy.task('log', `STATUS CODE: ${response.statusCode}`)
//   cy.task('log', JSON.stringify(response.body, null, 2))
//   cy.task('log', '========================================')

// })


//     // 3️ UI validation
//     cy.url().should('include', 'homepage')
//  })

  // it('Valid email + Invalid password', () => {

  //   loginPage.login(
  //     loginData.valid.email,
  //     loginData.invalid.password
  //   )

    
  //   cy.wait('@loginAPI').then((interception) => {
  //     cy.task('log', `LOGIN API STATUS → ${interception.response.statusCode}`)
  //     expect(interception.response.statusCode).to.not.eq(200)
  //   })

  //   cy.contains('Invalid').should('be.visible')
  // })

  // // it('Invalid email + Valid password', () => {

  //   loginPage.login(
  //     loginData.invalid.email,
  //     loginData.valid.password
  //   )

  //   cy.wait('@loginAPI').then((interception) => {
  //     cy.task('log', `LOGIN API STATUS → ${interception.response.statusCode}`)
  //     expect(interception.response.statusCode).to.not.eq(200)
  //   })

  //   cy.contains('Invalid').should('be.visible')
  // })

  // it('Invalid email + Invalid password', () => {

  //   loginPage.login(
  //     loginData.invalid.email,
  //     loginData.invalid.password
  //   )

  
  
//     cy.contains('Invalid').should('be.visible')
//   })
  

// })

//============================================================================================================================================================================


import LoginPage from '../pages/LoginPage'
import loginData from '../fixtures/loginData.json'

const loginPage = new LoginPage()

describe('Naukri Login', () => {

  beforeEach(() => {
    cy.intercept('POST', '**/central-login-services/v1/login')
      .as('loginAPI')

      cy.loginViaAPI(loginData.valid.email, loginData.valid.password);

    
  })

  it('Valid email + Valid password', () => {

    cy.visit('/nlogin/login')   
    loginPage.login(
      loginData.valid.email,
      loginData.valid.password
    )

    cy.log(Cypress.env('email'))   // ✅ This is FINE

    cy.wait('@loginAPI').then(({ response }) => {
      expect(response.statusCode).to.eq(200)

      cy.task('log', '========== LOGIN API RESPONSE ==========')
      cy.task('log', `STATUS CODE: ${response.statusCode}`)
      cy.task('log', JSON.stringify(response.body, null, 2))
      cy.task('log', '========================================')
    })

    cy.url().should('include', 'homepage')
  })

  // other tests unchanged…
})

// cy.request() command to bypass the UI login process, obtain authentication credentials (like a token or session cookie), and then manually set the application's state before proceeding with your tests. 