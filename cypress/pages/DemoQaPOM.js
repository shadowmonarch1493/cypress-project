

import loginData from '../fixtures/DemoData.json'
class DemoQA{

  NameField() {
    return cy.get('#userName').scrollIntoView()
  }

  EmailField() {
    return cy.get('#userEmail').scrollIntoView()
  }

  AddressFeild(){
    return cy.get('#currentAddress').scrollIntoView()

  }
  Submit(){
    return cy.get('#submit').scrollIntoView()
    
  }
}
export default DemoQA