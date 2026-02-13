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

  

describe('DemoQA',()=>{

beforeEach(  ()=>{
  cy.visit("https://demoqa.com/elements")
})
//==========================================TEXT FIELD=========================================================
it
('text feild', () => {
  cy.contains('Text Box').click()

  cy.get('#userName').type("mani not in mouth ")
  cy.get('#userEmail').type('cherry@gmail.com')
  cy.get('#currentAddress').type('AP')
  cy.get('#permanentAddress').type('BKL at 6:45 mom will arrive ')
  cy.get('#submit').click()

  cy.get('#Name').should('contain.text','mani not in mouth ')
  cy.get('#email').should('contain.text','cherry@gmail.com')
});

//===============================================cHECKK BOX==========================================================================
it('check box', () => {
cy.contains('Check Box').click()//Find ANY visible element on the page that contains the text Check Box

cy.get('.rct-icon.rct-icon-expand-close').click()
//cy.get('tree-node-desktop').click

cy.contains('Desktop').click()
//cy.get('.rct-icon.rct-icon-expand-close').click()
cy.contains('Documents').click()

cy.contains('Downloads').click()
});

//================================================RADIO BUTTON=======================================================================
it('RadioButton', () => {
  cy.contains('Radio Button').click()

  cy.contains('Yes').click()

  cy.contains('Impressive').click()
  
});

//=========================================WEB TABLES=========================================================================

it.only('Web Tables', () => {
  cy.contains('Web Tables').click()

  cy.get('.btn.btn-primary').click()//add button\
  cy.get('#firstName').type('Mukesh')
  cy.get('#lastName').type('Mukesh')
  cy.get('#userEmail').type('Mukesh@gmail.com')
  cy.get('#age').type('18')
  cy.get('#salary').type('200000')
  cy.get('#department').type('Sonic solutions')
cy.get('#submit').click()



});
})