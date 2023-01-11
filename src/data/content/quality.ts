import cypressExample from "../../images/technologies/cypress-example.png";
import cypressFlow from "../../images/technologies/cypress-flow.png";
import SeleniumImg from "../../images/technologies/selenium-img.png";
import postmanExample from "../../images/technologies/postman_snapshot.png";
import postmanTesting from "../../images/technologies/postman_testing.png";
import gatlingExample1 from "../../images/technologies/gatling_example1.png";
import gatlingExample2 from "../../images/technologies/gatling_example2.png";
import gatlingExample3 from "../../images/technologies/gatling_example3.png";
import cucumberSteps from "../../images/technologies/cucumberSteps.png";
import cucumberSchema from "../../images/technologies/cucumberSchema.png";
import stepDef from "../../images/technologies/stepDef.png";
import restAssuredSample from "../../images/technologies/rest-assured-sample.png";
import appiumServerSample from "../../images/technologies/appium-server.png";

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
            description: `3. Locate a web element on the webpage via <a href="https://www.selenium.dev/documentation/webdriver/elements/finders/">locators in selenium</a>. `,
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
        intro: `To understand the in-depth implementation of how these commands operate in Selenium, refer to this detailed guide on <a href="https://www.selenium.dev/documentation/webdriver/waits/">wait commands in Selenium WebDriver.</a> `,
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
    intro:
      "Cucumber is an open-source tool written in Ruby language and developed to support Behaviour-Driven Development (BDD) software development process.",
    content: [
      {
        name: "Benefits of using Cucumber",
        intro:
          "One of the main benefits of using Cucumber and Gherkin is that it allows non-technical stakeholders to understand and participate in the development process. This is because Gherkin is a simple, natural language that is easy to read and write. <br/><br/>Another benefit is that Cucumber can be used to automate acceptance tests. This means that you can use Cucumber to specify the behaviour of your system in plain language, and then use those specifications to test the system automatically. This can save time and effort, as you don’t have to manually test the system every time you make a change.<br/><br/>Cucumber is also available for most mainstream programming languages.",
        data: [],
      },
      {
        name: "Gherkin",
        intro: `Gherkin is a language used to define tests in Cucumber. It makes plain text structured so Cucumber to understand it. Some benefits of Gherkin:<br/><br>•	Clear executable specification<br/><br/>•	Automated testing using Cucumber<br/><br/>•	Document how the system behaves  <br/><br/><img width='50%' src='${cucumberSchema}'/>`,
        data: [],
      },
      {
        name: "Cucumber Steps",
        intro: `Cucumber enables running automated acceptance tests, written in plain language. By reading executable specifications written in Gherkin Syntax, it validates that the software delivers the expected results as defined. Sample Cucumber step can be seen as below. <br/><br/><img width='100%' src='${cucumberSteps}'/>`,
        data: [],
      },
      {
        name: "Step Definitions",
        intro: `Step Definitions are the link between the programming code and Gherkin Steps. They execute the relevant action defined in the Step. So, step definitions hard-wire the specification to the implementation. Below is an example of step definition written in Java Script. <br/><br/><img width='100%' src='${stepDef}'/>`,
        data: [],
      },
    ],
    examples: [],
    reference: ["https://cucumber.io/docs/cucumber/"],
  },
  {
    technology: "Appium",
    docsLink: "https://appium.io/docs/en/about-appium/getting-started/",
    intro:
      'Appium is an open-source tool for automating native, mobile web, and hybrid applications on iOS mobile, Android mobile, and Windows desktop platforms. Native apps are those written using the iOS, Android, or Windows SDKs. Mobile web apps are web apps accessed using a mobile browser (Appium supports Safari on iOS and Chrome or the built-in \'Browser\' app on Android). Hybrid apps have a wrapper around a "webview" -- a native control that enables interaction with web content. Projects like Apache Cordova make it easy to build apps using web technologies that are then bundled into a native wrapper, creating a hybrid app.<br /><br /> Importantly, Appium is "cross-platform": it allows you to write tests against multiple platforms (iOS, Android, Windows), using the same API. This enables code reuse between iOS, Android, and Windows testsuites.',
    content: [
      {
        name: "Appium Philosophy",
        intro:
          "Appium was designed to meet mobile automation needs according to a philosophy outlined by the following four tenets: <br /><ol><li>You shouldn't have to recompile your app or modify it in any way in order to automate it.</li><li>You shouldn't be locked into a specific language or framework to write and run your tests.</li><li>A mobile automation framework shouldn't reinvent the wheel when it comes to automation APIs.</li><li>A mobile automation framework should be open source, in spirit and practice as well as in name!</li></ol>",
        data: [],
      },
      {
        name: "Concepts",
        intro: "",
        data: [
          {
            name: "Client/Server Architecture",
            description:
              "Appium is at its heart a webserver that exposes a REST API. It receives connections from a client, listens for commands, executes those commands on a mobile device, and responds with an HTTP response representing the result of the command execution. The fact that we have a client/server architecture opens up a lot of possibilities: we can write our test code in any language that has a http client API, but it is easier to use one of the Appium client libraries. We can put the server on a different machine than our tests are running on. We can write test code and rely on cloud services to receive and interpret the commands.",
          },
          {
            name: "Session",
            description:
              "Automation is always performed in the context of a session. Clients initiate a session with a server in ways specific to each library, but they all end up sending a POST /session request to the server, with a JSON object called the 'desired capabilities' object. At this point the server will start up the automation session and respond with a session ID which is used for sending further commands.",
          },
          {
            name: "Desired Capabilities",
            description:
              "Desired capabilities are a set of keys and values (i.e., a map or hash) sent to the Appium server to tell the server what kind of automation session we're interested in starting up. There are also various capabilities which can modify the behavior of the server during automation. For example, we might set the platformName capability to iOS to tell Appium that we want an iOS session, rather than an Android or Windows one. Or we might set the safariAllowPopups capability to true in order to ensure that, during a Safari automation session, we're allowed to use JavaScript to open up new windows.",
          },
          {
            name: "Appium Server",
            description: `Appium is a server written in Node.js. It can be built and installed from source or installed directly from NPM: <br /><img src=${appiumServerSample} width='100%' />`,
          },
          {
            name: "Appium Clients",
            description:
              "There are client libraries (in Java, Ruby, Python, PHP, JavaScript, and C#) which support Appium's extensions to the WebDriver protocol. When using Appium, you want to use these client libraries instead of your regular WebDriver client.",
          },
          {
            name: "Appium Desktop",
            description:
              "There is a GUI wrapper around the Appium server that can be downloaded for any platform. It comes bundled with everything required to run the Appium server, so you don't need to worry about Node. It also comes with an Inspector, which enables you to check out the hierarchy of your app. This can come in handy when writing tests.",
          },
        ],
      },
      {
        name: "Advantages of using Appium",
        intro:
          "<ol><li>Using the same API, Appium will allow you to write tests that are against mobile platforms.</li><li>By using any kind of test frame work or language you can write and run the tests.</li><li>Appium is an open source platform so you can contribute to it easily.</li><li>For the hybrid mobile applications and Native, Appium provides cross platform.</li><li>Appium supports JSON wire protocol.</li><li>Appium do not require recompilation of App.</li><li>Appium also supports automation test on the physical devices and also for simulator or emulator both.</li><li>Appium does not have any dependency on mobile devices.</li></ol>",
        data: [],
      },
    ],
    examples: [],
    reference: ["https://appium.io/"],
  },
  {
    technology: "REST Assured",
    docsLink: "https://github.com/rest-assured/rest-assured/wiki/Usage",
    intro:
      "REST Assured is a Java DSL for simplifying testing of REST based services built on top of HTTP Builder. It was designed to simplify the testing and validation of REST APIs and is highly influenced by testing techniques used in dynamic languages such as Ruby and Groovy. The library has solid support for HTTP, starting of course with the verbs and standard HTTP operations, but also going well beyond these basics.",
    content: [
      {
        name: "Why need Rest-Assured?",
        intro:
          "Imagine you open your google map view and look for a place you want to go, you immediately see closeby restaurants, you see options for the commute; from some leading travel providers, and see so many options at your fingertips. We all know they are not google products, then how does Google manage to show it. They use the exposed APIs of these providers. Now, if you are asked to test this kind of setup, even before the UI is built or is under development, testing APIs becomes extremely important and testing them repeatedly, with different data combinations makes it a very suitable case for automation.",
        data: [],
      },
      {
        name: "Syntax",
        intro: `<img width='100%' src=${restAssuredSample}>`,
        data: [
          {
            name: "Given()",
            description:
              "'Given' keyword, lets you set a background, here, you pass the request headers, query and path param, body, cookies. This is optional if these items are not needed in the request",
          },
          {
            name: "When()",
            description:
              "'When' keyword marks the premise of your scenario. For example, 'when' you get/post/put something, do something else.",
          },
          {
            name: "Method()",
            description:
              "Substitute this with any of the CRUD operations(get/post/put/delete)",
          },
          {
            name: "Then()",
            description: "Your assert and matcher conditions go here",
          },
        ],
      },
      {
        name: "Best Practices",
        intro: "",
        data: [
          {
            name: "Validate the response for every key",
            description:
              "The best practice is to validate the response for every key you get in JSON along with the correct STATUS code. If the entire response is as per the expected data, then everything should be working fine.",
          },
          {
            name: "Write Clean Test Code",
            description:
              "The test code written for the API requests should be clean i.e. it should follow the proper coding standards like giving proper variable names, parameter passing, etc.",
          },
          {
            name: "Create Reusable Methods",
            description:
              "Create a Request Specification to reuse request configurations (base URL, parameters, content type, debugging logging) that you want to use for all requests.",
          },
          {
            name: "Use POJOs and Object Mapping",
            description:
              "90% of the time the data is sent in a form of JSON Object, so the best approach is to follow the concept of POJO classes and then send it to the request body.",
          },
          {
            name: "Use JSONPath for Simple Cases",
            description:
              "If you are only interested in a single value of a JSON response, creating a POJO class for mapping is a little bit overkill. In this case, JSONPath can be used to extract certain values out of a JSON document. JSONPath is like XPath for JSON.",
          },
        ],
      },
      {
        name: "Advantages of Rest Assured",
        intro: "",
        data: [
          {
            name: "Easy to use",
            description:
              "It supports a Given/When/Then test notation, which instantly makes your test's human-readable.",
          },
          {
            name: "Easy integration with TestNG/Junit",
            description: "Easy to integrate with JUnit and TestNG frameworks.",
          },
          {
            name: "Code Reusability",
            description:
              "As it is a Java client, it supports the ability to reuse the code for a new function.",
          },
          {
            name: "Support Data-Driven framework",
            description:
              "It supports the Data-Driven framework for separating the “data set” from the actual “test case” (code). The test data is fed from external sources such as an excel file, JSON file, etc.",
          },
          {
            name: "CI/CD integration",
            description:
              "We can easily integrate with other tools like Maven, Jenkins GitHub to provide Continuous Integration and Continuous Deployment functionality.",
          },
          {
            name: "Customize Reports",
            description:
              "Can be used with any customized/open-source reporting tool.",
          },
        ],
      },
    ],
    examples: [],
    reference: [
      "https://rest-assured.io/",
      "https://www.guru99.com/rest-assured.html",
      "https://medium.com/@assaini007/api-testing-using-rest-assured-56d21d8be762",
    ],
  },
  {
    technology: "BrowserStack",
    docsLink: "https://www.browserstack.com/docs/",
    intro:
      "BrowserStack is a testing platform that provides instant access to 2,000+ real mobile devices and browsers on a highly reliable cloud infrastructure.  Using this tool, developers and testers can do the cross-browser testing of various web and mobile applications in different web browsers. It is the world's leading software testing platform powering over two million tests every day across 15 global data centers. It can scale as testing needs grow.",
    content: [
      {
        name: "What Is Cross Browser Testing?",
        intro:
          "Cross-browser testing is functional testing. We perform this testing to check if the application is working as expected or not in different web browsers for the different operating systems. Here, we can run the test cases manually or by doing automation by specifying the various browsers in the automation scripts.",
        data: [],
      },
      {
        name: "Why BrowserStack?",
        intro:
          "In real-time, it is difficult to test an application in different browsers using multiple operating systems, with varying versions. It will cost a lot to buy many computer machines to install different operating systems. It is even more difficult to buy all the android and iOS mobile devices that are available in the market today. Due to this reason, it is not practical to buy and set up all the devices. Thus, we go with the BrowserStack to avoid the complexity of switching between the operating systems, browsers, and different versions.<br/><br/>When it comes to mobile application testing, we can avoid buying all the mobile devices that are available today. Browser Stack is very flexible and scalable. We can test anywhere and anytime with the help of Browser Stack.<br/><br/>We can use Browser Stack as a remote lab and can use this as Real Desktop Browsers. It gives us free Javascript unit tests and supports 750 configurations. There is no set up required for using Browser Stack. We can use it directly on any independent machine by using the Browser Stack URL and its login credentials.",
        data: [],
      },
      {
        name: "Advantages Of BrowserStack Testing",
        intro:
          "<ol><li>We can test all the major browsers from a single control point.</li><li>We can test the compatibility of the backward/older version of the browsers.</li><li>It supports both Manual and Automation testing.</li><li>We can test all the devices and browsers that are currently available in the market.</li><li>We can test the application in different resolutions.</li></ol>",
        data: [],
      },
    ],
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
    intro:
      "WireMock is an HTTP mock server. At its core it is web server that can be primed to serve canned responses to particular requests (stubbing) and that captures incoming requests so that they can be checked later (verification).<br/><br/>It also has an assortment of other useful features including record/playback of interactions with other APIs, injection of faults and delays, simulation of stateful behaviour.<br/><br/>It can be used as a library by any JVM application, or run as a standalone process either on the same host as the system under test or a remote server.<br/><br/>All of WireMock's features are accessible via its REST (JSON) interface and its Java API. Additionally, stubs can be configured via JSON files.",
    content: [
      {
        name: "Why Should We Use WireMock?",
        intro:
          "WireMock has -lista rich matching system, allowing any part of an incoming request to be matched against complex and precise criteria. Responses of any complexity can be dynamically generated via the Handlebars based templating system. Finally, WireMock is easy to integrate into any workflow due to its numerous extension points and comprehensive APIs.",
        data: [],
      },
      {
        name: "When Should We Use WireMock?",
        intro: "There are three situations when we should use WireMock:",
        data: [
          {
            name: "Implement a feature which uses an HTTP API that is not ready",
            description:
              "This is a quite common situation if we are doing greenfield development and we have to integrate our application with other systems (either internal or external) which aren't written by us. Also, if we are using the microservices architecture, the odds are that we will run into similar situations.",
          },
          {
            name: "Write unit tests for classes which use HTTP APIs",
            description:
              "If we are writing unit tests for a class called A which uses another class called B that uses an HTTP API, the first thing that might come to our mind is to replace the B with a mock object when we are writing unit tests for the A class.<br/><br/>This is a good choice if the API client (B class) is provided by someone else because we can assume that the author of the client has ensured that it is working correctly. However, if the API client is written by us, using a mock object isn't a good choice because it doesn't allow us to verify that our code can communicate with the HTTP API.",
          },
          {
            name: "Write integration, API, or end-to-end tests for features which use external HTTP APIs",
            description:
              "When we write these kinds of tests, we don't want to invoke external HTTP APIs because if our tests invoke an external HTTP API:<ul><li>Our tests depend from the external HTTP API. Naturally, this means that our tests will fail if the external HTTP API is down. Also, it's very common that the external HTTP API doesn't allow us to initialize it into a known state before our tests are run. That's why we cannot write tests which use the data returned by the external HTTP API because we cannot know what kind of data will be returned.</li><li>Our tests are slower than they could be. The thing is that waiting a response from an external HTTP API takes a lot longer than getting the same response from WireMock. To make matters worse, we cannot use a short timeout because otherwise our tests could fail only because the timeout was too short and it was exceeded.</li><li>We cannot run our tests if we don't have a network connection. This is problem because there are places where we don't necessarily have a good network connection (like a train). Also, some APIs block requests which don't come from a \"known\" IP address. This means that having a working network connection might not good enough. We have to also be connected to the correct network.</li></ul>",
          },
        ],
      },
    ],
    examples: [],
    reference: [
      "http://wiremock.org/",
      "https://www.petrikainulainen.net/programming/testing/wiremock-tutorial-introduction",
    ],
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
    intro:
      "The Apache JMeter&trade; application is open source software, a 100% pure Java application designed to load test functional behavior and measure performance. You can use JMeter to analyze and measure the performance of web application or a variety of services. Performance Testing means testing a web application against heavy load, multiple and concurrent user traffic. JMeter originally is used for testing Web Application. Nowadays, it is expanded to other test functions like functional test, database server test.",
    content: [
      {
        name: "",
        intro: "",
        data: [
          {
            name: "Advantages of JMeter",
            description:
              "<ul><li>Open source license -  JMeter is totally free, allows developer use the source code for the development</li><li>Friendly GUI -  JMeter is extremely easy to use and doesn't take time to get familiar with it</li><li>Platform independent -  JMeter is 100% pure Java desktop application. So it can run on multiple platforms</li><li>Full multithreading framework. JMeter allows concurrent and simultaneous sampling of different functions by a separate thread group</li><li>Visualize Test Result -  Test result can be displayed in a different format such as chart, table, tree and log file</li><li>Easy installation -  You just copy and run the *.bat file to run JMeter. No installation needed.</li><li>Highly Extensible -  You can write your own tests. JMeter also supports visualization plugins allow you to extend your testing</li><li>Multiple testing strategy -  JMeter supports many testing strategies such as Load Testing, Distributed Testing, and Functional Testing.</li><li>Simulation -  JMeter can simulate multiple users with concurrent threads, create a heavy load against web application under test</li><li>Support multi-protocol -  JMeter does not only support web application testing but also evaluate database server performance. All basic protocols such as HTTP, JDBC, LDAP, SOAP, JMS, and FTP are supported by JMeter</li><li>Record & Playback - Record the user activity on the browser and simulate them in a web application using JMeter</li><li>Script Test -  Jmeter can be integrated with Bean Shell & Selenium for automated testing.</li></ul>",
          },
        ],
      },
      {
        name: "Components",
        intro: "",
        data: [
          {
            name: "Thread Groups",
            description:
              "A Thread Group defines a pool of users that will execute a particular test case against your server. In the Thread Group GUI, you can control the number of users simulated (number of threads), the ramp up time (how long it takes to start all the threads), the number of times to perform the test, and optionally, a start and stop time for the test.",
          },
          {
            name: "Samplers",
            description:
              "Samplers perform the actual work of JMeter. Each sampler (except Flow Control Action) generates one or more sample results. The sample results have various attributes (success/fail, elapsed time, data size etc.) and can be viewed in the various listeners.",
          },
          {
            name: "Timers",
            description:
              "When users click on your website or app, they naturally have pauses and delays. These can be simulated with different kinds of Timer, including Constant Timer, Gaussian Random Timer, Uniform Random Timer, Constant Throughput Timer, Precise Throughput Timer, Synchronizing Timer, BeanShell Timer, JSR223 Timer and Poisson Random Timer.",
          },
          {
            name: "Listeners",
            description:
              'Most of the listeners perform several roles in addition to "listening" to the test results. They also provide means to view, save, and read saved test results.<br/><br/>The saving and reading of test results is generic. The various listeners have a panel whereby one can specify the file to which the results will be written (or read from). By default, the results are stored as XML files. Storing as CSV is the most efficient option, but is less detailed than XML (the other available option).',
          },
          {
            name: "Logic Controllers",
            description:
              "Logic Controllers determine the order in which Samplers are processed.",
          },
          {
            name: "Assertions",
            description:
              "Assertions are used to perform additional checks on samplers, and are processed after every sampler in the same scope. To ensure that an Assertion is applied only to a particular sampler, add it as a child of the sampler. Assertions can be applied to either the main sample, the sub-samples or both. The default is to apply the assertion to the main sample only. ",
          },
          {
            name: "Pre Processors",
            description:
              "Preprocessors are used to modify the Samplers in their scope.",
          },
          {
            name: "Post-Processors",
            description:
              "As the name suggests, Post-Processors are applied after samplers. Note that they are applied to all the samplers in the same scope, so to ensure that a post-processor is applied only to a particular sampler, add it as a child of the sampler. Post-Processors are run before Assertions, so they do not have access to any Assertion Results, nor will the sample status reflect the results of any Assertions. If you require access to Assertion Results, try using a Listener instead.",
          },
        ],
      },
    ],
    examples: [],
    reference: ["https://jmeter.apache.org/"],
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
              "Cypress automatically waits for commands and assertions without ever adding waits or sleeps to your tests. No more async issues. ",
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
            description: "Readable error messages help you to debug quickly.",
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
    intro:
      "Gatling is the ultimate open-source load testing tool for programmers. Though focused on Web applications, it can be used to analyse and measure the performance of a variety of services. As it is Scala based, it generates reports in the form of pretty graphs, from which the results can be analysed. It is backed by Scala, Akka and Netty. It works asynchronously if the underlying HTTP request is non-blocking. It uses messages for virtual user simulation rather than a thread per virtual user.<br/><br/>Key features of gatling:<br/><ul><li>Open Source</li><li>Incline to write Code-Based Testing Framework</li><li>Geared towards DevOps and pluggable to CI easily</li><li>Runs as a Java Application</li><li>Pretty HTML based report out of box</li></ul>",
    content: [
      {
        name: "Key Concepts",
        intro: "",
        data: [
          {
            name: "Virtual User",
            description:
              "Advanced load testing tools such as Gatling can deal with virtual users, each one having its own data and maybe taking a distinct browsing path. Some other tools implement those virtual users as threads. Gatling implements them as messages, which scales much better and can deal easily with thousands of concurrent users.",
          },
          {
            name: "Scenario",
            description:
              "A scenario represents a typical user behaviour. It's a workflow that virtual users will follow. Scenarios are represented as scripts in conjunction with a DSL (Domain Specific Language). This allows fast writing of scenarios and easy maintenance of existing scenarios. <br/><br/>",
          },
          {
            name: "Pause",
            description:
              "Pauses are used to simulate user think time. When a real user clicks on a link, the page has to be loaded in their browser and they will, most likely, read it and then decide what to do next.",
          },
          {
            name: "Simulation",
            description:
              "A simulation is a description of the load test. It describes how, possibly several, user populations will run: which scenario they will execute and how new virtual users will be injected.<br/><br/>",
          },
          {
            name: "Session",
            description:
              "Each virtual user is backed by a Session. Those Sessions are the actual messages that go down the scenario workflow. A Session is basically a state placeholder, where testers can inject or capture and store data.",
          },
          {
            name: "Feeders",
            description:
              "Feeders are a convenient API for testers to inject data from an external source into the virtual users' sessions.When the tested application offers the possibility to authenticate, tests should take this into consideration and use data to test log in, log out, actions allowed only for certain users, and so on.",
          },
          {
            name: "Checks",
            description:
              "Each time a request is sent to the server, a response is normally sent, by the server, back to Gatling. Gatling is able to analyses this response with Checks.<br/><br/>A check is a response processor that captures some part of it and verifies that it meets some given condition(s). For example, when sending an HTTP request, you could expect a HTTP redirect; with a check, you can verify that the status of the response is actually a 30x code.<br/><br/>Checks can also be used to capture some elements and store them into the Session so that they can be reused later, for example to build the next request. ",
          },
          {
            name: "Assertions",
            description:
              "Assertions are used to define acceptance criteria on Gatling statistics (e.g., 99th percentile response time) that would make Gatling fail and return an error status code for the test as a whole.",
          },
          {
            name: "Reports",
            description:
              "By default, reports are automatically generated at the end of a simulation. They consist of HTML files. Therefore, they are portable, and they can be viewed on any device with a web browser.",
          },
        ],
      },
      {
        name: "Key Benefits",
        intro:
          "<ul><li>Engine based on Akka and uses asynchronous computer. Reducing performance hit of having many users on a single thread. </li><li>Encourage engineers to create load tests as code / script unlike using recording or UI options which makes it light weight and easily pluggable  </li><li>Gatling supports powerful architecture. It uses advanced architecture and the Akka toolkit, which is based on the actor model that is distributed and fully asynchronous by design. Due to Akka toolkit, Gatling doesn't allocate a separate thread for each user. Instead, all multi-threading is done via messages between actors (universal primitives of concurrent computation), which allow to simulate a list of users by using just one thread. </li><li>Gatling supports human readable code which can be read or reviewed by anyone in the team say Scrum Master or Product Owners also. Gatling defines a domain-specific language that allows writing very clear and human readable tests </li><li>Gatling has Built-in Integration with Continuous Integration Pipelines</li></ul>",
        data: [],
      },
      {
        name: "Deep Look at simulation - main construct for Code in Gatling",
        intro: "",
        data: [
          {
            name: "The HTTP protocol configuration",
            description:
              "The first element is the configuration of the HTTP protocol. In this example, this configuration is very basic and just defines:<br/><ul><li>the baseUrl, which will be prepended to all the relative paths in the scenario definition. Here, the base URL is http://computer-database.gatling.io.</li><li>common headers, which will be added on each request.</li></ul>",
          },
          {
            name: "The headers definition",
            description: `Gatling lets you set some generic headers at the http protocol definition level with:<br/><ul><li><i>header(name: String, value: Expression[String])</i>: set a single header.</li><li><i>headers(headers: Map[String, String])</i>: set a bunch of headers.</li></ul>Also, Headers are declared as Scala Maps: <br /><img width='100%' src=${gatlingExample1} />`,
          },
          {
            name: "The scenario definition",
            description:
              'After the headers definition comes the scenario definition. This definition has a name because you can define several scenarios in the same simulation. A scenario is usually stored in a Scala value: <br /><br /><i>val scn = scenario("ScenarioName")</i><br /><br />The scenario structure basically consists of chaining two methods: exec and pause. The first one is used to describe an action, usually a request sent to the tested application; the second one is used to simulate the think time of the user between consecutive requests.',
          },
          {
            name: "The simulation definition",
            description: `The last part of the file contains the simulation definition, this is where you define the load you want to inject to your server, e.g.:<br /><img width='100%' src=${gatlingExample2} /> <br />which correspond to: <br /> <ol><li>We inject one single user into the scn scenario</li><li>We configure httpProtocol on the setUp so that we pass the base URL and the common headers.</li></ol>`,
          },
          {
            name: "Hooks",
            description:
              "Gatling provides two hooks: <br /><ul><li>before for executing some arbitrary code before the simulation actually runs </li><li>after for executing some arbitrary code after the simulation actually runs </li></ul>",
          },
          {
            name: "Sample Simulation Construct",
            description: `<img width='100%' src=${gatlingExample3} />`,
          },
        ],
      },
    ],
    examples: [],
    reference: ["https://gatling.io/"],
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
