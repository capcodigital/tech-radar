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
        name: "",
        intro: "",
        data: [],
      },
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
];
export default techContent;
