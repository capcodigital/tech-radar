Feature: Ionic content page

Background: Navigate to the home page
    Given the user navigates to Tech Radar

Scenario: Ionic content page appears as expected
    When the user clicks "View Our Tech Radar"
    And the user clicks the hamburger menu
    And the user navigates to "Mobile" via the hamburger menu
    And the user navigates to category "Ionic"
    Then the user should see "Ionic is an open-source SDK primarily used for hybrid mobile app development. With its initial release in 2013, which was built on top of AngularJS and Cordova. It has since evolved to provide tools and services that allow developers to build desktop and progressive web applications in conjunction with mobile platforms. It's easy to learn, and integrates with other libraries and frameworks, such as Angular, React, or Vue. Alternatively, it can be used standalone without any frontend framework using a simple script include."
    And the user should see "Ionic Animations is a utility that allows developers to build complex animations in a platform agnostic manner. Developers do not need to be using a particular framework such as React or Angular. If developers have access to v5.0 or greater of Ionic Framework, they will have access to all Ionic Animations."
    And the user should see "Testing is supported on React and Angular. When an ionic/angular application is generated using the Ionic CLI, it is automatically set up for unit testing and end-to-end testing of the application. There are four ways to test your app as you develop:"
    And the user clicks accordion "When using Angular"
    And the user can see accordion "When using Angular" description "NgRX and NGXS are the most commonly used state management libraries when developing Ionic applications with Angular. Both are modelled on redux, and so work similar when managing state in that they both involve doing the standard steps of defining, dispatching and handling of the state."
    And the user clicks accordion "When using React "
    And the user can see accordion "When using React " description "React Redux and MobX are the most commonly used state management libraries with developing Ionic applications with React. Others include Recoil and Zustand. React Redux is the original Redux state management library for React and works by providing a core store that all component can access with the given permission. MobX works in a similar way, but has the added benefit of trying to reduce the boilerplate code that comes from defining a Redux store."
    And the user clicks accordion "Ionic Secure Storage "
    And the user can see accordion "Ionic Secure Storage " description "Ionic Secure Storage is the official storage solution developed by the Ionic team. It’s originally based on SQLite with encryption built in. Its benefits include query support, browser availability and high-performance that makes it ideal for applications with high volumes of traffic. Since it’s an officially supported product by Ionic, it’s likely that it will continue to receive long term support into the foreseeable future."
    And the user clicks accordion "IndexedDB"
    And the user can see accordion "IndexedDB" description "IndexedDB is a storage engine natively supported in browsers. It allows for query support and is also free to use. However, there is no support for encryption and there is also a limited storage capacity."
    And the user clicks accordion "Ionic Storage"
    And the user can see accordion "Ionic Storage" description "Ionic Storage is an open-source utility with a simple storage solution centred around key/value API. It offers cross-platform support and allows for encryption when used with the Ionic Secure Storage driver. However, it offers no query support nor does it offer any relational data support."
    And the user clicks accordion "Desktop Browser Testing"
    And the user can see accordion "Desktop Browser Testing" description "Run the command ionic serve in the root terminal - This will start a live-reload server for your project. When changes are made to any HTML, CSS, or JavaScript files, the browser will automatically reload when the files are saved."
    And the user clicks accordion "Simulator Testing "
    And the user can see accordion "Simulator Testing " description "Test in the simulator using the Cordova commands ionic cordova build ios followed by ionic cordova emulate ios. To test android then replace ‘iOS’ with android. Once changes have been made to the folder, run command ionic cordova prepare ios, which will update the ios specific project with the code from the www folder."
    And the user clicks accordion "Mobile Browser Testing"
    And the user can see accordion "Mobile Browser Testing" description "Testing and debugging directly in mobile browser, for iOS users through web inspector in Safari, and for android through chrome dev tools. One caveat of mobile browser testing is that it you may not get the truest app experience. Mobile apps are meant for browsing not testing, and sometimes when testing it then adds functionality that conflicts with the app."
    And the user clicks accordion "Native App"
    And the user can see accordion "Native App" description "To test as a native app. For iOS apps, to test via dev tools such as Xcode there is a premium charge. For android apps, you can run the tests using the Cordova command ionic cordova run android ."