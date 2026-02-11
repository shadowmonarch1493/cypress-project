// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   allowCypressEnv: false,

//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });

// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   reporter: "mochawesome",
//   reporterOptions: {
//     reportDir: "cypress/reports",
//     overwrite: false,
//     html: true,
//     json: true
//   },
//   e2e: {
//     setupNodeEvents(on, config) {},
//   },
// });


// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   reporter: 'cypress-mochawesome-reporter',
//   e2e: {
//     setupNodeEvents(on, config) {
//       require('cypress-mochawesome-reporter/plugin')(on)
//     }
//   }
// });







// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   reporter: "cypress-mochawesome-reporter",

//   e2e: {
//     setupNodeEvents(on, config) {
//       require('cypress-mochawesome-reporter/plugin')(on);
//     },
//     specPattern: "cypress/e2e/**/*.cy.js",
//     supportFile: "cypress/support/e2e.js"
//   }
// });


// module.exports = {
//   screenshotsFolder: "cypress/screenshots",
//   screenshotOnRunFailure: true,
// }


// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   reporter: "cypress-mochawesome-reporter",

//   reporterOptions: {
//     reportDir: "cypress/reports",
//     charts: true,
//     embeddedScreenshots: true,//adds screenshots to html file
//     inlineAssets: true,//adds screenshots to html file
//     saveAllAttempts: false,
//     code: false          //hides test code
//   },

//   screenshotsFolder: "cypress/screenshots",
//   screenshotOnRunFailure: true,

//   env: {
//     baseUrl: "https://www.naukri.com/nlogin/login",
    
//   },

//   e2e: {
//     setupNodeEvents(on, config) {
//       require("cypress-mochawesome-reporter/plugin")(on);
//     },
//     specPattern: "cypress/e2e/**/*.cy.js",
//     supportFile: "cypress/support/e2e.js"
//   }
// });



//---------------------------------------------------------------------------------------------------------------------------
// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   reporter: "cypress-mochawesome-reporter",

//   reporterOptions: {
    
//     // reportDir: "cypress/reports",
//     // charts: true,
//     // embeddedScreenshots: true, // adds screenshots to html
//     // inlineAssets: true,        // embeds assets in html
//     // saveAllAttempts: false,
//     // code: false,                // hides test code
//     // html: true,
//     // json: true,
//     // overwrite: false
//     // // keepjson:true,
//     // // savejson:true
//     reporterOptions: {
//   reportDir: "cypress/reports",
//   charts: true,
//   embeddedScreenshots: true,
//   inlineAssets: true,
//   saveAllAttempts: false,
//   code: false,
//   html: true,
//   json: true,
//   overwrite: true
//   }
//   },

//   screenshotsFolder: "cypress/screenshots",
//   screenshotOnRunFailure: true,

//   env: {
//     baseUrl: "https://www.naukri.com/nlogin/login"
//     //baseurl:"https://demoqa.com/text-box"
//   },

//   e2e: {

//     env: {
//       email: "test@test.com",
//       password: "password123"
//     },
//     setupNodeEvents(on, config) {

//       // ADD THIS: enables cy.task('log')
//       on('task', {
//         log(message) {
//           console.log(message)
//           return null
//         }
//       })

//       //  mochawesome plugin
//       require("cypress-mochawesome-reporter/plugin")(on)

//       return config
//     },

//     specPattern: "cypress/e2e/**/*.cy.js",
//     supportFile: "cypress/support/e2e.js"
//   }
// });


//======================================================================================================================================================================================

const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    code: false,
    html: true,
    json: true,
    overwrite: true
  },

  screenshotsFolder: "cypress/screenshots",
  screenshotOnRunFailure: true,

  e2e: {
    //  REAL baseUrl (used by cy.visit('/'))
    baseUrl: "https://www.naukri.com",

    // ✅ ENV variables (used by Cypress.env())
    env: {
      demo1:"https://demoqa.com/elements",
      email: "test@test.com",
      password: "password123"
    },

    setupNodeEvents(on, config) {

      // enables cy.task('log')
      on('task', {
        log(message) {
          console.log(message)
          return null
        }
      })

      // mochawesome plugin
      require("cypress-mochawesome-reporter/plugin")(on)

      return config
    },

    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js"
  }
});
