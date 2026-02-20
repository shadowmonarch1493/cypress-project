describe ('login',() =>{
it('should be logged in', () => {
           
cy.visit('https://www.saucedemo.com/')

cy.get('#user-name').type('standard_user')

cy.get('#password').type('secret_sauce')

cy.get('#login-button').click();

cy.title()

});
})

//-------------------------------------------------------------------------------------------------------------------------------------------
// Naukri original login


describe ('login',() =>{
    it.only('should be logged in', () => {
        
        cy.wait(3000) // quick learning phase only

        cy.visit('https://www.naukri.com/nlogin/login?URL=https://www.naukri.com/mnjuser/homepage')

cy.get('#usernameField').type('mukeshkumar03388@gmail.com')

cy.get('#passwordField').type('9133241818')

cy.get('.waves-effect.waves-light.btn-large.btn-block.btn-bold.blue-btn.textTransform').click() //Submit button

cy.wait(3000) // quick learning phase only

cy.get('.nI-gNb-sb__placeholder').click()

cy.get('.nI-gNb-sb__keywords > .nI-gNb-sugg > .suggestor-wrapper > .suggestor-box > .suggestor-input').type('developer')
cy.get('.dropdownMainContainer > .ni-gnb-icn') .and ('contains','fresher').click()




// to go into search bar and type developer
// cy.get('input[placeholder="Enter keyword / designation / companies"]').type('developer')

// 
// cy.get('.nI-gNb-sb__icon-wrapper').click()
// cy.wait(10000)








//4 it blocks
//POM
//Data Driven 
//ENV in config file
//clear cache cookies
//Mocha Awesome 

// const login=new (login())



});
})
