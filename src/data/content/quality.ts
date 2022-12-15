import cypressExample from "../../images/technologies/cypress-example.png";
import cypressFlow from "../../images/technologies/cypress-flow.png";
import SeleniumImg from "../../images/technologies/selenium-img.png";
import postmanExample from "../../images/technologies/postman_snapshot.png";
import postmanTesting from "../../images/technologies/postman_testing.png";
import seleniumWebdriver from "../../images/technologies/SeleniumWebDriverforAutomationTesting.png"

const techContent = [
  {
    technology: "Selenium",
    docsLink: "https://www.selenium.dev/selenium/docs/api/py/api.html",
    intro:
      "Selenium WebDriver is a web framework that permits you to execute cross-browser tests. Selenium is an umbrella project for a range of tools and libraries that enable and support the automation of web browsers.  ",
    content: [
      {
        name: "Selenium WebDriver Framework Architecture",
        intro: "WebDriver Architecture is made up of four major components:",
        data: [
          {
            name: "Selenium Client library",
            description:
              "Selenium supports multiple libraries such as Java, Python, Ruby, CSharp, JavaScript and Kotlin. Language bindings are developed in Selenium to support multiple languages. ",
          },
          {
            name: "JSON wire protocol over HTTP",
            description:
              "It is a REST API that acts as a mediator between client libraries and WebDrivers. It transfers data between client and server on the web over HTTP. ",
          },
          {
            name: "Browser Drivers",
            description:
              "Each browser contains its respective browser driver for example chrome driver, firefox (gecko) driver, safari driver etc.",
          },
          {
            name: "Browsers",
            description:
              "Selenium supports multiple browsers like chrome, firefox, safari, IE, Edge.",
          },
        ],
      },
      {
        name: "",
        intro: `<img width='100%' src="${seleniumWebdriver}" />`,
        data: [],
      },
      {
        name: "Basic Steps in a Selenium WebDriver Script",
        intro: "",
        data: [
          {
            name: "",
            description: "1. Create a WebDriver instance.",
          },
          {
            name: "",
            description: "2. Navigate to a webpage.",
          },
          {
            name: "",
            description: `3. Locate a web element on the webpage via <a href="https://www.selenium.dev/documentation/webdriver/elements/finders/">locators in selenium</a>. `,
          },
          {
            name: "",
            description: "4. Perform one or more user actions on the element. ",
          },
          {
            name: "",
            description:
              "5. Preload the expected output/browser response to the action.",
          },
          {
            name: "",
            description: "6. Run test.",
          },
          {
            name: "",
            description:
              "7. Record results and compare results from them to the expected output.",
          },
        ],
      },
      {
        name: "Benefits of Selenium WebDriver",
        intro: "",
        data: [
          {
            name: "",
            description: `<ul><li>It is one of the most popular Open-Source tools and is easy to get started with for testing web-based applications. It also allows you to perform <a href="https://www.selenium.dev/documentation/webdriver/getting_started/install_drivers/">cross browsers testing</a>.</li></ul> `,
          },
          {
            name: "",
            description:
              "<ul><li>Supports multiple operating systems like Windows, Mac, Linux, Unix, etc.</li></ul>",
          },
          {
            name: "",
            description: `<ul><li>It provides compatibility with a range of languages including Python, Java, JavaScript, Ruby, etc.</li></ul>`,
          },
          {
            name: "",
            description:
              "<ul><li>Provides support for modern browsers like Chrome, Firefox, Edge, Opera, Safari, and Internet Explorer.</li></ul>",
          },
          {
            name: "",
            description:
              "<ul><li>Selenium WebDriver completes the execution of test scripts faster when compared to other tools</li></ul>",
          },
          {
            name: "",
            description:
              "<ul><li>More Concise API (Application Programming interface) than Selenium RC’s</li></ul>",
          },
          {
            name: "",
            description:
              "<ul><li>It also provides compatibility with iPhoneDriver, HtmlUnitDriver, and AndroidDriver</li></ul>",
          },
        ],
      },
      {
        name: "",
        intro: "",
        data: [
          {
            name: "Web Element",
            description: `Selenium uses Web-Element which represents a DOM element to locate an element on the page. Web Elements can be found by searching from the document root using a WebDriver instance, or by searching under another Web Element. In order to write effective tests, one must be familiar with how to find the Web Elements which are based on different properties like ID, Name, Class, XPath, CSS Selectors, link Text, etc located on <a href="https://www.selenium.dev/documentation/webdriver/elements/">Web element.</a>`,
          },
        ],
      },
      {
        name: "",
        intro: "",
        data: [
          {
            name: "Locating Elements",
            description: `One of the most fundamental techniques to learn when using WebDriver is how to find elements on the page. For example, to locate element for a button on the Chrome browser is by moving your mouse above the button then right click and select inspect which will open the DOM and expose the details of web element to use when clicking on the button. For more details of how to Locate elements click on <a href="https://www.selenium.dev/documentation/webdriver/elements/finders/">Locating Elements.</a>`,
          },
        ],
      },
      {
        name: "",
        intro: "",
        data: [
          {
            name: "Browser Manipulation",
            description: `Selenium WebDriver enables you to perform various commands on the browser such as navigate to browser, get current page title, navigate forward and back, refresh page etc. For details of most of the commands you can use see <a href="https://www.selenium.dev/documentation/webdriver/elements/finders/">Browser Command.</a>`,
          },
        ],
      },
      {
        name: "",
        intro: "",
        data: [
          {
            name: "Page Object Models",
            description: `Selenium uses Page Object Design Pattern which has become popular in test automation for enhancing test maintenance and reducing code duplication. A page object is an object-oriented class that serves as an interface to a page of your application under test (AUT). The tests then use the methods of this page object class whenever they need to interact with the UI of that page. The benefit is that if the UI changes for the page, the tests themselves don’t need to change, only the code within the page object needs to change. Subsequently all changes to support that new UI are located in one place. For more details of how to write page object class clink on the link <a href="https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/">Page Object Design.</a>`,
          },
        ],
      },
      {
        name: "Wait commands in Selenium",
        intro:
          "Wait commands in Selenium enable the QAs to pause the execution of test cases for a specified length time. These commands help in observing and troubleshooting errors that may arise due to time variations or any lags. There are two types of wait: ",
        data: [
          {
            name: "Implicit wait",
            description: `This command instructs the WebDriver to wait for a specified time before throwing an exception. <ul><li>Refer to the command below:<br>driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);</li><li>It can be defined globally for the driver and it will be set for the life of the WebDriver object instance. The specified time is the maximum time, if the element appears before the max time, it will perform action. Disadvantage is that it may mask performance issues of the application. </li></ul>`,
          },
          {
            name: "Explicit wait commands",
            description: `These commands instruct the WebDriver to wait until a particular condition occurs before executing further scripts. <ul><li>WebDriverWait wait = new WebDriverWait(driver,30);</li><li>Explicit wait is used to target specific condition and wait until an expected condition is met - the expected condition can be visibility of an element, element to be clickable, frame to be visible etc. with the maximum time limit until which it will wait.</li></ul>`,
          },
          {
            name: "Fluent wait",
            description: `This is used to define maximum wait time for the driver and poll for the given frequency until the condition is met. It can be configured to ignore specific type of exceptions such as 'NoSuchElementException'.`,
          },
        ],
      },
      {
        name: "",
        intro: `To understand the in-depth implementation of how these commands operate in Selenium, refer to this detailed guide on <a href="https://www.selenium.dev/documentation/webdriver/waits/">wait commands in Selenium WebDriver.</a> `,
        data: [],
      },
      {
        name: "How to use Selenium WebDriver: Example",
        intro: `The code below automates the login function on a sample application (example: BrowserStack) Sign-in page in Chrome: `,
        data: [
          {
            name: "",
            description: ``,
          },
        ],
      },
      {
        name: "",
        intro: `<img width='100%' src=${SeleniumImg} />`,
        data: [],
      },
    ],
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
  {
    technology: "Postman",
    docsLink: "https://learning.postman.com/docs/getting-started/introduction/",
    intro:
      "Postman is an Application Programming Interface (API) testing tool. API acts like an interface between a couple of applications and establishes a connection between them. Postman was designed in the year 2012 by software developer and entrepreneur Abhinav Asthana to make API development and testing straightforward. It is a tool for testing the software of an API. It can be used to design, document, verify, create, and change APIs. Postman has the feature of sending and observing the Hypertext Transfer Protocol (HTTP) requests and responses. It has a graphical user interface (GUI) and can be used in platforms like Linux, Windows, and Mac. It can build multiple HTTP requests − POST, PUT, GET, PATCH, and translate them to code.",
    content: [
      {
        name: "Snapshot of Postman tool",
        intro: `<img width='100%' src=${postmanExample} /> `,
        data: [],
      },
      {
        name: "Postman Features",
        intro: "",
        data: [
          {
            name: "",
            description: "1. Making Requests.",
          },
          {
            name: "",
            description: "2. Testing APIs.",
          },
          {
            name: "",
            description: "3. Building and managing APIs.",
          },
          {
            name: "",
            description: "4. Publishing APIs. ",
          },
          {
            name: "",
            description: "5. Collaborating with your team.",
          },
          {
            name: "",
            description: "6. Developing with Postman.",
          },
          {
            name: "",
            description: "7. Postman flows.",
          },
        ],
      },
      {
        name: "Need of Postman",
        intro: "",
        data: [
          {
            name: "Accessibility",
            description:
              "To use Postman tool, one would just need to log-in to their own accounts making it easy to access files anytime, anywhere as long as a Postman application is installed on the computer.",
          },
          {
            name: "Use of Collections",
            description:
              "Postman lets users create collections for their Postman API calls. Each collection can create subfolders and multiple requests. This helps in organizing your test suites.",
          },
          {
            name: "Collaboration",
            description:
              "Collections and environments can be imported or exported making it easy to share files. A direct link can also be used to share collections.",
          },
          {
            name: "Creating Environments",
            description:
              "Having multiple environments aids in less repetition of tests as one can use the same collection but for a different environment. This is where parameterization will take place which we will discuss in further lessons.",
          },
          {
            name: "Creation of Tests",
            description:
              "Test checkpoints such as verifying for successful HTTP response status can be added to each Postman API calls which help ensure test coverage.",
          },
          {
            name: "Automation Testing",
            description:
              "Through the use of the Collection Runner or Newman, tests can be run in multiple iterations saving time for repetitive tests.",
          },
          {
            name: "Debugging",
            description:
              "Postman console helps to check what data has been retrieved making it easy to debug tests.",
          },
          {
            name: "Continuous Integration",
            description:
              "With its ability to support continuous integration, development practices are maintained.",
          },
        ],
      },
      {
        name: "How to use Postman to execute APIs",
        intro: `<img width='100%' src=${postmanTesting} /> `,
        data: [],
      },
      {
        name: "",
        intro: "",
        data: [
          {
            name: "1.	New",
            description:
              "This is where you will create a new request, collection, or environment.",
          },
          {
            name: "2.	Import",
            description:
              "This is used to import a collection or environment. There are options such as import from file, folder, link or paste raw text.",
          },
          {
            name: "3.	Runner",
            description:
              "Automation tests can be executed through the Collection Runner. This will be discussed further in the next lesson.",
          },
          {
            name: "4.	Open New",
            description:
              "Open a new tab, Postman Window or Runner Window by clicking this button.",
          },
          {
            name: "5.	My Workspace",
            description:
              "You can create a new workspace individually or as a team.",
          },
          {
            name: "6.	Invite",
            description: "Collaborate on a workspace by inviting team members.",
          },
          {
            name: "7.	History",
            description:
              "Past requests that you have sent will be displayed in History. This makes it easy to track actions that you have done.",
          },
          {
            name: "8.	Collections",
            description:
              "Organize your test suite by creating collections. Each collection may have subfolders and multiple requests. A request or folder can also be duplicated as well.",
          },
          {
            name: "9.	Request tab",
            description:
              "This displays the title of the request you are working on. By default, “Untitled Request” would be displayed for requests without titles.",
          },
          {
            name: "10.	HTTP Request",
            description:
              "Clicking this would display a dropdown list of different requests such as GET, POST, COPY, DELETE, etc. In Postman API testing, the most commonly used requests are GET and POST.",
          },
          {
            name: "11.	Request URL",
            description:
              "Also known as an endpoint, this is where you will identify the link to where the API will communicate with.",
          },
          {
            name: "12.	Save",
            description:
              "If there are changes to a request, clicking save is a must so that new changes will not be lost or overwritten.",
          },
          {
            name: "13.	Params",
            description:
              "This is where you will write parameters needed for a request such as key values.",
          },
          {
            name: "14.	Authorization",
            description:
              "In order to access APIs, proper authorization is needed. It may be in the form of a username and password, bearer token, etc.",
          },
          {
            name: "15.	Headers",
            description:
              "You can set headers such as content type JSON depending on the needs of the organization.",
          },
          {
            name: "16.	Body",
            description:
              "This is where one can customize details in a request commonly used in POST request.",
          },
          {
            name: "17.	Pre-request Script",
            description:
              "These are scripts that will be executed before the request. Usually, pre-request scripts for the setting environment are used to ensure that tests will be run in the correct environment.",
          },
          {
            name: "18.	Tests",
            description:
              "These are scripts executed during the request. It is important to have tests as it sets up checkpoints to verify if response status is ok, retrieved data is as expected and other tests.",
          },
        ],
      },
    ],
    examples: [],
    reference: [
      "https://www.tutorialspoint.com/postman/postman_introduction.htm ",
      "https://www.geeksforgeeks.org/introduction-postman-api-development/ ",
      "https://www.toolsqa.com/postman/postman-tutorial/ ",
    ],
  },
];
export default techContent;
