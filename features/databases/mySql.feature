Feature: MySQL content page

Background: Navigate to the home page
    Given the user navigates to Tech Radar

Scenario: MySQL content appears as expected
    When the user clicks "View Our Tech Radar"
    And the user clicks the hamburger menu
    And the user navigates to "Databases" via the hamburger menu
    And the user navigates to category "MySQL"
    And the user should see "Created in 1995, MySQL is the most popular open-source relational database management system. Its name is a combination of \"My\", the name of co-founder Michael Widenius's daughter, and \"SQL\", the abbreviation for Structured Query Language."
    And the user should see "A relational database is where data is organised from one table and split into multiple tables whereby each data type within the table is related to another. SQL is a language programmers use to create, modify, and extract data from the relational database, as well as control user access to the database."
    And the user should see "Today MySQL has become the leading database choice for web-based applications, used by high profile web properties including Facebook, Twitter, YouTube, Yahoo! and many more."
    And the user should see "At its core, MySQL offers web database management, however the features and capabilities available go beyond this. Below are just some of the key features of MySQL."
    And the user clicks accordion "Security"
    And the user can see accordion "Security" description "MySQL offers authentication for passwords, authorization for privilege management, encryption for sensitive data, firewalls to block database attacks such as SQL injection and frequent audits to maintain compliance."
    And the user clicks accordion "Scalability"
    And the user can see accordion "Scalability" description "MySQL supports business to scale up swiftly and meet the demand of users and data through a vertical and hybrid approach. It can handle almost any amount of data, up to as much as 50 million rows or more."
    And the user clicks accordion "Flexible"
    And the user can see accordion "Flexible" description "MySQL supports many embedded applications, which makes MySQL very flexible."
    And the user clicks accordion "Compatible Across Platforms"
    And the user can see accordion "Compatible Across Platforms" description "MySQL is compatible to run on many operating systems, like Novell NetWare, Windows* Linux*, many varieties of UNIX* (such as Sun* Solaris*, AIX, and DEC* UNIX), OS/2, FreeBSD*, and others."
    And the user clicks accordion "High Performance & Productivity "
    And the user can see accordion "High Performance & Productivity " description "MySQL is faster, more reliable, and cheaper because of its unique storage engine architecture. It provides very high-performance results in comparison to other databases without losing an essential functionality of the software. It has fast loading utilities because of the different cache memory."
    And the user clicks accordion "GUI Support"
    And the user can see accordion "GUI Support" description "MySQL Workbench is a visual database graphical user interface tool that integrates SQL development, admin, database design and creation into a single development environment."

    And the user should see "MySQL supports SQL data types in several categories: numeric types, date and time types, string (character and byte) types, spatial types, and the JSON data type. "
    And the user clicks accordion "Numeric"
    And the user can see accordion "Numeric" description "MySQL supports all standard SQL numeric data types. These types include the exact numeric data types (INTEGER, SMALLINT, DECIMAL, and NUMERIC), as well as the approximate numeric data types (FLOAT, REAL, and DOUBLE PRECISION)."
    And the user clicks accordion "Date and Time"
    And the user can see accordion "Date and Time" description "The date and time data types for representing temporal values are DATE, TIME, DATETIME, TIMESTAMP, and YEAR. The TIMESTAMP and DATETIME types have special automatic updating behaviour, which is that they are automatically initialised and updated to the current date and time. You can assign the current timestamp as the default value, the auto-update value, or both."
    And the user clicks accordion "String"
    And the user can see accordion "String" description 
    """
    The string data types are CHAR, VARCHAR, BINARY, VARBINARY, BLOB, TEXT, ENUM and SET. For each of the string types, there are specific storage requirements. For example VARCHAR, VARBINARY, BLOB and TEXT are variable length types which means that the storage required depend on the below:
    The actual length of the column value and max possible length
    The character set used for the column, as some character sets contain multibyte characters.
    """
    And the user clicks accordion "JSON"
    And the user can see accordion "JSON" description 
    """
    MySQL supports a native JSON data type that enables efficient access to data in JSON (JavaScript Object Notation) documents. The JSON data type provides these advantages over storing JSON-format strings in a string column:
    Automatic validation of JSON documents stored in JSON columns, invalid documents produce an error.
    Optimized storage format - JSON documents stored in JSON columns are converted to an internal format that permits quick read access to document elements.
    """
    And the user clicks accordion "Spatial"
    And the user can see accordion "Spatial" description 
    """
    Spatial data types can be single value geometry values, or a collection of values.
    Single Value: geometry, point, linestring, polygon
    Collection: geometrycollection, multipoint, multilinestring, multipolygon
    """
    
    And the user should see "Schema is a collection of tables with rows and columns, and a separate query can be written for the schemas like databases. They define size, type, a grouping of information. The schemas have database objects like views, tables, and privileges, which include data types, functions, and operators."
    And the user clicks accordion "Information Schemas"
    And the user can see accordion "Information Schemas" description "They provide access to metadata, stores information about other databases. The tables here are stored in the memory storage engine."
    And the user clicks accordion "Performance MySQL Schema"
    And the user can see accordion "Performance MySQL Schema" description "They acts as a storage engine that operates on a table under a schema database. Performance schema collects exact data in the MySQL database server. The configuration is done by three major roles namely actors, instruments and allows collecting statistical data. "
    And the user clicks accordion "Sys"
    And the user can see accordion "Sys" description "An object helps in collecting performance schemas data. We have a MySQL schema design that helps in analysing and tuning query optimization. A proper designing in schema requires entities, relationships, Scalability."

    And the user should see "MySQL Workbench functionality covers five main topics:"
    And the user clicks accordion "SQL Development"
    And the user can see accordion "SQL Development" description "Enables you to create and manage connections to database servers. Along with enabling you to configure connection parameters, MySQL Workbench provides the capability to execute SQL queries on the database connections using the built-in SQL Editor."
    And the user clicks accordion "Data Modelling (Design)"
    And the user can see accordion "Data Modelling (Design)" description "Enables you to create models of your database schema graphically, reverse and forward engineer between a schema and a live database, and edit all aspects of your database using the comprehensive Table Editor. The Table Editor provides easy-to-use facilities for editing Tables, Columns, Indexes, Triggers, Partitioning, Options, Inserts and Privileges, Routines and Views."
    And the user clicks accordion "Server Administration"
    And the user can see accordion "Server Administration" description "Enables you to administer MySQL server instances by administering users, performing backup and recovery, inspecting audit data, viewing database health, and monitoring the MySQL server performance."
    And the user clicks accordion "Data Migration"
    And the user can see accordion "Data Migration" description "Allows you to migrate from Microsoft SQL Server, Microsoft Access, Sybase ASE, SQLite, SQL Anywhere, PostgreSQL, and other RDBMS tables, objects and data to MySQL. Migration also supports migrating from earlier versions of MySQL to the latest releases."
    And the user clicks accordion "MySQL Enterprise Support"
    And the user can see accordion "MySQL Enterprise Support" description "Support for Enterprise products such as MySQL Enterprise Backup, MySQL Firewall, and MySQL Audit."

    And the user should see "Database testing helps us to find out such vulnerabilities in a database system to protect a database from an unstable state."   
    And the user should see "MySQL comes with a built-in test framework, which consists of programs that run tests, and directories and files used by those programs."
    And the user should see "The MySQL test framework uses several programs:"