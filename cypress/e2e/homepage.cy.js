describe('Naukri Homepage (Backend Login)', () => {

  beforeEach(() => {
    cy.loginByAPI()
    cy.visit('/mnjuser/homepage')
  })

  it('Should load homepage', () => {
    cy.contains('Jobs').should('be.visible')
  })

})
