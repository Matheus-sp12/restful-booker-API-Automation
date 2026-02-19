const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: true,

  e2e: {
    baseUrl: 'https://restful-booker.herokuapp.com',
    requestTimeout: 6000,
    responseTimeout: 6000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
      requestMode: true,
      hidenCredentials: true,
    }
  },
});
