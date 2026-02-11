describe('DemoQA - Elements Automation', () => {

  beforeEach(() => {
    cy.visit('https://demoqa.com/elements')
  })

  //  TEXT BOX
  it('Text Box', () => {
    cy.contains('Text Box').click()

    cy.get('#userName').type('Mukesh')
    cy.get('#userEmail').type('mukesh@gmail.com')
    cy.get('#currentAddress').type('qwetr')
   

    cy.get('#submit').click()

    cy.get('#output').should('contain', 'Mukesh')
  })

  //  CHECK BOX
  it('Check Box', () => {
    cy.contains('Check Box').click()

    cy.get('.rct-icon rct-icon-expand-closel').click()
    // cy.get('label[for="tree-node-home"]').click()

    // cy.get('#result').should('contain', 'home')
  })
  })