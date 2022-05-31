@a
Feature: Navigation

Background: Navigate to the home page
    Given the user navigates to Tech Radar

Scenario Outline: Checking Mobile category links
  When the user clicks "View Our Tech Radar"
  And the user clicks the hamburger menu
  And the user navigates to <Category> via the hamburger menu
  And the user navigates to category <Topic>
  Then the following url <Partial Link> should appear

  Examples:
    | Category | Topic          | Parial Link                     |
    | Mobile   | React Native   | /technology/mobile/react-native |