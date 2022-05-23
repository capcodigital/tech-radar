Feature: MongoDB content page

Background: Navigate to the home page
    Given the user navigates to Tech Radar

Scenario: MongoDB content appears as expected
    When the user clicks "View Our Tech Radar"
    And the user clicks the hamburger menu
    And the user navigates to "Databases" via the hamburger menu
    And the user navigates to category "MongoDB"
    And the user should see "MongoDB is an open-source document-based database built on a horizontal scale-out architecture. Founded in 2007, MongoDB has a large and thriving community of developers across the open-source community, academia, among system integrators and consulting firms across the globe."
    And the user should see "Instead of storing data in tables, like SQL databases, each row in a MongoDB database is a document described in JSON, a formatting language. Not only that data can be stored to look like rows and columns, but documents can be embedded inside each other - a technique that allows complex data objects to be stored and retrieved together."
    And the user should see "MongoDB database can be used from a wide variety of programming languages, including C, C# and .NET, C++, Erlang, Haskell, Java, JavaScript, Perl, PHP, Python, Ruby, and Scala (via Casbah)."
    And the user should see "MongoDB Atlas is the core database at the centre of the MongoDB Cloud. It allows developers to get started right away in any of the public clouds and easily migrate on-premises MongoDB instances to the cloud."
    And the user should see "The latest version of the MongoDB is 4.4, released in September 2020."
    And the user should see "MongoDB was built for people who are developing internet and business applications that need to evolve quickly and handle data of all sorts in a scalable way."
    And the user should see "Thousands of companies run their businesses on MongoDB and use it to handle their most demanding applications in areas like IoT, Gaming, Logistics, Banking, e-Commerce and Content Management."
    And the user should see "MongoDB is a great choice to: Represent data with natural clusters and variability over time, or in its structure Support rapid iterative development Enable collaboration of multiple teams Scale to high levels of read and write traffic Scale data repository to a massive size Evolve the type of deployment as the business changes Store, manage and search data with text, geospatial or time series dimensions"
    And the user should see "MongoDB is NoSQL database, developed because RDBMS systems based on SQL did not support the scale or rapid development cycles needed for creating modern applications. NoSQL includes document-oriented databases like MongoDB, columnar databases, in-memory databases and more."
    And the user should see "The “documents” in MongoDB are JSON and BSON files"    
    And the user should see "The structure of the information is under the control of the developer. Developers adjust and reformat the database as the application evolves, without the help of a database administrator. When needed, MongoDB can coordinate and control changes to the structure of documents using schema validation"
    And the user should see "Binary JSON format (BSON), was created to increase efficiency and support more data types. Data stored in BSON can be searched and indexed, tremendously increasing performance"
    And the user should see "MongoDB supports a wide variety of indexing methods including text, decimal, geospatial and partial. Geospatial tagging was added so that documents can be queried by location."
    And the user should see "MongoDB is built on a scale-out architecture - a structure that distributes work across many smaller computers in order to work together and create systems that are fast and can handle huge amounts of data."
    And the user should see "MongoDB engineering innovations support massive numbers of reads and writes. At the heart of these innovations is MongoDB’s approach to sharding, which allows clusters of information to be stored together as the information is spread across the cluster of computers."
    And the user should see "MongoDB also supports database transactions that allow multiple database changes to be grouped together and either made or rejected in a batch. This is one of the most important features for support of advanced applications."
    And the user should see "Some of the reasons why MongoDB is the most popular NoSQL database:"
