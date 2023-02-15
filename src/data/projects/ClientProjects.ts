const ClientProjects = [
  {
    project: "DevSecOps Transformation",
    clientName: "Global Tier 1 Bank",
    description:
      "Capco was engaged with a Tier 1 Global Bank to accelerate the DevSecOps transformation in a large shared Data Services area of the Bank (Group Data Technology, GDT). GDT comprises 150+ teams across 7 platforms distributed over various geographical locations. From a technology standpoint it focuses on ETL, Services and APIs, and uses mixed tools and technologies - Java, Python, IBM DataStage, Qlik, Hadoop clusters etc. <br/><ul><li>Capco ran a DevSecOps maturity assessment for the whole GDT area. The assessment highlighted the key areas where GDT needed improvements - quick wins and strategic goals.</li><li>The Capco team then worked on providing a future state, a Target Operating Model (TOM) and a Roadmap for the next year.</li><li>The Capco team worked on key workstreams that would improve DevOps metrics and implemented a delivery framework which adheres to IT Compliance, DevOps best practices and a quality-first approach.</li></ul>",
    technologies: [
      "GCP",
      "Docker",
      "Terraform",
      "Kubernetes",
      "SonarQube",
      "Cucumber",
      "Jenkins",
      "GitHub",
      "Java",
      "Python",
    ],
  },
  {
    project: "Global DevOpS Acceleration",
    clientName: "Global Tier 1 Private Bank",
    description:
      "Capco delivered a DevOps acceleration program focused on improving delivery quality and speed. This included integrating existing tools to improve developer experience, simplifying consumption of existing internal Kubernetes services, cloud migration, uplifting the platforms observability and monitoring maturity, re-engineering for containerization, building a single pane of glass portal, and training global teams e.g., India, China.",
    technologies: [
      "Go",
      "Docker",
      "AWS",
      "Kubernetes",
      "Consul",
      "Vault",
      "Terraform",
    ],
  },
  {
    project: "Agency Bank Payment APIs",
    clientName: "UK Tier 1 Corporate Bank",
    description:
      "Capco designed, built and deployed the UKs first agency-banking APIs for a global T1 high street bank. The APIs covered the following agency banking flows: <ul><li>Inward payments</li><li>Outward payments</li><li>Tracking outward payments</li></ul>and offered the latest ISO-20022 payments format. <br /><br /><b>Impact:</b><ul><li>Bank’s APIs enable payment initiation services: they allow the customer to connect to their bank to send money directly to another person’s account quickly and securely via a third-party.</li><li>Faster Payment Services were built using Microservice architecture. The services have been fully integrated into the client’s existing architecture and can be harnessed by multiple business units.</li><li>The services have been built as a fully re-usable architectural asset, in tandem with a ‘best in class’ DevOps infrastructure.</li><li>APIs now widely used by a number of Agency Banks as their access to UK Faster Payments scheme</li></ul>",
    technologies: [
      "PCF",
      "Java",
      "Kubernetes",
      "GCP",
      "AWS",
      "SonarQube",
      "Splunk",
      "Rest",
    ],
  },
  {
    project: "Digital Small Business Bank",
    clientName: "UK Tier 1 Bank",
    description:
      "Driven by market disruption and a shift in customer expectations, Capco helped NatWest to design and launch a new SME bank in just six months. We worked with FinTech partners to build a greenfield, cloud-based tech stack and set up customer operations ready to launch and scale. The solution is built fully cloud-native on AWS, using Kafka for event-driven architecture, Java microservices, and a React Native mobile app. Capco also uses Grafana as the visualisation tool to monitor metrics and provide a dashboard for the overall performance using various metrics like Kafka metrics, API metrics, Kubernetes pod metrics, System metrics, 3rd party service metrics, etc.",
    technologies: [
      "React",
      "JavaScript",
      "Java",
      "Docker",
      "Kubernetes",
      "AWS",
      "Kafka",
      "Grafana",
      "Rest",
    ],
  },
  {
    project: "Global Payments Platform",
    clientName: "Global Tier 1 Bank",
    description:
      "Capco are engaged in a multi-year program to design, build and migrate a Tier 1 payment infrastructure to a hybrid cloud-native platform, using GCP and Anthos.  In terms of criticality & scale, when completed in 2022 the payment flows through the platform will be c.$3tn p.a.  The entire stack is being built cloud-native - below is a small subset of the technologies.  In addition Capco are moving support teams towards an SRE model.",
    technologies: ["Terraform", "Vault", "Consul", "GCP", "Anthos"],
  },
  {
    project: "Customer Online Banking",
    clientName: "Global Tier 1 Private Bank",
    description:
      "Capco were engaged by a Tier 1 Private Bank to significantly improve the experience & functionality of their client digital channels.  Capco provided technology delivery, software engineering and test automation expertise.  The project included building APIs into the backend systems for new features, improving the nascent Angular web app, migrating it to breaking the monolith app into micro frontends, and creating component library for reuse in other applications.",
    technologies: ["Angular", "React", "TypeScript", "Java", "Docker", "Jest"],
  },
  {
    project: "Client Perimeter Microservices",
    clientName: "Global Tier 1 Bank",
    description:
      "Capco were brought in to work alongside the existing KYC & On-boarding Technology Teams to enable the Bank to meet the Regulators Data requirements. The Immediate objective was to convert the existing Oracle and MS Access based manual systems into a modern microservices platform to move business logic out of the database and create a single-entry point for other services to access colour and RHP information.",
    technologies: [
      "Java",
      "React",
      "Oracle",
      "OpenAPI",
      "Kubernetes",
      "Cucumber",
      "Splunk",
      "OpenShift",
      "Rest",
    ],
  },
  {
    project: "Wealth Client Portal",
    clientName: "Swiss Wealth Manager",
    description:
      "Capco delivered a wealth management client portal to enable internal staff to manage and service their end clients.  The solution was cloud-native and built on Microsoft Azure, and integrated into existing client backend systems and Office 365 for tight integration to existing and new collaboration tools (e.g., document management, back-office workflow, emails).",
    technologies: ["React", "Java", "Docker", "Office 365", "Azure"],
  },
  {
    project: "Business Loan Application APIs",
    clientName: "UK Tier 1 Bank",
    description:
      "Capco defined the future state architecture of the client’s loan integration with marketplaces. Capco worked closely with the client teams to build a best practice API layer using Azure functions and Typescript available through Apigee. In addition Capco engineers upskilled client engineers by running a hackathon day for the APIs.  The project was successfully completed with a 3.5 months timeline.",
    technologies: ["TypeScript", "Node", "Postman", "Azure", "Jest"],
  },
  {
    project: "Mobile Banking Remediation",
    clientName: "Global Tier 1 Bank",
    description:
      "Capco performed a holistic assessment of the client’s current mobile applications, architectures, development standards and implementation.  Our team set new standards, implemented coding design principles, deployed a new DevOps pipeline, implemented automation testing and restructured and refactored the current applications, reducing development time/cost which significantly increased customer app ratings.",
    technologies: ["Swift", "Kotlin", "HockeyApp", "Jenkins", "Fastlane"],
  },
  {
    project: "Transaction Banking",
    clientName: "Global Tier 1 Bank",
    description:
      "Capco uses Apache Hadoop echosystem as part of Cloudera distribution to run their processes in their on premises environment mainly focussed on ETL, ELT batch scenarios. They also use Apache Spark and Apache Hive as two main components of their framework but also use particulary other Apache Hadoop components like Oozie, HBase, all integrated with Kerberos security.",
    technologies: ["Apache Hadoop", "Apache Spark", "Apache Hive"],
  },
  {
    project: "Fraud Analytics",
    clientName: "Global Tier 1 Bank",
    description:
      "Capco makes use of data that is available to find potential fraud activities. We get requirements from data analysts and data scientists that detail the data extraction and transformation, performing the data extraction and transformation in Scala language. And then Spark jobs are submitted to Hadoop clusters to produce what is a CDA(Contextual Data Asset) in the Parquet file format. The parquet file is loaded as HIVE view for business users to monitor and utilize for fraud analytics.",
    technologies: ["Scala", "Apache Spark", "Apache Hive", "Apache Hadoop"],
  },
  {
    project: "Commercial Payments service",
    clientName: "Global Tier 1 Bank",
    description:
      "Capco works with our client on their commercial banking arm and the platform is called Bankline. It essentially lets commercial customers (big businesses, not the everyday retail users) make high value payments. Bankline offers features like domestic payments as well as international payments in 40 currencies which is something Capco has recently helped expand. Selenium is used for UI layer of testing coverage & tests are run on SauceLabs.",
    technologies: [
      "PCF",
      "ActiveMQ",
      "Rest",
      "Java",
      "TeamCity",
      "React",
      "Kotlin",
      "Selenium",
      "Sauce Labs",
    ],
  },
  {
    project: "Internet Banking Wealthview Platform ",
    clientName: "Global Tier 1 Bank",
    description:
      "Capco partnered with a Tier 1 global bank on the delivery of an award-winning internet banking platform. The platform dramatically improved PB clients’ user experience providing; a dashboard view of their accounts/holdings, a digital home for their documents and additional insights on performance and asset allocations. Capco provided an updated UI/UX and reducing exposure to third party services by bringing FE infrastructure in-house. Faster development and release of product  improvements was possible due to provisioning of new React VMs / pipeline to host the front-end.",
    technologies: ["React Native", "Java", "Jenkins"],
  },
  {
    project: "SEPA Payment Channel",
    clientName: "French Neobank",
    description:
      "Capco was engaged in implementing a SEPA payment channel for a digital bank in France as part of their Banking as a service platform (BaaS), a cloud-based abstraction layer on top of the Bank’s legacy core banking services (CBS).The BaaS comprises five domains (Payment, Customer, Account, Card and Transaction), a new value proposition for the bank as part of their target goal of becoming a fintech.",
    technologies: ["GCP", "Docker", "Kubernetes", "Kafka", "SonarQube", "Java"],
  },
  {
    project: "Mobile Transaction App",
    clientName: "French Neobank",
    description:
      "Capco worked with a challenger bank on developing a robust and scalable mobile banking app, utilizing our expertise in Gradle. We took advantage of Gradle's powerful features such as multi-module builds, custom plugins, and advanced dependency management to streamline their development process and deliver a high-quality app quickly. We helped the client to make use of dynamic feature modules and instant apps, which allowed us to deliver a smaller, more focused app to users, which is great for those who have limited storage on their devices. With Gradle's ability to automate testing and deployment, we helped them to thoroughly test the app and deploy it smoothly.",
    technologies: ["Gradle Mobile", "Firebase"],
  },
  {
    project: "DevOps Acceleration",
    clientName: "Global Tier 1 Bank",
    description:
      "Capco partnered with a Tier 1 bank to deliver a DevOps acceleration programme focusing on cloud migration and use of DevOps best practices across people, processes and technology to have fast flow of changes for their digital products in a secure and reliable manner with minimum risk to achieve sustainable, stable and predictable delivery. Capco worked on delivering DevOps as a service platform focusing on: set up of autonomous teams to own delivery E2E and accelerate product delivery, CI/CD pipeline built for continuous delivery, containerisation of products to test earlier in the delivery lifecycle leading to reduced cycle time & lower risk of change, CaaS ecosystem cloud PoC to drive cloud migration initiative, DevOps as a service platform offering",
    technologies: [
      "Jenkins",
      "Cucumber",
      "SonarQube",
      "JMeter",
      "Consul",
      "Ansible",
      "Vault",
      "Terraform",
      "AWS",
      "Kubernetes",
      "Splunk",
      "BrowserStack",
      "RestAssured",
    ],
  },
  {
    project: "Credit Library Platform",
    clientName: "Global Tier 1 Bank",
    description:
      "The client wanted to introduce a new tool to support the core of their business and match the fast growth journey they were on. Capco built the end to end solution (Design, backend, frontend and deployment) in 12 weeks, aligning with their start of year objectives. <br /><br /><b>Impact:</b><ul><li>Seamless real-time information management for knowledge sharing</li><li>Outlook integration to facilitate centralised multi location day to day communications</li><li>Flexible solution both from a front end and back end perspective allowing quick changes to meet new demands</li><li>Combination of multiple data sources to create a “one stop shop” for all required information</li></ul>",
    technologies: ["Jenkins", "React", "Go", "Java", "Azure"],
  },
  {
    project: "Global Payments Program",
    clientName: "UK Tier 1 Bank",
    description:
      "Capco was engaged to determine a new core banking and payments strategy for a challenger subsidiary of the one of the large UK incumbent banks. We provided technology and payments strategy advisory culminating in a new target state vision, and successful investment case",
    technologies: [
      "GCP",
      "GraphQL",
      "AWS",
      "Docker",
      "SonarQube",
      "Vault",
      "Kafka",
      "Ansible",
      "Consul",
      "Terraform",
      "Kubernetes",
    ],
  },
  {
    project: "Cloud Native Payment Orchestration Layer",
    clientName: "Global Tier 1 Bank",
    description:
      "A Tier One Global Bank selected Capco to deliver their strategic payments orchestration layer being built as cloud native using next gen tech stack.  Capco steered a quality solution that meets the customer expectations of error-free, resilient and highly available payments system. <br /><br /><b>Impact:</b><ul><li>Like Payments Modernisation, the cloud native orchestration layer has integrations with non-cloud legacy core infrastructure.</li><li>Agile delivery pods allow teams to deliver solutions autonomously & at pace, meeting regulatory requirements with quality solutions.</li><li>The architecture introduced a common delivery pattern for message translation which increased the speed and reduce the unit cost of message translations.</li><li>Reduced build/deployment times down to 3 minutes. Entire payment orchestration platform can be provisioned in under 10 minutes.</li></ul>",
    technologies: [
      "Docker",
      "SonarQube",
      "Java",
      "Selenium",
      "GitHub",
      "Ansible",
      "Terraform",
      "Kafka",
      "Kubernetes",
      "Splunk",
    ],
  },
  {
    project: "ISO20022 Programme",
    clientName: "Global Tier 1 Bank",
    description:
      "Capco were engaged to drive a Regulatory Project requiring the Bank to update or replace a number of systems, in order to be able to provide Statements, Reports and Advices to customers using the new Swift ISO message formats.",
    technologies: [
      "Cypress",
      "Oracle",
      "Consul",
      "Kafka",
      "Postgres",
      "Splunk",
      "AWS",
      "Cucumber",
      "SonarQube",
      "IBM MQ",
      "Rest",
      "React",
    ],
  },
  {
    project: "Finance Feeds",
    clientName: "Global Payment Provider",
    description:
      "Capco were engaged by a global payments provider to deliver a new event-based architecture to provide more granularity to the data feed to their finance reporting system (RADAR), and to remove inconsistencies and errors from the existing Extract/Transform/Load (ETL) solution. <br /><br /><b>Impact:</b><ul><li>Client now have a productionised service to provide data on merchant billing events to their global finance reporting system within two days (up to a week faster than before).</li><li>Reduction in errors introduced into the datasets versus the previous ETL route.</li><li>Granularity of the data has been increased, allowing consumers of the data (existing Finance consumers and other anticipated internal and external consumers) to exploit the data, rather than allowing the producers to determine what data might be useful.</li><li>Client strategy of decoupling their platforms and reducing their dependency on multiple ETL routines to pass data through their tech stack has started its implementation.</li></ul>",
    technologies: [
      "Jenkins",
      "Cucumber",
      "Apache Spark",
      "Kafka",
      "Vault",
      "Splunk",
      "AWS",
      "Ansible",
      "Kubernetes",
      "SonarQube",
      "Snowflake",
    ],
  },
];

export default ClientProjects;
