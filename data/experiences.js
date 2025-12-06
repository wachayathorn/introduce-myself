export const experiences = [
  {
    id: 1,
    title: "Software Engineer",
    company: "MAKE by KBank - KBTG",
    period: "03/2022 - Ongoing",
    startDate: "2022-03",
    endDate: null,
    current: true,
    location: "Bangkok, Thailand",
    description: "MAKE by KBank is a mobile application designed to simplify money management. Users can manage payments and track expenses all in one place, while organizing their funds into sub-accounts through the Cloud Pocket feature for better control and efficiency. The app also offers Chat Banking and an Expense Summary to help users understand their spending behavior and achieve their saving goals more easily.",
    responsibilities: [
      "Work with Agile methodology, manage by Jira.",
      "Design APIs flow includes defining endpoints, request and response formats, asynchronous flow message-driven architecture using Google Pub/Sub in microservice architecture.",
      "Design database structure for Mongo Atlas and MySQL includes defining collections, schemas, indexes, and relationships between documents or tables that simply and efficiently for enhance and maintain and manage database version control with Liquibase.",
      "Develop RESTful APIs each services with Golang with Gin and GraphQL for gateway and integrated with legacy APIs. Efficiently unittest for each APIs and more coverrage each services. Code review and pair programming in squad.",
      "Conducting performance testing and NFT (Non-Functional Testing) to validate the system reliability, efficiency, and overall performance under conditions with K6, JMeter and Jenkins.",
      "Responsible for the deployment process to production using Kaniko and Docker for image builds, running on Kubernetes (GKE). Managed infrastructure with Terraform and implemented blue-green deployments via Spinnaker in collaboration with cloud engineers.",
      "Built internal back-office systems and customer management modules using Node.js, Express.js, and React.js integrating seamlessly with Golang microservices from the main product."
    ],
    technologies: ["Golang", "Gin", "GraphQL", "MongoDB", "MySQL", "Google Pub/Sub", "Kubernetes", "Docker", "Terraform", "Spinnaker", "K6", "JMeter", "Node.js", "Express.js", "React.js"],
    type: "full-time"
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Superdev Co., Ltd",
    period: "01/2023 - 12/2025",
    startDate: "2023-01",
    endDate: "2025-12",
    current: false,
    location: "Bangkok, Thailand",
    employmentType: "Part-time",
    description: "A Thai tech startup that has accumulated experience from co-creating large-scale projects for both the public and private sectors.",
    responsibilities: [
      "Work with Agile methodology, manage by Odoo. Lead the backend team in project development.",
      "Design and develop a Golang project in monolithic architecture with Fiber, Echo that can be easily refactor into microservice architecture in the future.",
      "Design database structure includes table, relationships, index for PostgreSQL and manage database version control with Atlasgo.",
      "Design RESTful APIs includes defining endpoints, request and response formats, generating documentation via Swagger, handling errors, and implementing log tracing.",
      "Develop features that utilize third-party or open-source services such as LineAPI, GoogleAPI, ThaiBulkSMS, Cloudflare, Google Cloud Platform and payment gateway such Stripe, Pay Solutions."
    ],
    technologies: ["Golang", "Fiber", "Echo", "PostgreSQL", "Atlasgo", "Swagger", "LineAPI", "GoogleAPI", "Stripe", "GCP"],
    type: "part-time"
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "RV Connex Co., Ltd",
    period: "07/2020 - 02/2022",
    startDate: "2020-07",
    endDate: "2022-02",
    current: false,
    location: "Bangkok, Thailand",
    description: "Worked in the Software Development section, developing web applications for the university.",
    responsibilities: [
      "Work with Waterfall methodology, manage by Jira.",
      "Collaborate with team lead for design backend project structure in monolithic or microservice architecture.",
      "Collaborate with database team for design databases structure includes table, relationships and document for MongoDB and MariaDB.",
      "Develop RESTful APIs and WebSocket (Socket.io) each services with NestJS using NATS for messaging communication between the gateway and services in microservice architecture.",
      "Develop features that using third-party such as LineAPI, GoogleAPI, Keycloak and Jitsi Meet Conference.",
      "Install CI/CD flow that includes Docker, Kubernetes and Jenkins for automate deployment in each environment to ensure seamless integration and continuous delivery.",
      "Collaborate with infrastructure team to set up monitoring using Kubernetes Dashboard, Prometheus and Grafana."
    ],
    technologies: ["NestJS", "TypeScript", "MongoDB", "MariaDB", "NATS", "Socket.io", "Docker", "Kubernetes", "Jenkins", "Prometheus", "Grafana", "Keycloak"],
    type: "full-time"
  }
];
