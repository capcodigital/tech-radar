Feature: AWS content page

Background: Navigate to the home page
    Given the user navigates to "http://localhost:3000/"

Scenario: AWS content appears as expected
    When the user clicks "View Our Tech Radar"
    And the user clicks the hamburger menu
    And the user navigates to "Cloud-&-Platforms" via the hamburger menu
    And the user navigates to category "AWS"
    And the user should see "In 2006, Amazon Web Services (AWS) began offering IT infrastructure services to businesses in the form of web services - now commonly known as cloud computing. One of the key benefits of cloud computing is the opportunity to replace up-front capital infrastructure expenses with low variable costs that scale with your business. With the Cloud, businesses no longer need to plan for and procure servers and other IT infrastructure weeks or months in advance. Instead, they can instantly spin up hundreds or thousands of servers in minutes and deliver results faster."
    And the user should see "Today, Amazon Web Services provides a highly reliable, scalable, low-cost infrastructure platform in the cloud that powers hundreds of thousands of businesses in 190 countries around the world."
    And the user should see "The AWS Global Cloud Infrastructure is the most secure, extensive, and reliable cloud platform, offering over 200 fully featured services from data centers globally. Whether you need to deploy your application workloads across the globe in a single click, or you want to build and deploy specific applications closer to your end-users with single-digit millisecond latency, AWS provides you the cloud infrastructure where and when you need it."
    And the user should see "AWS data centres are physical facilities designed to meet specific requirements of resiliency, redundancy as well as conform to regional data residency requirements within a specified geography. Key to this is the concept of Availability zones."
    And the user should see "Availability zones are distinct separate facilities within a region. AWS availability zones enable replication of applications and data to protect against single points of failure. This allows the design of high availability and redundancy in your applications."
    And the user should see "Today the AWS Cloud spans 81 Availability Zones within 25 geographic regions around the world, with announced plans for 21 more Availability Zones and 7 more AWS Regions in Australia, India, Indonesia, Israel, Spain, Switzerland, and United Arab Emirates (UAE)."
    And the user should see "With millions of active customers and tens of thousands of partners globally, AWS has the largest and most dynamic ecosystem. Customers across virtually every industry and of every size, including start-ups, enterprises, and public sector organizations, are running every imaginable use case on AWS."
    And the user should see "AWS offers a huge range services. Some of the most heavily used services are:"
    And the user clicks accordion "Compute - Amazon EC2"
    And the user can see accordion "Compute - Amazon EC2" description 
    """
    Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides secure, resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers. Amazon EC2’s simple web service interface allows you to obtain and configure capacity with minimal friction.
    Amazon EC2 offers the broadest and deepest choice of instances, built on the latest compute, storage, and networking technologies and engineered for high performance and security. For example:
    Choice of processors - Intel Xeon, AMD EPYC, or AWS Graviton CPUs
    High performance storage - Amazon Elastic Block Store (EBS)
    Enhanced Networking - 400 Gbps enhanced Ethernet networking for compute instances
    Choice of purchasing model - On-Demand, Spot Instances, and Savings Plan. With Spot Instances, you can save up to 90% for fault-tolerant workloads. With Savings Plan, you can save up to 72% savings with committed usage and flexibility.
    """
    And the user clicks accordion "Storage - Amazon S3"
    And the user can see accordion "Storage - Amazon S3" description "Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance. This means customers of all sizes and industries can use it to store and protect any amount of data for a range of use cases, such as data lakes, websites, mobile applications, backup and restore, archive, enterprise applications, IoT devices, and big data analytics. Amazon S3 provides easy-to-use management features so you can organize your data and configure finely-tuned access controls to meet your specific business, organizational, and compliance requirements. Amazon S3 is designed for 99.999999999% (11 9's) of durability, and stores data for millions of applications for companies all around the world."
    And the user clicks accordion "Serverless - AWS Lambda"
    And the user can see accordion "Serverless - AWS Lambda" description "AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers, creating workload-aware cluster scaling logic, maintaining event integrations, or managing runtimes. With Lambda, you can run code for virtually any type of application or backend service - all with zero administration. Just upload your code as a ZIP file or container image, and Lambda automatically and precisely allocates compute execution power and runs your code based on the incoming request or event, for any scale of traffic. You can set up your code to automatically trigger from over 200 AWS services and SaaS applications or call it directly from any web or mobile app. You can write Lambda functions in your favourite language (Node.js, Python, Go, Java, and more) and use both serverless and container tools, such as AWS SAM or Docker CLI, to build, test, and deploy your functions."
    And the user clicks accordion "Containers – Amazon Elastic Kubernetes Service (EKS) "
    And the user can see accordion "Containers – Amazon Elastic Kubernetes Service (EKS) " description "Amazon Elastic Kubernetes Service (Amazon EKS) is a managed container service to run and scale Kubernetes applications in the cloud or on-premises."