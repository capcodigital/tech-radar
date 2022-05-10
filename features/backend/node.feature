Feature: Node content page

Background: Navigate to the home page
    Given the user navigates to "http://localhost:3000/"

Scenario: Node content appears as expected
    When the user clicks "View Our Tech Radar"
    And the user clicks the hamburger menu
    And the user navigates to "Backend" via the hamburger menu
    And the user navigates to category "Node"
    And the user should see "Node.js is an asynchronous event-driven JavaScript runtime, designed to build scalable network applications. Many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep."
    And the user should see "Users of Node.js are free from the worries of dead-locking the process since there are no locks, unlike in a multi-threaded system. Almost no function in Node.js directly performs I/O, so the process never blocks. Because nothing blocks, systems developed in Node.js are easy to scale. Node.js is similar in design to, and influenced by, systems like Ruby's Event Machine and Python's Twisted. Node.js takes the event model a bit further. It presents an event loop as a runtime construct instead of as a library. In other systems, there is always a blocking call to start the event-loop. In Node.js, there is no such start-the-event-loop call. Node.js simply enters the event loop after executing an input script. Node.js exits the event loop when there are no more callbacks to perform. This behaviour is like JavaScript in the browser — the event loop is hidden from the user. HTTP is a first-class citizen in Node.js, designed with streaming and low latency in mind. This makes Node.js well suited for creating a web library or framework."
    And the user should see "Even though it has been designed without threads, Node.js can still take advantage of multiple cores in your environment. Child processes can be spawned by using the child_process.fork() API, and are designed to be easy to communicate with. There is also a built in cluster module which allows you to share sockets between processes to enable load balancing over multiple cores."
    And the user clicks accordion "V8"
    And the user can see accordion "V8" description "The V8 library provides Node.js with a JavaScript engine, which Node.js controls via the V8 C++ API. V8 is maintained by Google, for use in Chrome."
    And the user clicks accordion "Libuv"
    And the user can see accordion "Libuv" description "A C library that is used to abstract non-blocking I/O operations to a consistent interface across all supported platforms. It provides mechanisms to handle file system, DNS, network, child processes, pipes, signal handling, polling and streaming. It also includes a thread pool for offloading work for some things that can't be done asynchronously at the operating system level."
    And the user clicks accordion "npm"
    And the user can see accordion "npm" description "The standard package manager that comes with Node.js. It has the largest selection of community-created packages of any programming ecosystem, which makes building Node.js apps quick and easy."
    And the user clicks accordion "yarn"
    And the user can see accordion "yarn" description "A popular alternative to npm."
    And the user clicks accordion "gyp"
    And the user can see accordion "gyp" description "The build system is handled by gyp, a python-based project generator copied from V8. It can generate project files for use with build systems across many platforms. Node.js requires a build system because large parts of it — and its dependencies — are written in languages that require compilation."
    And the user should see "The Node.js project follows a Consensus Seeking decision making model."
    And the user should see "The nodejs/node core GitHub repository is maintained by the Collaborators who are added by the Technical Steering Committee (TSC) on an ongoing basis. Individuals making significant and valuable contributions are made Collaborators and given commit-access to the project. These individuals are identified by the TSC and their nomination is discussed with the existing Collaborators."
    And the user should see "The project is governed jointly by the Technical Steering Committee (TSC) which is responsible for high-level guidance of the project, and the Community Committee (CommComm) which is responsible for guiding and extending the Node.js community."
    And the user should see "Major Node.js versions enter Current  release status for six months, which gives library authors time to add support for them. After six months, odd-numbered releases (9, 11, etc.) become unsupported, and even-numbered releases (10, 12, etc.) move to Active LTS  status and are ready for general use. LTS  release status is \"long-term support\", which typically guarantees that critical bugs will be fixed for a total of 30 months. Production applications should only use Active LTS  or Maintenance LTS releases."
    And the user clicks accordion "Express"
    And the user can see accordion "Express" description "A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."
    And the user clicks accordion "Fastify"
    And the user can see accordion "Fastify" description "A web framework highly focused on providing the best developer experience with the least overhead and a powerful plugin architecture. It is inspired by Hapi and Express."
