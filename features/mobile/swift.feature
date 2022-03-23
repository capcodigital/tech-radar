Feature: Swift content page

Background: Navigate to the home page
    Given the user navigates to "http://localhost:3000/"

Scenario: Swift page content appears as expected
    When the user clicks "View Our Tech Radar"
    And the user clicks the hamburger menu
    And the user navigates to "Mobile" via the hamburger menu
    And the user navigates to category "Swift"
    Then the user should see "Swift is a programming language released by Apple Inc. in 2014 and it was made open-source in 2015. It is used for developing applications for iOS, Mac, Apple TV and Apple Watch devices, replacing Objective-C as the preferred language. It has a light syntax making it modern and easier to learn. It is more compact, and as well as being 2.6 times faster than Objective-C, it is also type-safe and memory-safe."
    And the user should see "PoC Engineering Resourcing App was created using Swift. The main aim of the application is to allow quick filtering of available team members for a project based on their specialism and available date. The app fetches and parses the data from a table in a Confluence page. The video below shows the basic functionality."
    And the user clicks accordion "Playground"
    And the user can see accordion "Playground" description "Swift has a “playground” which can be used on the Xcode IDE or accessed through the browser. It enables developers to code and view the results of their code immediately. The Swift code is compiled and run continuously as the programmer writes their code and the results are seen line-by-line as it is being executes. It is also possible to view the contents and types of variables during the execution, making the Playground a useful tool for learning Swift and testing out code snippets."
    And the user clicks accordion "Swift Package Manager"
    And the user can see accordion "Swift Package Manager" description "A cross-platform tool used for building, running, testing and packaging Swift libraries and executables. Packages are the most convenient way to share libraries and source code. The Swift Package Manager itself is built with Swift and included in the Swift open-source project as a package."
    And the user clicks accordion "SwiftUI"
    And the user can see accordion "SwiftUI" description "SwiftUI is a toolkit for declarative user interface design (from iOS 13 onwards) as the improved alternative from imperative UI which caused problems around state management. With SwiftUI we declare the rules for each component to follow and it will move between user interface layouts to update the UI as defined."
    And the user clicks accordion "XCTest and XCUITest  "
    And the user can see accordion "XCTest and XCUITest  " description "These two are integral automation frameworks by Apple that come automatically with Xcode IDE for testing iOS applications. XCTest is a unit testing framework, whereas XCUITest is a User Interface (UI) testing framework built on the top of XCTest."
    And the user clicks accordion "Appium"
    And the user can see accordion "Appium" description "Appium is an open-source test automation framework for use with native, hybrid and mobile web apps. It drives iOS, Android, and Windows apps using the WebDriver protocol."
    And the user clicks accordion "EarlGrey "
    And the user can see accordion "EarlGrey " description "An open-source native test framework used for UI test automation in iOS. It gives QAs access to enhanced synchronization features for stable UI testing. QA engineers can directly run test scripts from Xcode or command line as EarlGrey operates in conjunction with XCTest frameworks and is also integrated with Xcode’s test navigator."
