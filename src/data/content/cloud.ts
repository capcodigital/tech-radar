import AzureMap from "../../images/Azuremap.png";
const techContent = [
  {
    technology: "Kubernetes",
    docsLink: "https://kubernetes.io/docs/home/",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
  },
  {
    technology: "Serverless",
    docsLink: "https://www.serverless.com/framework/docs/",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
  },
  {
    technology: "OpenShift",
    docsLink: "https://docs.openshift.com/",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
  },
  {
    technology: "PCF",
    docsLink: "/",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
  },
  {
    technology: "PKS",
    docsLink: "/",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
  },
  {
    technology: "GCP",
    docsLink: "https://cloud.google.com/docs",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
  },
  {
    technology: "AWS",
    docsLink: "https://docs.aws.amazon.com/",
    intro:
      "In 2006, Amazon Web Services (AWS) began offering IT infrastructure services to businesses in the form of web services - now commonly known as cloud computing. One of the key benefits of cloud computing is the opportunity to replace up-front capital infrastructure expenses with low variable costs that scale with your business. With the Cloud, businesses no longer need to plan for and procure servers and other IT infrastructure weeks or months in advance. Instead, they can instantly spin up hundreds or thousands of servers in minutes and deliver results faster. <br/><br/>Today, Amazon Web Services provides a highly reliable, scalable, low-cost infrastructure platform in the cloud that powers hundreds of thousands of businesses in 190 countries around the world. ",
    content: [
      {
        name: "Global footprint and Redundancy ",
        intro:
          "The AWS Global Cloud Infrastructure is the most secure, extensive, and reliable cloud platform, offering over 200 fully featured services from data centers globally. Whether you need to deploy your application workloads across the globe in a single click, or you want to build and deploy specific applications closer to your end-users with single-digit millisecond latency, AWS provides you the cloud infrastructure where and when you need it. <img width='100%' src='https://d2908q01vomqb2.cloudfront.net/da4b9237bacccdf19c0760cab7aec4a8359010b0/2020/03/17/aws_regions-1.png'/>AWS data centres are physical facilities designed to meet specific requirements of resiliency, redundancy as well as conform to regional data residency requirements within a specified geography. Key to this is the concept of Availability zones. <br/> <br/>Availability zones are distinct separate facilities within a region. AWS availability zones enable replication of applications and data to protect against single points of failure. This allows the design of high availability and redundancy in your applications. <br/><br/>Today the AWS Cloud spans 81 Availability Zones within 25 geographic regions around the world, with announced plans for 21 more Availability Zones and 7 more AWS Regions in Australia, India, Indonesia, Israel, Spain, Switzerland, and United Arab Emirates (UAE). <img width='100%' src='https://digitalcloud.training/wp-content/uploads/2021/04/aws-global-infrastructure.png'/>With millions of active customers and tens of thousands of partners globally, AWS has the largest and most dynamic ecosystem. Customers across virtually every industry and of every size, including start-ups, enterprises, and public sector organizations, are running every imaginable use case on AWS.  ",
        data: [],
      },
      {
        name: "Services",
        intro:
          "AWS offers a huge range services. Some of the most heavily used services are: ",
        data: [
          {
            name: "Compute - Amazon EC2",
            description:
              "Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides secure, resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers. Amazon EC2’s simple web service interface allows you to obtain and configure capacity with minimal friction. <br/>Amazon EC2 offers the broadest and deepest choice of instances, built on the latest compute, storage, and networking technologies and engineered for high performance and security. For example: <ul><li>Choice of processors - Intel Xeon, AMD EPYC, or AWS Graviton CPUs </li> <li>High performance storage - Amazon Elastic Block Store (EBS) </li> <li>Enhanced Networking - 400 Gbps enhanced Ethernet networking for compute instances </li> <li>Choice of purchasing model - On-Demand, Spot Instances, and Savings Plan. With Spot Instances, you can save up to 90% for fault-tolerant workloads. With Savings Plan, you can save up to 72% savings with committed usage and flexibility. </li> </ul> ",
          },
          {
            name: "Storage - Amazon S3",
            description:
              "Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance. This means customers of all sizes and industries can use it to store and protect any amount of data for a range of use cases, such as data lakes, websites, mobile applications, backup and restore, archive, enterprise applications, IoT devices, and big data analytics. Amazon S3 provides easy-to-use management features so you can organize your data and configure finely-tuned access controls to meet your specific business, organizational, and compliance requirements. Amazon S3 is designed for 99.999999999% (11 9's) of durability, and stores data for millions of applications for companies all around the world.  ",
          },
          {
            name: "Serverless - AWS Lambda",
            description:
              "AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers, creating workload-aware cluster scaling logic, maintaining event integrations, or managing runtimes. With Lambda, you can run code for virtually any type of application or backend service - all with zero administration. Just upload your code as a ZIP file or container image, and Lambda automatically and precisely allocates compute execution power and runs your code based on the incoming request or event, for any scale of traffic. You can set up your code to automatically trigger from over 200 AWS services and SaaS applications or call it directly from any web or mobile app. You can write Lambda functions in your favourite language (Node.js, Python, Go, Java, and more) and use both serverless and container tools, such as AWS SAM or Docker CLI, to build, test, and deploy your functions. ",
          },
          {
            name: "Containers – Amazon Elastic Kubernetes Service (EKS) ",
            description:
              "Amazon Elastic Kubernetes Service (Amazon EKS) is a managed container service to run and scale Kubernetes applications in the cloud or on-premises.<img width='100%' src='https://d1.awsstatic.com/product-page-diagram_Amazon-EKS%402x.ddc48a43756bff3baead68406d3cac88b4151a7e.ddc48a43756bff3baead68406d3cac88b4151a7e.png'/> ",
          },
        ],
      },
    ],
    examples: [],
    reference: ["https://docs.aws.amazon.com/"],
  },
  {
    technology: "Grafana",
    docsLink: "https://grafana.com/docs/",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
  },
  {
    technology: "Azure",
    docsLink: "https://docs.microsoft.com/en-us/azure/?product=featured",
    intro:
      "Azure is Microsoft’s cloud computing platform offering many products and services across compute, storage, and networking. Azure provides customers the ability to host their applications and data through Infrastructure as a Service (IaaS), Platform as a Service (PaaS) and Software as a Service (SaaS) models. <br/><br/>Azure was officially released at the Microsoft Professional Developers Conference in 2008. In the last five years Azure has seen considerable growth leading it to be the 2nd largest cloud provider. ",
    content: [
      {
        name: "Global footprint ",
        intro: `<img width='100%' src=${AzureMap} /><br/><br/>Azure has a global footprint that comprises of: <br/><br/><ul><li>Regional data centres across global geographies </li><li>Points of presence and edge locations</li></ul> <br/><br/>Azure data centres can be found in geographies across the globe. As of writing there are more than 30 distinct geographies available, and others coming online. Within each geography there are regional data centres connected to one another through low latency network links. For example, within the UK geography there are two regional data centres called UK South and UK West. `,
        data: [],
      },
      {
        name: "Redundancy ",
        intro:
          "Azure data centres are physical facilities designed to meet specific requirements of resiliency, redundancy as well as conforming to regional data residency requirements within a specified geography. <br/><br/>Key to this is the concept of Availability zones. Availability zones are distinct separate facilities within a region. <br/><br/>Azure regions that support availability zones enable replication of applications and data to protect against single points of failure. <img width='100%' src='https://petri-media.s3.amazonaws.com/2020/09/Figure1.jpg' /> ",
        data: [],
      },
      {
        name: "Availability Zones ",
        intro:
          "Availability zones allow the design of high availability and redundancy in your applictations. By not leveraging this feature your applications and data are at risk of single points of failure during an outage.",
        data: [],
      },
      {
        name: "Consumption models ",
        intro:
          "Cloud computing considerably changes the way businesses view IT operational costs. Traditional IT and on-premises data centres concentrated on upfront capital expenditure to invest in hardware and software to support the business yearly budgetary cycles. However, with cloud computing there is a considerable shift towards pay as you go consumption models. <br/><br/> The term “utility” or “elastic computing” is often used to describe public cloud usage. Your consumption shifts based on the demand for your application and services. The ability to metre your usage allows customers to experiment and do proof of concepts with temporary environments. ",
        data: [],
      },
      {
        name: "Services",
        intro:
          "Azure offers a wide range service split across computer, storage, and networking. Some of the most popular services in demand in 2021 include: ",
        data: [
          {
            name: "Azure SQL Database ",
            description:
              "A fully managed PaaS service. Azure SQL Database allows developers to build born in the cloud applications without managing the associated infrastructure of on-premises SQL Server ",
          },
          {
            name: "Azure Kubernetes Service ",
            description:
              "A managed Kubernetes offering hosted in Azure. Concentrate on developing your cloud native applications hosted in containers. Removes significant management headache in building, maintaining your Kubernetes cluster. ",
          },
          {
            name: "Azure Virtual desktop ",
            description:
              "With the shift towards hybrid ways of working, organizations can leverage Virtual Desktop Infrastructure hosted in Azure to securely deliver VDI solutions to end users. <br/><br/> The above examples are a small snapshot of the services and use cases that Azure offers.  ",
          },
        ],
      },
    ],
    examples: [],
    reference: [],
  },
  {
    technology: "Digital Ocean",
    docsLink: "https://docs.digitalocean.com/products/",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
  },
];
export default techContent;
