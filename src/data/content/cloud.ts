import AzureMap from "../../images/Azuremap.png";
import splunkWorking from "../../images/technologies/splunk_working.png";
import splunkArchitecture from "../../images/technologies/splunk_architecture.png";
import splunkUsage from "../../images/technologies/splunk_usages.png";

const techContent = [
  {
    technology: "Kubernetes",
    docsLink: "https://kubernetes.io/docs/home/",
    intro:
      "Kubernetes is an open-source system for automating deployment, scaling, and management of containerised applications. It groups containers that make up an application into logical units for easy management and discovery. <br><br> Kubernetes (κυβερνήτης, Greek for '<a href=’ https://en.wikipedia.org/wiki/Helmsman’>helmsman</a>' or 'pilot' or 'governor', and the etymological root of <a href=’https://en.wikipedia.org/wiki/Cybernetics’>cybernetics</a>) was founded by Ville Aikas, Joe Beda, Brendan Burns, and Craig McLuckie, who were quickly joined by other Google engineers including Brian Grant and Tim Hockin, and was first announced by Google in mid-2014. <br><br> The first unified container-management system developed at Google was a system called Borg. It was built to manage both long-running services and batch jobs, which had previously been handled by two separate systems: Babysitter and the Global Work Queue. The latter’s architecture strongly influenced Borg, but was focused on batch jobs, both predated Linux control groups. <br><br> Kubernetes 1.0 was released on July 21, 2015, after being first announced to the public at Dockercon in June 2014. Last stable version 1.21 was released on 8 April 2021. <br><br> Kubernetes is also known as <b>kube</b> or <b>k8s</b>, even you can run a Kubernetes in your local environment using <b>minikube</b>.  <br><br> There are also playgrounds with different scenarios for Kubernetes in <b>Oreilly Katakoda</b> and another one provided directly by Kubernetes in <b>labs-play-with-k8s</b>. <br><br>",
    content: [
      {
        name: "Kubernetes Concepts",
        intro: "",
        data: [
          {
            name: "Basic Objects",
            description:
              "<b>Pod:</b>  container/Set of Containers + storage resources + unique IP + local options <br><br> <b>Service:</b>  abstraction Layer on top of a set of ephemeral pods (think of this as the ‘face’ of a set of pods) <br><br> <b>Volume:</b>  sometimes shared, persistence storage <br><br> <b>Namespace:</b>  virtual cluster on top of and underlying physical cluster",
          },
          {
            name: "Service Types",
            description:
              "<b>clusterIP:</b>  exposes services only inside the cluster (default) <br><br> <b>nodePort:</b> exposes services at the specified port on all nodes (<node-ip>:<nodePort>) <br><br> <b>loadBalancer:</b> exposes the service with a cloud-provider’s load balancer <br><br> <b>externalName:</b> maps a service to endpoints completely outside of the cluster",
          },
          {
            name: "Controllers",
            description:
              "<b>replicaSet:</b> ensures a certain number of pods are running <br><br><b>deployment:</b> declaratively manages a replicaSet <br><br><b>statefulSet:</b> similar to a deployment, but for non-interchangeable (or stateful) underlying pods <br><br><b>daemonSet:</b> manages pods that need to run on all/some nodes <br><br><b>job:</b> manages a set of pods that run to completion and tracks the overall progress <br><br> <img width='100%' src='https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/cloud/kubernetes_controllers.png'/>",
          },
          {
            name: "Control Plane",
            description:
              "<b>master:</b> entity responsible for managing cluster state. It consists of 3 major components: <ul><li>kube-apiserver - exposes cluster control and state</li><li>kube-controller-manager - this is where the ‘brain’ of controllers runs</li><li>kube-scheduler  - matches resources to work</li></ul> <b>node:</b> individual machines or VMs that make up the cluster. A node consists of:  <ul><li>kubelet = service that communicates with the master</li><li>Container-runtime - software is responsible for running container</li><li>kube-proxy - proxy for connecting to the cluster network</li></ul>",
          },
          {
            name: "Security",
            description:
              "4 Cs of Cloud-Native Systems: <br><br><ul><li><b>Cloud:</b> layer refers infrastructure that run servers</li><li><b>Cluster:</b>  in terms of components, services and networking (CNI)</li><li><b>Container:</b> image secure, Trusted and proper privileges</li><li><b>Code:</b>  application security Layer, using SAST and DAST and software composition analysis</li></ul> <img width='100%' src='https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/cloud/kubernetes_security.png'/> ",
          },
          {
            name: "Kubernetes Network Policies",
            description:
              "Kubernetes network policy lets developers secure access to and from their applications using the same simple language they use to deploy them. Developers can focus on their applications without understanding low-level networking concepts. Enabling developers to easily secure their applications using network policies supports a shift left DevOps environment. <br><br>There are multiple network policy providers like Antrea, Calico, Cilium, Kube-router, Romana and Weave Net.",
          },
        ],
      },
    ],
    examples: [],
    reference: ["https://kubernetes.io/docs/home/"],
  },
  {
    technology: "Serverless",
    docsLink: "https://www.serverless.com/framework/docs/",
    intro:
      "As the cloud grows to become one of the largest industries ever, it’s also evolving.  Its next generation of services are easier, more efficient, and often described as “serverless” because they offer high-level business solutions, instead of complex, low-level infrastructure. <br><br> It’s inevitable that most future applications will be built on these new serverless services because of the high productivity and low overhead they offer. <br><br> Unlike other cloud computing models, in Serverless, the cloud provider is responsible for managing both the cloud infrastructure and the scaling of apps. Serverless apps are deployed in containers that automatically launch on demand when called. <br><br><img width='100%' src='https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/cloud/serverless_adoption.png'/>",
    content: [
      {
        name: "Benefits of Serverless",
        intro:
          "The Serverless Framework – Build applications on AWS Lambda and other next-gen cloud services, that auto-scale and only charge you when they run. This lowers the total cost of running and operating your apps, enabling you to build more and manage less.<br><br> It is a command-line tool that uses easy and approachable YAML syntax to deploy both your code and cloud infrastructure needed to make tons of serverless application use-cases. <br><br>It's a multi-language framework that supports Node.js, Typescript, Python, Go, Java, and more. <br><br>It's also completely extensible via over 1,000 plugins that can add more serverless use-cases and workflows to the Framework.",
        data: [],
      },
      {
        name: "Features and Capabilities",
        intro:
          "<ul><li>Supports Node.js, Python, Java, Go, C#, Ruby, Swift, Kotlin, PHP, Scala, & F#</li> <li>Manages the lifecycle of your serverless architecture (build, deploy, update, delete)</li> <li>Safely deploy functions, events, and their required resources together via provider resource managers (e.g., AWS CloudFormation)</li> <li>Functions can be grouped ('serverless services') for easy management of code, resources & processes, across large projects & teams</li> <li>Minimal configuration and scaffolding</li> <li>Built-in support for multiple stages</li> <li>Optimised for CI/CD workflows</li> <li>Loaded with automation, optimisation, and best practices</li> <li>100% Extensible: Extend or modify the Framework and its operations via Plugins</li> <li>An ecosystem of serverless services and plugins</li></ul>",
        data: [],
      },
    ],
    examples: [],
    reference: [
      "https://www.serverless.com/framework/docs/",
      "https://www.datadoghq.com/state-of-serverless/",
    ],
  },
  {
    technology: "OpenShift",
    docsLink: "https://docs.openshift.com/",
    intro:
      "Red Hat OpenShift is a leading enterprise Kubernetes platform that enables a cloud-like experience everywhere it's deployed. Whether it’s in the cloud, on-premises or at the edge, Red Hat OpenShift gives you the ability to choose where you build, deploy, and run applications through a consistent experience. Red Hat OpenShift’s full-stack automated operations and self-service provisioning for developers lets teams work together more efficiently to move ideas from development to production.<br><br>Red Hat’s open hybrid cloud strategy is built on the technological foundation of Linux, containers, and automation. An open hybrid cloud approach gives you the flexibility to run your applications anywhere you need them. <br><br><img width='100%' src='https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/cloud/openshift-stats.png'/>",
    content: [
      {
        name: "Benefits of OpenShift",
        intro:
          "Red Hat OpenShift delivers a complete application platform for both traditional and cloud-native applications, allowing them to run anywhere. Built on Red Hat Enterprise Linux and compatible with Red Hat Ansible Automation Platform, Red Hat OpenShift enables automation inside and outside your Kubernetes clusters. <br><br> Moreover, Red Hat OpenShift provides a common abstraction layer across any infrastructure to give both developers and operations teams commonality in how applications are packaged, deployed, and managed. This allows you to run applications where it makes the most sense, without creating different operational models because of the host environment.",
        data: [],
      },
      {
        name: "Features and Capabilities",
        intro: "",
        data: [
          {
            name: "Support Cloud-native Workloads",
            description:
              "OpenShift supports the most demanding workloads including AI/ML, Java, data analytics, databases, and more. It also automates deployment and life-cycle management with their vast ecosystem of technology partners.",
          },
          {
            name: "Edge Computing with Red Hat OpenShift",
            description:
              "Get faster data-driven outcomes and better application experiences anywhere—even at your most remote locations—with Red Hat OpenShift at the edge.",
          },
          {
            name: "Empower MLOps",
            description:
              "Accelerate AI/ML workflows and the delivery of AI-powered intelligent applications with self-managed Red Hat OpenShift, or their AI/ML cloud service.",
          },
          {
            name: "Improve Security of Applications",
            description:
              "Decrease operational risk by shifting security left and automating DevSecOps, using built-in policy templates to enforce security and configuration best practices, and protecting application workloads at runtime.",
          },
          {
            name: "Manage Multiple Users",
            description:
              "Extend the value of Red Hat OpenShift by deploying applications, managing multiple clusters, and enforcing policies across clusters at scale, all from a single console.",
          },
        ],
      },
    ],
    examples: [],
    reference: ["https://docs.openshift.com/"],
  },
  {
    technology: "PCF",
    docsLink: "https://docs.cloudfoundry.org/",
    intro:
      "Pivotal Cloud Foundry (PCF), now Cloud Foundry, is an open-source cloud app platform, providing a choice of clouds, developer frameworks, and app services. Cloud Foundry makes it faster and easier to build, test, deploy, and scale apps. It is available through a variety of private cloud distributions and public cloud instances. <br><br> Moreover, not all cloud platforms are created equal. Some have limited language and framework support, lack key app services, or restrict deployment to a single cloud.<br><br> As an industry-standard cloud platform, Cloud Foundry offers the following: <br><br><ul><li><b>Open source code:</b> The platform’s openness and extensibility prevent its users from being locked into a single framework, set of app services, or cloud.</li><li><b>Deployment automation</b>: Developers can deploy their apps to Cloud Foundry using their existing tools and with zero modification to their code.</li><li><b>Flexible infrastructure</b>: You can deploy Cloud Foundry to run your apps on your own computing infrastructure, or deploy on an IaaS like vSphere, AWS, Azure, GCP, or OpenStack.</li><li><b>Commercial options</b>: You can also use a Platform as a Service (PaaS) deployed by a commercial Cloud Foundry cloud provider.</li><li><b>Community support</b>: A broad community contributes to and supports Cloud Foundry. </li></ul> Cloud Foundry is ideal for anyone interested in removing the cost and complexity of configuring infrastructure for their apps. <br><br> <img width='100%' src='https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/cloud/pcf_adoption.jpeg'/>",
    content: [
      {
        name: "Benefits of Cloud Foundry",
        intro: "",
        data: [
          {
            name: "Fast and Powerful",
            description:
              "Spend more time on software development and less on configuration, deployment and cloud infrastructure. Get from code to running software on a Kubernetes cluster quickly and reproducibly.",
          },
          {
            name: "Secure",
            description:
              "The open-source project teams ensure swift roll-out of security patches in response to vulnerabilities, guaranteeing Cloud Foundry is secure for even the most sensitive mission-critical application development.",
          },
          {
            name: "Scalable",
            description:
              "Cloud Foundry supports the most demanding environments automatically and scales from small teams to global enterprises, supporting as many continuous delivery pipelines as you need to run at scale.",
          },
          {
            name: "Integrates Innovation",
            description:
              "Cloud Foundry integrates with your environment and tools, including CI/CD and IDEs, and effortlessly brings a proven developer experience to Kubernetes with efficiency and elegance.",
          },
        ],
      },
    ],
    examples: [],
    reference: ["https://docs.cloudfoundry.org/"],
  },
  {
    technology: "Splunk",
    docsLink: "https://docs.splunk.com/Documentation/SplunkCloud",
    intro:
      "Splunk is a software platform to search, analyse and visualize the machine-generated data gathered from the websites, applications, sensors, devices etc. which make up your IT infrastructure and business. <br><br> Splunk Cloud Platform delivers the benefits of award-winning Splunk® Enterprise as a cloud-based service. Using Splunk Cloud Platform, you gain the functionality of Splunk Enterprise for collecting, searching, monitoring, reporting, and analysing all your real-time and historical machine data using a cloud service that is centrally and uniformly delivered by Splunk to its large number of cloud customers, from Fortune 100 companies to small and medium-size businesses. Splunk manages and updates the Splunk Cloud Platform service uniformly, so all customers of Splunk Cloud Platform receive the most current features and functionality. <br><br> If you have a machine which is generating data continuously and you want to analyse the machine state in real time, then you do it with the help of Splunk. The image below will help you relate to how Splunk collects data: ",
    content: [
      {
        name: "",
        intro: `<img width='100%' src=${splunkWorking} /> `,
        data: [],
      },
      {
        name: "Splunk Architecture",
        intro:
          "The Splunk Architecture comprises three main components. These components are as follows:",
        data: [
          {
            name: "",
            description: "1. Splunk Forwarder",
          },
          {
            name: "",
            description: "2. Splunk Indexer",
          },
          {
            name: "",
            description: "3. Search Head",
          },
        ],
      },
      {
        name: "",
        intro: `<img width='100%' src=${splunkArchitecture} /> `,
        data: [],
      },
      {
        name: "",
        intro: "",
        data: [
          {
            name: "1.	Splunk Forwarder",
            description:
              "The Splunk Forwarder is used to collate real-time data to enable real-time data analysis by the users. The Splunk Forwarder collects all the log’s data and sends it to the indexer. In carrying out all these activities, the Splunk Forwarder consumes less processing power than other traditional monitoring tools. There are 2 types of Splunk Forwarders. These are: <br> <ul><li>Splunk Universal Forwarder.</li><li>Splunk Heavy Forwarder.</li></ul>",
          },
          {
            name: "2.	Splunk Indexer",
            description:
              "The Splunk Indexer is used for indexing and storing the data that is received from the Splunk Forwarder. It basically transforms data into events, stores, and adds them to an index, which in turn enhances searchability. The data received from the Splunk Forwarder is first parsed to remove any unwanted data and then the indexing is done. In this entire process, the Splunk Indexer creates the following files and later bifurcates them into various directories called buckets: <br> <ul><li>Compressed raw data.</li><li>Indexes pointing to raw data (.TSIDX files).</li><li>Metadata files.</li></ul>",
          },
          {
            name: "3.	Splunk Search Head",
            description:
              "It is basically a graphical user interface where the user can perform various operations as per his/her requirements. In this stage, the users can easily interact with Splunk and perform search and query operations on Splunk data. The users can feed in the search keywords and get the result as per their requirement.",
          },
        ],
      },
      {
        name: "Splunk Features",
        intro: "",
        data: [
          {
            name: "1.	Data Ingestion",
            description:
              "Splunk can ingest a variety of data formats like JSON, XML and unstructured machine data like web and application logs. The unstructured data can be modelled into a data structure as needed by the user.",
          },
          {
            name: "2.	Data Indexing",
            description:
              "The ingested data is indexed by Splunk for faster searching and querying on different conditions.",
          },
          {
            name: "3.	Data Searching",
            description:
              "Searching in Splunk involves using the indexed data for the purpose of creating metrics, predicting future trends, and identifying patterns in the data.",
          },
          {
            name: "4.	Using Alerts",
            description:
              "Splunk alerts can be used to trigger emails or RSS feeds when some specific criteria are found in the data being analysed.",
          },
          {
            name: "5.	Dashboards",
            description:
              "Splunk Dashboards can show the search results in the form of charts, reports, and pivots, etc.",
          },
          {
            name: "6.	Data Model",
            description:
              "The indexed data can be modelled into one or more data sets that is based on specialized domain knowledge. This leads to easier navigation by the end users who analyse the business cases without learning the technicalities of the search processing language used by Splunk.",
          },
        ],
      },
      {
        name: "",
        intro: "The benefits with implementing Splunk are:",
        data: [
          {
            name: "",
            description:
              "1. Your input data can be in any format for e.g. .csv, or json or other formats. ",
          },
          {
            name: "",
            description:
              "2. You can configure Splunk to give Alerts / Events notification at the onset of a machine state",
          },
          {
            name: "",
            description:
              "3. You can accurately predict the resources needed for scaling up the infrastructure.",
          },
          {
            name: "",
            description:
              "4. You can create knowledge objects for Operational Intelligence.",
          },
        ],
      },
      {
        name: "The infographic below mentions some of the functionalities for which Splunk can be used:",
        intro: `<img width='100%' src=${splunkUsage} /> `,
        data: [],
      },
      {
        name: "Splunk Use Case Example",
        intro:
          "To give you more clarity on how Splunk works, let’s see how Bosch used Splunk for data analytics. They collected the healthcare data from the remotely located patients using IoT devices(sensors). Splunk would process this data and any abnormal activity would be reported to the doctor and patient via the patient interface. Splunk helped them achieve the following:",
        data: [
          {
            name: "",
            description:
              "<ul><li>Reporting health conditions in real time.</li><li>Delve deeper into the patient’s health record and analyse patterns.</li><li>Alarms / Alerts to both the doctor and patient when the patient’s health degrades.</li></ul>",
          },
        ],
      },
    ],
    examples: [],
    reference: [
      "https://intellipaat.com/blog/tutorial/splunk-tutorial/ ",
      "https://www.guru99.com/splunk-tutorial.html ",
      "https://www.tutorialspoint.com/splunk/index.htm ",
      "https://docs.splunk.com/Documentation/SplunkCloud ",
    ],
  },
  {
    technology: "PKS",
    docsLink: "https://docs.pivotal.io/pks/1-4/index.html",
    intro:
      "Pivotal Container Service (PKS) enables developers to provision, operate, and manage Kubernetes-based container services using BOSH and Pivotal Ops Manager.<br><br> PKS uses the <a href=’ https://docs.vmware.com/en/On-Demand-Services-SDK-for-VMware-Tanzu/0.42/on-demand-services-sdk/GUID-index.html’>On-Demand Broker</a> to deploy Cloud Foundry Container Runtime, a BOSH release that offers a uniform way to instantiate, deploy, and manage highly available Kubernetes clusters on a cloud platform using BOSH. <br><br> After operators install the Enterprise PKS tile on the Ops Manager Installation Dashboard, developers can provision Kubernetes clusters using the PKS Command Line Interface (PKS CLI), and run container-based workloads on the clusters with the Kubernetes CLI, <b>kubectl</b>.",
    content: [
      {
        name: "What PKS Adds to Kubernetes",
        intro:
          "<img width='100%' src='https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/cloud/pks_features.png'/>",
        data: [],
      },
      {
        name: "Features and Capabilities",
        intro:
          "<ul><li><b>Kubernetes compatibility</b> - constant compatibility with current stable release of Kubernetes</li><li><b>Production-ready</b> - highly available from applications to infrastructure, with no single points of failure</li><li><b>BOSH advantages</b> - built-in health checks, scaling, auto-healing and rolling upgrades</li><li><b>Fully automated operations</b> - Fully automated deploy, scale, patch, and upgrade experience</li><li><b>Multi-cloud</b> - Consistent operational experience across multiple clouds</li><li><b>GCP APIs access</b> - The Google Cloud Platform (GCP) Service Broker gives applications access to the Google Cloud APIs, and Google Container Engine (GKE) consistency enables the transfer of workloads from or to GCP</li></ul>",
        data: [],
      },
    ],
    examples: [],
    reference: ["https://docs.pivotal.io/pks/1-4/index.html"],
  },
  {
    technology: "GCP",
    docsLink: "https://cloud.google.com/docs",
    intro:
      "Google Cloud Platform, as the name implies, is a cloud computing platform that provides infrastructure tools and services for users to build applications and services on top of. It is regarded as the third biggest cloud provider in terms of revenue behind AWS in first place and Microsoft Azure in second. <br><br> GCP first came to the scene in 2008 with a product called App Engine, which is a developer tool that allow customers to run their web applications on Google infrastructure. Since its release, Google have acquired more services and products to enhance the user experience of its cloud platform. <br><br><img width='100%' src='https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/cloud/gcp_regions_zones.png'/>",
    content: [
      {
        name: "Global Footprint",
        intro:
          "Today, GCP is widely used by a variety of companies, including large enterprises and small businesses. GCP is available in 35 regions and 106 zones, and are still looking to continue their expansion. <img width='100%' src='https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/cloud/gcp_regions_zones_map.png'/>",
        data: [],
      },
      {
        name: "GCP Services",
        intro: "",
        data: [
          {
            name: "Infrastructure as a service (IaaS)",
            description:
              "Google Compute Engine (GCE) is the name of the service that hosts the virtual machines, or operating systems. In conjunction with the on-premises services, GCP offers instances (virtual machines), persistent disks (PD), and networking. <br></br> GCP also offers 2 key pricing schemes: <br><br> <ul><li>Committed use discounts: for predictable workloads, the price for a yearly commitment is nearly 40% less than pay-as-you-go prices. </li><li>Preemptible instances: ideal for stateless and spiky workloads, it is the opportunity to buy free CPU time on the Cloud Service Provider (CSP) infrastructure. The risk is undetermined CPU time, which could end with abnormal shutdowns of the instances. </li></ul> ",
          },
          {
            name: "Networking",
            description:
              "As a standard CSP infrastructure component, networking composed of regions, availability zones, Virtual Private Cloud (VPCs), subnet, load balancers, VPN (Virtual Private Network) connections and dedicated connections. <br><br> A <b>region</b> has approximately 2-3 data centres, which are called <b>availability zones</b>. The distance between each availability zone is enough to isolate from any natural disaster but still minimal enough for low latency network connections. <br><br> VPCs and subnets are containers to isolate and segment the services, where a VPC can span multiple zones, and a subnet can’t be stretched among multiple zones, but can reside only in one zone. VPCs can be connected to each other via VPC peering. The same type of connection is also used to access serverless, cloud native services. This type of connection is called <b>Private Service Connect</b>.  Another common VPC pattern is <b>Shared VPCs</b>. They are used as containers for common services, or an integration layer between on-prem services and cloud services. Such a network architecture is called Hub and Spoke network. <br><br> <b>Cloud VPN and Cloud interconnect</b> are the connections to link on-premises to cloud estate. VPN connections are through the internet and best-effort services and good for bulk data uploads or fallback connections. Cloud Interconnect is a dedicated connection and assures the bandwidth and privacy. <br><br> Unlike other CSPs, GCP offers <b>two levels of networking</b> for inter zone and inter-region connections: Standard and Premium. Premium level is the Google’s internal high-performance network. Typically, any traffic between different regions traverses through public internet links, but Google has its own fibre-optic infrastructure around the world, and it is offered as a service through GCP.",
          },
          {
            name: "Identity Access Management",
            description:
              "Identity Access Management (IAM) is a key feature to any public or private cloud implementation. As cloud services are managed via a well-defined set of API resources, access to these resources is enabled through IAM. <br><br> Below are some IAM services provided by GCP: <br><br> <ul><li><b>Google Cloud IAM</b> lets administrators authorize who can act on specific resources, along with built-in auditing </li><li><b>Cloud Resource Manager</b>, a service for programmatically managing the resource containers (such as Organizations and Projects) used to group and hierarchically organize GCP resources </li><li><b>Cloud Security Scanner</b>, a web security scanner for common vulnerabilities in App Engine applications, including cross-site-scripting (XSS), Flash injection, mixed content (HTTP in HTTPS), and outdated/insecure libraries </li></ul>",
          },
          {
            name: "Container as a Service (CaaS)",
            description:
              "<b>Google Kubernetes Engine</b> (GKE) is GCP’s managed Kubernetes offering for container orchestration. <br><br> Some of the key differences between GCP and other offerings such as Amazon Elastic Kubernetes Service (AKS) and Microsoft Azure Kubernetes Service (EKS) are: <br><br> <ul><li><b>Network endpoints</b> that enable a shorter distance between exposing load balancer and the application pods</li><li><b>Data Plane</b> that uses eBPF technology that is used for high performance networking for Kubernetes</li><li><b>Workload identity</b> is the ability to use a Kubernetes service account as a GCP service account on GCP IAM. This feature, as useful as it is, needs extensive care because connecting two isolated IAM services requires both sides should be as secure as each other, and could need extensive hardening on the GKE cluster</li><li><b>Istio</b>, out-of-the-box, Istio is the service mesh technology that is an incubation project at CNCF. Service mesh is the technology to enable security and observability in a microservices architecture</li><li><b>Anthos</b> is a product developed by Google, and a combination of Istio and Anthos operator which keeps the cluster configuration in a desired state kept in a versioned source code repository</li></ul> Primarily, Istio and Anthos are considered as the key to multi-cloud via multi-cluster federation. Just like the other managed Kubernetes service offerings, it presents a managed control plane and manage-able worker nodes, release channel enrolments and auto-upgrades, log integration with the platforms log management solution, and GCP Cloud Operations contextually. <br><br> Below is a communication diagram for a private GKE cluster. A private cluster does not have public exposure and if internet access if required, it will be provided via a controlled gateway called Cloud NAT.<br><br> <img width='100%' src='https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/cloud/gcp_gke.svg'/>",
          },
          {
            name: "Big Data Services",
            description:
              "Google is the creator of big data technology, and its mission is to organise the world's information and make it universally accessible and useful. The technologies that are used at Google are mostly offered as GCP Big Data Services. Some major ones are described below: <br><br> <ul><li><b>CloudSpanner</b> is a Structured Query Language (SQL) based distributed database which supports global consistence via consensus protocols, sharding and atomic clocks. It is used by Google Ads and Spotify</li><li><b>BigQuery</b> is a data warehouse that processes and analyses large data sets using SQL queries. These services can capture and examine streaming data for real-time analytics</li><li><b>BigTable</b> is a managed NoSQL database service designed to handle massive workloads while maintaining high performance. It is commonly used for time-series, marketing, financial, IoT and graph data</li><li><b>Cloud Pub/Sub</b> is an asynchronous messaging service. It manages communication among different applications, and it serves as a foundational component for stream analytics pipelines. This is classified under Big Data Services, because it is the default method for data distribution and ingestion</li><li><b>Cloud Dataflow</b> is a serverless stream and batch processing service. Users can build a pipeline to manage and analyse data in the cloud, while Cloud Dataflow automatically manages the resources</li><li><b>Cloud DataProc</b> is a managed Apache Hadoop and Spark service for batch processing, querying, streaming and machine learning. Users can quickly spin up Hadoop or Spark clusters and resize them at any time without compromising data pipelines through automation and orchestration</li><li><b>Google Data Studio</b> offers interactive dashboards to build visual representations of data. Users can analyse data from a variety of sources, share reports and collaborate in real time</li></ul> <img width='100%' src='https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/cloud/gcp_big_data.png'/>",
          },
        ],
      },
    ],
    examples: [],
    reference: ["https://cloud.google.com/docs"],
  },
  {
    technology: "AWS",
    docsLink: "https://docs.aws.amazon.com/",
    intro:
      "In 2006, Amazon Web Services (AWS) began offering IT infrastructure services to businesses in the form of web services - now commonly known as cloud computing. One of the key benefits of cloud computing is the opportunity to replace up-front capital infrastructure expenses with low variable costs that scale with your business. With the Cloud, businesses no longer need to plan for and procure servers and other IT infrastructure weeks or months in advance. Instead, they can instantly spin up hundreds or thousands of servers in minutes and deliver results faster. <br/><br/>Today, Amazon Web Services provides a highly reliable, scalable, low-cost infrastructure platform in the cloud that powers hundreds of thousands of businesses in 190 countries around the world. ",
    content: [
      {
        name: "Global Footprint and Redundancy ",
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
    intro:
      "Grafana is an open-source interactive data-visualisation platform, developed by Grafana Labs, which allows users to see their data via charts and graphs that are unified into one dashboard (or multiple dashboards) for easier interpretation and understanding. You can also query and set alerts on your information and metrics from wherever that information is stored, whether that’s traditional server environments, Kubernetes clusters, or various cloud services, etc. You are then more easily able to analyse the data, identify trends and inconsistencies, and ultimately make your processes more efficient. <br><br> Grafana was built on open principles and the belief that data should be accessible throughout an organization, not just to a small handful of people. This fosters a culture where data can be easily found and used by anyone who needs it, empowering teams to be more open, innovative, and collaborative. <br><br><img width='100%' src='https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/cloud/grafana_kubernetes_dashboard.jpeg'/> Grafana's Kubernetes dashboard",
    content: [
      {
        name: "Benefits of Grafana",
        intro:
          "<b>Unify your data, not your database</b> - Grafana doesn’t require you to ingest data to a backend store or vendor database. Instead, Grafana takes a unique approach to providing a “single-pane-of-glass” by unifying your existing data, wherever it lives. <br><br> With Grafana, you can take any of your existing data- be it from your Kubernetes cluster, raspberry pi, different cloud services, or even Google Sheets- and visualize it however you want, all from a single dashboard. <br><br> <b>Data everyone can see</b> - Grafana was built on the principle that data should be accessible to everyone in your organization, not just the single Ops person. <br><br> By democratizing data, Grafana helps to facilitate a culture where data can easily be used and accessed by the people that need it, helping to break down data silos and empower teams. <br><br> <b>Dashboards that anyone can use</b> - Not only do Grafana dashboards give insightful meaning to data collected from numerous sources, but you can also share the dashboards you create with other team members, allowing you to explore the data together. <br><br> With Grafana, anyone can create and share dynamic dashboards to foster collaboration and transparency. <br><br> <b>Flexibility and versatility</b> - Translate and transform any of your data into flexible and versatile dashboards. Unlike other tools, Grafana allows you to build dashboards specifically for you and your team. <br><br> With advanced querying and transformation capabilities, you can customize your panels to create visualizations that are helpful for you.",
        data: [],
      },
      {
        name: "Features and Capabilities",
        intro: "",
        data: [
          {
            name: "Panels",
            description:
              "From heatmaps to histograms. Graphs to geomaps. Grafana has fast and flexible visualizations that allows you to visualize your data, any way you want.",
          },
          {
            name: "Plugins",
            description:
              "Connect your tools and your teams with Grafana plugins. Data source plugins hook into existing data sources via APIs and render the data in real time without requiring you to migrate or ingest your data.",
          },
          {
            name: "Alerts",
            description:
              "With Grafana Alerting, you can create, manage, and silence all your alerts within one simple UI— allowing you to easily consolidate and centralize all your alerts.",
          },
          {
            name: "Transformations",
            description:
              "Transformations allow you to rename, summarize, combine, and perform calculations across different queries and data sources.",
          },
          {
            name: "Annotations",
            description:
              "Annotate graphs with rich events from different data sources. Hover over events shows you the full event metadata and tags.",
          },
          {
            name: "Panel Editor",
            description:
              "The panel editor makes it easy to configure, customize and explore all your panels with a consistent UI for setting data options across all your visualizations.",
          },
          {
            name: "Collaborate",
            description:
              "Effective collaboration is built on people having access to the same information. Allows you to easily share insights from Grafana dashboards across your company, team, and the world.",
          },
        ],
      },
    ],
    examples: [],
    reference: [
      "https://grafana.com/docs/",
      "https://www.redhat.com/en/topics/data-services/what-is-grafana",
    ],
  },
  {
    technology: "Azure",
    docsLink: "https://docs.microsoft.com/en-us/azure/?product=featured",
    intro:
      "Azure is Microsoft’s cloud computing platform offering many products and services across compute, storage, and networking. Azure provides customers the ability to host their applications and data through Infrastructure as a Service (IaaS), Platform as a Service (PaaS) and Software as a Service (SaaS) models. <br/><br/>Azure was officially released at the Microsoft Professional Developers Conference in 2008. In the last five years Azure has seen considerable growth leading it to be the 2nd largest cloud provider. ",
    content: [
      {
        name: "Global Footprint ",
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
        name: "Consumption Models ",
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
            name: "Azure Virtual Desktop ",
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
    intro:
      "DigitalOcean’s journey began in 2012 with the mission to simplify Cloud computing and enable developers and developer teams to quickly deploy and scale applications, collaborate efficiently, and improve business performance. Their focus is on individual developers and small-scale businesses as they believe those are underserving communities. <br><br> DigitialOcean aim to eliminate complexity to enable customers to focus on testing their ideas and building their businesses.  <br><br> Today, DigitalOcean is serving more than 600K customers across 185 countries, with 15 globally distributed data centers. <br><br><img width='100%' src='https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/cloud/digital_ocean_map.png'/>",
    content: [
      {
        name: "Benefits of DigitalOcean",
        intro: "",
        data: [
          {
            name: "Simplicity",
            description:
              "DigitalOcean focuses on easy-to-use user interface to make things less complicated for new users. Unlike many other platforms, users do not need to do extensive training or get certifications to use DigitalOcean. With the simple user interface, individual software developers and small-scale businesses can easily deploy and scale their applications.",
          },
          {
            name: "Performance",
            description:
              "DigitalOcean provides SSD-based virtual machines, known as Droplets, which have a boot time of 55 seconds. The hardware that supports the virtual machines uses Hex core machines with dedicated EEC RAM and RAID SSD storage. This enables reliable and fast performance for both IaaS and PaaS offerings.",
          },
          {
            name: "Community",
            description:
              "DigitialOcean invest in their community and aim to grow and nurture their community of developers. To do this, DigitalOcean have a wide range of tutorials to help developers learn and grow. In addition, the platform has an active community forum where you can ask questions or start discussions on various topics. ",
          },
          {
            name: "Documentation",
            description:
              "Official documentation for any platform, service, or technology is crucial for any new user. DigitialOcean has extensive documentation (including detailed tutorials, installation guides, how-to-guides, and walkthroughs) on all their offerings to help new users. ",
          },
        ],
      },
    ],
    examples: [],
    reference: ["https://docs.digitalocean.com/products/"],
  },
];
export default techContent;
