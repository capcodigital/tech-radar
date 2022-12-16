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
    reference: [],
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
    reference: [],
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
          "Users of Node.js are free from the worries of dead-locking the process since there are no locks, unlike in a multi-threaded system. Almost no function in Node.js directly performs I/O, so the process never blocks. Because nothing blocks, systems developed in Node.js are easy to scale. <br/>Node.js is similar in design to, and influenced by, systems like Ruby's Event Machine and Python's Twisted. Node.js takes the event model a bit further. It presents an event loop as a runtime construct instead of as a library. In other systems, there is always a blocking call to start the event-loop. In Node.js, there is no such start-the-event-loop call. Node.js simply enters the event loop after executing an input script. Node.js exits the event loop when there are no more callbacks to perform. This behaviour is like JavaScript in the browser — the event loop is hidden from the user. <br/>HTTP is a first-class citizen in Node.js, designed with streaming and low latency in mind. This makes Node.js well suited for creating a web library or framework. <br/>Even though it has been designed without threads, Node.js can still take advantage of multiple cores in your environment. Child processes can be spawned by using the child_process.fork() API, and are designed to be easy to communicate with. There is also a built in cluster module which allows you to share sockets between processes to enable load balancing over multiple cores. ",
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
    reference: [],
  },
  {
    technology: "Go",
    docsLink: "https://golang.org/doc/",
    intro:
      "<a href='https://golang.org/doc/'>Go</a>, also known as Golang, is an open-source, compiled, and statically typed programming language created at Google. It is syntactically very similar to C and is built to be simple, high-performing, readable, and efficient.",
    content: [
      {
        name: "History",
        intro:
          "Designed by Robert Griesemer, Rob Pike, and Ken Thompson, it was announced in 2009 with an open source release following in 2012. The main motto behind creating the programming language was to solve the issues the tech titans observed with the prevalent languages at the time, notably C++. Google’s already enormous codebase grew in the late 2000s, and the era of multicore, networked computers and the start of the cloud computing revolution came. As a result, The senior software engineers at the internet giant were unhappy with the programming languages they had to rely on.",
        data: [],
      },
      {
        name: "Use Cases",
        intro: "",
        data: [
          {
            name: "Cloud & Network Services",
            description:
              "With a strong ecosystem of tools and APIs on major cloud providers, it's easy to create cloud services using Go.",
          },
          {
            name: "Command-line Interfaces (CLIs)",
            description:
              "With popular open source packages and a robust standard library, Go can be used to create fast and elegant CLIs.",
          },
          {
            name: "Web Development",
            description:
              "With enchanced memory performance and support for several IDEs, Go can be used to power fast and scalable web applications.",
          },
          {
            name: "Development Operations & Site Reliability Engineering",
            description:
              "With fast build times, lean syntax, an automatic formatter and doc generator, Go is built to support both DevOps and SRE.",
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
    reference: [],
  },
  {
    technology: "Kotlin",
    docsLink: "https://kotlinlang.org/docs/home.html",
    intro:
      "<a href='https://kotlinlang.org/docs/home.html'>Kotlin</a> is a general purpose, free, open source, statically typed “pragmatic” programming language initially designed for the JVM (Java Virtual Machine) and Android, and combines object-oriented and functional programming features. It is focused on interoperability, safety, clarity, and tooling support. Versions of Kotlin targeting JavaScript ES5.1 and native code (using LLVM) for a number of processors are in production as well.<br/><br/>Kotlin originated at JetBrains, the company behind IntelliJ IDEA, in 2010, and has been open source since 2012. The Kotlin project on GitHub has more than 770 contributors; while the majority of the team works at JetBrains, there have been nearly 100 external contributors to the Kotlin project. JetBrains uses Kotlin in many of its products including its flagship IntelliJ IDEA.",
    content: [
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
    reference: [],
  },
  {
    technology: "Groovy",
    docsLink: "https://groovy-lang.org/index.html",
    intro:
      "<a href='https://groovy-lang.org/index.html'>Apache Groovy</a> is an object oriented and Java syntax compatible programming language built for the JVM platform. This dynamic language has many features which are similar to Python, Ruby, Smalltalk, and Pero. Groovy source code gets compiled into Java Bytecode so it can run on any platform that has JRE is installed. Groovy also performs a lot of tasks behind the scene that makes it more agile and dynamic.<br /><br />Groovy integrates smoothly with any Java class or library, and immediately delivers to your application powerful capabilities, including scripting support, Domain-Specific Language authoring, runtime and compile-time meta-programming and functional programming.",
    content: [
      {
        name: "Features",
        intro: "",
        data: [
          {
            name: "Support for static and dynamic typing",
            description:
              "Statically typed languages are those in which type checking is done at the compiling stage and not during execution. Java is a general purpose statically typed language. Dynamic typing syntaxes such as Groovy are those in which the check is performed during execution. Python is another example. Groovy allows developers to introduce this typing within Java.",
          },
          {
            name: "Concise, brief, direct syntax",
            description:
              "This allows developers that use Groovy to develop projects faster and easier.",
          },
          {
            name: "Relatively short learning curve",
            description:
              "This is a relatively simple language like Python or Ruby. It is easy for developers to learn.",
          },
          {
            name: "Support for unit testing",
            description:
              "Groovy is a testing-oriented development language. In fact, it is a syntax that provides support for running tests in integrated development environments (IDEs), Ant or Maven, which are all application programming tools in Java.",
          },
          {
            name: "Native support for regular expressions",
            description:
              "The Groovy syntax for creating regular expressions is really simple. This programming language has three operators for regular expressions:<br/><ul><li>The operator regex =~.</li><li>The operator match ==~.</li><li>The pattern operator ~String.</li></ul>",
          },
          {
            name: "Native syntax for lists and associative arrays",
            description:
              "In programming, arrays are usually assigned to variables. These variables are often associated to data. Developers sometimes associate that information through various elements of the array through a common thread called index. That way of structuring information with programming is called associative array.",
          },
          {
            name: "Native support for markup languages like XML and HTML.",
            description: "",
          },
          {
            name: "Support for domain specific languages",
            description:
              "A domain specific language is a programming language or a specification dedicated to solving specific problems, through a specific technique. A general purpose syntax such as Java, C or C++ is the opposite. Somehow it provides general structure to solve global situations.",
          },
        ],
      },
      {
        name: "Tools",
        intro:
          "<ul><li><a href='http://groovy-lang.org/groovyc.html'>groovyc - the Groovy compiler</a></li><li><a href='http://groovy-lang.org/groovysh.html'>groovysh - the Groovy repl-like shell</a></li><li><a href='http://groovy-lang.org/groovyconsole.html'>groovyConsole - the Groovy Swing console</a></li><li><a href='http://groovy-lang.org/ides.html'>IDE integration</a></li></ul>",
        data: [],
      },
      {
        name: "Versions & Governance",
        intro:
          "Groovy 1.0 was released on January 2, 2007, and Groovy 2.0 in July, 2012. Since version 2, Groovy can be compiled statically, offering type inference and performance near that of Java. Groovy 2.4 was the last major release under Pivotal Software's sponsorship which ended in March 2015. Groovy has since changed its governance structure to a Project Management Committee in the Apache Software Foundation.",
        data: [],
      },
    ],
    examples: [],
    reference: [],
  },
  {
    technology: "Gradle",
    docsLink: "https://gradle.org/index.html",
    intro:
      "<a href='https://gradle.org/index.html'>Gradle</a> is a build automation tool for multi-language software development. It controls the development process in the tasks of compilation and packaging to testing, deployment, and publishing. Supported languages include Java (as well as Kotlin, Groovy, Scala), C/C++, and JavaScript. It also collects statistical data about the usage of software libraries around the globe. <br /> <br />The following are some of its most important advantages & features:",
    content: [
      {
        name: "",
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
        name: "Gradle Core Principles",
        intro: "",
        data: [
          {
            name: "1. Gradle is a general-purpose build tool",
            description:
              "Gradle has been designed to be flexible enough to allow us to build any kind of software. However currently Gradle only supports Maven and Ivy compatible repositories as dependency management options. Gradle makes it easy to build common types of projects e.g., Java libraries by adding conventions and prebuilt functionality through plugins. Custom plugins are supported. ",
          },
          {
            name: "2. The core model is based on tasks",
            description:
              "Gradle models its builds as Directed Acyclic Graphs (DAGs) of tasks. This means that a build configures a set of tasks and wires them together - based on their dependencies - to create a DAG. Once the task graph has been created, Gradle determines which tasks need to run in which order and then proceeds to execute them. Figure 1 shows a task graph and Figure 2 shows a build process for a typical Android app module. Almost any build process can be modelled as a graph of tasks, which is one of the reasons why Gradle is so flexible. And that task graph can be defined by both plugins and your own build scripts, with tasks linked together via the task dependency mechanism. Tasks themselves consist of Actions (pieces of work e.g., copy files, compile source etc), Inputs (values, files, and directories that the actions use or operate on) and Outputs (files and directories that the actions modify or generate). In fact, all the above are optional depending on what the task needs to do. Some tasks e.g., standard lifecycle tasks don’t have any actions but just aggregate multiple tasks together and we can choose which task to run.",
          },
          {
            name: "3. Build phases ",
            description:
              "Gradle evaluates and executes build scripts in 3 phases which form Gradle’s Build Lifecycle:<br/><strong>Initialization:</strong> Sets up the environment for the build and determine which projects will take part in it.<br/><strong>Configuration:</strong> Constructs and configures the task graph for the build and then determines which tasks need to run and in which order, based on the task the user wants to run. Everything involved in the configuration phase is evaluated on each build run. That is why we should avoid expensive work during the configuration phase.<br/><strong>Execution:</strong> Runs the tasks selected at the end of the configuration phase.",
          },
          {
            name: "4. High extensibility",
            description:
              "It’s rarely possible to build your project using only the build logic bundled with Gradle. Most builds have special requirements, so we need to add custom build logic by using Gradle’s several mechanisms:<br/><strong>Custom task types:</strong> When you want the build to do some work that an existing task can’t do, we can write a custom task type. Then we can use the custom task type just like the Gradle-provided ones.<br/><strong>Custom task actions:</strong> We can attach custom build logic that executes before or after a task.<br/><strong>Extra properties on projects and tasks:</strong> These allows us to add our own properties to a project or task that we can then use from your own custom actions or any other build logic.<br/> <strong>Custom conventions:</strong> Conventions are a powerful way to simplify builds so that users can understand and use them more easily. We can write your own plugins that provide conventions.<br/> <strong>A custom model:</strong> Gradle allows introduction of new concepts into a build beyond tasks, files, and dependency configurations. We can see this with most language plugins, which add the concept of source sets to a build. Appropriate modelling can greatly improve a build’s ease of use and efficiency.<br/>",
          },
          {
            name: "5. Build scripts operate against an API ",
            description:
              "There is a common misunderstanding that Gradle’s power comes from the fact that its build scripts are code. <strong>This is far from the truth.</strong> It’s the underlying model and API that provide the power. We should avoid putting much - if any - imperative logic in build scripts. Yet there is one area in which it is useful to view a build script as executable code i.e., in understanding how the syntax of the build script maps to Gradle’s API. As Gradle runs on the JVM, build scripts can also use the standard Java API. Groovy build scripts can additionally use the Groovy APIs while Kotlin build scripts can use the Kotlin ones.",
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
    reference: [],
  },
];
export default techContent;
