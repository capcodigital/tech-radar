Feature: React Native content page

Background: Navigate to the home page
    Given the user navigates to Tech Radar

Scenario: React Native content appears as expected
    When the user clicks "View Our Tech Radar"
    And the user clicks the hamburger menu
    And the user navigates to "Mobile" via the hamburger menu
    And the user navigates to category "React Native"
    Then the user should see "React Native was created in 2015 by Facebook and runs on React, the framework is a popular open-source library for building user interfaces with JavaScript. This framework is UI focused and helps to create real and exciting mobile apps, which is supportable for both android and iOS platforms, making it currently the most popular cross platform technology."
    And the user should see "The biggest feature and benefit is the short development time. Developers only need to write one set of code in JavaScript which provides an opportunity to share the codebase not only between mobile platforms but also React web applications. React Native also supports platforms such as android TV, macOS, tvOS, Web, Windows and UWP."
    And the user clicks accordion "Community Support"
    And the user can see accordion "Community Support" description "As this is an open-source framework, developers have loads of resources at their disposal and a huge community to get information from."
    And the user clicks accordion "Code Reusability "
    And the user can see accordion "Code Reusability " description "React Native offers pre-developed components and re-usable native code, which saves time and money when build projects."
    And the user clicks accordion "Cost Effective"
    And the user can see accordion "Cost Effective" description "Based on the re-useability of code and the fact that React Native supports iOS and android, less people and time is needed to build and deploy apps."
    And the user clicks accordion "Live Reloading"
    And the user can see accordion "Live Reloading" description "React Native allows you to make changes in the code and see the result live on the app screen"
    And the user clicks accordion "Simplified UI"
    And the user can see accordion "Simplified UI" description "The aim of React Native is to provide a simplified and uncomplicated user interface through high-speed responsiveness."
    And the user clicks accordion "Basic Components"
    And the user can see accordion "Basic Components" description "Including view layouts, a component for displaying text and one for showing images. The basic components also include Text Input, Scroll View, and Stylesheet."
    And the user clicks accordion "User Interface" 
    And the user can see accordion "User Interface" description "React Native’s user interface controls will render on any platform."
    And the user clicks accordion "List Views" 
    And the user can see accordion "List Views" description "Unlike Scroll View, list view components only render elements currently"
    And the user clicks accordion "Android Components and APIs" 
    And the user can see accordion "Android Components and APIs" description "Including Back Handler, Drawer Layout Android, Toast Android, and Permissions Android."
    And the user clicks accordion "Continuous Improvements" 
    And the user can see accordion "Continuous Improvements" description "The framework is evolving rapidly, with new updates being released weekly. The changes can be extensive meaning more time spent on updating existing modules and features."
    And the user clicks accordion "The Competition" 
    And the user can see accordion "The Competition" description "Whilst the benefit of RN is having one codebase for multiple platforms, the trade-off is the performance. There are traditional native languages such as Java, Kotlin, Swift and Objective –C that provide a higher level of performance, which is particularly important for apps using 3D/AR/VR technology and data or animation-heavy applications."
    And the user clicks accordion "Add on PWA for max reach" 
    And the user can see accordion "Add on PWA for max reach" description "Combining native apps with progressive web app allows the application to have the max reach possible."