const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 's9171t',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
