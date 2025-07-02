const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com',
    defaultCommandTimeout: 15000,
    video: true,
    videoCompression: 20,

    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: false,
    },

    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
  },
});
