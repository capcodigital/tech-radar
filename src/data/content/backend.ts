//backend.ts
const techContent = [
  {
    technology: "Java",
    docsLink: "https://docs.oracle.com/en/java/",
    intro:
      "Java is a general purpose, high-level, class-based programming language that was built from the ground up to be object-oriented.<br/><br/>Java is very popular and its use spans from embedded systems (particularly IoT), web applications, Android development to large end-to-end enterprise solutions. It is ubiquitous in banks and financial institutions as it is considered one of the more secure programming languages due to its ability to limit access to data and memory safety features. ",
    content: [
      {
        name: "",
        intro:
          "Java was developed by James Gosling in the early 1990’s at Sun Microsystems, which was later acquired by Oracle. The programming language was first released in 1995 with the slogan “Write once, run anywhere” to promote the cross-platform abilities of Java. What differentiated it from other technologies at the time was that same code could be used to run on any system that a Java Virtual Machine (JVM) could run on. ",
        data: [],
      },
      {
        name: "Tools and Features",
        intro: "",
        data: [
          {
            name: "Simple",
            description:
              "Syntax is similar to C/C++ which makes it familiar to developers who know those languages. ",
          },
          {
            name: "Object Oriented",
            description:
              "This allows large applications to be broken down into smaller, logical constituents, allowing for reuse of code and reducing dependencies. ",
          },
          {
            name: "Platform Independent & Portable",
            description:
              "Java code is compiled into a bytecode which is platform independent as it runs on the Java Virtual Machine (JVM). The same Java applications can run on any platform with a JVM. ",
          },
          {
            name: "Secure",
            description:
              "Java applications run on the JVM, a virtual machine sandbox which restricts access to system resources. ",
          },
          {
            name: "Robust",
            description:
              "Java is statically typed, meaning variable types must be declared. The language also provides exception handling. Additionally, Java has automated memory management/garbage collection. ",
          },
          {
            name: "Distributed",
            description:
              "Java comes with extensive libraries of classes for interaction using TCP/IP protocols like HTTP and FTP.",
          },
          {
            name: "Multi-threading",
            description:
              "Maximises utilisation of resources by allowing concurrent execution of two or more parts of a program.",
          },
          {
            name: "Dynamic",
            description:
              "Java programs can carry run-time information that is used to verify and resolve access to objects at run-time. ",
          },
        ],
      },
      {
        name: "Build Tools",
        intro: "",
        data: [
          {
            name: "Maven",
            description:
              "A build automation tool for projects. Maven projects are configured through a project object model (POM) which is stored in a pom.xml file. The POM describes the project and its external dependencies, the build order, directories and required plug-ins. ",
          },
          {
            name: "Gradle",
            description:
              "Another build automation tool which controls compilation, packaging, testing deployment and publishing. Gradle models its builds as directed acyclic graphs (DAGs) of tasks wired together based on their dependencies. ",
          },
        ],
      },
      {
        name: "Frameworks",
        intro: "",
        data: [
          {
            name: "Spring",
            description:
              "The Spring Framework started off as a tool for dependency injection but has grown into a complete application framework for building enterprise grade Java applications, web services and microservices. It provides a programming and configuration model and supports tasks such as handling exceptions and connecting to a database. Spring Boot allows you to quickly begin creating Spring applications.",
          },
        ],
      },
      {
        name: "Testing",
        intro: "",
        data: [
          {
            name: "JUnit",
            description:
              "This is an open-source testing framework used by developers to implement unit and regression tests in Java. It provides annotations to identify test methods and assertions to test expected results against actual results. ",
          },
          {
            name: "TestNG",
            description:
              "Inspired by JUnit, TestNG is another popular tool that covers unit, integration, functional and end-to-end testing. ",
          },
          {
            name: "Mockito",
            description:
              "This is a java-based library used to make mock external dependencies with dummy functionality for use in unit testing. ",
          },
        ],
      },
    ],
    examples: [],
    reference: ["https://docs.oracle.com/en/java/ ", "https://dev.java/learn/"],
  },
  {
    technology: "Scala",
    docsLink: "https://docs.scala-lang.org/",
    intro:
      '<a href="https://docs.scala-lang.org/">Scala</a> was introduced by Martin Odersky in 2001. After an internal release in late 2003, Scala was released publicly in early 2004 on the Java Platform. At this time August 2021 version 3.0 just be released.',
    content: [
      {
        name: "",
        intro:
          "Scala is a both functional and an object-oriented language that operates under the JVM; the word stands for “Scalable” Language, and it is a strong statically typed general-purpose programming language currently supported by TypeSafe Inc. Some of the key features are: ",
        data: [
          {
            name: "Higher Order Functions (Functions as value Types)",
            description:
              "Almost all Java libraries can be used by Scala, and it is easier to write multi-threaded applications.",
          },
          {
            name: "Partial Functions",
            description:
              "A partial function is a function applicable to a subset of the data it has been defined for.",
          },
          {
            name: "Pattern Matching",
            description:
              "Pattern matching is the act of checking a given sequence of tokens for the presence of the constituents of some pattern.",
          },
          {
            name: "Case Classes",
            description:
              "Case Classes, thinking them as value objects or DTOs which all fields are immutable and can be used for Pattern Matching. ",
          },
        ],
      },
      {
        name: "",
        intro:
          "Scala has different <b>syntactic sugars</b>, which is a syntax within a programming language that is designed to make things easier to read or to express, as a result is a perfect language for DSL, domain specific language. Async and Non-blocking code is very easy to write with Scala Future which is an object holding a value which may become available at some point.",
        data: [],
      },
      {
        name: "",
        intro:
          "Scala leverages Category Theory - a mathematical discipline with a wide range of applications in theoretical computer science. Concepts like Category, Functor, Monad, and others, which were originally defined in Category Theory, have become pivotal for the understanding of modern Functional Programming (FP) languages and paradigms.",
        data: [],
      },
      {
        name: "",
        intro:
          "Scala supports the Actor model using Akka which can be highly efficient and scalable when running distributed applications in multi-threaded and parallel business use cases. It is perfectly documented in Scaladoc: a documentation system that lives in the comments of Scala source code and is related to the code structure within which it is written.",
        data: [],
      },
      {
        name: "",
        intro:
          "Highly scalable solutions such as Klout, LinkedIn, Amazon, Blizzard, Coursera and Twitter are using Scala. ",
        data: [
          {
            name: "Big Data",
            description:
              "Multiple frameworks are created in Scala like Spark, Kafka, Flink, snd Scio. ",
          },
          {
            name: "Data Science",
            description:
              "There are a big number of libraries for data analysis like Breeze, for visualization like Smile and Machine Learning like MLib, PredictionIO or DeepLearning4j. ",
          },
          {
            name: "Web Framework",
            description:
              "Framework like Play, Lift, Colossus or Finatra are created in Scala ",
          },
        ],
      },
    ],
    examples: [],
    reference: ["https://docs.scala-lang.org/"],
  },
  {
    technology: "Node",
    docsLink: "https://nodejs.org/en/docs/",
    intro:
      "Node.js is an asynchronous event-driven JavaScript runtime, designed to build scalable network applications. Many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep. ",
    content: [
      {
        name: "",
        intro:
          "Users of Node.js are free from the worries of dead-locking the process since there are no locks, unlike in a multi-threaded system. Almost no function in Node.js directly performs I/O, so the process never blocks. Because nothing blocks, systems developed in Node.js are easy to scale. <br/><br/>Node.js is similar in design to, and influenced by, systems like Ruby's Event Machine and Python's Twisted. Node.js takes the event model a bit further. It presents an event loop as a runtime construct instead of as a library. In other systems, there is always a blocking call to start the event-loop. In Node.js, there is no such start-the-event-loop call. Node.js simply enters the event loop after executing an input script. Node.js exits the event loop when there are no more callbacks to perform. This behaviour is like JavaScript in the browser — the event loop is hidden from the user. <br/><br/>HTTP is a first-class citizen in Node.js, designed with streaming and low latency in mind. This makes Node.js well suited for creating a web library or framework. <br/><br/>Even though it has been designed without threads, Node.js can still take advantage of multiple cores in your environment. Child processes can be spawned by using the child_process.fork() API, and are designed to be easy to communicate with. There is also a built in cluster module which allows you to share sockets between processes to enable load balancing over multiple cores. ",
        data: [],
      },
      {
        name: "Dependencies",
        intro: "",
        data: [
          {
            name: "V8",
            description:
              "The V8 library provides Node.js with a JavaScript engine, which Node.js controls via the V8 C++ API. V8 is maintained by Google, for use in Chrome. ",
          },
          {
            name: "Libuv",
            description:
              "A C library that is used to abstract non-blocking I/O operations to a consistent interface across all supported platforms. It provides mechanisms to handle file system, DNS, network, child processes, pipes, signal handling, polling and streaming. It also includes a thread pool for offloading work for some things that can't be done asynchronously at the operating system level. ",
          },
        ],
      },
      {
        name: "Tools",
        intro: "",
        data: [
          {
            name: "npm",
            description:
              "The standard package manager that comes with Node.js. It has the largest selection of community-created packages of any programming ecosystem, which makes building Node.js apps quick and easy.",
          },
          {
            name: "yarn",
            description: "A popular alternative to npm. ",
          },
          {
            name: "gyp",
            description:
              "The build system is handled by gyp, a python-based project generator copied from V8. It can generate project files for use with build systems across many platforms. Node.js requires a build system because large parts of it — and its dependencies — are written in languages that require compilation.",
          },
        ],
      },
      {
        name: "Governance",
        intro:
          "The Node.js project follows a Consensus Seeking decision making model. <br/><br/>The nodejs/node core GitHub repository is maintained by the Collaborators who are added by the Technical Steering Committee (TSC) on an ongoing basis. Individuals making significant and valuable contributions are made Collaborators and given commit-access to the project. These individuals are identified by the TSC and their nomination is discussed with the existing Collaborators.  <br/><br/>The project is governed jointly by the Technical Steering Committee (TSC) which is responsible for high-level guidance of the project, and the Community Committee (CommComm) which is responsible for guiding and extending the Node.js community. ",
        data: [],
      },
      {
        name: "Releases",
        intro:
          'Major Node.js versions enter <i>Current </i> release status for six months, which gives library authors time to add support for them. After six months, odd-numbered releases (9, 11, etc.) become unsupported, and even-numbered releases (10, 12, etc.) move to <i>Active LTS </i> status and are ready for general use. <i>LTS </i> release status is "long-term support", which typically guarantees that critical bugs will be fixed for a total of 30 months. Production applications should only use <i>Active LTS </i> or <i>Maintenance LTS<i/> releases. ',
        data: [],
      },
      {
        name: "Frameworks",
        intro: "Too many to mention. A couple of popular ones are: ",
        data: [
          {
            name: "Express",
            description:
              "a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. ",
          },
          {
            name: "Fastify",
            description:
              "a web framework highly focused on providing the best developer experience with the least overhead and a powerful plugin architecture. It is inspired by Hapi and Express. ",
          },
          {
            name: "",
            description:
              "<div style='text-align: center;display: block;'><img width='20%'src='https://expressjs.com/images/express-facebook-share.png'/><img style='margin-left:10px;' width='20%' src='https://www.fastify.io/images/fastify-logo-inverted.2180cc6b1919d47a.png'/> </div>",
          },
        ],
      },
      {
        name: "Testing",
        intro: "",
        data: [
          {
            name: "Mocha",
            description:
              "Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases. ",
          },
          {
            name: "Chai",
            description:
              "A BDD / TDD assertion library for node and the browser that can be paired with any JavaScript testing framework. ",
          },
          {
            name: "Jest",
            description:
              "JavaScript Testing Framework with a focus on simplicity that aims to work out of the box with no config. Incudes features such as an optional parameter for code coverage and an extensive mocking API ",
          },
          {
            name: "",
            description:
              "<div style='text-align: center;display: block;'><img width='20%'src='https://miro.medium.com/max/499/0*WpXBkrfgR2g9dw2T.png'/><img style='margin-left:10px;' width='10%' src='https://images.opencollective.com/jest/d327d66/logo.png'/> </div>",
          },
        ],
      },
    ],
    examples: [],
    reference: ["https://nodejs.org/en/docs/", "https://devdocs.io/node/"],
  },
  {
    technology: "Go",
    docsLink: "https://golang.org/doc/",
    intro:
      "<a href='https://golang.org/doc/'>Go</a>, also known as Golang, is an open-source, compiled, and statically typed programming language created at Google. It is syntactically very similar to C and is built to be simple, high-performing, readable, and efficient.",
    content: [
      {
        name: "Tools and Features",
        intro: "",
        data: [
          {
            name: "Concurrency",
            description:
              "Go offers some great concurrency primitives and makes it extremely easy to implement a concurrent system. Go supports this at the language level and concurrency is a first class citizen. The fundamental unit for this in Go is a go routine.Go routines are cheap, lightweight threads of execution.",
          },
          {
            name: "Simplicity and Consistency",
            description:
              "Go is a relatively simple language and was designed with a very minimalistic approach.it's easy to pick up and get started with. The standard library contains most things including a web server!",
          },
          {
            name: "Go is object oriented",
            description:
              "Coming from other languages, it may seem like Go is not object-oriented. It does not provide the class keyword and has no support for inheritance. This might seem bizarre. However, Go’s replacement for classes are structs. A struct may have any number of properties and methods defined on them.",
          },
          {
            name: "The Compiler",
            description:
              "Go’s compiler is super fast. It is easily possible to compile a large Go program within a few seconds. The fact that the language syntax is so simple means that compilation is much quicker. The language was designed to be easily parseable without a symbol table.",
          },
          {
            name: "Pointers",
            description:
              "I thought I’d never have to use pointers after my university days, learning C. Go aims to provide a modern equivalent of C in some areas and has brought back pointers. Most modern languages do not provide pointers, however pointers help solve a lot of common issues and play a far more important role when it comes to memory layout and building low level system tools.",
          },
          {
            name: "GoLand",
            description:
              "GoLand is the Go-specific IDE from JetBrains. While JetBrains is best known for Java-centric tools, GoLand is an excellent Go development environment.",
          },
        ],
      },
      {
        name: "Build Tools",
        intro: "",
        data: [
          {
            name: "Gödel",
            description:
              "Gödel is a Go build tool that provides tasks for configuring, formatting, checking, testing, building and publishing Go projects in a declarative, consistent and reproducible manner across different platforms and environments. gödel can be used in both local development environments and for verifying the correctness of project in CI environments. gödel uses declarative configuration to define the parameters for a project and provides an executable that orchestrates build tasks using standard Go commands. It centralizes project configuration and eliminates the need for custom build scripts that conflate configuration with logic. gödel is designed to be portable, fast and lightweight.",
          },
        ],
      },
      {
        name: "Frameworks",
        intro: "",
        data: [
          {
            name: "Gin",
            description:
              "The gin framework tops the list of Go frameworks in terms of popularity due to its minimalist framework and performance. It is mostly used for building a REST API for the backend if the programmer wants to develop a single-page application using a frontend framework. This framework makes use of the HTTP routers for handling the Golang traffic and is ideal for beginners along with its rich documentation provided on GitHub. It supports the most essential libraries and features which makes it the most suitable Golang framework to develop high-performance REST APIs.",
          },
          {
            name: "Beego",
            description:
              "The gin framework tops the list of Go frameworks in terms of popularity due to its minimalist framework and performance. It is mostly used for building a REST API for the backend if the programmer wants to develop a single-page application using a frontend framework. This framework makes use of the HTTP routers for handling the Golang traffic and is ideal for beginners along with its rich documentation provided on GitHub. It supports the most essential libraries and features which makes it the most suitable Golang framework to develop high-performance REST APIs.",
          },
          {
            name: "Echo",
            description:
              "The echo framework used in Go is another high-performance, extensible, and minimalist web framework in Golang. It has a highly optimized HTTP router with zero dynamic memory allocation that smartly prioritizes routes. It is used to build robust and scalable REST APIs, which can easily be organized into groups.",
          },
        ],
      },
      {
        name: "Testing",
        intro: "",
        data: [
          {
            name: "Go Testing",
            description:
              "The testing package provided by Go supports package testing and uses the go test command to automatically run these tests. It can run benchmarks as well as sub-tests and sub-benchmarks. It supports test skipping to limit scope, and it makes test setup and teardown available when preparing for and cleaning up after testing.",
          },
          {
            name: "Testify",
            description:
              "Testify is an incredibly popular testing framework. It makes available a range of assertion functions for comparing and verifying values. It also offers mock functionality to easily mock resources. Its suite package aids in creating test suites for grouping related tests, along with offering setup and teardown functionality for test preparation and cleanup.",
          },
          {
            name: "GoConvey",
            description:
              "GoConvey is a BDD-style testing framework that supports the go test command. It uses an expressive domain-specific language (DSL) that facilitates the creation of self-documenting, highly readable tests.",
          },
        ],
      },
      {
        name: "Advantages",
        intro: "",
        data: [
          {
            name: "",
            description:
              "<ul><li>Simplified code - Go code is less complex and borrows several concepts from other programming languages.</li><li>Powerful performance - The simplicity of Go adds up to its powerful performance. It runs faster, compiles quicker, it’s easy to maintain and support, and allows for shorter software development lifecycles. Golang compiles directly to machine code as it doesn’t use Virtual Machines, providing an even better speed advantage.</li><li>Designed for multi-core processors - Go is designed for the modern era of cloud computing and parallel processes utilized by the current processors. Other popular computer programming languages like Java, JavaScript, Python, Ruby, or C, C ++ were created before the multi-core computers were widely used. With Golang, it is easier to utilize all CPU cores without complicating development.</li><li>Designed for the internet - With the Golang standard library, developers can build complex web services without third-party libraries. It makes it perfect for web development with fewer iterations and fewer possibilities to implement the same feature.</li><li>Easy to learn - Programmers frequently see Golang as C without the inconvenient flaws. Its syntax appears familiar to developers, making it easier to learn if you are familiar with the C concepts.</li></ul>",
          },
        ],
      },
    ],
    examples: [],
    reference: [
      "https://www.scalefocus.com/blog/why-you-should-go-with-go-for-your-next-software-project",
      "https://www.freecodecamp.org/news/what-is-go-programming-language/",
      "https://go.dev",
    ],
  },
  {
    technology: "Python",
    docsLink: "https://docs.python.org/",
    intro:
      "<a href='https://docs.python.org/'>Python</a> - is a rapidly developing scripting language which is used for solving a myriad of multifaceted challenges and tasks. Python is used in application development, big data analytics, web development, machine learning, and infrastructure management. Because of this flexibility it is used by huge corporations like Amazon and Spotify (in their recommendation algorithms), YouTube, Instagram and even by the Walt Disney Company. Python has found its place as a multitool capable of solving different tasks of varying complexity. <br/><br/> Python’s development started in the late 80s by a Dutchman named Guido van Rossum, with the first release hitting the public as early as 1991. The name of the language was inspired by the famous British comedy troupe Monty Python, despite the logo baring striking resemblance to two intertwined snakes. ",
    content: [
      {
        name: "Python Capabilities",
        intro: "",
        data: [
          {
            name: "",
            description:
              "<ul><li>Object-oriented programming (OOP)  - Despite the scripting nature of Python, provides well-designed OOP features, giving it flexibility over pure scripting languages. </li><li>Functional programming  - This is where Python shines as it boasts a great library of built-in functions and modules often allowing delivering solutions with “no strings attached “.</li> <li>Wheels and modules  - Applications in Python can be easily assembled into modules for easy distribution and deployment. </li><li>Wheels and modules  - Applications in Python can be easily assembled into modules for easy distribution and deployment.</li> <li>Introspection  - A very welcome and powerful feature which allows querying of an object’s information during runtime. As everything in Python is an object, this allows developers greater insight into the inner working of code they work on.</li><li>Exception handling, interrupts, and generators  - Error handling is core of Python’s design, so much so that the internal libraries use exceptions and exception handling for flow control, this also relates to interrupts and generators, both of which are immensely powerful features of the language. </li>             <li>Context managers</strong>  - an advanced feature allowing for control over execution context in each thread or section of code.</li><li>Decorators and regular expressions - Decorators are another advanced feature allowing to modify function execution behaviour with little overhead, and regular expressions are not Python exclusive but are used extensively in internal workings and as a result are a professionally written, efficient and come as standard!</li></ul>",
          },
          {
            name: "",
            description:
              "These are just a few highlights to Python’s capabilities, and if that was not enough, the below lists some of Python’s advantages over other common languages. ",
          },
        ],
      },
      {
        name: "Python’s Advantages ",
        intro: "",
        data: [
          {
            name: "",
            description:
              "<ul><li>Python is characterised by its logical syntax making the code easily readable and comprehensible (no bracket noise). </li><li>Relative simplicity - Python is considered a great language to learn when learning programming as its accessibility is not overshadowed by shallowness (like Pascal) or requirement of understanding more complex principles from get-go (Java: public static void). </li><li>Huge internet community - This is by far one of the biggest gate openers for Python. With Python having been around for 40 years (almost as old as the WWW) the amount of information available is hard to compete with. </li><li>Flexibility and Scalability - Python allows with relative ease to develop multi-layer applications that can be scaled in or out as necessary. Furthermore, an advent of serverless offerings like AWS Lambda and Azure Functions that deploy Python applications has never been easier. </li><li>A lot of companies provide Python SDKs, making it easier and faster to integrate and utilise third party services and applications. </li></ul> ",
          },
        ],
      },
      {
        name: "Python Libraries ",
        intro:
          "All these advantages culminate in a simple fact that it is faster to develop on Python. With lower barrier to entry, a lot of available support and different tools, frameworks, and libraries available any project can find something to benefit from. ",
        data: [
          {
            name: "",
            description:
              "Need to do Artificial Intelligence and Machine learning? Try TensorFlow or PyTorch.<br/><img width='20%' style='margin-right:50px;' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png'><img width='50%' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/PyTorch_logo_black.svg/1024px-PyTorch_logo_black.svg.png'> ",
          },
          {
            name: "",
            description:
              "Trying to do web-development? There is Flask or Django!<br/><img width='40%' style='margin-right:50px;' src='https://miro.medium.com/max/438/1*0G5zu7CnXdMT9pGbYUTQLQ.png'><img width='50%' src='https://twilio-cms-prod.s3.amazonaws.com/original_images/django-dark.png'>",
          },
          {
            name: "",
            description:
              "Need data analytics and manipulation tools? NumPy and Pandas comes to the rescue. <br/><img width='40%' style='margin-right:50px;' src='https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg'><img width='50%' src='https://mymltalks.com/wp-content/uploads/2021/01/pandas.jpg'>",
          },
          {
            name: "",
            description:
              "And that is not even scratching the surface. There are thousands of libraries, specialising in many use-cases. From science modelling to image processing, and from video processing to game development. Whatever the ask, chances are Python can do it.  ",
          },
        ],
      },
    ],
    examples: [],
    reference: [
      "https://docs.python.org/3/",
      "https://www.python.org/doc/",
      "https://pandas.pydata.org/docs/",
    ],
  },
  {
    technology: "Kotlin",
    docsLink: "https://kotlinlang.org/docs/home.html",
    intro:
      "<a href='https://kotlinlang.org/docs/home.html'>Kotlin</a> is a general purpose, free, open source, statically typed “pragmatic” programming language initially designed for the JVM (Java Virtual Machine) and Android, and combines object-oriented and functional programming features. It is focused on interoperability, safety, clarity, and tooling support. Versions of Kotlin targeting JavaScript ES5.1 and native code (using LLVM) for a number of processors are in production as well.<br/><br/>Kotlin originated at JetBrains, the company behind IntelliJ IDEA, in 2010, and has been open source since 2012. The Kotlin project on GitHub has more than 770 contributors; while the majority of the team works at JetBrains, there have been nearly 100 external contributors to the Kotlin project. JetBrains uses Kotlin in many of its products including its flagship IntelliJ IDEA.",
    content: [
      {
        name: "Tools and Features",
        intro:
          "Kotlin took inspiration from many programming languages. One of the main ideas behind Kotlin is being pragmatic, i.e., being a programming language useful for day-to-day development, which helps the users get the job done via its features and its tools. Thus, a lot of design decisions were and still are influenced by how beneficial these decisions are for Kotlin users. ",
        data: [
          {
            name: "Open Source",
            description:
              "Kotlin is an open-source programming language. So a developer can leverage the advantage of high-quality app development every time and is even backed by support from the Kotlin Slack team.It also provides a single-click tool through which a developer can convert existing Java code.",
          },
          {
            name: "Supports Full Java Interoperability",
            description:
              "Kotlin’s intense interoperability with Java is one of its attractive features. It basically runs on JVM and even supports Java libraries, tools, offering 360-degree Java interoperability.Both Java and Kotlin co-exist i.e. their bytecodes are the same - This makes it easier for app developers to be efficient. They can assemble a single android project in both languages with the help of Java interoperability easily. This saves time by just having to switch the language and not code.",
          },
          {
            name: "Lazy Loading",
            description:
              "Loading speed is one of the key factors that decide the fate of your app. Slow loading can be a bummer but no worries - The lazy-loading feature by Kotlin will take care of this.This feature basically reduces the app startup time so that the app is loaded faster, which is very useful when using it for app development.",
          },
          {
            name: "Safe And Reliable",
            description:
              "The language is relatively safe and you can use it without any second thoughts. For example, avoiding mistakes such as ‘NullPointException’ is possible with the Null Safe function.Furthermore, features like the Kotlin Android Extensions, continuous library size optimizations, libraries like Anko and build times reflect the commitment of JetBrains towards making Kotlin a reliable programming language for mobile app development.",
          },
          {
            name: "Greater IDE",
            description:
              "Kotlin is fully backed and supported by its parent company JetBrains which specializes in developing the best IDEs in the world.If you need Kotlin support from the community, all you need to do is install a plugin for that. The language supports almost every IDE feature of Android Studio. ",
          },
        ],
      },
      {
        name: "Build Tools",
        intro: "",
        data: [
          {
            name: "Maven",
            description:
              "A build automation tool for projects. Maven projects are configured through a project object model (POM) which is stored in a pom.xml file. The POM describes the project and its external dependencies, the build order, directories and required plug-ins. ",
          },
          {
            name: "Gradle",
            description:
              "Another build automation tool which controls compilation, packaging, testing deployment and publishing. Gradle models its builds as directed acyclic graphs (DAGs) of tasks wired together based on their dependencies. ",
          },
          {
            name: "Ant",
            description:
              "Ant is a build tool software program that is used to automate builds and processes. While Ant is primarily used for Java builds, it is flexible enough to be used for any automation process.",
          },
        ],
      },
      {
        name: "Frameworks",
        intro: "",
        data: [
          {
            name: "Spring",
            description:
              "With its versatile set of features, Spring is the world’s most popular Java framework. When it’s paired with Kotlin, and its concise syntax, the two make the ultimate combo for application development.",
          },
          {
            name: "Ktor",
            description:
              "Ktor is a multiplatform toolkit built by JetBrains for creating Web applications in Kotlin. It makes use of coroutines for high scalability and offers an easy-to-use API.",
          },
        ],
      },
      {
        name: "Testing",
        intro: "",
        data: [
          {
            name: "JUnit",
            description:
              "This is an open-source testing framework used by developers for unit testing. It provides annotations to identify test methods and assertions to test expected results against actual results.",
          },
          {
            name: "Spek",
            description:
              "Spek is a Kotlin-based Specification Testing framework for the JVM. It's designed to work as a JUnit 5 Test Engine. This means that we can easily plug it into any project that already uses JUnit 5 to run alongside any other tests that we might have. ",
          },
          {
            name: "Kotlintest",
            description:
              "KotlinTest is a flexible and comprehensive testing tool for the Kotlin ecosystem based on and heavily inspired by the superb Scalatest. KotlinTest provides several ways to lay out your test so that your team can pick the style they are most happy with. It also includes many matchers which allow you to write many different types of assertions easily and in a human readable way.",
          },
        ],
      },
      {
        name: "Platforms",
        intro: "",
        data: [
          {
            name: "Multiplatform Mobile",
            description:
              "Share the logic of your Android and iOS apps while keeping UX native.",
          },
          {
            name: "Server-side",
            description:
              "Modern development experience with familiar JVM technology.",
          },
          {
            name: "Web Frontend",
            description: "Extend your projects to the web.",
          },
          {
            name: "Android",
            description: "Recommended by Google for building Android apps.",
          },
          {
            name: "Data Science",
            description:
              "From building data pipelines to productionizing machine learning models, Kotlin can be a great choice for working with data.",
          },
        ],
      },
    ],
    examples: [],
    reference: ["https://kotlinlang.org/docs/home.html"],
  },
  {
    technology: "Groovy",
    docsLink: "https://groovy-lang.org/index.html",
    intro:
      "<a href='https://groovy-lang.org/index.html'>Apache Groovy</a> is an object oriented and Java syntax compatible programming language built for the JVM platform. This dynamic language has many features which are similar to Python, Ruby, Smalltalk, and Pero. Groovy source code gets compiled into Java Bytecode so it can run on any platform that has JRE is installed. Groovy also performs a lot of tasks behind the scene that makes it more agile and dynamic.<br /><br />Groovy integrates smoothly with any Java class or library, and immediately delivers to your application powerful capabilities, including scripting support, Domain-Specific Language authoring, runtime and compile-time meta-programming and functional programming.",
    content: [
      {
        name: "Tools And Features",
        intro: "",
        data: [
          {
            name: "Static And Dynamic Typing",
            description:
              "Statically typed languages are those in which type checking is done at the compiling stage and not during execution. Java is a general purpose statically typed language. Dynamic typing syntaxes such as Groovy are those in which the check is performed during execution. Python is another example. Groovy allows developers to introduce this typing within Java.",
          },
          {
            name: "Concise, Brief, Direct Syntax",
            description:
              "This allows developers that use Groovy to develop projects faster and easier.",
          },
          {
            name: "Relatively Short Learning Curve",
            description:
              "This is a relatively simple language like Python or Ruby. It is easy for developers to learn.",
          },
          {
            name: "Support For Regular Expressions",
            description:
              "The Groovy syntax for creating regular expressions is really simple. This programming language has three operators for regular expressions:<br/><ul><li>The operator regex =~.</li><li>The operator match ==~.</li><li>The pattern operator ~String.</li></ul>",
          },
          {
            name: "Syntax For Lists And Associative Arrays",
            description:
              "In programming, arrays are usually assigned to variables. These variables are often associated to data. Developers sometimes associate that information through various elements of the array through a common thread called index. That way of structuring information with programming is called associative array.",
          },
          {
            name: "Support For Markup Languages",
            description: "",
          },
          {
            name: "Support For Domain Languages",
            description:
              "A domain specific language is a programming language or a specification dedicated to solving specific problems, through a specific technique. A general purpose syntax such as Java, C or C++ is the opposite. Somehow it provides general structure to solve global situations.",
          },
          {
            name: "Groovyc",
            description:
              "Groovyc is the Groovy compiler command line tool. It allows you to compile Groovy sources into bytecode. It plays the same role as javac in the Java world.",
          },
        ],
      },
      {
        name: "Frameworks",
        intro: "",
        data: [
          {
            name: "Grails",
            description:
              "Grails is Java and Groovy framework used when developing agile web applications. Grails implements the MVCS (Model, View, and Controller) design pattern.Grails is superb because it allows developers to concentrate more on actual application requirements and spend less time configuring the framework. Grails provide tools for development, and it is built based on tools like: Quarts, Hibernate, Spring, and Gradle for library management.",
          },
        ],
      },
      {
        name: "Testing",
        intro: "",
        data: [
          {
            name: "Spock",
            description:
              "Spock is a testing and specification framework for Java and Groovy applications. What makes it stand out from the crowd is its beautiful and highly expressive specification language. Thanks to its JUnit runner, Spock is compatible with most IDEs, build tools, and continuous integration servers.",
          },
        ],
      },
      {
        name: "Versions & Governance",
        intro:
          "Groovy 1.0 was released on January 2, 2007, and Groovy 2.0 in July, 2012. Since version 2, Groovy can be compiled statically, offering type inference and performance near that of Java. Groovy 2.4 was the last major release under Pivotal Software's sponsorship which ended in March 2015. Groovy has since changed its governance structure to a Project Management Committee in the Apache Software Foundation.",
        data: [],
      },
    ],
    examples: [],
    reference: [
      "https://groovy-lang.org/documentation.html",
      "https://devdocs.io/groovy~3.0/",
    ],
  },
  {
    technology: "Gradle",
    docsLink: "https://gradle.org/index.html",
    intro:
      "<a href='https://gradle.org/index.html'>Gradle</a> is a build automation tool for multi-language software development. It controls the development process in the tasks of compilation and packaging to testing, deployment, and publishing. Supported languages include Java (as well as Kotlin, Groovy, Scala), C/C++, and JavaScript. It also collects statistical data about the usage of software libraries around the globe.",
    content: [
      {
        name: "Tools And Features",
        intro: "",
        data: [
          {
            name: "High performance",
            description:
              "Gradle avoids unnecessary work by only running tasks that need to do work because inputs or outputs have changed. Gradle uses various caches to reuse outputs from previous builds. With a shared build cache, you can even reuse outputs from other machines.",
          },
          {
            name: "JVM foundation",
            description:
              "Gradle runs on the JVM. This is a bonus for users familiar with Java, since build logic can use the standard Java APIs. It also makes it easy to run Gradle on different platforms.",
          },
          {
            name: "Conventions",
            description:
              "Gradle makes common types of projects easy to build through conventions. Plugins set sensible defaults to keep build scripts minimal. But these conventions don’t limit you: you can configure settings, add your own tasks, and make many other customizations in your builds.",
          },
          {
            name: "Extensibility",
            description:
              "Most builds have special requirements that require custom build logic. You can readily extend Gradle to provide your own build logic with custom tasks and plugins.",
          },
          {
            name: "IDE support",
            description:
              "Several major IDEs provide interaction with Gradle builds, including Android Studio, IntelliJ IDEA, Eclipse, VSCode, and NetBeans. Gradle can also generate the solution files required to load a project into Visual Studio.",
          },
          {
            name: "Insight",
            description:
              "Build scans provide extensive information about a build run that you can use to identify build issues. Scans can also be shared which can be very useful for e.g., if we need help fixing a build issue. ",
          },
        ],
      },
      {
        name: "Usage & History",
        intro: "",
        data: [
          {
            name: "",
            description:
              "Gradle is used by large projects such as Spring Projects, Hibernate Projects, and Grails Projects. Some Leading Enterprise companies like LinkedIn and Netflix use Gradle.",
          },
          {
            name: "",
            description:
              "Gradle was initially released in 2007, and it is stably released on November 18, 2019. Gradle has taken the advantages of both Ant and Maven and remove the drawbacks of both.",
          },
        ],
      },
    ],
    examples: [],
    reference: [
      "https://docs.gradle.org/current/userguide/userguide.html",
      "https://gradle.org/guides/",
    ],
  },
];
export default techContent;
