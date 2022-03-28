@test1
Feature: Typescript content page

Background: Navigate to the home page
    Given the user navigates to "http://localhost:3000/"

Scenario: TypeScript content appears as expected
    When the user clicks "View Our Tech Radar"
    And the user clicks the hamburger menu
    And the user navigates to "Frontend" via the hamburger menu
    And the user navigates to category "TypeScript"