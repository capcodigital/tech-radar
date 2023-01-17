import camelArchitecture from "../../images/technologies/camel-architecture.png";
import grpcArchitecture from "../../images/technologies/grpc-architecture.png";

const techContent = [
  {
    technology: "Rest",
    docsLink: "https://reactnative.dev/docs/getting-started",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
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
              "Once you've learned the basic patterns, and how to work with Camel components, you'll find that it becomes easy to churn out many integrations in Camel. <br /><br />This is an advantage of Camel: the ability to create many integrations fairly quickly. Camel is ideal if you are developing a set of integrations, and you would like them all to developed in a similar way. This can be really attractive option in larger companies where it helps to pick one approach which is shared and understood by the development team.",
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
              "Storeing streams of data safely in a distributed, durable, fault-tolerant cluster.",
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
    reference: [],
  },
  {
    technology: "ActiveMQ",
    docsLink: "https://reactnative.dev/docs/getting-started",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
  },
  {
    technology: "IBM MQ",
    docsLink: "https://reactnative.dev/docs/getting-started",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
  },
  {
    technology: "GraphQL",
    docsLink: "https://reactnative.dev/docs/getting-started",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
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
