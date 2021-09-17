const techContent = [
  {
    technology: "Java",
    docsLink: "https://docs.oracle.com/en/java/",
    intro: "Content coming soon.",
    content: [],
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
    intro: "Content coming soon.",
    content: [],
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
      "<a href='https://docs.python.org/'>Python</a> - is a rapidly developing scripting language which is used for solving a myriad of multifaceted challenges and tasks. Python is used in application development, big data analytics, web development, machine learning, and infrastructure management. Because of this flexibility it is used by huge corporations like Amazon and Spotify (in their recommendation algorithms), YouTube, Instagram and even by the Walt Disney Company. Python has found its place as a multitool capable of solving different tasks of varying complexity. <br/><br/> Python’s development started in the late 80s by a Dutchman named Guido van Rossum, with the first release hitting the public as early as 1991. The name of the language was inspired by the famous British comedy troupe Monty Python, despite the logo baring striking resemblance to two entertwined snakes. ",
    content: [
      {
        name: "Python Capabilitoes",
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
