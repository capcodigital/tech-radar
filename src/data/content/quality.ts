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
    intro: "Content coming soon.",
    content: [],
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
    examples: [
      {
        name: "Cypress Example",
        imageUrl: "../../images/technologies/cypress-example.png",
        description: "",
      },
      {
        name: "Cypress Flow",
        imageUrl: "../../images/technologies/cypress-flow.png",
        description: "",
      },
    ],
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
