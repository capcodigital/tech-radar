Feature: Jenkins content page

Background: Navigate to the home page
    Given the user navigates to Tech Radar

Scenario: Jenkins content appears as expected
    When the user clicks "View Our Tech Radar"
    And the user clicks the hamburger menu
    And the user navigates to "DevOps" via the hamburger menu
    And the user navigates to category "Jenkins"
    And the user should see "Jenkins is a leading open source automation server. It provides an extensive marketplace of plugins to support building, deploying and automating any project as per your specific needs."
    And the user should see "Jenkins is the most widely adopted solution for continuous delivery, thanks to its extensibility and a vibrant, active community. The Jenkins community offers thousands of plugins that enable Jenkins to integrate with virtually any tool, including all of the best-of-breed solutions used throughout the continuous delivery process. Jenkins continues to grow as the dominant solution for software process automation, continuous integration and continuous delivery."    
    And the user clicks accordion "Easy Installation"
    And the user can see accordion "Easy Installation" description "Jenkins is a platform-agnostic, self-contained Java-based program, ready to run with packages for Windows, Mac OS, and Unix-like operating systems."
    And the user clicks accordion "Easy Configuration"
    And the user can see accordion "Easy Configuration" description "Jenkins is easily set up and configured using its web interface, featuring error checks and a built-in help function."
    And the user clicks accordion "Available Plugins"
    And the user can see accordion "Available Plugins" description "There are thousands of plugins available in the Update Center, integrating with every tool in the CI and CD toolchain."
    And the user clicks accordion "Extensible"
    And the user can see accordion "Extensible" description "Jenkins can be extended by means of its plugin architecture, providing nearly endless possibilities for what it can do."
    And the user clicks accordion "Free Open Source"
    And the user can see accordion "Free Open Source" description "Jenkins is an open-source resource backed by heavy community support."
    And the user clicks accordion "Easy Distribution"
    And the user can see accordion "Easy Distribution" description "Jenkins can easily distribute work across multiple machines for faster builds, tests, and deployments across multiple platforms."

    And the user clicks accordion "Adoptable"
    And the user can see accordion "Adoptable" description "Jenkins adopts to the ongoing market trend and the community ensures the right set of plugins are available to provide integration with the technology boom. For example Jenkins can be deployed as a Stand-Alone Server, as a Docker Container or, as a Docker Compose setup. Similarly, it can have a static number of worker nodes, or on demand auto scaled workers launched in any Cloud platform like AWS, GCP."
    And the user clicks accordion "Customizable"
    And the user can see accordion "Customizable" description "Jenkins can be used based on needs. For simple projects, you can use it as a combination of Upstream Downstream builds to design an integration flow. For more complex projects you can design extensive pipelines for detailed executions."    
    And the user clicks accordion "Align with Agile Dev & DevOps"
    And the user can see accordion "Align with Agile Dev & DevOps" description "Jenkins CI/CD pipeline aligns with the Agile deliveries and Agile DevOps mindset which is a must have in today’s ever-changing environment. A great CI/CD pipeline ensures that requirements like quality, code coverage, code analysis, stability, performance, end to end testing etc can be set up and executed once and repeated forever. This also impacts the time to market which is a game changer in today’s world."    
    And the user clicks accordion "Process Improvement"
    And the user can see accordion "Process Improvement" description "With seamless integration with Source Control Systems like GitHub, Jenkins improves the overall Pull Request based development experience. Easy integration with Git’s Actions and Workflows, push / pull event-based integration. Branching strategies can be implemented very well to meet the specific requirements."    
    And the user clicks accordion "Inline Reporting"
    And the user can see accordion "Inline Reporting" description "Jenkins provides great reporting tools to analyse the Test Results, Cucumber Selenium based Functional Test Results, JMeter, Gatling based performance test results, SonarQube / Code Style based code analysis / coverage reports. This ensure that the team don’t need to understand different tools for each requirement. Once they are acquainted with Jenkins, it’s all good forever"