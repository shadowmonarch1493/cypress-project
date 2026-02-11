describe('Backend Login using API (Dummy Site)', () => {

  it('Login via API and save token in localStorage', () => {

    // 1️⃣ Open browser (needed for localStorage)
    cy.visit('https://reqres.in')

    // 2️⃣ Call LOGIN API directly (backend)
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/login',
      body: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      }
    }).then((response) => {

      // 3️⃣ Verify API success
      expect(response.status).to.eq(200)

      // 4️⃣ Get token from API response
      const token = response.body.token

      // 5️⃣ Save token in localStorage
      window.localStorage.setItem('token', token)

      expect(window.localStorage.getItem('token')).to.exist


      // 6️⃣ Log it (for understanding)
      cy.log('Token saved: ' + token)
    })
  })

})
