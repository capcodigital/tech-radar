Feature: Postgres content page

Background: Navigate to the home page
    Given the user navigates to Tech Radar

Scenario: Postgres content appears as expected
    When the user clicks "View Our Tech Radar"
    And the user clicks the hamburger menu
    And the user navigates to "Data Engineering" via the hamburger menu
    And the user navigates to category "Postgres"
    And the user should see "PostgreSQL is a powerful, open-source object-relational database management system (ORDBMS), that uses and extends the SQL language, combined with many features that safely store and scale the most complicated data workloads."
    And the user should see "PostgreSQL has earned a strong reputation for its proven architecture, reliability, data integrity, robust feature set, extensibility and the dedication of the open-source community behind the software to consistently deliver performant and innovative solutions."
    And the user should see "The origins of PostgreSQL date back to 1986, when it was developed as part of the POSTGRES project at the University of California at Berkeley Computer Science Department. It has more than 30 years of active development on the core platform."
    And the user should see "PostgreSQL runs on all major operating systems, has been ACID-compliant since 2001 and has powerful add-ons, such as the popular PostGIS geospatial database extender. It has become the open-source relational database of choice for many people and organisations."
    And the user should see "The latest version of PostgreSQL is 13.4, released on 12 August 2021."
    And the user should see "PostgreSQL comes with many features aimed to help developers build applications, administrators to protect data integrity and build fault-tolerant environments and help manage data no matter how big or small the dataset."
    And the user should see "In addition to being free and open-source, PostgreSQL is highly extensible. It is possible to define data types, build out custom functions, even write code from different programming languages without recompiling a database."
    And the user should see "PostgreSQL tries to conform with the SQL standard where such conformance does not contradict traditional features or could lead to poor architectural decisions. Many of the features required by the SQL standard are supported, though sometimes with slightly differing syntax or function. Further moves towards conformance can be expected over time."
    And the user should see "Below is an inexhaustive list of various features found in PostgreSQL, with more being added in every major release:"
    And the user clicks accordion "Data Types"
    And the user can see accordion "Data Types" description 
    """
    Primitives: Integer, Numeric, String, Boolean
    Structured: Date/Time, Array, Range, UUID
    Document: JSON/JSONB, XML, Key-value (Hstore)
    Geometry: Point, Line, Circle, Polygon
    Customizations: Composite, Custom Types 
    """
    And the user clicks accordion "Data Integrity"
    And the user can see accordion "Data Integrity" description 
    """
    UNIQUE, NOT NULL
    Primary Keys
    Foreign Keys
    Exclusion Constraints
    Explicit Locks, Advisory Locks
    """
    And the user clicks accordion "Concurrency, Performance"
    And the user can see accordion "Concurrency, Performance" description 
    """
    Indexing: B-tree, Multicolumn, Expressions, Partial
    Advanced Indexing: GiST, SP-Gist, KNN Gist, GIN, BRIN, Covering indexes, Bloom filters
    Sophisticated query planner / optimizer, index-only scans, multicolumn statistics
    Transactions, Nested Transactions (via savepoints)
    Multi-Version concurrency Control (MVCC)
    Parallelization of read queries and building B-tree indexes
    Table partitioning
    All transaction isolation levels defined in the SQL standard, including Serializable
    Just-in-time (JIT) compilation of expressions
    """
    And the user clicks accordion "Reliability, Disaster Recovery"
    And the user can see accordion "Reliability, Disaster Recovery" description 
    """
    Write-ahead Logging (WAL)
    Replication: Asynchronous, Synchronous, Logical
    Point-in-time-recovery (PITR), active standbys
    Tablespaces
    """
    And the user clicks accordion "Security"
    And the user can see accordion "Security" description 
    """
    Authentication: GSSAPI, SSPI, LDAP, SCRAM-SHA-256, Certificate, and more
    Robust access-control system
    Column and row-level security
    Multi-factor authentication with certificates and an additional method
    """
    And the user clicks accordion "Extensibility"
    And the user can see accordion "Extensibility" description 
    """
    Stored functions and procedures
    Procedural Languages: PL/PGSQL, Perl, Python (and many more)
    SQL/JSON path expressions
    Foreign data wrappers: connect to other databases or streams with a standard SQL interface
    Customizable storage interface for tables
    Many extensions that provide additional functionality, including PostGIS
    """
    And the user clicks accordion "Internationalisation, Text Search "
    And the user can see accordion "Internationalisation, Text Search " description 
    """
    Support for international character sets, e.g., through ICU collations
    Case-insensitive and accent-insensitive collations
    Full-text search
    """