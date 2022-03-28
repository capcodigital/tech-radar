Feature: Flutter content page

Background: Navigate to the home page
    Given the user navigates to "http://localhost:3000/"

Scenario: Flutter content appears as expected
    When the user clicks "View Our Tech Radar"
    And the user clicks the hamburger menu
    And the user navigates to "Mobile" via the hamburger menu
    And the user navigates to category "Flutter"
    Then the user should see "Flutter is an SDK created by Google that has been open-sourced since its alpha release in 2017 and is used to develop user interfaces. It utilises the Dart programming language that is able to build and deploy cross-platform applications for mobile, web and desktop, all of which can be done from a single codebase. Its first stable release was in December 2018 and as of June 2021 has over 120,000 stars on GitHub, making it one of the most popular repositories for software development."
    And the user should see "Flutter uses a declarative approach to state management. This is the reverse to other SDKs, such as Android and iOS, which use an imperative framework. A declarative model means that the UI is continuously re-built as a function of the current state."
    And the user should see "Fetching data from the internet is necessary for most applications. Luckily, Flutter provides tools for this type of work."
    And the user should see "An application demonstrating the use of Flutter for cross-platform application development. This application allows Capco users to access certain Confluence pages from their mobile device or their browser. View the source code "
    And the user clicks accordion "Hot Reload"
    And the user can see accordion "Hot Reload" description "Native level applications normally need to be recompiled with updating code. Flutter’s hot reload feature aims to bypass this by adding updated source code files directly into the running Dart Virtual Machine. When run, the widget tree is also rebuilt automatically."
    And the user clicks accordion "DevTools"
    And the user can see accordion "DevTools" description "DevTools is a collection of tools for Flutter and Dart that are used for performance analysis and debugging of your application. User interface inspection, debugging of memory issues and network profiling are among the many things you can do with DevTools."
    And the user clicks accordion "FlutterFix"
    And the user can see accordion "FlutterFix" description "Flutter Fix was introduced in Flutter 2 during the Flutter Engage conference. It allows you to automatically clean up your codebase by detecting where deprecated APIs have been used."
    And the user clicks accordion "Provider"
    And the user can see accordion "Provider" description "This is the approach recommended by Google. Provider uses a wrapper around InheritiedWidget that allows you to access data wherever you are in the widget tree."
    And the user clicks accordion "Redux"
    And the user can see accordion "Redux" description "A state container approach that is likely familiar to many web developers. Redux provides a set of utilities that allow you create a Redux Store that widgets can use."
    And the user clicks accordion "BLoC"
    And the user can see accordion "BLoC" description "One of the more popular state management approaches in current times. BLoC stands for business logic controller and allows easy separation of your presentation layer from your business logic."
    And the user clicks accordion "Http"
    And the user can see accordion "Http" description "This package aims to make networking simpler. It provides a set of high-level functions and classes that make it easy to consume HTTP resources. It’s multi-platform and supports mobile, desktop and the browser."
    And the user clicks accordion "Dio"
    And the user can see accordion "Dio" description "Dio is another http client that provides features such as interceptors, global configuration, form data, request cancellation, file downloading and timeout."
    And the user clicks accordion "Mockito"
    And the user can see accordion "Mockito" description "A mock library inspired by the popular mocking framework for Java. Mockito generates mocks whose behaviour and responses can be defined when specific methods are called."
    And the user clicks accordion "Mockito"
    And the user can see accordion "Mockito" description "A mock library inspired by the popular mocking framework for Java. Mockito generates mocks whose behaviour and responses can be defined when specific methods are called."


