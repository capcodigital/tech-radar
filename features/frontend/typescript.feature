Feature: Typescript content page

Background: Navigate to the home page
    Given the user navigates to Tech Radar

Scenario: TypeScript content appears as expected
    When the user clicks "View Our Tech Radar"
    And the user clicks the hamburger menu
    And the user navigates to "Frontend" via the hamburger menu
    And the user navigates to category "TypeScript"
    And the user should see "TypeScript is an object-oriented scripting language invented and maintained by Microsoft. It is a well-structured and concise language which makes it a perfect choice for large and complex projects. TypeScript is a superset of JavaScript with optional static typing and compiles to plain JavaScript. Therefore, it can used on frontend for both desktop and mobile applications, in automation testing, on backend in Node.js as well as create and provision AWS infrastructure deployments via AWS CDK."
    And the user should see "Types enhances code quality with meaning fewer bugs which helps teams achieve better performance and faster software releases"
    And the user should see "The first purpose of testing is to prevent bugs from releasing to production. Testing ensures the features are functioning correctly for complex components and modular applications and is required for the effective performance of a software application or product making it more robust and less prone to error."
    And the user should see "A React, TypeScript web application that provides a more readable format of our Engineering Competency Framework to help explain performance expectations. Unit tests are written in Jest and React Testing Library, E2E tests are written in Cypress and are automated via GitHub Actions."
    And the user clicks accordion "Everyday Types"
    And the user can see accordion "Everyday Types" description "Boolean, String, Number, Array, Object, any, function, interface, null, undefined, void"
    And the user clicks accordion "Other Interesting Types"
    And the user can see accordion "Other Interesting Types" description 
    """
    Unknown: The type-safe counterpart of any.
    Never: Indicates the values that will never occur.
    Union: Combines existing types to build a new one using a variety of operators.
    Type Aliases: Allows developers to define custom types.
    """
    And the user clicks accordion "Type Checking"
    And the user can see accordion "Type Checking" description "Checking types at compile time helps developers find bugs before their code runs in the browser saving the time spent on debugging errors that would normally appear only at run time if they used plain JavaScript."
    And the user clicks accordion "Easier Code Management"
    And the user can see accordion "Easier Code Management" description "Defining types can serve as a form of documentation for data structures. This helps teams to introduce new developers to the project faster as new engineers can get all the information directly from the development environment."
    And the user clicks accordion "Jest"
    And the user can see accordion "Jest" description "Jest is an open-source testing framework. It comes with built-in mocking and assertion libraries, which also runs your tests concurrently in parallel, providing faster test execution."
    And the user clicks accordion "Mocha"
    And the user can see accordion "Mocha" description "Mocha is a JavaScript test framework running on Node.js and in the browser. It is often used with external assertion libraries such as chai."
    And the user clicks accordion "Jasmine"
    And the user can see accordion "Jasmine" description "Jasmine is a popular Behaviour Driven Development testing framework for JavaScript/TypeScript. It’s great for websites and Node.js applications"