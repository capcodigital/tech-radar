import cypressExample from "../../images/technologies/cypress-example.png";
import cypressFlow from "../../images/technologies/cypress-flow.png";

const techContent = [
  {
    technology: "Selenium",
    docsLink: "https://www.selenium.dev/selenium/docs/api/py/api.html",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
  },
  {
    technology: "Cucumber",
    docsLink: "https://cucumber.io/docs/cucumber/",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
  },
  {
    technology: "Appium",
    docsLink: "https://appium.io/docs/en/about-appium/api/",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
  },
  {
    technology: "REST Assured",
    docsLink: "https://rest-assured.io/",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
  },
  {
    technology: "BrowserStack",
    docsLink: "https://www.browserstack.com/docs/",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
  },
  {
    technology: "Sauce Labs",
    docsLink: "https://docs.saucelabs.com/",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
  },
  {
    technology: "Wiremock",
    docsLink: "http://wiremock.org/docs/",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
  },
  {
    technology: "Applitools",
    docsLink: "https://applitools.com/docs/",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
  },
  {
    technology: "JMeter",
    docsLink: "https://jmeter.apache.org/usermanual/index.html",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
  },
  {
    technology: "Axe",
    docsLink: "https://www.deque.com/axe/core-documentation/",
    intro:
      "Axe is an open source leading digital accessibility testing toolkit for websites, iOS and Android web app and other HTML-based user interfaces. It is fast, secure, lightweight, and was built to seamlessly integrate with any existing test environment so you can automate accessibility testing alongside your regular functional testing. ",
    content: [
      {
        name: "",
        intro: "",
        data: [
          {
            name: "Facts About Axe",
            description:
              "<ul><li>Axe is open source.</li><li>It returns zero false positives (bugs notwithstanding).</li><li>It is designed to work on all modern browsers and with whatever tools, frameworks, libraries and environments you use today.</li><li>It integrates with your existing functional/acceptance automated tests.</li><li>It automatically determines which rules to run based on the evaluation context.</li><li>Axe supports in-memory fixtures, static fixtures, integration tests and iframes of infinite depth.</li><li>Axe is highly configurable.</li></ul>",
          },
        ],
      },
      {
        name: "Supported Browsers",
        intro: "The axe-core API fully supports the following browsers: ",
        data: [
          {
            name: "Browsers",
            description:
              "<ul><li>Microsoft Edge v40 and above</li><li>Google Chrome v42 and above</li><li>Mozilla Firefox v38 and above</li><li>Apple Safari v7 and above</li><li>Internet Explorer v11</li></ul>",
          },
        ],
      },
      {
        name: "Contents of the API Package",
        intro: "The axe-core API package consists of: ",
        data: [
          {
            name: "API Package",
            description:
              "<ul><li>axe.js - the JavaScript file that should be included in your web site under test (API)</li><li>axe.min.js - a minified version of the above file</li></ul>",
          },
        ],
      },
      {
        name: "The Accessibility Rules ",
        intro: "",
        data: [
          {
            name: "",
            description: `Axe-core has different types of rules, for WCAG 2.0 and 2.1 on level A and AA, as well as a number of best practices that help you identify common accessibility practices like ensuring every page has an h1 heading, and to help you avoid "gotchas" in ARIA like where an ARIA attribute you used will get ignored.<br><br> With axe-core, you can find on average 57% of WCAG issues automatically. Additionally, axe-core will return elements as "incomplete" where axe-core could not be certain, and manual review is needed.<br><br> To catch bugs earlier in the development cycle it is recommended using the axe-linter vscode extension.<br><br> To improve test coverage even further we recommend the intelligent guided tests in the axe Extension. The complete list of rules, grouped WCAG level and best practice, can found in doc/rule-descriptions.md. For more info about these rules please see <a href="https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md ">https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md</a>  `,
          },
        ],
      },
      {
        name: "Automation Testing",
        intro:
          "The first purpose of testing is to prevent bugs from releasing to production. Testing ensures the features are functioning correctly for complex components and modular applications and is required for the effective performance of a software application or product making it more robust and less prone to error. Axe-core Integrations can be used with all modern testing frameworks as listed below. ",
        data: [
          {
            name: "Selenium Webdriver",
            description: `Selenium is an open-source testing framework. It comes with built-in libraries for web and mobile app testing. Axe core can be integrated with selenium test written with Java, Python, and Ruby. Example selenium implementation can be found here:<br><br><a href="https://github.com/dequelabs/axe-core-maven-html/tree/develop">https://github.com/dequelabs/axe-core-maven-html/tree/develop/</a>`,
          },
          {
            name: "Jasmine",
            description: `Jasmine is an open-source unit testing framework for JavaScript. Axe can be integrated with Jasmin unit test framework. The example can be found here:<br><br><a href="https://github.com/dequelabs/axe-core/tree/develop/doc/examples/jasmine">https://github.com/dequelabs/axe-core/tree/develop/doc/examples/jasmine</a>`,
          },
          {
            name: "Mocha",
            description: `Mocha is a JavaScript unit test framework for Node.js programs, featuring browser support, asynchronous testing, test coverage reports, and use of any assertion library. Axe can be integrated with the Mocha unit testing framework. The example on how to integrate with mocha can be found here:<br><br><a href="https://github.com/dequelabs/axe-core/tree/develop/doc/examples/mocha">https://github.com/dequelabs/axe-core/tree/develop/doc/examples/mocha</a>`,
          },
          {
            name: "Cucumber Ruby",
            description: `Automated accessibility testing using ruby can be integrated with axe. More details can be found here in the ruby example: <br><br><a href="https://github.com/dequelabs/axe-core-gems">https://github.com/dequelabs/axe-core-gems</a>`,
          },
          {
            name: "QUnit Testing Framework",
            description: `This example demonstrates how to use axe with the QUnit unit testing framework<br><br><a href="https://github.com/dequelabs/axe-core/tree/develop/doc/examples/qunit">https://github.com/dequelabs/axe-core/tree/develop/doc/examples/qunit </a>`,
          },
        ],
      },
      {
        name: "Use Cases",
        intro: "",
        data: [
          {
            name: "Quality Engineering Framework Tech Test",
            description: `An example of axe core library integration with Java Gradle Selenium Project which demonstrates the ability to use automation test for accessibility testing of online booking website can be found in repo <a href="https://github.com/camg-capco/tech-test">https://github.com/camg-capco/tech-test</a> Please request access if you want to see the detail as it not yet made public. `,
          },
        ],
      },
    ],
    examples: [],
    reference: [],
  },
  {
    technology: "Cypress",
    docsLink: "https://docs.cypress.io/",
    intro:
      "Cypress is the front-end testing tool built for the modern web. It addresses the key pain points developers and QA engineers face when testing modern applications. Cypress is free, open-source, locally installed Test Runner, and Dashboard Service for recording your tests.  ",
    content: [
      {
        name: "Users of Cypress",
        intro:
          "Cypress users are developers building web applications using modern JavaScript frameworks and QA Engineers testing the applications developed in React.js, Angular.js, Node.js, Vue.js, and other front-end technologies. ",
        data: [],
      },
      {
        name: "Types of Cypress tests",
        intro:
          "Cypress enables Developers or QAs to write all types of tests. ",
        data: [
          {
            name: "Testing Types",
            description: "End-to-end tests, Integration tests, Unit tests",
          },
        ],
      },
      {
        name: "How is Cypress unique from other automation tools? ",
        intro: "",
        data: [
          {
            name: "Automatic Waiting",
            description:
              "Cypress automatically waits for commands and assertions without ever adding waits or sleeps to your tests. No more async issues. ",
          },
          {
            name: "Mocking",
            description:
              "By mocking the server response, Cypress has the ability to test edge cases.",
          },
          {
            name: "Native Code Access",
            description:
              "Cypress operates within the application. That means, test code can access all the objects that application code can.",
          },
          {
            name: "Time Travel",
            description:
              "Cypress takes snapshots as your tests run, allowing users to go back and forth in time during test scenarios.",
          },
          {
            name: "Spies, Stubs, and Clocks",
            description:
              "It can verify and control the behaviour of functions, server responses, or timers.",
          },
          {
            name: "Real Time Reloads",
            description:
              "It automatically reloads whenever you make changes to your tests.",
          },
          {
            name: "Network Traffic Control",
            description:
              "Easily control, stub, and test edge cases without involving your server.",
          },
          {
            name: "Screenshots and Videos",
            description:
              "View screenshots taken automatically on failure, or videos of your entire test suite when it has run smoothly.Easily control, stub, and test edge cases without involving your server.",
          },
          {
            name: "Debuggability",
            description: "Readable error messages help you to debug quickly.",
          },
          {
            name: "API testing",
            description:
              "API tests and UI tests can be combined, you can send HTTP requests directly, yet have those requests synchronized with the browser. Cookies are automatically sent and applied back",
          },
          {
            name: "Flake resistant",
            description: "",
          },
          {
            name: "All-in-one framework",
            description:
              "All-in-one testing framework, assertion library, with mocking and stubbing, all without Selenium.",
          },
        ],
      },
      {
        name: "",
        intro: `<img width='100%' src=${cypressExample} /> `,
        data: [],
      },
      {
        name: "",
        intro: `<img width='100%' src=${cypressFlow} /> `,
        data: [],
      },
      {
        name: "Cypress Architecture ",
        intro:
          "Most testing tools (like Selenium) operate by running outside of the browser and executing remote commands across the network. But Cypress engine directly operates inside the browser. In other words, it is the browser that is executing your test code. </br></br>This enables Cypress to listen and modify the browser behaviour at run time by manipulating DOM and altering Network requests and responses on the fly. ",
        data: [],
      },
      {
        name: "Cypress Browser Support",
        intro: "",
        data: [
          {
            name: "Browsers",
            description: "Chrome, Electron, Edge, Brave, Firefox",
          },
        ],
      },
      {
        name: "REST API Testing Using Cypress",
        intro:
          "It's important to test APIs along with E2E UI tests, and it can also be helpful to stabilize APIs and prepare data to interact with third-party servers. Cypress provides the functionality to make an HTTP request. </br></br>Using Cypress’s cy.request() method, we can validate GET, POST, PUT, and DELETE API Endpoints. ",
        data: [],
      },
      {
        name: "Mocking API request and Response",
        intro:
          "Cypress can Spy and stub network requests and responses using cy.intercept() methods.",
        data: [],
      },
    ],
    examples: [],
    reference: [],
  },
  {
    technology: "Gatling",
    docsLink: "https://gatling.io/docs/",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
  },
  {
    technology: "PACT",
    docsLink: "https://docs.pact.io/",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
  },
];
export default techContent;
