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
    docsLink: "https://reactnative.dev/docs/getting-started",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
  },
  {
    technology: "gRPC",
    docsLink: "https://reactnative.dev/docs/getting-started",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
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
