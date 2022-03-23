Feature: Gradle Mobile content page

Background: Navigate to the home page
    Given the user navigates to "http://localhost:3000/"

Scenario: Gradle Mobile content appears as expected
    When the user clicks "View Our Tech Radar"
    And the user clicks the hamburger menu
    And the user navigates to "Mobile" via the hamburger menu
    And the user navigates to category "Gradle Mobile"
    Then the user should see "Gradle is an open-source build automation tool capable of building almost any type of software. The following are some of its most important advantages & features:"
    And the user should see "Gradle & Android By default, Android projects are handled by the Gradle build system. If we create a new project in Android studio the Gradle build scripts are automatically created. Android studio provides the Gradle runtime, hence no additional installation is required. If we press the run button in Android Studio, it triggers the corresponding Gradle task and starts the application. We can also run Gradle via the command line. Gradle provides a wrapper script which allows you to run Gradle without local installation. Gradle build process of a typical Android app module (Figure 2) involves 4 steps:"
    And the user should see "Gradle & iOS The Gradle Xcode plugin is a plugin for the Gradle build management tool that adds support for building Xcode projects. It provides an easy and reliable build process for iOS or macOS applications. The build can be executed on the developer’s machine and integrate smoothly with various build servers like Jenkins etc. The Xcode Plugin generate files that are used by the Xcode IDE to open Gradle projects into Xcode. The generated Xcode project delegates build actions to Gradle. The plugin not only builds the app, but also supports code signing, packaging and distribution. These can be configured in one configuration file. The Xcode Plugin adds several tasks to the project. The main tasks are the xcode, cleanXcode and openXcodetasks. The following diagram shows the relationships between tasks added by this plugin."
    And the user clicks accordion "High performance"
    And the user can see accordion "High performance" description "Gradle avoids unnecessary work by only running the tasks that need to run because their inputs or outputs have changed. A build cache can be used to enable the reuse of task outputs from previous runs or even from a different machine (with a shared build cache)."
    And the user clicks accordion "JVM foundation"
    And the user can see accordion "JVM foundation" description "Gradle runs on the JVM and requires a Java Development Kit (JDK) installed to use it. This is a bonus for users familiar with the Java platform as you can use the standard Java APIs in your build logic, such as custom task types and plugins. It also makes it easy to run Gradle on different platforms. Note that Gradle is not limited to building just JVM projects."
    And the user clicks accordion "Conventions"
    And the user can see accordion "Conventions" description "Gradle makes common types of projects - such as Java projects - easy to build by implementing conventions. By applying the appropriate plugins, we can easily end up with slim build scripts for many projects. Gradle allows to override the conventions, add custom tasks, and make many other build customizations."
    And the user clicks accordion "Extensibility"
    And the user can see accordion "Extensibility" description "Gradle can be extended to provide our own task types and build model e.g., build concepts such as flavors and build types."
    And the user clicks accordion "IDE Support"
    And the user can see accordion "IDE Support" description "Several major IDEs allow you to import Gradle builds and interact with them: Android Studio, IntelliJ IDEA, Eclipse, NetBeans, Visual Studio."
    And the user clicks accordion "Insight"
    And the user can see accordion "Insight" description "Build scans provide extensive information about a build run that you can use to identify build issues. Scans can also be shared which can be very useful for e.g., if we need help fixing a build issue."
    And the user clicks accordion "1. Gradle is a general-purpose build tool"
    And the user can see accordion "1. Gradle is a general-purpose build tool" description "Gradle has been designed to be flexible enough to allow us to build any kind of software. However currently Gradle only supports Maven and Ivy compatible repositories as dependency management options. Gradle makes it easy to build common types of projects e.g., Java libraries by adding conventions and prebuilt functionality through plugins. Custom plugins are supported."
    And the user clicks accordion "2. The core model is based on tasks"
    And the user can see accordion "2. The core model is based on tasks" description "Gradle models its builds as Directed Acyclic Graphs (DAGs) of tasks. This means that a build configures a set of tasks and wires them together - based on their dependencies - to create a DAG. Once the task graph has been created, Gradle determines which tasks need to run in which order and then proceeds to execute them. Figure 1 shows a task graph and Figure 2 shows a build process for a typical Android app module. Almost any build process can be modelled as a graph of tasks, which is one of the reasons why Gradle is so flexible. And that task graph can be defined by both plugins and your own build scripts, with tasks linked together via the task dependency mechanism. Tasks themselves consist of Actions (pieces of work e.g., copy files, compile source etc), Inputs (values, files, and directories that the actions use or operate on) and Outputs (files and directories that the actions modify or generate). In fact, all the above are optional depending on what the task needs to do. Some tasks e.g., standard lifecycle tasks don’t have any actions but just aggregate multiple tasks together and we can choose which task to run."
    And the user clicks accordion "3. Build phases "
    And the user can see accordion "3. Build phases " description 
    """
    Gradle evaluates and executes build scripts in 3 phases which form Gradle’s Build Lifecycle:
    Initialization: Sets up the environment for the build and determine which projects will take part in it.
    Configuration: Constructs and configures the task graph for the build and then determines which tasks need to run and in which order, based on the task the user wants to run. Everything involved in the configuration phase is evaluated on each build run. That is why we should avoid expensive work during the configuration phase.
    Execution: Runs the tasks selected at the end of the configuration phase.
    """
    And the user clicks accordion "5. Build scripts operate against an API " 
    And the user can see accordion "5. Build scripts operate against an API " description 
    """
    There is a common misunderstanding that Gradle’s power comes from the fact that its build scripts are code. This is far from the truth. It’s the underlying model and API that provide the power. We should avoid putting much - if any - imperative logic in build scripts. Yet there is one area in which it is useful to view a build script as executable code i.e., in understanding how the syntax of the build script maps to Gradle’s API. As Gradle runs on the JVM, build scripts can also use the standard Java API. Groovy build scripts can additionally use the Groovy APIs while Kotlin build scripts can use the Kotlin ones.
    """