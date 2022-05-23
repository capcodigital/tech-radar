Feature: Scala content page

Background: Navigate to the home page
    Given the user navigates to Tech Radar

Scenario: Scala content appears as expected
    When the user clicks "View Our Tech Radar"
    And the user clicks the hamburger menu
    And the user navigates to "Backend" via the hamburger menu
    And the user navigates to category "Scala"
    And the user should see "Scala was introduced by Martin Odersky in 2001. After an internal release in late 2003, Scala was released publicly in early 2004 on the Java Platform. At this time August 2021 version 3.0 just be released."
    And the user should see "Scala is a both functional and an object-oriented language that operates under the JVM; the word stands for “Scalable” Language, and it is a strong statically typed general-purpose programming language currently supported by TypeSafe Inc. Some of the key features are:"
    And the user clicks accordion "Higher Order Functions (Functions as value Types)"
    And the user can see accordion "Higher Order Functions (Functions as value Types)" description "Almost all Java libraries can be used by Scala, and it is easier to write multi-threaded applications."
    And the user clicks accordion "Partial Functions"
    And the user can see accordion "Partial Functions" description "A partial function is a function applicable to a subset of the data it has been defined for."
    And the user clicks accordion "Case Classes"
    And the user can see accordion "Case Classes" description "Case Classes, thinking them as value objects or DTOs which all fields are immutable and can be used for Pattern Matching."
    And the user should see "Scala has different syntactic sugars, which is a syntax within a programming language that is designed to make things easier to read or to express, as a result is a perfect language for DSL, domain specific language. Async and Non-blocking code is very easy to write with Scala Future which is an object holding a value which may become available at some point."
    And the user should see "Scala leverages Category Theory - a mathematical discipline with a wide range of applications in theoretical computer science. Concepts like Category, Functor, Monad, and others, which were originally defined in Category Theory, have become pivotal for the understanding of modern Functional Programming (FP) languages and paradigms."
    And the user should see "Scala supports the Actor model using Akka which can be highly efficient and scalable when running distributed applications in multi-threaded and parallel business use cases. It is perfectly documented in Scaladoc: a documentation system that lives in the comments of Scala source code and is related to the code structure within which it is written."
    And the user should see "Highly scalable solutions such as Klout, LinkedIn, Amazon, Blizzard, Coursera and Twitter are using Scala."
    And the user clicks accordion "Big Data"
    And the user can see accordion "Big Data" description "Multiple frameworks are created in Scala like Spark, Kafka, Flink, snd Scio."
    And the user clicks accordion "Data Science"
    And the user can see accordion "Data Science" description "There are a big number of libraries for data analysis like Breeze, for visualization like Smile and Machine Learning like MLib, PredictionIO or DeepLearning4j."
    And the user clicks accordion "Web Framework"
    And the user can see accordion "Web Framework" description "Framework like Play, Lift, Colossus or Finatra are created in Scala"