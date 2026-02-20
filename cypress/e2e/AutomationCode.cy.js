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

   //Assert login success (search bar visible)
   cy.get('.nI-gNb-sb__placeholder').should('be.visible').click()

   cy.get('input[placeholder="Enter keyword / designation / companies"]').type('Developer')
   
   cy.get('.ddInput.nonSearched').click()
 
  // cy.get('ni-gnb-icn.ni-gnb-icn-expand-more').click()

  cy.get('li[title="2 years"]').should('be.visible').click()

  cy.get('input[placeholder="Enter location"]').type('Hyderabad').click()

  cy.get('.ni-gnb-icn.ni-gnb-icn-search').click()

  cy.get('.cust-job-tuple', { timeout: 10000 })
  .should('be.visible')
  .first()
  .scrollIntoView()
  .find('a')
  .first()
  .then($link => {
    // remove target to open in same tab
    const href = $link.prop('href')
    cy.visit(href)
  })

  cy.get('body').then($body => {

  if ($body.text().includes('Apply on company website')) {

    cy.contains(/Apply on company website/i)
      .invoke('removeAttr', 'target')
      .click()

  } else if ($body.text().includes('Apply')) {

    cy.contains(/^Apply$/)
      .click()

  } else {
    cy.log('Apply button not available')
  }

})



   //cy.get('.suggestor-input').type('hyderabad')

    // 1️⃣ Open the search bar
//     cy.get('.nI-gNb-sb__placeholder', { timeout: 20000 })
//       .should('be.visible')
//       .click()

//     // 2️⃣ Enter Role
// cy.get('input[placeholder="Enter keyword / designation / companies"]')
//   .should('be.visible')
//   .type('developer')
//   //3️⃣ Open Experience dropdown (IMPORTANT STEP)
// cy.contains('Select experience')
//   .should('be.visible')
//   .click()

// // 4️⃣ Select Fresher (NOW it is visible)
// cy.contains('Fresher', { timeout: 10000 })
//   .should('be.visible')
//   .click()

// // 5️⃣ Enter Location
// cy.get('input[placeholder="Enter location"]')
//   .should('be.visible')
//   .type('Hyderabad')

// // 6️⃣ Click Search
// cy.contains('Search')
//   .should('be.visible')
//   .click()
	




})

})




