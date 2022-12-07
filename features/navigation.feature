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
    | Category           | Topic          | Partial Link                           |
    | Mobile             | React Native   | /technology/mobile/react-native        |
    | Mobile             | Gradle Mobile  | /technology/mobile/gradle-mobile       |
    | Mobile             | Swift          | /technology/mobile/swift               |
    | Mobile             | Java Mobile    | /technology/mobile/java-mobile         |
    | Mobile             | Ionic          | /technology/mobile/ionic               | 
    | Mobile             | Flutter        | /technology/mobile/flutter             |
    | Frontend           | React          | /technology/frontend/react             |
    | Frontend           | Flutter        | /technology/frontend/flutter           |
    | Frontend           | TypeScript     | /technology/frontend/typescript        |
    | Backend            | Java           | /technology/backend/java               |
    | Backend            | Scala          | /technology/backend/scala              |
    | Backend            | Node           | /technology/backend/node               |
    | Backend            | Python         | /technology/backend/python             |
    | Cloud & Platforms  | AWS            | /technology/cloud-&-platforms/aws      |
    | Cloud & Platforms  | Azure          | /technology/cloud-&-platforms/azure    |
    | Quality Engineering| Cypress        | /technology/quality-engineering/cypress|
    | Data Engineering   | Postgres       | /technology/data-engineering/postgres         | 
    | Data Engineering   | MongoDB        | /technology/data-engineering/mongodb          | 
    | Data Engineering   | MySQL          | /technology/data-engineering/mysql            | 
    | Data Engineering   | Oracle         | /technology/data-engineering/oracle           | 
    | DevOps             | Jenkins        | /technology/devops/jenkins             | 
    | DevOps             | SonarQube      | /technology/devops/sonarqube           | 