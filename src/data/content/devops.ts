import concourse from "../../images/technologies/concourseci.png";
import bitbucketArchitecture from "../../images/technologies/bitbucket_architecture.png";
import circleciArchitecture from "../../images/technologies/circleci_architecture.png";
import teamcityOverview from "../../images/technologies/teamcity-overview.png";

const techContent = [
  {
    technology: "GitHub",
    docsLink: "https://docs.github.com/en",
    intro:
      "GitHub is a cloud-based hosting service that lets you manage Git repositories, Github is ubiquitously used in open source sofrware teams and very prominent within Enterprise, Github provided web based features, team manament and other capbilties on top of Git.",
    content: [
      {
        name: "",
        intro: "",
        data: [],
      },
    ],
    examples: [],
    reference: [],
  },
  {
    technology: "CircleCI",
    docsLink: "https://circleci.com/docs/",
    intro:
      "CircleCI is a continuous integration and delivery platform that automates the build, test, and deployment of software applications. It enables developers to quickly and efficiently build, test, and deploy their code changes, while providing visibility and insight into the success of their builds and deployments. CircleCI integrates with a variety of popular version control systems, such as GitHub, Bitbucket, and GitLab, as well as popular cloud services, such as AWS, Heroku, and Google Cloud Platform.",
    content: [
      {
        name: "Feature of CircleCI",
        intro: "",
        data: [
          {
            name: "Continuous Integration",
            description:
              "CircleCI provides an automated CI/CD pipeline with features such as automated builds, tests, code analysis, and deployments. It integrates with popular code repositories such as GitHub, Bitbucket, and GitLab to enable continuous integration and delivery.",
          },
          {
            name: "Containerization",
            description:
              "CircleCI is a container-based platform that allows developers to run builds and tests in isolated, secure environments. It automatically manages container instances and scales up and down according to resource requirements.",
          },
          {
            name: "Security and Compliance",
            description:
              "CircleCI enables organizations to securely build, test, and deploy applications on its platform. It offers features such as role-based access control, audit logging, and secure storage for user credentials.",
          },
          {
            name: "Flexible Infrastructure",
            description:
              "CircleCI supports both cloud-based and on-premises infrastructures. It allows organizations to choose the best hosting option for their projects and provides a single-sign-on integration with popular cloud services.",
          },
          {
            name: "Extensive Tooling",
            description:
              "CircleCI provides developers with a wide range of tools and integrations such as API calls, shell scripts, and cloud-based services. It also integrates with popular enterprise tools such as Slack, Jira, and Salesforce.",
          },
        ],
      },
      {
        name: "CircleCI Architecture",
        intro: `<img width='100%' src=${circleciArchitecture} /> `,
        data: [],
      },
      {
        name: "",
        intro:
          "The CircleCI server application exposes four services, using a single load balancer. If required, the load balancer can be made private, separating it from the public internet.",
        data: [
          {
            name: "",
            description:
              '<table cellspacing="4" cellpadding="10" border="4"><tr><th>Service</th><th>Ports</th><th>Description</th></tr><tr><td>Frontend GUI Proxy & API</td><td>80 and 443</td><td>Exposes the web application.</td></tr><tr><td>Nomad Control Plane</td><td>4647</td><td>Exposes an RPC protocol for Nomad clients.</td></tr><tr><td>Output Processor</td><td>8585</td><td>Ingests output from Nomad runners.</td></tr><tr><td>VM Service</td><td>3000</td><td>Provisions virtual machines.</td></tr></table>',
          },
        ],
      },
      {
        name: "",
        intro:
          "CircleCI server schedules CI jobs using the <em>Nomad</em> scheduler. The <em>Nomad</em> control plane runs inside of Kubernetes, while the <em>Nomad</em> clients, which are responsible for running scheduled CircleCI jobs, are provisioned outside the cluster. CircleCI server can run Docker jobs on the <em>Nomad</em> clients themselves or in a dedicated virtual machine (VM). <br><br> Job artifacts and outputs are sent directly from jobs in <em>Nomad</em> to object storage (S3, Google Cloud Storage, or other supported options). Audit logs and other items from the application are also stored in object storage, so both the Kubernetes cluster and the <em>Nomad</em> clients need access to object storage.",
        data: [],
      },
      {
        name: "Benefits of CircleCI",
        intro: "",
        data: [
          {
            name: "1. Automated Testing",
            description:
              "CircleCI makes it easy to automate tests for your applications, ensuring that your code is always up to date and running efficiently.",
          },
          {
            name: "2. Faster Builds",
            description:
              "CircleCI allows for faster build times than traditional CI/CD systems, meaning you can quickly deploy your applications.",
          },
          {
            name: "3. Security",
            description:
              "CircleCI provides a secure build environment that is compliant with industry standards, ensuring that your applications are secure and compliant with regulations.",
          },
          {
            name: "4. Easy to Configure",
            description:
              "Setting up CircleCI is easy with their intuitive user interface and well-documented API.",
          },
          {
            name: "5. Continuous Integration",
            description:
              "CircleCI is designed to support continuous integration and deployment, making it easy to push new features and updates to your applications.",
          },
          {
            name: "6. Scalability",
            description:
              "CircleCI is designed to be highly scalable and can handle large amounts of builds, meaning you can easily scale your applications as needed.",
          },
          {
            name: "7. Cost Savings",
            description:
              "With CircleCI, you only pay for the resources you use, making it a cost-effective solution for businesses of any size.",
          },
        ],
      },
      {
        name: "CircleCI Use Cases",
        intro: "",
        data: [
          {
            name: "Continuous Integration",
            description:
              "CircleCI can be used to automate the process of integration of new code into existing code. This allows developers to quickly and easily test their code and merge it into the main codebase.",
          },
          {
            name: "Automated Testing",
            description:
              "CircleCI can be used to automate the process of running unit tests, integration tests, and other automated tests on code. This allows developers to quickly and easily test their code and ensure that it works properly.",
          },
          {
            name: "Automated Deployment",
            description:
              "CircleCI can be used to automate the process of deploying code to production environments. This allows developers to quickly and easily deploy their code without having to manually deploy it themselves.",
          },
          {
            name: "Automated Monitoring",
            description:
              "CircleCI can be used to set up automated systems for monitoring code performance. This allows developers to quickly and easily track the performance of their code and identify any issues that need to be addressed.",
          },
        ],
      },
    ],
    examples: [],
    reference: [
      "https://circleci.com/docs/",
      "https://github.com/dwyl/learn-circleci",
    ],
  },
  {
    technology: "Terraform",
    docsLink: "https://www.terraform.io/docs/index.html",
    intro:
      "Terraform is an open-source infrastructure as code software tool created by HashiCorp. It enables users to define and provision a data center infrastructure using a high-level configuration language known as Hashicorp Configuration Language (HCL), or optionally JSON. It is a tool for building, changing, and versioning infrastructure safely and efficiently. It can be used to: <ul><li>manage a wide variety of infrastructure resources, including physical and virtual machines, networking and storage components, containers, and cloud services. </li><li>automate processes such as rolling out updates, configuring infrastructure, and managing cloud resources.</li><li>manage multi-cloud and hybrid cloud environments, as well as on-premises resources.</li></ul>",
    content: [
      {
        name: "Why using Terraform?",
        intro:
          "Terraform is a powerful and reliable tool for managing infrastructure as code. It is easy to use, efficient, and supports multiple cloud and on-premises environments. It enables users to quickly provision and configure resources, build infrastructure, and roll out updates, all from a single configuration file. It can also be used to optimize costs by automatically scaling resources up and down as needed.",
        data: [],
      },
      {
        name: "Main features",
        intro: "",
        data: [
          {
            name: "Infrastructure as Code",
            description:
              "Terraform allows users to define their infrastructure using configuration files. This enables users to manage multiple environments and re-use configuration files across projects.",
          },
          {
            name: "Version Control",
            description:
              "Terraform allows users to store and version their infrastructure configuration in a version control system, such as Git.",
          },
          {
            name: "Automation",
            description:
              "Terraform can be used to automate processes such as rolling out updates, configuring infrastructure, and managing cloud resources.",
          },
          {
            name: "Multi-Cloud and Hybrid Cloud",
            description:
              "Terraform can be used to manage multi-cloud and hybrid cloud environments, as well as on-premises resources.",
          },
          {
            name: "Orchestration",
            description:
              "Terraform can be used to orchestrate processes such as provisioning, configuring, and managing multiple cloud service providers and on-premises resources.",
          },
          {
            name: "Cost Optimization",
            description:
              "Terraform can be used to optimize costs by automatically scaling resources up and down as needed.",
          },
        ],
      },
    ],
    examples: [],
    reference: ["https://www.terraform.io/"],
  },
  {
    technology: "Vault",
    docsLink: "https://www.vaultproject.io/docs",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
  },
  {
    technology: "SonarQube",
    docsLink: "https://docs.sonarqube.org/",
    intro:
      "SonarQube empowers all developers to write cleaner and safer code. It is an established name for static code analysis and its integration with Jenkins makes it much easier for developers to learn from the thousands of pre-configured automated Static Code Analysis rules. Sonar helps in protecting the code on multiple fronts and making your team to learn from the industry approved language specific rules. SonarQube has a huge community of more than 200K dev teams.",
    content: [
      {
        name: "",
        intro:
          "SonarQube (formerly Sonar) is an open-source platform developed by Sonar Source for continuous inspection of code quality to perform automatic reviews with static analysis of code to detect bugs, code smells, and security vulnerabilities on 20+ programming languages. SonarQube offers reports on duplicated code, coding standards, unit tests, code coverage, code complexity, comments, bugs, and security vulnerabilities. ",
        data: [],
      },
      {
        name: "",
        intro:
          "SonarQube provides fully automated analysis and integration with various build tools like  Maven, Ant, Gradle, MS Build and Continuous Integration tools like (Atlassian Bamboo, Jenkins etc.). SonarQube supports the majority of the industry dominating programming languages and it works with multi language projects as well. ",
        data: [],
      },
      {
        name: "",
        intro:
          "With SonarQube static analysis you have one place to measure the Reliability, Security, and Maintainability of all the languages in your project, and all the projects in your sphere.",
        data: [],
      },
      {
        name: "SonarQube Benefits",
        intro: "",
        data: [
          {
            name: "",
            description:
              "1. Code Quality<ul><li>Release Quality Code</li><li>Maintainability</li></ul>2. Code Security<ul><li>Security Analysis</li><li>OWASP Top 10</li></ul>3. Detect Technical Debt Early stage<br/><br/>4. Community Support<br/><br/>5. Market Place with reusable plugins for e.g., Build Breaker.<br/><br/>6. Continuous monitor on the Code Coverage",
          },
        ],
      },
      {
        name: "SonarQube Advantages",
        intro: "",
        data: [
          {
            name: "Integration with Industry Standard CI & Version Control Tool",
            description:
              "<ul><li>Jenkins, Azure DevOps, Team City </li><li>Git, Bit Bucket, GitLab </li></ul>",
          },
          {
            name: "Build Frameworks Supported",
            description:
              "A Majority of the major build tools are supported by SonarQube, so you don’t need to change your existing setup to introduce SonarQube. ",
          },
          {
            name: "Deploy with Confidence",
            description:
              "Having configured the Quality Gates within your CI & Version Control System, you can rest assured of the quality of the code before it reaches to your customers. This automation is very effective than compared to traditional manual human code review. With SonarQube, those code reviews may now focus more on the functional aspect of the code. ",
          },
        ],
      },
    ],
    examples: [],
    reference: [],
  },
  {
    technology: "Elastic",
    docsLink: "https://www.elastic.co/guide/index.html",
    intro:
      "The Elastic Stack (previously known as the ELK Stack) is a collection of open-source software tools for searching, analyzing, and visualizing data. It is widely used in various industries, including e-commerce, finance, healthcare, and government. Some of its well-known customers include Cisco, eBay, Goldman Sachs, and Uber. Elastic has a large and active community of users and developers who contribute to the development of the Elastic Stack and contribute to the ecosystem of Elastic Stack plugins and integrations.",
    content: [
      {
        name: "Elastic Stack",
        intro: "The Elastic Stack includes the following components:",
        data: [
          {
            name: "Elasticsearch",
            description:
              "Elasticsearch is a search engine based on the Lucene library. It provides a distributed, multitenant-capable full-text search engine with an HTTP web interface and schema-free JSON documents. Elasticsearch is developed in Java and is released as open source under the terms of the Apache License. It is a powerful tool for indexing, searching, and analyzing large volumes of data quickly and in near real time. It can be used for a variety of purposes, including full-text search, performance analysis, and logging.",
          },
          {
            name: "Logstash",
            description:
              "Logstash is a data collection and processing pipeline. It ingests data from a variety of sources, including logs, systems metrics, and network data, and then processes it and sends it to Elasticsearch for storage and analysis. Logstash can also send data to other systems, such as email, Jira, and Slack.",
          },
          {
            name: "Kibana",
            description:
              "Kibana is a visualization and analytics platform that allows you to create and share interactive and customizable dashboards based on data stored in Elasticsearch. Kibana provides a web interface that allows you to create and share visualizations and dashboards, search and filter data, and perform advanced analytics.",
          },
          {
            name: "Beats",
            description:
              "Beats is a family of lightweight data shippers that can send data from various sources to Elasticsearch or Logstash. The Beats family includes different Beats for different types of data, such as Filebeat for log files, Metricbeat for system metrics, and Packetbeat for network data.",
          },
          {
            name: "APM",
            description:
              "Application Performance Management (APM) is a feature of Elastic Stack, which allows you to monitor the performance of your applications and services. APM allows you to trace the performance of requests and transactions, view performance metrics, and identify and diagnose performance issues.",
          },
          {
            name: "SIEM",
            description:
              "Security Information and Event Management (SIEM) is another feature of Elastic Stack which allows you to monitor and analyze logs and data from various sources for security purposes. SIEM provides a centralized view of security-related data, such as network logs, system logs, and threat intelligence data, and allows you to detect and respond to security threats in real-time.",
          },
          {
            name: "Elastic Cloud",
            description:
              "Elastic Cloud is a cloud-based service that makes it easy to deploy, manage, and scale the Elastic Stack in the cloud. It provides a hosted Elasticsearch and Kibana service, as well as a managed Logstash and Beats service.",
          },
          {
            name: "Elasticsearch Service",
            description:
              "Elasticsearch Service is a fully managed service that makes it easy to deploy, operate, and scale Elasticsearch clusters in the cloud. It provides automatic provisioning and scaling of Elasticsearch clusters, as well as integration with other Elastic Stack components, such as Kibana and Beats.",
          },
        ],
      },
      {
        name: "Use Cases",
        intro: "",
        data: [
          {
            name: "Log Analysis",
            description:
              "Elasticsearch can be used to index, search, and analyze large volumes of log data from various sources, such as servers, applications, and network devices. This can be helpful for troubleshooting and monitoring systems, as well as detecting security threats.",
          },
          {
            name: "Website Search",
            description:
              "Elasticsearch can be used to power the search functionality on websites, allowing users to quickly find relevant information. It can also be used to analyze user behavior and search patterns to improve the search experience.",
          },
          {
            name: "Application Performance Monitoring",
            description:
              "Elastic APM can be used to monitor the performance of web applications, services, and microservices. It can collect data on response times, error rates, and other performance metrics, which can be used to identify and troubleshoot performance issues.",
          },
          {
            name: "Root Cause Analysis",
            description:
              "Elastic APM can be used to identify the root cause of performance issues, such as slow database queries, network bottlenecks, or memory leaks. It can trace requests and responses through the different components of the application, allowing developers to see exactly where the problem is occurring.",
          },
        ],
      },
    ],
    examples: [],
    reference: ["https://www.elastic.co/"],
  },
  {
    technology: "Bitbucket",
    docsLink: "https://bitbucket.org/product/guides",
    intro:
      "BitBucket is a web-based hosting service for projects that use either the Mercurial (since launch) or Git (since October 2011) revision control systems. It is owned by Atlassian and is used for source code and development projects. BitBucket offers both commercial plans and free accounts. It offers free accounts with an unlimited number of private repositories (which can have up to five users in the case of free accounts). It allows for easy code review, collaboration, and code management. It allows developers to host their projects, control access to their code, review code, and collaborate with others. It also provides integration with other tools such as JIRA, Confluence, and Bamboo.",
    content: [
      {
        name: "Feature of Bitbucket",
        intro: "",
        data: [
          {
            name: "Unlimited private repositories",
            description:
              "Bitbucket offers unlimited private repositories for up to five users for free. This is great for small teams or individuals who are just getting started.",
          },
          {
            name: "Access control",
            description:
              "Teams can easily control access to their repositories with granular permission levels or branch permissions.",
          },
          {
            name: "Code review",
            description:
              "Bitbucket has a built-in code review feature that allows team members to comment on pull requests.",
          },
          {
            name: "Third-party integrations",
            description:
              "Bitbucket’s integration with third-party services such as Slack, Jira, and Trello makes it easier to collaborate on projects.",
          },
          {
            name: "Pipelines",
            description:
              "Pipelines allow users to quickly build, test, and deploy their code.",
          },
          {
            name: "Automated deployment",
            description:
              "Bitbucket supports automated deployment to cloud services such as Amazon Web Services and Microsoft Azure.",
          },
          {
            name: "Source code search",
            description:
              "Bitbucket’s source code search allows users to quickly find the code they’re looking for.",
          },
        ],
      },
      {
        name: "Bitbucket Architecture",
        intro: `<img width='100%' src=${bitbucketArchitecture} /> `,
        data: [],
      },
      {
        name: "",
        intro:
          "BitBucket is built on a distributed system architecture, with data stored across multiple datacentres. This architecture allows for high availability, scalability, and performance. At the highest level, BitBucket consists of a web interface, API, and repository layer. <br><br> The web interface provides users with a graphical user interface (GUI) to interact with the system. It includes features such as creating, viewing, and editing repositories, creating, and managing pull requests, and managing user permissions. <br><br> The API layer provides a programmatic interface for interacting with the system. It allows for custom integrations with other services, such as third-party code review tools, or applications that need to access data from BitBucket. <br><br> The repository layer is where the actual code and data is stored. It is built on a distributed system, with multiple datacentres spread out across multiple geographic locations. This allows for high availability and scalability of the system. Each repository is replicated in multiple locations, to ensure that data is not lost in the event of a disaster.",
        data: [],
      },
      {
        name: "Key terms to know in BitBucket",
        intro:
          "Here are some important words and terms to know so you can find your way around Bitbucket. Some of these are terms borrowed from Git, others are specific to Bitbucket.",
        data: [
          {
            name: "1.	Branch",
            description:
              "A branch represents an independent line of development. Branches serve as an abstraction for the edit/stage/commit process. You can think of them as a way to request a brand-new working directory, staging area, and project history. New commits are recorded in the history for the current branch, which results in a fork in the history of the project.",
          },
          {
            name: "2. Fork",
            description:
              'Instead of using a single server-side repository to act as the "central" codebase, forking gives every developer a server-side repository. This means that each contributor has not one, but two Git repositories: a private local one and a public server-side one.',
          },
          {
            name: "3.	HEAD",
            description:
              'Git’s way of referring to the current snapshot. Internally, the git checkout command simply updates the HEAD to point to either the specified branch or commit. When it points to a branch, Git doesn\'t complain, but when you check out a commit, it switches into a "detached HEAD" state.',
          },
          {
            name: "4.	Main",
            description:
              'The default development branch. Whenever you create a git repository, a branch named "main" is created, and becomes the active branch.',
          },
          {
            name: "5.	Pipelines",
            description:
              "Bitbucket Pipelines is an integrated CI/CD service, built into Bitbucket. It allows you to automatically build, test and even deploy your code, based on a configuration file in your repository.",
          },
          {
            name: "6.	Pipes",
            description:
              "Bitbucket Pipes are short code chunks that you can drop into your pipeline to perform powerful actions. Pipes make it easier to build powerful, automated CI/CD workflows and get up and running quickly.",
          },
          {
            name: "7.	Project",
            description:
              "A project is a container for repositories. Projects make it easier for teams to focus on a goal, product, or process by organizing your repositories into projects. Projects can be either visible or hidden from public view.",
          },
          {
            name: "8.	Pull Request",
            description:
              "Pull requests are a feature that makes it easier for developers to collaborate using Bitbucket. They provide a user-friendly web interface for discussing proposed changes before integrating them into the official project.",
          },
          {
            name: "9.	Working Tree",
            description:
              "The tree of actual checked out files, normally containing the contents of the HEAD commit's tree and any local changes you've made but haven't yet committed.",
          },
        ],
      },
    ],
    examples: [],
    reference: [
      "https://bitbucket.org/product/guides",
      "https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud",
      "https://www.w3schools.com/git/git_remote_getstarted.asp?remote=bitbucket",
      "https://www.geeksforgeeks.org/introduction-to-bitbucket/",
    ],
  },
  {
    technology: "Jenkins",
    docsLink: "https://www.jenkins.io/doc/",
    intro:
      "Jenkins is a leading open source automation server. It provides an extensive marketplace of plugins to support building, deploying and automating any project as per your specific needs.",
    content: [
      {
        name: "",
        intro:
          "The Jenkins project was started in 2004 (originally called Hudson) by Kohsuke Kawaguchi, while he worked for Sun Microsystems. The intent behind creating this tool was to ensure the continuous integration happens automatically and every incremental project change can be validated against stability with the existing code.       Originally created as a CI (Continuous Integration) tool, Jenkins evolved to a CD (Continuous Delivery) tool and it orchestrates the entire software delivery pipeline.",
        data: [],
      },
      {
        name: "",
        intro:
          "Jenkins is the most widely adopted solution for continuous delivery, thanks to its extensibility and a vibrant, active community. The Jenkins community offers thousands of plugins that enable Jenkins to integrate with virtually any tool, including all of the best-of-breed solutions used throughout the continuous delivery process. Jenkins continues to grow as the dominant solution for software process automation, continuous integration and continuous delivery. ",
        data: [],
      },
      {
        name: "Jenkins Capabilities",
        intro: "",
        data: [
          {
            name: "Easy Installation",
            description:
              "Jenkins is a platform-agnostic, self-contained Java-based program, ready to run with packages for Windows, Mac OS, and Unix-like operating systems.",
          },
          {
            name: "Easy Configuration",
            description:
              "Jenkins is easily set up and configured using its web interface, featuring error checks and a built-in help function.",
          },
          {
            name: "Available Plugins",
            description:
              "There are thousands of plugins available in the Update Center, integrating with every tool in the CI and CD toolchain.",
          },
          {
            name: "Extensible",
            description:
              "Jenkins can be extended by means of its plugin architecture, providing nearly endless possibilities for what it can do.",
          },
          {
            name: "Free Open Source",
            description:
              "Jenkins is an open-source resource backed by heavy community support. ",
          },
          {
            name: "Easy Distribution",
            description:
              "Jenkins can easily distribute work across multiple machines for faster builds, tests, and deployments across multiple platforms.",
          },
        ],
      },
      {
        name: "Jenkins Advantages",
        intro: "",
        data: [
          {
            name: "Adoptable",
            description:
              "Jenkins adopts to the ongoing market trend and the community ensures the right set of plugins are available to provide integration with the technology boom. For example Jenkins can be deployed as a Stand-Alone Server, as a Docker Container or, as a Docker Compose setup. Similarly, it can have a static number of worker nodes, or on demand auto scaled workers launched in any Cloud platform like AWS, GCP.",
          },
          {
            name: "Customizable",
            description:
              "Jenkins can be used based on needs. For simple projects, you can use it as a combination of Upstream Downstream builds to design an integration flow. For more complex projects you can design extensive pipelines for detailed executions.",
          },
          {
            name: "Align with Agile Dev & DevOps",
            description:
              "Jenkins CI/CD pipeline aligns with the Agile deliveries and Agile DevOps mindset which is a must have in today’s ever-changing environment. A great CI/CD pipeline ensures that requirements like quality, code coverage, code analysis, stability, performance, end to end testing etc can be set up and executed once and repeated forever. This also impacts the time to market which is a game changer in today’s world.",
          },
          {
            name: "Process Improvement",
            description:
              "With seamless integration with Source Control Systems like GitHub, Jenkins improves the overall Pull Request based development experience. Easy integration with Git’s Actions and Workflows, push / pull event-based integration. Branching strategies can be implemented very well to meet the specific requirements.",
          },
          {
            name: "Inline Reporting",
            description:
              "Jenkins provides great reporting tools to analyse the Test Results, Cucumber Selenium based Functional Test Results, JMeter, Gatling based performance test results, SonarQube / Code Style based code analysis / coverage reports. This ensure that the team don’t need to understand different tools for each requirement. Once they are acquainted with Jenkins, it’s all good forever",
          },
        ],
      },
    ],
    examples: [],
    reference: [],
  },
  {
    technology: "TeamCity",
    docsLink:
      "https://www.jetbrains.com/help/teamcity/teamcity-documentation.html",
    intro: `TeamCity is a continuous integration and continuous delivery server developed by JetBrains. It is a powerful and user-friendly platform which helps teams to build, test, and deploy software projects rapidly and reliably. It supports various technologies and provides out-of-the-box integrations with many third-party tools. TeamCity is a popular tool among software development teams because of its flexibility, scalability, and ease of use. <br /><br /><img src=${teamcityOverview} width="100%" />`,
    content: [
      {
        name: "Main Features",
        intro:
          "<ul><li>Automatic build and test triggering</li><li>Code Quality Analysis</li><li>Build Parameterization and Configuration</li><li>Build History and Build Chaining</li><li>Build Artifacts</li><li>Build Distribution and Notifications</li><li>Pre-tested Commit and Revert</li><li>Continuous Integration Dashboard</li><li>Automated Deployment</li><li>Distributed Builds</li><li>Integrations with Third-Party Services</li></ul>",
        data: [],
      },
      {
        name: "Reasons to use TeamCity",
        intro: "",
        data: [
          {
            name: "For Developers",
            description:
              "<ul><li>Perform better - Just as your IDE gives you more coding powers, TeamCity does the same for continuous integration. It integrates with your building and testing tools, visualizes your DevOps pipelines in detail, and helps you be more productive – right from day one.</li><li>Get started easily - It’s really easy to get started with TeamCity. Setting up your first pipeline takes less than 2 minutes and can be done through a simple UI without writing any code.</li><li>Test intelligence - TeamCity understands your tests like no other CI solution. It integrates with your build and test tools, keeps a history of your tests, flags unstable tests as flaky, and can even help you identify the exact commits that cause failures in your pipelines.</li><li>Real-time reporting - Don’t wait for a build to finish to discover that something is wrong. Everything is reported on the fly, so you can dig into an issue, resolve it, assign it to your project members, or even open it directly in an IDE right at the problem line of code.</li><li>Remote run and pre-tested commit - By integrating TeamCity with your IDE, you can build, check, and run automated tests without creating any branches or committing any code – and keeping your code base clean at all times.</li></ul>",
          },
          {
            name: "For DevOps Engineers",
            description:
              "<ul><li>Configuration as code - You can configure your build pipelines via TeamCity’s web UI, or create them programmatically using a strongly typed DSL. Having pipeline configurations as code lets you easily reuse them and keep things under control as your projects grow.</li><li>Pipeline optimization - TeamCity orchestrates your builds and tests in a smart way by optimizing the build queue, reusing artifacts from previous builds, and running only the minimum required steps in pipelines. This can shave 30% or more off your daily build time!</li><li>Templates - You can easily eliminate the hassle of duplicating settings across different projects by extracting build configuration templates. With build templates, you don’t have to go through all the tedious process of setting up your CI/CD pipelines from scratch for every new project.</li><li>RESTful API - Virtually every feature of TeamCity is available via a RESTful API, which allows you to integrate it with your applications or interact with it using scripts.</li><li>Multiplatform, multilanguage - TeamCity supports all programming languages and integrates with all popular tools used for building and testing software. You can create and automate DevOps pipelines of any complexity and any scale, with multiple dependencies and triggers.</li></ul>",
          },
          {
            name: "For Managers",
            description:
              "<ul><li>Get a bird's eye view of your CI - TeamCity visualizes how your pipelines work, lets you track how the quality of your team’s code changes over time, and helps you analyze trends. You can always understand the status of each particular build and quickly deploy any version to a staging or production server.</li><li>Organize your team's work- If there is a failure in your pipeline, TeamCity will pinpoint the root cause and try to identify whose changes are responsible. Build problems can be automatically assigned to a team member for investigation.</li><li>Start free, grow to any scale - TeamCity doesn't have limitations on the number of users, so you can start completely for free, even for commercial projects. And you can gradually expand your server capacities as your team gets bigger.</li><li>Receive professional technical support - Having been around for over a decade, TeamCity is one of the industry's most mature products. In the event of any problems, you can get support through our public issue tracker, community forums, comprehensive online documentation, or from our dedicated support engineers.</li><li>Benefit from a fast feedback loop - TeamCity understands your development process and helps you make it more efficient. You and your team can track progress in real time, and you can be notified of the build results right inside your IDE or via email, Slack, and other channels.</li></ul>",
          },
          {
            name: "For Admins",
            description:
              "<ul><li>Zero maintenance - TeamCity provides health and performance reports, a Prometheus metrics endpoint, and many other tools for efficient maintenance. It integrates with all popular developer software, and automatically keeps all components up to date, saving you countless hours of work.</li><li>Scalability - You need only one TeamCity server to orchestrate hundreds of build agents. And if you need the highest level of performance and reliability, you can run multiple TeamCity servers and make them work together in a clustered environment.</li><li>Cloud integrations - TeamCity allows you to implement a scalable CI/CD architecture on top of your favorite cloud provider or in your own Kubernetes cluster, and dynamically increase the capacity of your delivery pipelines when needed.</li><li>Access management - You can manage users and their privileges directly in TeamCity, or sync the user directory with your infrastructure via the LDAP protocol. Projects can have their own administrators or inherit settings from their parent projects, which makes access management a breeze.</li><li>Rich plugin ecosystem - TeamCity comes with hundreds of free plugins that can be installed with just a couple of clicks without rebooting the server. And if you want to make your CI even more powerful, you can use OpenAPI to implement a new one.</li></ul>",
          },
        ],
      },
    ],
    examples: [],
    reference: ["https://www.jetbrains.com/teamcity/"],
  },
  {
    technology: "Istio",
    docsLink: "https://istio.io/latest/docs/",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
  },
  {
    technology: "Ansible",
    docsLink: "https://docs.ansible.com/",
    intro:
      "Ansible is a radically simple IT automation system. Ansible uses an agentless architecture, meaning it does not require the use of an agent on the target systems, instead it uses SSH or PowerShell to communicate with the systems. Ansible also provides a powerful set of modules and playbooks to help with automation tasks.",
    content: [
      {
        name: "Ansible Capabilities",
        intro: "",
        data: [
          {
            name: "Provisioning",
            description:
              "Ansible can be used to provision servers and cloud resources such as Amazon EC2 instances, DigitalOcean droplets, and other infrastructure components.",
          },
          {
            name: "Configuration Management",
            description:
              "Ansible can be used to manage and configure systems, ensuring they are always in the desired state.",
          },
          {
            name: "Application Deployment",
            description:
              "Ansible can be used to deploy applications to multiple systems in an automated manner.",
          },
          {
            name: "Security Automation",
            description:
              "Ansible can be used to automate security tasks such as user and file permissions, password policies, and other security related tasks.",
          },
          {
            name: "Orchestration",
            description:
              "Ansible can be used to orchestrate complex multi-tier applications and services.",
          },
          {
            name: "Continuous Delivery",
            description:
              "Ansible can be used to automate the delivery of applications and services to multiple environments.",
          },
        ],
      },
      {
        name: "Ansible Advantages",
        intro: "",
        data: [
          {
            name: "Easy to Setup and Use",
            description:
              "Ansible is very simple to setup and use. It does not require complex programming knowledge and can be easily learned by anyone.",
          },
          {
            name: "Agentless",
            description:
              "Ansible does not require any software or agent to be installed on the nodes which it manages. This makes it easy to manage nodes, as it eliminates the need to install and configure agents on each node.",
          },
          {
            name: "Idempotency",
            description:
              "Ansible ensures that the same configuration is applied to the nodes, regardless of whether it has been applied before. This ensures that the desired state of the nodes is maintained.",
          },
          {
            name: "Powerful Automation",
            description:
              "Ansible provides powerful automation capabilities that enable users to automate complex tasks across multiple nodes with ease.",
          },
          {
            name: "Open Source",
            description:
              "Ansible is an open source automation platform and is available for free. It is also supported by an active community of developers who continuously contribute towards its development.",
          },
        ],
      },
    ],
    examples: [],
    reference: ["https://docs.ansible.com/"],
  },
  {
    technology: "Packer",
    docsLink: "https://www.packer.io/docs",
    intro:
      "Packer lets you create identical machine images for multiple platforms from a single source configuration. A common use case is creating golden images for organizations to use in cloud infrastructure.",
    content: [
      {
        name: "",
        intro:
          "A machine image is a single static unit that contains a pre-configured operating system and installed software which is used to quickly create new running machines. Machine image formats change for each platform. Some examples include AMIs for EC2, VMDK/VMX files for VMware, OVF exports for VirtualBox, etc.",
        data: [],
      },
      {
        name: "Packer Advantages",
        intro: "",
        data: [
          {
            name: "Super fast infrastructure deployment",
            description:
              "Packer images allow you to launch completely provisioned and configured machines in seconds, rather than several minutes or hours. This benefits not only production, but development as well, since development virtual machines can also be launched in seconds, without waiting for a typically much longer provisioning time.",
          },
          {
            name: "Multi-provider portability",
            description:
              "Because Packer creates identical images for multiple platforms, you can run production in AWS, staging/QA in a private cloud like OpenStack, and development in desktop virtualization solutions such as VMware or VirtualBox. Each environment is running an identical machine image, giving ultimate portability.",
          },
          {
            name: "Improved stability",
            description:
              "Packer installs and configures all the software for a machine at the time the image is built. If there are bugs in these scripts, they'll be caught early, rather than several minutes after a machine is launched.",
          },
          {
            name: "Greater testability",
            description:
              "After a machine image is built, that machine image can be quickly launched and smoke tested to verify that things appear to be working. If they are, you can be confident that any other machines launched from that image will function properly.",
          },
        ],
      },
      {
        name: "Packer Use Cases",
        intro: "",
        data: [
          {
            name: "Continuous Delivery",
            description:
              "Packer is lightweight, portable, and command-line driven. This makes it the perfect tool to put in the middle of your continuous delivery pipeline. Packer can be used to generate new machine images for multiple platforms on every change to Chef/Puppet. As part of this pipeline, the newly created images can then be launched and tested, verifying the infrastructure changes work. If the tests pass, you can be confident that the image will work when deployed. This brings a new level of stability and testability to infrastructure changes.",
          },
          {
            name: "Dev/Prod Parity",
            description:
              "Packer helps keep development, staging, and production as similar as possible. Packer can be used to generate images for multiple platforms at the same time. So if you use AWS for production and VMware (perhaps with Vagrant) for development, you can generate both an AMI and a VMware machine using Packer at the same time from the same template.",
          },
          {
            name: "Appliance/Demo Creation",
            description:
              "Since Packer creates consistent images for multiple platforms in parallel, it is perfect for creating appliances and disposable product demos. As your software changes, you can automatically create appliances with the software pre-installed. Potential users can then get started with your software by deploying it to the environment of their choice.",
          },
        ],
      },
    ],
    examples: [],
    reference: ["https://developer.hashicorp.com/packer/docs"],
  },
  {
    technology: "Twistlock",
    docsLink: "https://docs.twistlock.com/docs/",
    intro:
      "TwistLock is a container security platform designed to provide DevOps teams with the tools they need to protect their containerized applications. TwistLock provides a suite of security tools including vulnerability scanning, runtime protection, and compliance monitoring. The platform also offers integration with popular CI/CD systems, allowing teams to automate security into their DevOps pipelines.",
    content: [
      {
        name: "Twistlock Capabilities",
        intro: "",
        data: [
          {
            name: "Vulnerability scanning",
            description:
              "Identifies potential risks and weaknesses in your container environment.",
          },
          {
            name: "Runtime protection",
            description:
              "Monitors and enforces security policies in real time to protect against malicious activities.",
          },
          {
            name: "Compliance and auditing",
            description:
              "Ensures compliance with applicable industry standards and regulations.",
          },
          {
            name: "Secure DevOps automation",
            description:
              "Automates security processes and reduces the risk of human error.",
          },
          {
            name: "Advanced analytics and machine learning-powered threat detection",
            description: "Quickly detect and respond to threats.",
          },
          {
            name: "Container management and monitoring",
            description:
              "Monitors and manages containerized applications and workloads.",
          },
        ],
      },
      {
        name: "Twistlock Advantages",
        intro: "",
        data: [
          {
            name: "Automated Security",
            description:
              "Twistlock automates the process of security and regulatory compliance, with real-time vulnerability scanning for container images and cloud native workloads.",
          },
          {
            name: "Comprehensive Visibility",
            description:
              "Twistlock provides end-to-end visibility and control across the cloud native stack.",
          },
          {
            name: "Cloud Native Protection",
            description:
              "Twistlock provides robust protection across the entire cloud native stack, including containers, serverless functions, and Kubernetes.",
          },
          {
            name: "Simplified Compliance",
            description:
              "Twistlock simplifies compliance and governance with built-in compliance checks and automated policy enforcement.",
          },
          {
            name: "Automated Incident Response",
            description:
              "Twistlock provides automated response and investigation tools to help identify and mitigate potential security incidents quickly and accurately.",
          },
        ],
      },
    ],
    examples: [],
    reference: ["https://docs.twistlock.com/docs/"],
  },
  {
    technology: "ConcourseCl",
    docsLink: "https://concourse-ci.org/docs.html",
    intro:
      "Concourse is an open-source continuous CI/CD platform built on self contained pipelines,  Concourse is a free open source project which is written in Go and can scale to any kind of pipeline",
    content: [
      {
        name: "Concourse CI Components",
        intro: `<img width='100%' src=${concourse} /> `,
        data: [
          {
            name: "Database and web node",
            description:
              "Concourse CI used Postgres as its state store and a web node service which  provides the user interface, Here users can quickly view pipelines, progress and erros",
          },
          {
            name: "Worker Nodes",
            description:
              "The key feature of Concourse CI is that Worker nodes are compleletly ephemeral, they run tasks defined in the pipeline and then are deleted, task such as cloning GIT repos, downloading container images and running tests. The benefit of this is clean testing",
          },
          {
            name: "Tasks",
            description:
              "Tasks are the smallest unit of execution in a Concourse CI pipeline, for example running a script or single command",
          },
          {
            name: "Jobs",
            description:
              "Jobs are a grouping of tasks and enable the composition of large pipelines with lots of tasks",
          },
          {
            name: "Resources",
            description:
              "Jobs and tasks perform actions on resources such as Git repositories, Docker.",
          },
        ],
      },
    ],
    examples: [],
    reference: [
      "https://concourse-ci.org/",
      "https://ci.concourse-ci.org/teams/main/pipelines/concourse",
    ],
  },
  {
    technology: "Consul",
    docsLink: "https://developer.hashicorp.com/consul",
    intro:
      "Consul is a service networking solution that enables organisations and teams to manage secure network connectivity between services and across multi-cloud environments and runtimes. The features that Consul offers are  autoamted service discovery, enabling zero trust netork security, identity-based authorization, L7 traffic management, and service-to-service encryption.",
    content: [
      {
        name: "Consul Features and Architecture",
        intro: "",
        data: [
          {
            name: "Service Discovery",
            description:
              "Consul utilises a service registry and allows automated service discovery via DNS and HTTP, Consul will help teams to track the health statuses of services in real time.",
          },
          {
            name: "Network security",
            description:
              "Consul ensure that all service to service communications are authorized and encrypted using mutual Transport Layer Security (TLS). ",
          },
          {
            name: "Platforms",
            description:
              "Consul can integarte with platforms such as Nomad, Vautl, AWS ECS and AWS Lambda",
          },
          {
            name: "Access Control",
            description:
              "Users of Consul are able to configure Access Control Lists (ACLS) to authenitcate requests and authorize access to resoources, using roles, policies and identity to provide inter services security.",
          },
        ],
      },
    ],
    examples: [],
    reference: [
      "https://www.consul.io/",
      "https://www.hashicorp.com/products/consul",
    ],
  },
  {
    technology: "Docker",
    docsLink: "https://docs.docker.com/",
    intro:
      "Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers. The service has both free and premium tiers. The software that hosts the containers is called Docker Engine. It was first started in 2013 and is developed by Docker, Inc. <br/><br/> Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels. Because all of the containers share the services of a single operating system kernel, they use fewer resources than virtual machines.",
    content: [
      {
        name: "Concept",
        intro: "",
        data: [
          {
            name: "What is a Container?",
            description:
              "Containers are lightweight packages of your application code together with dependencies such as specific versions of programming language runtimes and libraries required to run your software services. Containers make it easy to share CPU, memory, storage, and network resources at the operating systems level and offer a logical packaging mechanism in which applications can be abstracted from the environment in which they actually run. ",
          },
          {
            name: "Benefits of containers",
            description:
              "<ul><li><div><u>Separation of responsibility</u><br/>Containerization provides a clear separation of responsibility, as developers focus on application logic and dependencies, while IT operations teams can focus on deployment and management instead of application details such as specific software versions and configurations. </div></li><li><div><u>Workload portability</u><br/>Containers can run virtually anywhere, greatly easing development and deployment: on Linux, Windows, and Mac operating systems; on virtual machines or on physical servers; on a developer's machine or in data centres on-premises; and of course, in the public cloud. </div></li><li><div><u>Application isolation</u><br/>Containers virtualize CPU, memory, storage, and network resources at the operating system level, providing developers with a view of the OS logically isolated from other applications. </div></li></ul>",
          },
          {
            name: "Docker Image",
            description:
              "A Docker \"image\" behaves like a template from which consistent containers can be created. If Docker was a traditional virtual machine, the image could be likened to the ISO used to install your VM. This isn't a robust comparison, as Docker differs from VMs in terms of both concept and implementation, but it's a useful starting point nonetheless. <br/>Images define the initial filesystem state of new containers. They bundle your application's source code and its dependencies into a self-contained package that's ready to use with a container runtime. Within the image, filesystem content is represented as multiple independent layers.",
          },
          {
            name: "Docker Image Layers",
            description:
              "Layers are a result of the way Docker images are built. Each step in a Dockerfile creates a new \"layer\" that's essentially a diff of the filesystem changes since the last step. Metadata instructions such as LABEL and MAINTAINER do not create layers because they don't affect the filesystem.",
          },
          {
            name: "Dockerfile",
            description:
              "Docker can build images automatically by reading the instructions from a Dockerfile. A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image.",
          },
          {
            name: "Docker Swarm",
            description:
              "A Docker Swarm is a group of either physical or virtual machines that are running the Docker application and that have been configured to join together in a cluster. The activities of the cluster are controlled by a swarm manager, and machines that have joined the cluster are referred to as nodes.",
          },
        ],
      },
    ],
    examples: [],
    reference: [
      "https://www.docker.com/",
      "https://ragin.medium.com/docker-what-it-is-how-images-are-structured-docker-vs-vm-and-some-tips-part-1-d9686303590f",
    ],
  },
  {
    technology: "Datadog",
    docsLink: "https://docs.datadoghq.com/",
    intro:
      "Datadog is a SaaS-based monitoring and analytics platform for large-scale applications and infrastructure. Combining real-time metrics from servers, containers, databases, and applications with end-to-end tracing, Datadog delivers actionable alerts and powerful visualizations to provide full-stack observability. Datadog includes over 200 vendor-supported integrations and APM libraries for several languages.<br/><br/>Key features include: <ul><li>Log management</li><li>Infrastructure</li><li>Metrics</li><li>Monitoring and alerting</li><li>Application performance management (APM)</li><li>Synthetic monitoring</li><li>Continuous profiler</li><li>Continuous testing</li><li>CI Visibility</li><li>Database monitoring</li><li>Observability pipelines</li><li>Security dashboard</li></ul>",
    content: [
      {
        name: "Key features",
        intro: "",
        data: [
          {
            name: "Log management",
            description:
              "Logging the important parts of your system's operations is crucial for maintaining infrastructure health. Modern infrastructure has the capability to generate thousands of log events per minute. In this situation, you need to choose which logs to send to a log management solution, and which logs to archive. Filtering your logs before sending them, however, may lead to gaps in coverage or the accidental removal of valuable data. <br/>Datadog Log Management, also referred to as Datadog logs or logging, removes these limitations by decoupling log ingestion from indexing. This enables you to cost-effectively collect, process, archive, explore, and monitor all of your logs without limitations, also known as Logging without Limits. ",
          },
          {
            name: "Infrastructure",
            description:
              "<ul><li>Infrastructure List - See a list of all your hosts monitored by Datadog </li><li>Host Map - Visualize hosts together on one screen, with metrics made comprehensible through color and shape </li><li>Container Map - Visualize your containers together on one screen with customized groupings, filters, and metrics made comprehensible by color and shape. </li><li>Live Processes - Monitor your processes with real-time visibility of the most granular elements in a deployment.  </li><li>Generate Process Metrics - Generate global and percentile distribution metrics from your processes.  </li><li>Live Containers - Monitor the containers across your environment with real-time visibility  </li><li>Serverless - Bring together metrics, traces, and logs from your AWS Lambda functions running serverless applications into one view</li></ul>",
          },
          {
            name: "Metrics",
            description:
              "Metrics are numerical values that can track anything about your environment over time, from latency to error rates to user signups. It provides an overall picture of your system. You can use them to assess the health of your environment at a glance. Visualize how quickly users are loading your website, or the average memory consumption of your servers, for instance. Once you identify a problem, you can use logs and tracing to further troubleshoot. <br/><br/>Metrics that track system health come automatically through Datadog's integrations with more than 600 services. You can also track metrics that are specific to your business—also known as custom metrics. You can track things such as the number of user logins or user cart sizes to the frequency of your team's code commits. <br/><br/> In addition, metrics can help you adjust the scale of your environment to meet the demand from your customers. Knowing exactly how much you need to consume in resources can help you save money or improve performance.",
          },
          {
            name: "Monitoring and alerting",
            description:
              "Monitoring all of your infrastructure in one place wouldn't be complete without the ability to know when critical changes are occurring. Datadog gives you the ability to create monitors that actively check metrics, integration availability, network endpoints, and more. Configure monitors, notify your teams, and manage alerts at a glance on the Alerting platform.",
          },
          {
            name: "Application performance management (APM)",
            description:
              "Datadog Application Performance Monitoring (APM) gives deep visibility into your applications with out-of-the-box performance dashboards for web services, queues, and databases to monitor requests, errors, and latency. Distributed traces seamlessly correlate to browser sessions, logs, profiles, synthetic checks, network, processes, and infrastructure metrics across hosts, containers, proxies, and serverless functions. Navigate directly from investigating a slow trace to identifying the specific line of code causing performance bottlenecks with code hotspots.",
          },
          {
            name: "Synthetic monitoring",
            description:
              "Synthetic tests allow you to observe how your systems and applications are performing using simulated requests and actions from around the globe. Datadog tracks the performance of your webpages and APIs from the backend to the frontend, and at various network levels (HTTP, SSL, DNS, WebSocket, TCP, UDP, ICMP, and gRPC) in a controlled and stable way, alerting you about faulty behaviour such as regressions, broken features, high response times, and unexpected status codes.",
          },
          {
            name: "Continuous profiler",
            description:
              "Find CPU, memory, and IO bottlenecks, broken down by method name, class name, and line number, to significantly reduce end-user latency and infrastructure costs.",
          },
          {
            name: "Continuous testing",
            description:
              "Continuous Testing offers a set of tools that enable you to automate software testing for a product's entire lifecycle. By offering code-free, reliable end-to-end testing and seamless integrations with popular CI providers and collaboration tools, Continuous Testing helps you accelerate application development and ship high-quality features faster.",
          },
          {
            name: "CI Visibility",
            description:
              "Continuous Integration (CI) Visibility brings together information about CI test and pipeline results plus data about CI performance, trends, and reliability, all into one place. Not only does it provide developers with the ability to dig into the reasons for a test or pipeline failure, to monitor trends in test suite execution times, or to see the effect a given commit has on the pipeline, it also gives build engineers visibility into cross-organization CI health and trends in pipeline performance over time. <br/><br/>CI Visibility helps you troubleshoot test failures and broken builds, connecting the most pressing development outages to the commits that caused them. With the same libraries you use to trace application performance with APM, you can instrument your tests, generating traces from your testing frameworks as they execute in CI. Similarly, Datadog integrates with CI providers to gather pipeline metrics to track performance and results from the moment a commit enters the pipeline until it is ready to be deployed. Use the data aggregated over time to track trends in performance of tests and builds and to identify what is most important to fix. ",
          },
          {
            name: "Database monitoring",
            description:
              "Database Monitoring provides deep visibility into databases across all of your hosts. Dig into historical query performance metrics, explain plans, and host-level metrics all in one place, to understand the health and performance of your databases and troubleshoot issues as they arise.",
          },
          {
            name: "Observability pipelines",
            description:
              "Observability Pipelines is a monitoring solution built on Vector, an open source tool that enables you to monitor and manage all of your telemetry pipelines at scale. Vector is deployed as an aggregator within your infrastructure to collect, transform, and route all of your logs, metrics, and traces to any destination. <br/><br/>Add your Datadog API key to your Vector configuration to connect it to Observability Pipelines. Use Observability Pipelines to monitor your Vector pipelines and identify bottlenecks and latencies, fine-tune performance, monitor data delivery, and more. <br/>With Observability Pipelines, you can also: <ul><li>Control your data volume before routing to manage costs. </li><li>Route data anywhere to reduce vendor lock-in and simplify migrations. </li><li>Meet residency requirements and redact sensitive data to stay more compliant. </li><li>Enrich, structure, and transform your events to make them more useful. </li></ul><br/>Build performant and reliable data pipelines with complete visibility and simplified management using Observability Pipelines.",
          },
          {
            name: "Security dashboard",
            description:
              "Bring speed and scale to your production security operations. Datadog Security delivers real-time threat detection, and continuous configuration audits across applications, hosts, containers, and cloud infrastructure. Coupled with the greater Datadog observability platform, Datadog Security brings unprecedented integration between security and operations aligned to your organizations shared goals.",
          },
        ],
      },
    ],
    examples: [],
    reference: ["https://www.datadoghq.com/"],
  },
];
export default techContent;
