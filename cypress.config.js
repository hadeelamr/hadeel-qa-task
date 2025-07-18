const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    // 🌐 Base URL for your tests
    baseUrl: "https://magento.softwaretestingboard.com",

    // 📁 Feature files location
    specPattern: "cypress/e2e/**/*.feature",

    // 🛠 Support file
    supportFile: "cypress/support/e2e.js",

    // 🧩 Step definitions location (corrected!)
    stepDefinitions: "cypress/support/step_definitions/**/*.{js,ts}",

    // 🔧 Node event setup for Cucumber + ESBuild
    async setupNodeEvents(on, config) {
      await preprocessor.addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );
      return config;
    },

    // 📸 Screenshot settings
    screenshotsFolder: "MyScreenshots",
    trashAssetsBeforeRuns: false,

    // 🎥 Video settings
    video: true,
    videosFolder: "MyVideos",
    videoCompression: 0,

    // 📊 Mochawesome reporter settings
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/myReport",
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss",
    },
  },
});