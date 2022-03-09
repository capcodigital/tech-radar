const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

Given("the user navigates to {string}", {timeout: 60 * 1000}, async function (url) {
    await this.openUrl(url);
});

When("the user clicks {string}", {timeout: 60 * 1000}, async function (clickLocator) {
    await this.page.locator('text='+clickLocator+'').click();
    
});