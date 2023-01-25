import camelArchitecture from "images/technologies/camel-architecture.png";
import grpcArchitecture from "images/technologies/grpc-architecture.png";
import graphqlArchitecture from "images/technologies/graphql-architecture.png";
import restArchitecture from "images/technologies/rest-architecture.png";
import activemqArchitecture from "images/technologies/activemq_architecture.png";
import activemqQueuesTopics from "images/technologies/queues-topics.png";

const techContent = [
  {
    technology: "Rest",
    docsLink: "https://en.wikipedia.org/wiki/Representational_state_transfer",
    intro:
      "REST (Representational State Transfer) is a software architectural style that defines a set of constraints to be used for creating web services. REST is used for developing lightweight, stateless, and loosely-coupled web services that are easily scalable and can be used to access and manipulate data in a decentralized environment.",
    content: [
      {
        name: "REST Principles",
        intro: "",
        data: [
          {
            name: "Client-Server",
            description:
              "The client and server should be decoupled and the client should not have any knowledge of the server-side implementation.",
          },
          {
            name: "Stateless",
            description:
              "All server state should be stored on the client side.",
          },
          {
            name: "Cacheable",
            description:
              "All responses should be cacheable to improve performance.",
          },
          {
            name: "Layered System",
            description:
              "The system should be designed in layers to improve scalability.",
          },
          {
            name: "Uniform Interface",
            description:
              "All communication between clients and servers should be done using a uniform interface such as HTTP.",
          },
          {
            name: "Code on Demand",
            description:
              "The client should be able to download code from the server to improve functionality.",
          },
        ],
      },
      {
        name: "Architecture",
        intro: `<br /><img src=${restArchitecture} width="100%" /><br /><br /><ol>Rest architecture allows for improved performance, as the system is designed to be stateless and cacheable. This means that the server does not need to process the same requests repeatedly and can respond faster. Additionally, the use of a uniform interface makes the system easier to maintain and less prone to errors.`,
        data: [],
      },
    ],
    examples: [],
    reference: ["https://www.codecademy.com/article/what-is-rest"],
  },
  {
    technology: "Camel",
    docsLink: "https://camel.apache.org/docs/",
    intro:
      "Apache Camel&trade; is a versatile open-source integration framework based on known Enterprise Integration Patterns. Camel empowers you to define routing and mediation rules in a variety of domain-specific languages (DSL, such as Java, XML, Groovy, Kotlin, and YAML). This means you get smart completion of routing rules in your IDE, whether in a Java or XML editor. <br /><br />Apache Camel uses URIs to work directly with any kind of transport or messaging model such as HTTP, ActiveMQ, JMS, JBI, SCA, MINA or CXF, as well as pluggable Components and Data Format options. Apache Camel is a small library with minimal dependencies for easy embedding in any Java application. Apache Camel lets you work with the same API regardless which kind of transport is used — so learn the API once and you can interact with all the Components provided out-of-box.",
    content: [
      {
        name: "Architecture",
        intro: `<img src=${camelArchitecture} width="100%" /><br />At the center of the diagram you have the heart of Apache Camel; the CamelContext. The CamelContext is "Camel" …​ the runtime Camel, that contains and holds everything together. Routes are defined using one of Camel's DSLs. Processors are used to transform and manipulate messages during routing as well as to implement all the EIPs, which have corresponding names in the DSLs. Components are the extension points in Camel for adding connectivity to other systems. To expose these systems to the rest of Camel, components provide an endpoint interface.`,
        data: [
          {
            name: "Context",
            description:
              "Camel provides a runtime engine, called the Camel Context, which runs your integrations. It's kind of like a mini-application server, embedded inside your Java application. The Camel Context runs your integrations and is generally responsible for moving data through the system.",
          },
          {
            name: "Routes",
            description:
              "In Camel, a route is a set of processing steps that are applied to a message as it travels from a source to a destination. A route typically consists of a series of processing steps that are connected in a linear sequence. <br /><br />A Camel route is where the integration flow is defined. For example, you can write a Camel route to specify how two systems can be integrated. You can also specify how the data can be manipulated, routed, or mediated between the systems. <br /><br />The routes are typically defined using a simple, declarative syntax that is easy to read and understand.",
          },
          {
            name: "Endpoints",
            description:
              "An Endpoint is an interface through which Camel exchanges a message with another system. Camel can receive a message from an Endpoint, or send a message to an Endpoint. It supports the Message Endpoint pattern using the Endpoint interface.",
          },
          {
            name: "Components",
            description:
              "To allow Camel to create an Endpoint, it uses a Component. A Component is simply a specialized plug that allows you to connect to an external system, such as a file on disk, a mailbox, or an application like Dropbox or Twitter.",
          },
        ],
      },
      {
        name: "When to use Camel",
        intro:
          "There are a few major drivers when you would want to use Apache Camel:",
        data: [
          {
            name: "Integrating applications together",
            description:
              "Camel is intended for situations where you need to move data between different protocols and applications (like files, emails, APIs or web apps). <br /><br />You can use Apache Camel when you want to move data between any one of the apps and protocols supported by its 200+ components. Components in Camel generally all work in a similar way. So, once you understand how to use one component, you will find it easier to use others. Camel includes components for many different apps, from Facebook and Twitter, to Salesforce and Workday. You can also write your own custom component.",
          },
          {
            name: "Pattern-based development",
            description:
              "Many frequent requirements for integration - like support for transactions, or transformation - would usually be complicated to plan and write in code. But Camel provides many of these, and can often be enabled with just the flick of a switch (OK, by just changing a variable!). Camel provides patterns and functionality for things like: <br /><ul><li>routing data based on its content, using Camel's content-based routing</li><li>handling errors, transactions and rollbacks</li><li>transforming data</li><li>caching frequently-accessed data</li><li>encryption and authentication</li></ul>These are examples of just some of the things that Camel can do. <br /><br />These requirements are made easier in Camel, because it provides these features as a set of patterns, called enterprise integration patterns (after the book of the same name). You can pull any of these enterprise integration patterns “off the shelf”, and use them in your code, without having to write your own solution every time you need these capabilities.",
          },
          {
            name: "One high-level style for many integrations",
            description:
              "Once you've learned the basic patterns, and how to work with Camel components, you'll find that it becomes easy to churn out many integrations in Camel. <br /><br />This is an advantage of Camel: the ability to create many integrations fairly quickly. Camel is ideal if you are developing a set of integrations, and you would like them all to be developed in a similar way. This can be really attractive option in larger companies where it helps to pick one approach which is shared and understood by the development team.",
          },
          {
            name: "Working with data, and especially Java objects",
            description:
              "As it's a Java framework, it's especially good at working with Java objects. So if you're working with a file format that can be de-serialised into a Java object (many file formats can be converted into Java objects, like XML, JSON….) then it will be handled easily by Camel.",
          },
        ],
      },
    ],
    examples: [],
    reference: [
      "https://camel.apache.org/",
      "https://tomd.xyz/camel-when-to-use/",
    ],
  },
  {
    technology: "gRPC",
    docsLink: "https://grpc.io/docs/",
    intro:
      "gRPC is a high-performance, open-source framework initially created by Google for building remote procedure call (RPC) APIs. It uses the Protocol Buffers data serialization format and supports a variety of programming languages, including C++, C#, Go, Java, Python, and Ruby. gRPC is designed to work efficiently over a wide variety of network connections, including high-latency, low-bandwidth connections, and can be used to build both internal and external APIs. It also supports bidirectional streaming, flow control, and error handling.",
    content: [
      {
        name: "Why using gRPC?",
        intro:
          "There are several advantages to using gRPC: <br /><ol><li>High performance: gRPC is designed for high-performance, with a compact binary format and support for bidirectional streaming. This makes it well-suited for building high-performance, low-latency APIs.</li><li>Language agnostic: gRPC uses Protocol Buffers as the data serialization format, which allows for easy integration with a variety of programming languages, including C++, C#, Go, Java, Python, and Ruby.</li><li>Built-in flow control and error handling: gRPC includes built-in support for flow control and error handling, which helps to improve the reliability and robustness of your APIs.</li><li>Cross-platform: gRPC can run on a variety of platforms, including Linux, Windows, and MacOS, and can be easily integrated with popular web and mobile frameworks.</li><li>Good support and active community: gRPC is developed and maintained by Google, and has an active open-source community that contributes to its development and provides support.</li><li>Mobile support: gRPC has first class support for mobile platforms, making it easy to build scalable and reliable mobile apps.</li><li>Bi-directional streaming: gRPC supports bidirectional streaming, which allows for real-time communication between clients and servers.</li></ol>",
        data: [],
      },
      {
        name: "Architecture",
        intro: `The architecture of gRPC can be divided into two main components: the gRPC server and the gRPC client.<br /><img src=${grpcArchitecture} width="100%" /><br /><br /><ol><li>gRPC Server: The gRPC server is responsible for handling incoming requests from clients and processing them according to the service definition. It uses Protocol Buffers to define the service and its associated methods, which are used to map incoming requests to the appropriate handler functions. The gRPC server can be written in any language that supports gRPC, and runs on a variety of platforms.</li><li>gRPC Client: The gRPC client is responsible for making requests to the gRPC server and handling the responses. The client uses the same service definition as the server to construct requests and parse responses. The gRPC client can also be written in any language that supports gRPC.</li></ol>Both the client and server use the gRPC library to handle the underlying details of the communication, such as establishing connections, serializing data, and handling errors. The gRPC library also provides features such as flow control, and bi-directional streaming. <br />In summary, gRPC uses Protocol Buffers for data serialization, and enables communication between server and clients via a high-performance, binary-based protocol. The gRPC library provides the functionality to establish connections, handle errors, and perform flow control and bidirectional streaming.`,
        data: [],
      },
    ],
    examples: [],
    reference: ["https://grpc.io/"],
  },
  {
    technology: "Kafka",
    docsLink: "https://kafka.apache.org/documentation/",
    intro:
      "Kafka is an event streaming platform, which allows for capturing data in real-time from event sources like databases, sensors, mobile devices, cloud services, and software applications in the form of streams of events. <br/><br/> Events are used to process payments and financial transactions in real-time, such as in stock exchanges, banks, and insurances. Kafka is storing these event streams durably for later retrieval, manipulation, processing, and reacting to the event streams in real-time as well as retrospectively a distributed system consisting of servers and clients that communicate via a high-performance TCP network protocol.",
    content: [
      {
        name: "Event Streaming Concepts",
        intro: "",
        data: [
          {
            name: "Event",
            description:
              "When you read or write data to Kafka, you do this in the form of events. Conceptually, an event has a key, value, timestamp, and optional metadata headers. An example event: <br/><br/> Event key: 'Capco Client' <br/><br/> Event value: 'Made a payment of $200 to Capco' <br/><br/> Event timestamp: 'Jan. 13, 2023 at 11:33 p.m.'",
          },
          {
            name: "Producer",
            description:
              "Producers are those client applications that publish (write) events to Kafka.",
          },
          {
            name: "Consumer",
            description:
              "Consumers are those that subscribe to (read and process) these events.",
          },
          {
            name: "Topic",
            description:
              "Events are organized in topics, similarly to a folder in a filesystem, and the events are the files in that folder, eg. topic 'payments'. Topics in Kafka are always multi-producer and multi-subscriber.",
          },
          {
            name: "Publish",
            description:
              "To publish (write) and subscribe to (read) streams of events, including continuous import/export of your data from other systems.",
          },
          {
            name: "Store",
            description:
              "To store streams of events durably and reliably for as long as needed. ",
          },
          {
            name: "Process",
            description:
              "To process streams of events as they occur or retrospectively. ",
          },
        ],
      },
      {
        name: "Capabilities",
        intro: "",
        data: [
          {
            name: "High Throughput",
            description:
              "Delivering messages at low performance networks using a cluster of machines with low latencies.",
          },
          {
            name: "Scalability",
            description:
              "Scaling production clusters up to a thousand servers, trillions of messages per day, petabytes of data, hundreds of thousands of partitions, adjusting storage and processing resources.",
          },
          {
            name: "Permanent storage",
            description:
              "Storing streams of data safely in a distributed, durable, fault-tolerant cluster.",
          },
          {
            name: "High availability",
            description:
              "Distributing clusters efficiently over availability zones or connecting separate clusters across geographic regions.",
          },
        ],
      },
    ],
    examples: [],
    reference: ["https://www.codesmith.io/blog/graphql-vs-rest"],
  },
  {
    technology: "ActiveMQ",
    docsLink: "https://activemq.apache.org/components/classic/documentation",
    intro:
      "ActiveMQ is an open source, message-oriented middleware (MOM) written in Java that is used to handle asynchronous communication between applications. It is specifically designed to handle the transmission of data between distributed applications in a secure and reliable manner. ActiveMQ is a popular choice for enterprise messaging due to its flexibility, scalability, and reliability. It is often used in combination with other MOMs such as RabbitMQ and Apache Kafka. <br><br> ActiveMQ provides several features such as message queuing, publish and subscribe messaging, clustering, and security. It also supports a variety of different protocols, including JMS, AMQP, STOMP, MQTT, and WebSocket. Additionally, it provides a wide range of plugins for integration with other applications and services.",
    content: [
      {
        name: "Features of ActiveMQ",
        intro: "",
        data: [
          {
            name: "",
            description: "1. Highly available and scalable",
          },
          {
            name: "",
            description:
              "2. Supports a wide range of enterprise messaging protocols",
          },
          {
            name: "",
            description:
              "3. Supports Queues, Topics, Virtual Topics, and Durable Subscriptions",
          },
          {
            name: "",
            description: "4. Flexible routing and message filtering",
          },
          {
            name: "",
            description: "5. Clustering and distributed destinations",
          },
          {
            name: "",
            description: "6. Message groups and message prioritization",
          },
          {
            name: "",
            description: "7. Configurable persistence and message storage",
          },
          {
            name: "",
            description: "8. Comprehensive security model",
          },
          {
            name: "",
            description: "9. Ability to integrate with other JMS providers",
          },
          {
            name: "",
            description: "10. Comprehensive monitoring and management tools",
          },
        ],
      },
      {
        name: "Benefits of ActiveMQ",
        intro: "",
        data: [
          {
            name: "1. High Availability",
            description:
              "Apache ActiveMQ is designed for high availability and can be replicated across multiple nodes for better scalability.",
          },
          {
            name: "2.	Reliable Messaging",
            description:
              "ActiveMQ supports JMS 1.1 and J2EE 1.4 and guarantees delivery of messages using features such as message store and persistent messaging.",
          },
          {
            name: "3.	Flexible Deployment Models",
            description:
              "ActiveMQ can be deployed as both an embedded broker or a client/server type of broker.",
          },
          {
            name: "4.	Security",
            description:
              "ActiveMQ supports a wide range of security policies, including authentication and authorization.",
          },
          {
            name: "5.	Flexible Connectivity",
            description:
              "ActiveMQ supports a wide range of APIs and protocols like AMQP, STOMP, and MQTT, making it easy to integrate with other applications.",
          },
          {
            name: "6.	Performance",
            description:
              "ActiveMQ supports asynchronous messaging and uses a distributed queuing system with high throughput.",
          },
          {
            name: "7.	Easy to Manage",
            description:
              "ActiveMQ provides a rich monitoring and management console, which makes it easy to manage and monitor the message broker.",
          },
        ],
      },
      {
        name: "ActiveMQ Architecture Overview",
        intro:
          "ActiveMQ's anatomy consists of data patterns called messages, queues, and topics. <br><br> Messages are just what they sound like, payloads of data that can be shipped between various systems. These payloads can have headers and properties associated with them that can:",
        data: [
          {
            name: "",
            description: "<ul><li>Categorize them</li></ul>",
          },
          {
            name: "",
            description:
              "<ul><li>Control various portions of their routing</li></ul>",
          },
          {
            name: "",
            description:
              "<ul><li>Facilitate moving the payloads around a connected network of applications</li></ul>",
          },
        ],
      },
      {
        name: "",
        intro: "Here's a basic JMS structure, such as ActiveMQ:",
        data: [],
      },
      {
        name: "",
        intro: `<img width='100%' src=${activemqArchitecture} /> `,
        data: [],
      },
      {
        name: "How ActiveMQ Messages Work?",
        intro:
          "Once messages make their way into the system, they are arranged into two patterns (two types): <em>Queues</em> and <em>Topics</em>. ",
        data: [
          {
            name: "Queue based communication (Point to Point)",
            description:
              "Queues are FIFO (first-in, first out) pipelines of messages produced and consumed by brokers and clients. Producers create messages and push them onto these queues. Then those messages are polled and collected by consumer applications, one message at a time.",
          },
          {
            name: "Topic based communication (Publish/ Subscribe)",
            description:
              "Topics are subscription-based message broadcast channels. When a producing application sends a message, multiple recipients who are ‘subscribed’ to that topic receive a broadcast of the message. This producing application is sometimes called a ‘publisher’ in the context of topic messaging.",
          },
        ],
      },
      {
        name: "",
        intro:
          "To sum up, the main difference between a <em>queue</em> and a <em>topic</em> is:",
        data: [
          {
            name: "",
            description:
              "<ul><li>A <em>topic</em> implements a publish and subscribe workflow.</li></ul>",
          },
          {
            name: "",
            description:
              "<ul><li>A <em>queue</em> implements a load balancing workflow.</li></ul>",
          },
        ],
      },
      {
        name: "",
        intro: `<img width='100%' src=${activemqQueuesTopics} /> `,
        data: [],
      },
      {
        name: "ActiveMQ use cases",
        intro: "",
        data: [
          {
            name: "1. Messaging",
            description:
              "ActiveMQ is used to build reliable messaging solutions in various domains, such as financial services, e-commerce, healthcare, and more.",
          },
          {
            name: "2.	Event-Driven Architecture",
            description:
              "ActiveMQ is used to asynchronously send and receive messages in an event-driven architecture.",
          },
          {
            name: "3.	Mobile Messaging",
            description:
              "ActiveMQ is used to provide mobile messaging services across multiple mobile platforms.",
          },
          {
            name: "4.	Business Process Management",
            description:
              "ActiveMQ is used to integrate business processes and to facilitate communication between different systems.",
          },
          {
            name: "5.	IoT",
            description:
              "ActiveMQ is used to provide data-driven messaging for Internet of Things (IoT) applications.",
          },
          {
            name: "6.	Cloud Integration",
            description:
              "ActiveMQ is used to provide secure, reliable, and scalable messaging solutions for cloud-based applications.",
          },
        ],
      },
    ],
    examples: [],
    reference: [
      "https://activemq.apache.org/components/classic/documentation",
      "https://www.openlogic.com/blog/what-apache-activemq",
      "https://www.tutorialspoint.com/apache_activemq/index.htm",
    ],
  },
  {
    technology: "IBM MQ",
    docsLink: "https://www.ibm.com/docs/en/ibm-mq",
    intro:
      "IBM MQ (formerly known as IBM WebSphere MQ) is a messaging middleware platform that enables the integration of applications and systems across different operating systems, platforms, and programming languages. It allows applications to communicate with each other by sending and receiving messages through queues, which can be located on the same machine or on different machines. IBM MQ provides a reliable, secure, and scalable messaging infrastructure for enterprise environments.",
    content: [
      {
        name: "Benefits",
        intro:
          "There are several benefits to using IBM MQ for messaging in an enterprise environment:",
        data: [
          {
            name: "Reliability",
            description:
              "IBM MQ guarantees that messages are delivered, even if there are temporary errors or failures in the system.",
          },
          {
            name: "Scalability",
            description:
              "IBM MQ can handle a large volume of messages and supports distributed architectures, allowing for easy scaling as the number of applications and systems grow.",
          },
          {
            name: "Security",
            description:
              "IBM MQ provides a variety of security features, such as encryption, authentication, and authorization, to protect messages and the MQ infrastructure.",
          },
          {
            name: "Integration",
            description:
              "IBM MQ can connect a wide range of systems and applications, regardless of their operating system, platform, or programming language.",
          },
          {
            name: "Flexibility",
            description:
              "IBM MQ supports a variety of messaging patterns, such as point-to-point and publish-subscribe, allowing it to be used in a wide range of use cases.",
          },
          {
            name: "Monitoring",
            description:
              "IBM MQ provides monitoring and management capabilities, which allow IT administrators to keep track of the message flow, detect issues and diagnose problems quickly.",
          },
          {
            name: "Support",
            description:
              "IBM MQ is a mature product with a large user base, and IBM provides a lot of resources and support for it.",
          },
        ],
      },
      {
        name: "Use Cases",
        intro: "",
        data: [
          {
            name: "Application Integration",
            description:
              "IBM MQ can be used to integrate different applications and systems within an enterprise, allowing them to communicate and exchange information. This can include, for example, connecting a legacy system to a modern application.",
          },
          {
            name: "Batch Processing",
            description:
              "IBM MQ can be used to handle and process large batches of data, such as financial transactions, in a reliable and efficient manner.",
          },
          {
            name: "Event-Driven Architecture",
            description:
              "IBM MQ can be used to implement an event-driven architecture, where events are sent as messages to trigger actions in other systems or applications.",
          },
          {
            name: "Real-time Data",
            description:
              "IBM MQ can be used to collect, process and distribute real-time data from various sources, such as IoT devices, for various use cases like predictive maintenance, smart grid, fraud detection.",
          },
          {
            name: "Mobile App Integration",
            description:
              "IBM MQ can be used to connect mobile applications to backend systems and services, allowing them to exchange information in real-time.",
          },
          {
            name: "Cloud Integration",
            description:
              "IBM MQ can be used to connect on-premises systems with cloud-based systems and services, allowing data to be securely transferred between the two environments.",
          },
        ],
      },
    ],
    examples: [],
    reference: ["https://www.ibm.com/products/mq"],
  },
  {
    technology: "GraphQL",
    docsLink: "https://reactnative.dev/docs/getting-started",
    intro:
      "GraphQL is a query language for APIs. It provides developers with a way to define data requests and efficiently retrieve data from a server. GraphQL enables developers to ask for the exact data that they need, rather than having to make multiple requests for more data. Additionally, GraphQL can handle complex queries more efficiently than REST APIs, potentially reducing the number of requests needed.",
    content: [
      {
        name: "GraphQL vs REST APIs",
        intro: `GraphQL is becoming increasingly popular, but it is still not as well-known as REST APIs. This is because GraphQL is relatively new, and there is still a learning curve associated with understanding and using it. Additionally, many existing services are built on top of REST APIs, making it difficult for developers to switch to GraphQL without significant rework. Finally, GraphQL requires a specialized server implementation and involves complex queries, so it may not be suitable for all applications. <br/> <br/> With GraphQL, clients are able to reach many different types of data storage with a single endpoint, as opposed to RESTful APIs, which may require the client to make multiple requests for multiple pieces of data. <br /> <img src=${graphqlArchitecture} width="100%" /> <br /> <br />`,
        data: [],
      },
      {
        name: "GraphQL Characteristics",
        intro:
          "GraphQL query language is basically about selecting fields on objects. <br/> <br/>  <b> Queries </b> in GraphQL are used to retrieve data from a server. <br/> <br/> <b> Mutations </b> in GraphQL are used to modify data on a server, and they can be used to create, update, or delete data. <br/> <br/> <b> Schema </b> in GraphQL is a set of rules that dictate how data is organized and accessed, it defines the types of data that can be stored, as well as the relationships between types. The schema also defines which fields are required and which are optional. <br/> <br/> <b> Types </b> in GraphQL are used to define the data that can be stored in the schema, these can be scalar, such as strings and numbers, or they can be objects, such as user accounts or blog posts. Types can also have relationships with other types, allowing for more complex data structures.",
        data: [],
      },
    ],
    examples: [],
    reference: ["https://www.codesmith.io/blog/graphql-vs-rest"],
  },
  {
    technology: "OpenAPI",
    docsLink: "https://oai.github.io/Documentation/",
    intro:
      "The OpenAPI Specification (OAS) defines a standard and programming language-agnostic interface description for HTTP APIs, which allows both humans and computers to discover and understand the capabilities of a service without requiring access to source code, additional documentation, or inspection of network traffic.",
    content: [
      {
        name: "Concepts",
        intro: "",
        data: [
          {
            name: "Document Syntax",
            description:
              "An OpenAPI document is a text file, commonly called openapi.json or openapi.yaml, representing a JSON object, in either JSON or YAML format. This file is called the root document and it can be split into multiple JSON or YAML files, for clarity.",
          },
          {
            name: "Document Structure",
            description:
              "To be entirely precise, an OpenAPI document is a single JSON object containing fields adhering to the structure defined in the <a href='https://spec.openapis.org/oas/v3.1.0'>OpenAPI Specification </a>. <a href='https://openapi-map.apihandyman.io/'>The OpenAPI Map</a> is a nice visual tool that can help familiarize the reader with this long specification.",
          },
          {
            name: "API Endpoints",
            description:
              "API Endpoints (also called Operations or Routes) are called Paths in the OAS. The Paths Object, accessible through the paths field in the root OpenAPI Object, is the container for all operations supported by the API. There are numeroues details you can add to describe your endpoints, most important ones being the content of the input data and the output data by using keywords such as 'parameters', 'body', etc.",
          },
          {
            name: "Documentation and Examples",
            description:
              "Besides machine-readable descriptions, an OpenAPI document can also include traditional documentation meant to be read by developers. Automatic documentation generators can then merge both and produce comprehensive, nicely-structured reference guides, for example.",
          },
        ],
      },
      {
        name: "Generation",
        intro: "",
        data: [
          {
            name: "OpenAPI Editors",
            description:
              "You can use <a href='https://openapi.tools/#text-editors/'>text</a> or <a href='https://openapi.tools/#gui-editors'>GUI</a> editors which usually take care of repetitive tasks, allow you to keep a library of reusable components and provide real-time preview of the generated documentation.",
          },
          {
            name: "Domain-Specific Languages",
            description:
              "A new language has to be learned, but, in return, extremely concise descriptions can be achieved. Examples <a href='https://openapi.tools/#dsl'>here</a>.",
          },
          {
            name: "Code Annotations",
            description:
              "Most programming languages allow you to annotate the code, be it with specific syntax or with general code comments. These annotations, for example, can be used to extend a method signature with information regarding the API endpoint and HTTP method that lead to it. A tool can then parse the code annotations and generate OpenAPI documents automatically. An example is the springfox-swagger dependency for java spring based projects.",
          },
        ],
      },
    ],
    examples: [],
    reference: ["https://oai.github.io/Documentation/"],
  },
];
export default techContent;
