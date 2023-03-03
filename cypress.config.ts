import { defineConfig } from "cypress";
const configImport = require("./cypress/plugins/index.ts");
export default defineConfig({
  viewportWidth: 1100,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return configImport(on, config);
    },
    baseUrl: "https://master.d3qm5n59wrk3b.amplifyapp.com/",
  },
});
