const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
require('dotenv').config();

Given("the user navigates to Tech Radar", {timeout: 60 * 1000}, async function() {
    await this.openUrl(process.env.TEST_URL);
});

When("the user clicks {string}", {timeout: 60 * 1000}, async function(clickLocator) {
    await this.page.locator('text='+clickLocator+'').click();
});

When("the user clicks the hamburger menu", {timeout: 60 * 1000}, async function() {
    await this.page.locator('button[aria-label="menu"]').click();
});

Given(/^the user navigates to (.*) via the hamburger menu$/, async function (hamburgerCategory) {
    hamburgerCategory = replaceAll(hamburgerCategory," ","-");
    await this.page.locator('//a[@id="menu'+replaceAll(hamburgerCategory,"\"","")+'"]').click();
});

Given(/^the user navigates to category (.*)$/, async function (subCategory) {
    await this.page.locator("[data-test-id='category-item-"+replaceAll(subCategory,"\"","")+"'] >> nth=1").click();
});

Then("the user should see {string}", {timeout: 60 * 1000}, async function(text) {
    const pageText = await this.page.content().then(value => { return value;});
    const mutatedText = removeTags(pageText).replaceAll("&amp;","&").replaceAll('<.*?>','');
    const doesTheTextExistOnPage = mutatedText.includes(text);
    assert.strictEqual(doesTheTextExistOnPage, true, "The expected text is not on the page");
});

Then("the user should see", {timeout: 60 * 1000}, async function(text) {
    const pageText = await this.page.content().then(value => { return value;});
    const mutatedText = removeTags(pageText).replaceAll("&amp;","&").replaceAll('<.*?>','');
    const doesTheTextExistOnPage = mutatedText.includes(text);
    assert.strictEqual(doesTheTextExistOnPage, true, "The expected text is not on the page");
});

Then("the user clicks accordion {string}", {timeout: 60 * 1000}, async function(testId) {
    await this.page.locator('//div[@data-test-id="'+testId+'"]').click();
});

Then(/^the following url (.*) should appear$/, async function (partialUrl) {
    assert.strictEqual(await this.page.url().includes(replaceAll(partialUrl,"\"","")), true, "The partial url is not included actual: " + this.page.url() + " Expected: " +replaceAll(partialUrl,"\"",""));
});

Then("the user can see accordion {string} description {string}", {timeout: 60 * 1000}, async function(accordionId, text) {
    const accordionText = await this.page.locator('//div[@data-test-id="'+accordionId+'-content"]').innerText().then(value => { return value;});
    assert.strictEqual(accordionText.trim() == text.trim(), true, "The accordion content is not as expected");
    // await this.page.screenshot({ path: 'screenshot.png', fullPage: true });
});

Then("the user can see accordion {string} description", {timeout: 60 * 1000}, async function(accordionId, docString) {
    const accordionText = await this.page.locator('//div[@data-test-id="'+accordionId+'-content"]').innerText().then(value => { return value;});
    assert.strictEqual(docString.trim() == accordionText.trim(), true, "The accordion content is not as expected");

    // await this.page.screenshot({ path: 'screenshot.png', fullPage: true });
});

function removeTags(str) {
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();
          
    // Regular expression to identify HTML tags in 
    // the input string. Replacing the identified 
    // HTML tag with a null string.
    return str.replace( /(<([^>]+)>)/ig, '');
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }