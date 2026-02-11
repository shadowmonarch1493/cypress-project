// describe('Backend Login using API (DummyJSON)', () => {

//   it('Login via API and save token in localStorage', () => {

//     // 1️⃣ Open browser context
//     cy.visit('https://dummyjson.com')

//     // 2️⃣ Backend login (NO UI)
//     cy.request({
//       method: 'POST',
//       url: 'https://dummyjson.com/auth/login',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: {
        
//                  "username": "emilys",
//                  "password": "emilyspass"


//           }
//     }).then((response) => {

//       // 3️⃣ Verify login success
//       expect(response.status).to.eq(200)

//       // 4️⃣ Get token
//       const token = response.body.token

//       // 5️⃣ Save token to localStorage
//       window.localStorage.setItem('token', token)

//       // 6️⃣ Verify token is saved
//       expect(window.localStorage.getItem('token')).to.exist

//       // 7️⃣ Log for understanding
//       cy.log('Token saved successfully')
//     })
//   })
// })




it('Login via API, save token, and access protected API', () => {

  cy.visit('https://dummyjson.com')

  cy.request({
    method: 'POST',
    url: 'https://dummyjson.com/auth/login',
    headers: { 'Content-Type': 'application/json' },
    body: {
      username: 'emilys',
      password: 'emilyspass'
    }
  }).then((response) => {

    const token = response.body.token
    window.localStorage.setItem('token', token)
    expect(window.localStorage.getItem('token')).to.exist

    // 🔐 use token
    cy.request({
      method: 'GET',
      url: 'https://dummyjson.com/auth/me',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      expect(res.status).to.eq(200)
      cy.log('User: ' + res.body.username)
    })
  })
})

