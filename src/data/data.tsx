export interface techType {
  [k: string]: Array<{ name: string; link: string; enabled: boolean }>;
  preferred: Array<{ name: string; link: string; enabled: boolean }>;
  skilled: Array<{ name: string; link: string; enabled: boolean }>;
  scaling: Array<{ name: string; link: string; enabled: boolean }>;
}

export const data: Array<{ name: string; data: techType }> = [
  {
    name: "DevOps",
    data: {
      preferred: [
        {
          name: "GitHub",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/devops/github_square.png",
          enabled: true,
        },
        {
          name: "CircleCI",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/devops/circleci_square.png",
          enabled: false,
        },
        {
          name: "Terraform",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/devops/terraform_square.png",
          enabled: false,
        },
        {
          name: "Vault",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/devops/vault_square.png",
          enabled: false,
        },
        {
          name: "SonarQube",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/devops/sonarqube_square.png",
          enabled: true,
        },
        {
          name: "Elastic",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/devops/elastic_stack_square.png",
          enabled: false,
        },
      ],
      skilled: [
        {
          name: "Bitbucket",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/devops/bitbucket_square.png",
          enabled: false,
        },
        {
          name: "Jenkins",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/devops/jenkins_square.png",
          enabled: true,
        },
        {
          name: "TeamCity",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/devops/teamcity_square.png",
          enabled: false,
        },
        // {
        //   name: "Istio",
        //   link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/devops/istio_square.png",
        //   enabled: false,
        // },
        {
          name: "Ansible",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/devops/ansible_square.png",
          enabled: false,
        },
        {
          name: "Packer",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/devops/packer_square.png",
          enabled: false,
        },
        {
          name: "Docker",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/devops/docker_square.png",
          enabled: true,
        },
        // {
        //   name: "Datadog",
        //   link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/devops/datadog_square.png",
        //   enabled: true,
        // },
      ],
      scaling: [
        {
          name: "Twistlock",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/devops/twistlock_square.png",
          enabled: false,
        },
        {
          name: "Kiali",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/devops/kiali_square.png",
          enabled: false,
        },
        {
          name: "ConcourseCl",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/devops/concourse_square.png",
          enabled: false,
        },
        {
          name: "Consul",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/devops/consul_square.png",
          enabled: false,
        },
      ],
    },
  },
  {
    name: "Data Engineering",
    data: {
      preferred: [
        {
          name: "Apache Spark",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/databases/spark.png",
          enabled: true,
        },
        {
          name: "Apache Hive",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/databases/hive_highres.png",
          enabled: true,
        },
        {
          name: "Postgres",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/databases/postgres_square.png",
          enabled: true,
        },
        {
          name: "Neo4J",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/databases/neo4j_square.png",
          enabled: false,
        },
        {
          name: "MongoDB",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/databases/mongodb_square_2.png",
          enabled: true,
        },
      ],
      skilled: [
        {
          name: "MySQL",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/databases/mysql_square.png",
          enabled: true,
        },
        {
          name: "Oracle",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/databases/oracle_square.png",
          enabled: true,
        },
        {
          name: "SQL Server",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/databases/sqlserver_square.png",
          enabled: true,
        },
      ],
      scaling: [
        {
          name: "BigQuery",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/databases/bigquery_square.png",
          enabled: true,
        },
        {
          name: "Snowflake",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/databases/snowflake_square.png",
          enabled: true,
        },
        {
          name: "Liquibase",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/databases/liquibase_square.png",
          enabled: true,
        },
      ],
    },
  },
  {
    name: "Quality Engineering",
    data: {
      preferred: [
        {
          name: "Selenium",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/quality/selenium_square.png",
          enabled: true,
        },
        {
          name: "Cucumber",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/quality/cucumber_square.png",
          enabled: true,
        },
        {
          name: "Appium",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/quality/appium_square.png",
          enabled: true,
        },
        {
          name: "REST Assured",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/quality/rest-assured_square.png",
          enabled: true,
        },
        {
          name: "BrowserStack",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/quality/browserstack_square.png",
          enabled: true,
        },
        {
          name: "Sauce Labs",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/quality/saucelabs_square.png",
          enabled: true,
        },
      ],
      skilled: [
        {
          name: "Wiremock",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/quality/wiremock_square.png",
          enabled: true,
        },
        {
          name: "Applitools",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/quality/applitools_square.png",
          enabled: true,
        },
        {
          name: "JMeter",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/quality/jmeter_square.png",
          enabled: true,
        },
        {
          name: "Axe",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/quality/axe_square.png",
          enabled: true,
        },
        {
          name: "Cypress",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/quality/cypress_square.png",
          enabled: true,
        },
        {
          name: "Postman",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/quality/postman_square.png",
          enabled: true,
        },
      ],
      scaling: [
        {
          name: "Gatling",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/quality/gatling_square.png",
          enabled: true,
        },
        {
          name: "PACT",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/quality/pact_square.png",
          enabled: true,
        },
      ],
    },
  },
  {
    name: "Cloud & Platforms",
    data: {
      preferred: [
        {
          name: "GCP",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/cloud/gcp_square.png",
          enabled: true,
        },
        {
          name: "Kubernetes",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/cloud/k8s_square.png",
          enabled: true,
        },
        {
          name: "Serverless",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/cloud/serverless_square.png",
          enabled: true,
        },
        {
          name: "OpenShift",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/cloud/openshift_square.png",
          enabled: true,
        },
        {
          name: "Apache Hadoop",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/cloud/hadoop.png",
          enabled: true,
        },
        {
          name: "Grafana",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/cloud/grafana_square.png",
          enabled: true,
        },
      ],
      skilled: [
        {
          name: "AWS",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/cloud/aws_square_1.png",
          enabled: true,
        },
        {
          name: "Azure",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/cloud/azure_square.png",
          enabled: true,
        },
        {
          name: "PCF",
          link: "https://avatars.githubusercontent.com/u/5497370?s=200&v=4",
          enabled: true,
        },
        {
          name: "Splunk",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/cloud/splunk_square.png",
          enabled: true,
        },
        {
          name: "Anthos",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/cloud/anthos_square.png",
          enabled: true,
        },
      ],
      scaling: [
        {
          name: "Digital Ocean",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/cloud/digitalocean_square.png",
          enabled: true,
        },
        {
          name: "PKS",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/cloud/pks_square.png",
          enabled: true,
        },
      ],
    },
  },
  {
    name: "Integration",
    data: {
      preferred: [
        {
          name: "Rest",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/integration/rest_square.png",
          enabled: false,
        },
        {
          name: "Camel",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/integration/camelcase_square.png",
          enabled: false,
        },
        {
          name: "gRPC",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/integration/grpc_square.png",
          enabled: false,
        },
        {
          name: "Kafka",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/integration/kafka_square.png",
          enabled: true,
        },
      ],
      skilled: [
        {
          name: "ActiveMQ",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/integration/activemq_square.png",
          enabled: false,
        },
        {
          name: "IBM MQ",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/integration/ibm-mq_square.png",
          enabled: false,
        },
      ],
      scaling: [
        {
          name: "GraphQL",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/integration/graphql_square.png",
          enabled: false,
        },
      ],
    },
  },
  {
    name: "Backend",
    data: {
      preferred: [
        {
          name: "Java",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/backend/java_square.png",
          enabled: true,
        },
        {
          name: "Node",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/backend/node_square.png",
          enabled: true,
        },
        {
          name: "Go",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/backend/go_square.png",
          enabled: true,
        },
        {
          name: "Scala",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/backend/scala_square.png",
          enabled: true,
        },
        {
          name: "Gradle",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/backend/gradle_square.png",
          enabled: true,
        },
      ],
      skilled: [
        {
          name: "Python",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/backend/python_square.png",
          enabled: true,
        },
        {
          name: "Groovy",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/backend/groovy_square.png",
          enabled: true,
        },
      ],
      scaling: [
        {
          name: "Kotlin",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/backend/kotlin_square.png",
          enabled: true,
        },
      ],
    },
  },
  {
    name: "Frontend",
    data: {
      preferred: [
        {
          name: "React",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/frontend/react_square.png",
          enabled: true,
        },
        {
          name: "Angular",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/frontend/angular_square.png",
          enabled: true,
        },
        {
          name: "TypeScript",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/frontend/typescript_square.png",
          enabled: true,
        },
      ],
      skilled: [
        {
          name: "HTML",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/frontend/html_square.png",
          enabled: true,
        },
        {
          name: "CSS",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/frontend/css_square.png",
          enabled: true,
        },
        {
          name: "JavaScript",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/frontend/javascript_square.png",
          enabled: true,
        },
        {
          name: "Webpack",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/frontend/webpack_square.png",
          enabled: true,
        },
      ],
      scaling: [
        {
          name: "Flutter",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/frontend/flutter_sqaure.png",
          enabled: true,
        },
        {
          name: "Vue",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/frontend/vue_square.png",
          enabled: true,
        },
      ],
    },
  },
  {
    name: "Mobile",
    data: {
      preferred: [
        {
          name: "React Native",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/mobile/react_square.png",
          enabled: true,
        },
        {
          name: "Gradle Mobile",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/mobile/gradle_square.png",
          enabled: true,
        },
      ],
      skilled: [
        {
          name: "Swift",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/mobile/swift_square.png",
          enabled: true,
        },
        {
          name: "Java Mobile",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/mobile/java_square.png",
          enabled: true,
        },
        {
          name: "Ionic",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/mobile/Ionic_square.png",
          enabled: true,
        },
      ],
      scaling: [
        {
          name: "Flutter",
          link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/mobile/flutter_square.png",
          enabled: true,
        },
      ],
    },
  },
];

export const icons: Array<{ name: string; link: string }> = [
  {
    name: "GitHub",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/devops/github_square.png",
  },
  {
    name: "CircleCI",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/devops/circleci_square.png",
  },
  {
    name: "Terraform",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/devops/terraform_square.png",
  },
  {
    name: "Vault",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/devops/vault_square.png",
  },
  {
    name: "SonarQube",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/devops/sonarqube_square.png",
  },
  {
    name: "Elastic",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/devops/elastic_stack_square.png",
  },
  {
    name: "Bitbucket",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/devops/bitbucket_square.png",
  },
  {
    name: "Jenkins",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/devops/jenkins_square.png",
  },
  {
    name: "TeamCity",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/devops/teamcity_square.png",
  },
  {
    name: "Istio",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/devops/istio_square.png",
  },
  {
    name: "Ansible",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/devops/ansible_square.png",
  },
  {
    name: "Packer",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/devops/packer_square.png",
  },
  {
    name: "Twistlock",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/devops/twistlock_square.png",
  },
  {
    name: "Kiali",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/devops/kiali_square.png",
  },
  {
    name: "ConcourseCl",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/devops/concourse_square.png",
  },
  {
    name: "Consul",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/devops/consul_square.png",
  },
  {
    name: "Docker",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/devops/docker_square.png",
  },
  {
    name: "Datadog",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/devops/datadog_square.png",
  },
  {
    name: "Postgres",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/databases/postgres_square.png",
  },
  {
    name: "Neo4J",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/databases/neo4j_square.png",
  },
  {
    name: "MongoDB",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/databases/mongodb_square_2.png",
  },
  {
    name: "MySQL",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/databases/mysql_square.png",
  },
  {
    name: "Oracle",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/databases/oracle_square.png",
  },
  {
    name: "SQL Server",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/databases/sqlserver_square.png",
  },
  {
    name: "BigQuery",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/databases/bigquery_square.png",
  },
  {
    name: "Snowflake",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/databases/snowflake_square.png",
  },
  {
    name: "Liquibase",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/databases/liquibase_square.png",
  },
  {
    name: "Selenium",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/quality/selenium_square.png",
  },
  {
    name: "Cucumber",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/quality/cucumber_square.png",
  },
  {
    name: "Appium",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/quality/appium_square.png",
  },
  {
    name: "REST Assured",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/quality/rest-assured_square.png",
  },
  {
    name: "BrowserStack",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/quality/browserstack_square.png",
  },
  {
    name: "Sauce Labs",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/quality/saucelabs_square.png",
  },
  {
    name: "Wiremock",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/quality/wiremock_square.png",
  },
  {
    name: "Applitools",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/quality/applitools_square.png",
  },
  {
    name: "JMeter",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/quality/jmeter_square.png",
  },
  {
    name: "Axe",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/quality/axe_square.png",
  },
  {
    name: "Cypress",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/quality/cypress_square.png",
  },
  {
    name: "Gatling",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/quality/gatling_square.png",
  },
  {
    name: "PACT",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/quality/pact_square.png",
  },
  {
    name: "Postman",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/quality/postman_square.png",
  },
  {
    name: "Kubernetes",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/cloud/k8s_square.png",
  },
  {
    name: "Serverless",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/cloud/serverless_square.png",
  },
  {
    name: "OpenShift",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/cloud/openshift_square.png",
  },
  {
    name: "PCF",
    link: "https://avatars.githubusercontent.com/u/5497370?s=200&v=4",
  },
  {
    name: "Splunk",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/cloud/splunk_square.png",
  },
  {
    name: "Anthos",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/cloud/anthos_square.png",
  },
  {
    name: "PKS",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/cloud/pks_square.png",
  },
  {
    name: "GCP",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/cloud/gcp_square.png",
  },
  {
    name: "AWS",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/cloud/aws_square_1.png",
  },
  {
    name: "Azure",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/cloud/azure_square.png",
  },
  {
    name: "Grafana",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/cloud/grafana_square.png",
  },
  {
    name: "Digital Ocean",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/cloud/digitalocean_square.png",
  },
  {
    name: "Rest",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/integration/rest_square.png",
  },
  {
    name: "Camel",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/integration/camelcase_square.png",
  },
  {
    name: "gRPC",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/integration/grpc_square.png",
  },
  {
    name: "Kafka",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/integration/kafka_square.png",
  },
  {
    name: "ActiveMQ",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/integration/activemq_square.png",
  },
  {
    name: "IBM MQ",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/integration/ibm-mq_square.png",
  },
  {
    name: "GraphQL",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/integration/graphql_square.png",
  },
  {
    name: "Java",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/backend/java_square.png",
  },
  {
    name: "Node",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/backend/node_square.png",
  },
  {
    name: "Go",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/backend/go_square.png",
  },
  {
    name: "Groovy",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/backend/groovy_square.png",
  },
  {
    name: "Python",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/backend/python_square.png",
  },
  {
    name: "Scala",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/backend/scala_square.png",
  },
  {
    name: "Gradle",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/backend/gradle_square.png",
  },
  {
    name: "Kotlin",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/backend/kotlin_square.png",
  },
  {
    name: "React",
    link: "https://img.icons8.com/color/452/react-native.png",
  },
  {
    name: "Angular",
    link: "https://img.icons8.com/color/452/angularjs.png",
  },
  {
    name: "TypeScript",
    link: "https://img.icons8.com/color/452/typescript.png",
  },
  {
    name: "JavaScript",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/frontend/javascript_square.png",
  },
  {
    name: "HTML",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/frontend/html_square.png",
  },
  {
    name: "CSS",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/frontend/css_square.png",
  },
  {
    name: "Webpack",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/frontend/webpack_square.png",
  },
  { name: "Vue", link: "https://img.icons8.com/color/344/vue-js.png" },
  {
    name: "React Native",
    link: "https://img.icons8.com/color/452/react-native.png",
  },
  { name: "Swift", link: "https://img.icons8.com/fluent/452/swift.png" },

  {
    name: "Java Mobile",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/mobile/java_square.png",
  },
  {
    name: "Ionic",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/mobile/Ionic_square.png",
  },
  {
    name: "Flutter",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/mobile/flutter_square.png",
  },
  {
    name: "Gradle Mobile",
    link: "https://gradle.org/images/gradle-knowledge-graph-logo.png?2017022",
  },
  {
    name: "Apache Spark",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/databases/spark.png",
  },
  {
    name: "Apache Hive",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/databases/hive_highres.png",
  },
  {
    name: "Apache Hadoop",
    link: "https://raw.githubusercontent.com/capcodigital/presentation-logos/master/tech-radar/cloud/hadoop.png",
  },
];

export const technologies = [
  {
    categoryName: "DevOps",
    technologies: [
      "GitHub",
      "CircleCI",
      "Terraform",
      "Vault",
      "SonarQube",
      "Elastic",
      "Bitbucket",
      "Jenkins",
      "TeamCity",
      "Istio",
      "Ansible",
      "Packer",
      "Twistlock",
      "Kiali",
      "ConcourseCl",
      "Consul",
      "Docker",
      "Datadog",
    ],
  },

  {
    categoryName: "Data Engineering",
    technologies: [
      "Postgres",
      "Neo4J",
      "MongoDB",
      "MySQL",
      "Oracle",
      "SQL Server",
      "BigQuery",
      "Snowflake",
      "Liquibase",
      "Apache Spark",
      "Apache Hive",
    ],
  },
  {
    categoryName: "Quality Engineering",
    technologies: [
      "Selenium",
      "Cucumber",
      "Appium",
      "REST Assured",
      "BrowserStack",
      "Sauce Labs",
      "Wiremock",
      "Applitools",
      "JMeter",
      "Axe",
      "Cypress",
      "Gatling",
      "PACT",
      "Postman",
    ],
  },
  {
    categoryName: "Cloud & Platforms",
    technologies: [
      "GCP",
      "AWS",
      "Azure",
      "Digital Ocean",
      "Kubernetes",
      "Serverless",
      "OpenShift",
      "PCF",
      "Splunk",
      "Anthos",
      "PKS",
      "Apache Hadoop",
      "Grafana",
    ],
  },
  {
    categoryName: "Integration",
    technologies: [
      "Rest",
      "Camel",
      "gRPC",
      "Kafka",
      "ActiveMQ",
      "IBM MQ",
      "GraphQL",
    ],
  },
  {
    categoryName: "Backend",
    technologies: [
      "Java",
      "Node",
      "Go",
      "Python",
      "Kotlin",
      "Scala",
      "Gradle",
      "Groovy",
    ],
  },
  {
    categoryName: "Frontend",
    technologies: [
      "React",
      "Angular",
      "Flutter",
      "Vue",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Webpack",
    ],
  },
  {
    categoryName: "Mobile",
    technologies: [
      "React Native",
      "Swift",
      "Java Mobile",
      "Ionic",
      "Flutter",
      "Gradle Mobile",
    ],
  },
];

export const categoryList = [
  "Mobile",
  "Frontend",
  "Backend",
  "Integration",
  "Cloud & Platforms",
  "Quality Engineering",
  "Data Engineering",
  "DevOps",
];

export const technologyList = [
  "GitHub",
  "CircleCI",
  "Terraform",
  "Vault",
  "SonarQube",
  "Elastic",
  "Bitbucket",
  "Jenkins",
  "TeamCity",
  "Istio",
  "Ansible",
  "Packer",
  "Twistlock",
  "Kiali",
  "ConcourseCl",
  "Consul",
  "Docker",
  "Datadog",
  "Postgres",
  "Neo4J",
  "MongoDB",
  "MySQL",
  "Oracle",
  "SQL Server",
  "BigQuery",
  "Snowflake",
  "Selenium",
  "Cucumber",
  "Appium",
  "REST Assured",
  "BrowserStack",
  "Sauce Labs",
  "Wiremock",
  "Applitools",
  "JMeter ",
  "Axe",
  "Cypress",
  "Gatling",
  "PACT",
  "Postman",
  "Kubernetes",
  "Serverless",
  "OpenShift",
  "PCF",
  "Splunk",
  "Anthos",
  "PKS",
  "GCP",
  "AWS",
  "Grafana",
  "Azure",
  "Digital Ocean",
  "Rest",
  "Camel",
  "gRPC",
  "Kafka",
  "ActiveMQ",
  "IBM MQ",
  "GraphQL",
  "Java",
  "Scala",
  "Node",
  "Go",
  "Python",
  "Kotlin",
  "React",
  "Angular",
  "Flutter",
  "Vue",
  "TypeScript",
  "Javascript",
  "HTML",
  "CSS",
  "Webpack",
  "React Native",
  "Swift",
  "Java Mobile",
  "Ionic",
  "Flutter",
  "Gradle Mobile",
  "Apache Spark",
  "Apache Hadoop",
  "Apache Hive",
];

export const radarKeysText = {
  scaling:
    "The team are actively scaling the usage and skills for this technology or tool. These technologies are driven by both client demand and industry trends, therefore they are subject to change.",
  skilled:
    "If a client asked for these technologies Capco can confidently deliver production solutions using them.",
  preferred:
    "If Capco has full architecture and DevOps responsibility, these are the current technology choices.",
};
