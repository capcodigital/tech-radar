Feature: Oracle content page

Background: Navigate to the home page
    Given the user navigates to Tech Radar

Scenario: Oracle content appears as expected
    When the user clicks "View Our Tech Radar"
    And the user clicks the hamburger menu
    And the user navigates to "Data Engineering" via the hamburger menu
    And the user navigates to category "Oracle"
    And the user should see "Oracle is the world's first commercially available Relational Database Management System."
    And the user should see "In 1977, Larry Ellison, Bob Miner, and Ed Oates started the consultancy Software Development Laboratories, which became Relational Software, Inc. (RSI). In 1983, RSI became Oracle Systems Corporation and then later Oracle Corporation."
    And the user should see "An RDBMS moves data into a database, stores the data, and retrieves it so that applications can manipulate it."
    And the user should see "Schema objects are user-created structures that directly refer to the data in the database. The database supports many types of schema objects, the most important of which are tables."
    And the user should see "A table is the basic unit of data organization in an Oracle database."
    And the user should see "A table describes an entity, which is something of significance about which information must be recorded. For example, an employee could be an entity."
    And the user should see "A table definition includes a table name and set of columns."
    And the user should see "A column identifies an attribute of the entity described by the table. For example, the column employee_id in the employees table refers to the employee ID attribute of an employee entity."
    And the user should see "In general, each column has a name and a data type, which is associated with a specific storage format, constraints, and valid range of values. The data type of a value associates a fixed set of properties with the value. For example, the data type for employee_id is NUMBER(6), indicating that this column can only contain numeric data up to 6 digits in width. The width can be predetermined by the data type, as with DATE."
    And the user should see "A row is a collection of column information corresponding to a record in a table. For example, a row in the employees table describes the attributes of a specific employee: employee ID, last name, first name, and so on. After you create a table, you can insert, query, delete, and update rows using SQL or PL/SQL."
    And the user should see "In Oracle Databases, data can be manipulated using SQL or PL/SQL."
    And the user should see "SQL is a set-based declarative language that provides an interface to an RDBMS such as Oracle Database."
    And the user should see "Procedural languages such as C describe how things should be done. SQL is nonprocedural and describes what should be done."
    And the user should see "SQL is the ANSI standard language for relational databases. All operations on the data in an Oracle database are performed using SQL statements. For example, you use SQL to create tables and query and modify data in tables."
    And the user should see "SQL statements enable you to perform the following tasks:"
    And the user should see "Query data"
    And the user should see "Insert, update, and delete rows in a table"
    And the user should see "Create, replace, alter, and drop objects"
    And the user should see "Control access to the database and its objects"
    And the user should see "Guarantee database consistency and integrity"
    And the user should see "SQL unifies the preceding tasks in one consistent language. Oracle SQL is an implementation of the ANSI standard. Oracle SQL supports numerous features that extend beyond standard SQL."
    And the user should see "PL/SQL is a procedural extension to Oracle SQL."
    And the user should see "PL/SQL is integrated with Oracle Database, enabling you to use all of the Oracle Database SQL statements, functions, and data types. You can use PL/SQL to control the flow of a SQL program, use variables, and write error-handling procedures."
    And the user should see "A primary benefit of PL/SQL is the ability to store application logic in the database itself. A PL/SQL procedure or function is a schema object that consists of a set of SQL statements and other PL/SQL constructs, grouped together, stored in the database, and run as a unit to solve a specific problem or to perform a set of related tasks."
    And the user should see "The principal benefit of server-side programming is that built-in functionality can be deployed anywhere. Oracle Database can also store program units written in Java. A Java stored procedure is a Java method published to SQL and stored in the database for general use. You can call existing PL/SQL programs from Java and Java programs from PL/SQL."
    And the user should see "In order to run SQL and PL/SQL we have various available tools:"
    And the user should see "Oracle SQL Developer"
    And the user should see "Pricing: Free"
    And the user should see "Vendor: Oracle"
    And the user should see "Targets: Development and Testing"
    And the user should see "Toad for Oracle"
    And the user should see "Pricing: License"
    And the user should see "Vendor: Quest Software"
    And the user should see "Targets: Development and Testing"
    And the user should see "Data Grip"
    And the user should see "Pricing: License"
    And the user should see "Vendor: JetBrains"
    And the user should see "Targets: Development and Testing"
    And the user should see "utPLSQL"
    And the user should see "Pricing: Free"
    And the user should see "Vendor: utPLSQL Project"
    And the user should see "Targets: Testing"