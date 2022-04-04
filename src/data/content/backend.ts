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
            name: "Pattern matching",
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
              "<div style='text-align: center;display: block;'><img width='20%'src='https://miro.medium.com/max/499/0*WpXBkrfgR2g9dw2T.png'/><img style='margin-left:10px;' width='10%' src='https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png'/> </div>",
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
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
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
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
  },
];
export default techContent;
