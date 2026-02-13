describe('DemoQA - Elements Automation', () => {

//   beforeEach(() => {
//     cy.visit('"https://demoqa.com/elements"')
//   })

//   //  TEXT BOX
//   it('Text Box', () => {
//     cy.contains(/Text Box/i).click() // using (/Text Box/i ) remove  case sensitive while finding elements

//     cy.get('#userName').type('Mukesh')
//     cy.get('#userEmail').type('mukesh@gmail.com')
//     cy.get('#currentAddress').type('qwetr')
//     cy.get('#submit').click()

//     cy.get('#output').should('contain', 'Mukesh')
//   })

//   //  CHECK BOX
//  //   it.only('Check Box', () => { ===========>  it.only runs only one it block 

//    it('Check Box', () => {
//     cy.contains('Check Box').click()

//     cy.get('.rct-icon rct-icon-expand-closel').click()
//     // cy.get('label[for="tree-node-home"]').click()

//     // cy.get('#result').should('contain', 'home')
//   })


describe('DemoQA - Elements Section', () => {

  beforeEach(() => {
    cy.visit('https://demoqa.com/elements')
  })

  // ---------------- TEXT BOX ----------------
  it('Text Box', () => {
    cy.contains('Text Box').click()

    cy.get('#userName').type('Mukesh')
    cy.get('#userEmail').type('mukesh@gmail.com')
    cy.get('#currentAddress').type('Bangalore')
    cy.get('#permanentAddress').type('Hyderabad')

    cy.get('#submit').click()

    cy.get('#name').should('contain.text', 'Mukesh')
    cy.get('#email').should('contain.text', 'mukesh@gmail.com')
  })

  // ---------------- CHECK BOX ----------------
  it('Check Box', () => {
    cy.contains('Check Box').click()

    cy.contains('Home').click()

    cy.get('#result')
      .should('be.visible')
      .and('contain.text', 'home')
  })

  // ---------------- RADIO BUTTON ----------------
  it('Radio Button', () => {
    cy.contains('Radio Button').click()

    cy.contains('Yes').click()

    cy.get('.text-success')
      .should('contain.text', 'Yes')
  })

  // ---------------- WEB TABLES ----------------
  it('Web Tables', () => {
    cy.contains('Web Tables').click()

    cy.get('#addNewRecordButton').click()

    cy.get('#firstName').type('Mukesh')
    cy.get('#lastName').type('Rockstar')
    cy.get('#userEmail').type('mukesh@gmail.com')
    cy.get('#age').type('25')
    cy.get('#salary').type('50000')
    cy.get('#department').type('QA')

    cy.get('#submit').click()

    cy.contains('.rt-td', 'Mukesh').should('be.visible')
  })

  // ---------------- BUTTONS ----------------
  it('Buttons', () => {
    cy.contains('Buttons').click()

    // Double Click
    cy.get('#doubleClickBtn').dblclick()
    cy.get('#doubleClickMessage')
      .should('contain.text', 'double click')

    // Right Click
    cy.get('#rightClickBtn').rightclick()
    cy.get('#rightClickMessage')
      .should('contain.text', 'right click')

    // Normal Click
    cy.contains('Click Me').click()
    cy.get('#dynamicClickMessage')
      .should('contain.text', 'dynamic click')
  })

  // ---------------- LINKS ----------------
  it('Links', () => {
    cy.contains('Links').click()

    cy.get('#simpleLink')
      .should('have.attr', 'href')
      .and('include', 'demoqa.com')
  })

  // ---------------- BROKEN LINKS - IMAGES ----------------
  it('Broken Links - Images', () => {
    cy.contains('Broken Links - Images').click()

    cy.get('img').should('have.length.greaterThan', 0)
  })

  // ---------------- UPLOAD & DOWNLOAD ----------------
  it('Upload and Download', () => {
    cy.contains('Upload and Download').click()

    cy.get('#downloadButton').should('be.visible')

    cy.get('#uploadFile')
      .selectFile('cypress/fixtures/example.json')

    cy.get('#uploadedFilePath')
      .should('contain.text', 'example.json')
  })

  // ---------------- DYNAMIC PROPERTIES ----------------
  it('Dynamic Properties', () => {
    cy.contains('Dynamic Properties').click()

    cy.get('#enableAfter').should('be.enabled')

    cy.get('#colorChange').should('be.visible')

    cy.get('#visibleAfter').should('be.visible')
  })

})

  })