class LoginPage {

  emailField() {
    return cy.get('#usernameField').scrollIntoView()
  }

  passwordField() {
    return cy.get('#passwordField').scrollIntoView()
  }

  loginButton() {
    return cy.get('.blue-btn').scrollIntoView()
  }

  login(email, password) {
    this.emailField().type(email)
    this.passwordField().type(password)
    this.loginButton().click()
  }
}

export default LoginPage
