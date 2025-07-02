const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com',
    defaultCommandTimeout: 15000,
    video: true,
    videoCompression: 20,
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
  },
});