const {setWorldConstructor, After} = require("@cucumber/cucumber")
const playwright = require('playwright')

class CustomWorld {
    async openUrl(url) {
        const browser  = await playwright.chromium.launch({
            headless:true
        })
        const context = await browser.newContext();
        this.page = await context.newPage();
        global.browser = browser;
        this.context = context;
        await this.page.goto(url);
    }
}

// Cleanup after each scenario
After(async function () {
    await global.browser.close();
});

setWorldConstructor(CustomWorld);