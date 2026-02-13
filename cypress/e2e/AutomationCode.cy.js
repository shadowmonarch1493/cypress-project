describe('Login - Naukri', () => {

  it('should login and search for a job', () => {

    cy.visit('https://www.naukri.com/nlogin/login')

    cy.get('#usernameField')
      .should('be.visible')
      .type('shadowmonarch1493@gmail.com')

    cy.get('#passwordField')
      .should('be.visible')
      .type('9133241818')

    cy.contains('Login').click()

  //  //Assert login success (search bar visible)
  //  cy.get('.nI-gNb-sb__placeholder').should('be.visible').click()

  //  cy.get('input[placeholder="Enter keyword / designation / companies"]').should('be.visible').type('developer{enter}')

  //  cy.get('.dropdownMainContainer').click()
  //  cy.contains('Fresher').click()

//    cy.get('.nI-gNb-sb__placeholder')
//   .should('be.visible')
//   .click()
// cy.get('input[placeholder="Enter keyword / designation / companies"]')
  
//   .type('developer')

// cy.contains('Fresher' )
  
//   .click()


// 1️⃣ Open search bar
cy.get('.nI-gNb-sb__placeholder', { timeout: 15000 })
  .should('be.visible')
  .click()

// 2️⃣ Enter keyword
cy.get('input[placeholder="Enter keyword / designation / companies"]')
  .should('be.visible')
  .type('developer')

// 3️⃣ Select experience (DO NOT touch experienceDD input)
cy.contains('Fresher', { timeout: 10000 })
  .should('be.visible')
  .click()

// 4️⃣ Enter location
cy.get('input[placeholder="Enter location"]')
  .should('be.visible')
  .type('Bangalore')

// 5️⃣ Click Search
cy.contains('Search').click()




})

})




