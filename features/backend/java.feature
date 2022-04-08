Feature: Java content page

Background: Navigate to the home page
    Given the user navigates to "http://localhost:3000/"

Scenario: Java content appears as expected
    When the user clicks "View Our Tech Radar"
    And the user clicks the hamburger menu
    And the user navigates to "Backend" via the hamburger menu
    And the user navigates to category "Java"
    And the user should see "Java is a general purpose, high-level, class-based programming language that was built from the ground up to be object-oriented."
    And the user should see "Java is very popular and its use spans from embedded systems (particularly IoT), web applications, Android development to large end-to-end enterprise solutions. It is ubiquitous in banks and financial institutions as it is considered one of the more secure programming languages due to its ability to limit access to data and memory safety features."
    And the user should see "Java was developed by James Gosling in the early 1990’s at Sun Microsystems, which was later acquired by Oracle. The programming language was first released in 1995 with the slogan “Write once, run anywhere” to promote the cross-platform abilities of Java. What differentiated it from other technologies at the time was that same code could be used to run on any system that a Java Virtual Machine (JVM) could run on."
    And the user clicks accordion "Simple"
    And the user can see accordion "Simple" description "Syntax is similar to C/C++ which makes it familiar to developers who know those languages."
    And the user clicks accordion "Object Oriented"
    And the user can see accordion "Object Oriented" description "This allows large applications to be broken down into smaller, logical constituents, allowing for reuse of code and reducing dependencies."
    And the user clicks accordion "Platform Independent & Portable"
    And the user can see accordion "Platform Independent & Portable" description "Java code is compiled into a bytecode which is platform independent as it runs on the Java Virtual Machine (JVM). The same Java applications can run on any platform with a JVM."
    And the user clicks accordion "Secure"
    And the user can see accordion "Secure" description "Java applications run on the JVM, a virtual machine sandbox which restricts access to system resources."
    And the user clicks accordion "Robust"
    And the user can see accordion "Robust" description "Java is statically typed, meaning variable types must be declared. The language also provides exception handling. Additionally, Java has automated memory management/garbage collection."
    And the user clicks accordion "Distributed"
    And the user can see accordion "Distributed" description "Java comes with extensive libraries of classes for interaction using TCP/IP protocols like HTTP and FTP."
    And the user clicks accordion "Multi-threading"
    And the user can see accordion "Multi-threading" description "Maximises utilisation of resources by allowing concurrent execution of two or more parts of a program."
    And the user clicks accordion "Dynamic"
    And the user can see accordion "Dynamic" description "Java programs can carry run-time information that is used to verify and resolve access to objects at run-time."
    And the user clicks accordion "Maven"
    And the user can see accordion "Maven" description "A build automation tool for projects. Maven projects are configured through a project object model (POM) which is stored in a pom.xml file. The POM describes the project and its external dependencies, the build order, directories and required plug-ins."
    And the user clicks accordion "Spring"
    And the user can see accordion "Spring" description "The Spring Framework started off as a tool for dependency injection but has grown into a complete application framework for building enterprise grade Java applications, web services and microservices. It provides a programming and configuration model and supports tasks such as handling exceptions and connecting to a database. Spring Boot allows you to quickly begin creating Spring applications."
    And the user clicks accordion "JUnit"
    And the user can see accordion "JUnit" description "This is an open-source testing framework used by developers to implement unit and regression tests in Java. It provides annotations to identify test methods and assertions to test expected results against actual results."
    And the user clicks accordion "TestNG"
    And the user can see accordion "TestNG" description "Inspired by JUnit, TestNG is another popular tool that covers unit, integration, functional and end-to-end testing."
    And the user clicks accordion "Mockito"
    And the user can see accordion "Mockito" description "This is a java-based library used to make mock external dependencies with dummy functionality for use in unit testing."