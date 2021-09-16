const techContent = [
  {
    technology: "React Native",
    docsLink: "https://reactnative.dev/docs/getting-started",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
  },
  {
    technology: "Gradle",
    docsLink: "https://docs.gradle.org/current/userguide/userguide.html",
    intro:
      "<a href='https://docs.gradle.org/current/userguide/userguide.html'>Gradle</a> is an open-source build automation tool capable of building almost any type of software. The following are some of its most important advantages & features: ",
    content: [
      {
        name: "",
        intro: "",
        data: [
          {
            name: "High performance",
            description:
              "Gradle avoids unnecessary work by only running the tasks that need to run because their inputs or outputs have changed. A build cache can be used to enable the reuse of task outputs from previous runs or even from a different machine (with a shared build cache). ",
          },
          {
            name: "JVM foundation",
            description:
              "Gradle runs on the JVM and requires a Java Development Kit (JDK) installed to use it. This is a bonus for users familiar with the Java platform as you can use the standard Java APIs in your build logic, such as custom task types and plugins. It also makes it easy to run Gradle on different platforms. Note that Gradle is not limited to building just JVM projects. ",
          },
          {
            name: "Conventions",
            description:
              "Gradle makes common types of projects - such as Java projects - easy to build by implementing conventions. By applying the appropriate plugins, we can easily end up with slim build scripts for many projects. Gradle allows to override the conventions, add custom tasks, and make many other build customizations. ",
          },
          {
            name: "Extensibility",
            description:
              "Gradle can be extended to provide our own task types and build model e.g., build concepts such as <b>flavors</b> and <b>build types</b>. ",
          },
          {
            name: "IDE Support",
            description:
              "Several major IDEs allow you to import Gradle builds and interact with them: Android Studio, IntelliJ IDEA, Eclipse, NetBeans, Visual Studio.",
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
            name: "4. High Extensibility",
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
        name: "Gradle & Android ",
        intro:
          "By default, <a href='https://docs.gradle.org/current/samples/sample_building_android_apps.html'>Android</a> projects are handled by the Gradle build system. If we create a new project in Android studio the Gradle build scripts are automatically created. Android studio provides the Gradle runtime, hence no additional installation is required. If we press the run button in Android Studio, it triggers the corresponding Gradle task and starts the application. We can also run Gradle via the command line. Gradle provides a wrapper script which allows you to run Gradle without local installation. <br/><a href='https://developer.android.com/studio/build'>Gradle build process</a> of a typical Android app module (Figure 2) involves 4 steps:",
        data: [
          {
            name: "",
            description:
              "<strong>1.</strong> The compilers convert your source code into DEX (Dalvik Executable) files, which include the bytecode that runs on Android devices, and everything else into compiled resources. ",
          },
          {
            name: "",
            description:
              "<strong>2.</strong> The packager combines the DEX files and compiled resources into an APK or AAB, depending on the chosen build target. ",
          },
          {
            name: "",
            description:
              "<strong>3.</strong> The packager signs your APK or AAB using either the debug or release keystore. Android Studio automatically configures new projects with a debug keystore. ",
          },
          {
            name: "",
            description:
              "<strong>4.</strong> The packager uses the zipalign tool to optimize your app to use less memory when running on a device. <br/> When build ends we have a debug or release APK or AAB of our app that we can deploy, test, or release. ",
          },
          {
            name: "Kotlin script (KTS)",
            description:
              "Android Gradle plugin 4.0 added support for using Kotlin script <a href='https://developer.android.com/studio/build/migrate-to-kts'>(KTS)</a> in a Gradle build configuration instead of <a href='https://groovy-lang.org/'>Groovy</a>, which is traditionally used in Gradle. In the future KTS will be preferred over Groovy for writing Gradle scripts as Kotlin is more readable and offers better compile-time checking and IDE support. Currently KTS offers better integration in Android Studio’s code editor compared to Groovy but builds using KTS are slower, so migrating to KTS should be considered with build performance in mind. ",
          },
        ],
      },
      {
        name: "Gradle & iOS ",
        intro:
          "The <a href='https://docs.gradle.org/current/userguide/xcode_plugin.html'>Gradle Xcode plugin</a> is a plugin for the Gradle build management tool that adds support for building <a href='https://docs.gradle.org/current/samples/sample_building_swift_applications.html'>Xcode projects</a>. It provides an easy and reliable build process for iOS or macOS applications. The build can be executed on the developer’s machine and integrate smoothly with various build servers like Jenkins etc. The Xcode Plugin generate files that are used by the Xcode IDE to open Gradle projects into Xcode. The generated Xcode project delegates build actions to Gradle. The plugin not only builds the app, but also supports code signing, packaging and distribution. These can be configured in one configuration file. <br/>The Xcode Plugin adds several tasks to the project. The main tasks are the xcode, cleanXcode and openXcodetasks. The following diagram shows the relationships between tasks added by this plugin. ",
        data: [],
      },
    ],
    examples: [],
    reference: ["https://ionicframework.com/docs"],
  },
  {
    technology: "Swift",
    docsLink: "https://swift.org/documentation/",
    intro:
      "Swift is a programming language released by Apple Inc. in 2014 and it was made open-source in 2015. It is used for developing applications for iOS, Mac, Apple TV and Apple Watch devices, replacing Objective-C as the preferred language. It has a light syntax making it modern and easier to learn. It is more compact, and as well as being 2.6 times faster than Objective-C, it is also type-safe and memory-safe. ",
    content: [
      {
        name: "Tools and Features",
        intro: "",
        data: [
          {
            name: "Playground",
            description:
              "Swift has a “playground” which can be used on the Xcode IDE or accessed through the <a href='http://online.swiftplayground.run/'>browser</a>. It enables developers to code and view the results of their code immediately. The Swift code is compiled and run continuously as the programmer writes their code and the results are seen line-by-line as it is being executes. It is also possible to view the contents and types of variables during the execution, making the Playground a useful tool for learning Swift and testing out code snippets. ",
          },
          {
            name: "Swift Package Manager",
            description:
              "A cross-platform tool used for building, running, testing and packaging Swift libraries and executables. Packages are the most convenient way to share libraries and source code. The Swift Package Manager itself is built with Swift and included in the Swift open-source project as a package. ",
          },
          {
            name: "SwiftUI",
            description:
              "SwiftUI is a toolkit for declarative user interface design (from iOS 13 onwards) as the improved alternative from imperative UI which caused problems around state management. With SwiftUI we declare the rules for each component to follow and it will move between user interface layouts to update the UI as defined. ",
          },
        ],
      },
      {
        name: "Testing",
        intro: "",
        data: [
          {
            name: "XCTest and XCUITest  ",
            description:
              "These two are integral automation frameworks by Apple that come automatically with Xcode IDE for testing iOS applications. XCTest is a unit testing framework, whereas XCUITest is a User Interface (UI) testing framework built on the top of XCTest.",
          },
          {
            name: "Appium",
            description:
              "<a href='https://appium.io/'>Appium</a> is an open-source test automation framework for use with native, hybrid and mobile web apps. It drives iOS, Android, and Windows apps using the WebDriver protocol.",
          },
          {
            name: "EarlGrey ",
            description:
              "An open-source native test framework used for UI test automation in iOS. It gives QAs access to enhanced synchronization features for stable UI testing. QA engineers can directly run test scripts from Xcode or command line as EarlGrey operates in conjunction with XCTest frameworks and is also integrated with Xcode’s test navigator. ",
          },
        ],
      },
    ],
    examples: [
      {
        name: "Engineering Resourcing App",
        imageUrl: "",
        description:
          "PoC Engineering Resourcing App was created using Swift. The main aim of the application is to allow quick filtering of available team members for a project based on their specialism and available date. The app fetches and parses the data from a table in a Confluence page. The video below shows the basic functionality. ",
      },
    ],
    reference: ["https://swift.org/documentation/", "https://appium.io/"],
  },
  {
    technology: "Kotlin",
    docsLink: "https://kotlinlang.org/docs/home.html",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
  },
  {
    technology: "Java Mobile",
    docsLink: "https://docs.oracle.com/en/java/",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
  },
  {
    technology: "Ionic",
    docsLink: "https://ionicframework.com/docs",
    intro:
      "<a href='https://ionicframework.com/docs'>Ionic</a> is an open-source SDK primarily used for hybrid mobile app development. With its initial release in 2013, which was built on top of AngularJS and Cordova. It has since evolved to provide tools and services that allow developers to build desktop and progressive web applications in conjunction with mobile platforms. It's easy to learn, and integrates with other libraries and frameworks, such as Angular, React, or Vue. Alternatively, it can be used standalone without any frontend framework using a simple script include. ",
    content: [
      {
        name: "State Management",
        intro: "",
        data: [
          {
            name: "When using Angular",
            description:
              "NgRX and NGXS are the most commonly used state management libraries when developing Ionic applications with Angular. Both are modelled on redux, and so work similar when managing state in that they both involve doing the standard steps of defining, dispatching and handling of the state. ",
          },
          {
            name: "When using React ",
            description:
              "React Redux and MobX are the most commonly used state management libraries with developing Ionic applications with React. Others include Recoil and Zustand. React Redux is the original Redux state management library for React and works by providing a core store that all component can access with the given permission. MobX works in a similar way, but has the added benefit of trying to reduce the boilerplate code that comes from defining a Redux store. ",
          },
        ],
      },
      {
        name: "Data Storage",
        intro: "",
        data: [
          {
            name: "Ionic Secure Storage ",
            description:
              "Ionic Secure Storage is the official storage solution developed by the Ionic team. It’s originally based on SQLite with encryption built in. Its benefits include query support, browser availability and high-performance that makes it ideal for applications with high volumes of traffic. Since it’s an officially supported product by Ionic, it’s likely that it will continue to receive long term support into the foreseeable future. ",
          },
          {
            name: "IndexedDB",
            description:
              "IndexedDB is a storage engine natively supported in browsers. It allows for query support and is also free to use. However, there is no support for encryption and there is also a limited storage capacity. ",
          },
          {
            name: "Ionic Storage",
            description:
              "Ionic Storage is an open-source utility with a simple storage solution centred around key/value API. It offers cross-platform support and allows for encryption when used with the Ionic Secure Storage driver. However, it offers no query support nor does it offer any relational data support. ",
          },
        ],
      },
      {
        name: "Animations",
        intro:
          "Ionic Animations is a utility that allows developers to build complex animations in a platform agnostic manner. Developers do not need to be using a particular framework such as React or Angular. If developers have access to v5.0 or greater of Ionic Framework, they will have access to all Ionic Animations.  ",
        data: [],
      },
      {
        name: "Testing",
        intro:
          "Testing is supported on React and Angular. When an ionic/angular application is generated using the Ionic CLI, it is automatically set up for unit testing and end-to-end testing of the application. There are four ways to test your app as you develop: ",
        data: [
          {
            name: "Desktop Browser Testing",
            description:
              "Run the command <code>ionic serve</code> in the root terminal - This will start a live-reload server for your project. When changes are made to any HTML, CSS, or JavaScript files, the browser will automatically reload when the files are saved.",
          },
          {
            name: "Simulator Testing ",
            description:
              "Test in the simulator using the Cordova commands <code>ionic cordova build ios</code> followed by <code>ionic cordova emulate ios</code>. To test android then replace ‘iOS’ with android.  Once changes have been made to the folder, run command <code>ionic cordova prepare ios</code>, which will update the ios specific project with the code from the www folder.  ",
          },
          {
            name: "Mobile browser testing",
            description:
              "Testing and debugging directly in mobile browser, for iOS users through web inspector in Safari, and for android through chrome dev tools. One caveat of mobile browser testing is that it you may not get the truest app experience. Mobile apps are meant for browsing not testing, and sometimes when testing it then adds functionality that conflicts with the app.",
          },
          {
            name: "Native App",
            description:
              "To test as a native app. For iOS apps, to test via dev tools such as Xcode there is a premium charge. For android apps, you can run the tests using the Cordova command <code>ionic cordova run android</code> .",
          },
        ],
      },
    ],
    examples: [],
    reference: ["https://ionicframework.com/docs"],
  },
  {
    technology: "Flutter",
    docsLink: "https://flutter.dev/docs",
    intro:
      "Flutter is an SDK created by Google that has been open-sourced since its alpha release in 2017 and is used to develop user interfaces. It utilises the Dart programming language that is able to build and deploy cross-platform applications for mobile, web and desktop, all of which can be done from a single codebase. Its first stable release was in December 2018 and as of June 2021 has over 120,000 stars on GitHub, making it one of the most popular repositories for software development. ",
    content: [
      {
        name: "Tools and Features",
        intro: "",
        data: [
          {
            name: "Hot Reload",
            description:
              "Native level applications normally need to be recompiled with updating code. <a href='https://flutter.dev/docs/development/tools/hot-reload'>Flutter’s hot reload</a> feature aims to bypass this by adding updated source code files directly into the running Dart Virtual Machine. When run, the widget tree is also rebuilt automatically.  ",
          },
          {
            name: "DevTools",
            description:
              "<a href='https://flutter.dev/docs/development/tools/devtools/overview'>DevTools</a> is a collection of tools for Flutter and Dart that are used for performance analysis and debugging of your application. User interface inspection, debugging of memory issues and network profiling are among the many things you can do with DevTools. ",
          },
          {
            name: "FlutterFix",
            description:
              "<a href='https://flutter.dev/docs/development/tools/flutter-fix'>Flutter Fix</a> was introduced in Flutter 2 during the Flutter Engage conference. It allows you to automatically clean up your codebase by detecting where deprecated APIs have been used. ",
          },
        ],
      },
      {
        name: "State Management",
        intro:
          "Flutter uses a declarative approach to state management. This is the reverse to other SDKs, such as Android and iOS, which use an imperative framework. A declarative model means that the UI is continuously re-built as a function of the current state.",
        data: [
          {
            name: "Provider",
            description:
              "This is the approach recommended by Google. <a href='https://pub.dev/packages/provider'>Provider</a> uses a wrapper around <a href='https://api.flutter.dev/flutter/widgets/InheritedWidget-class.html'>InheritiedWidget</a> that allows you to access data wherever you are in the widget tree.  ",
          },
          {
            name: "Redux",
            description:
              "A state container approach that is likely familiar to many web developers. <a href='https://pub.dev/packages/flutter_redux'>Redux</a> provides a set of utilities that allow you create a Redux Store that widgets can use. ",
          },
          {
            name: "BLoC",
            description:
              "One of the more popular state management approaches in current times. <a href='https://bloclibrary.dev/#/'>BLoC</a> stands for business logic controller and allows easy separation of your presentation layer from your business logic.",
          },
        ],
      },
      {
        name: "Networking & Http",
        intro:
          "Fetching data from the internet is necessary for most applications. Luckily, Flutter provides tools for this type of work.  ",
        data: [
          {
            name: "Http",
            description:
              "<a href='https://pub.dev/packages/http'>This package</a> aims to make networking simpler. It provides a set of high-level functions and classes that make it easy to consume HTTP resources. It’s multi-platform and supports mobile, desktop and the browser. ",
          },
          {
            name: "Dio",
            description:
              "<a href='https://pub.dev/packages/dio'>Dio</a> is another http client that provides features such as interceptors, global configuration, form data, request cancellation, file downloading and timeout. ",
          },
        ],
      },
      {
        name: "Testing",
        intro: "",
        data: [
          {
            name: "Mockito",
            description:
              "A mock library inspired by the popular <a href='https://github.com/mockito/mockito'>mocking framework for Java</a>. <a href='https://pub.dev/packages/mockito'>Mockito</a> generates mocks whose behaviour and responses can be defined when specific methods are called.",
          },
          {
            name: "Bloc_test",
            description:
              "A common testing framework used to test <a href='https://pub.dev/packages/bloc_test'>BLoCs</a>. It works by allowing you to create a mock of your BLoC and then stubbing the state stream to compare expected results.",
          },
        ],
      },
    ],
    examples: [
      {
        name: "Flutter Confluence",
        imageUrl: "",
        description:
          "An application demonstrating the use of Flutter for cross-platform application development. This application allows Capco users to access certain Confluence pages from their mobile device or their browser. View the source code <a href='https://github.com/capcodigital/flutter-confluence'>here</a>.",
      },
    ],
    reference: [
      "https://flutter.dev/",
      "https://pub.dev/packages/dio",
      "https://pub.dev/packages/http/versions/0.13.1",
      "https://pub.dev/packages/provider",
      "https://flutter.dev/docs/get-started/flutter-for/declarative",
      "https://flutter.dev/docs/development/tools/flutter-fix",
      "https://gitstar-ranking.com/repositories",
      "https://flutter.dev/docs/development/tools/devtools/overview",
      "https://flutter.dev/docs/development/tools/hot-reload",
    ],
  },
];
export default techContent;
