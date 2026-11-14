import type { Experience, Education, Stack } from "@/types";

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Senior Engineer",
    company: "Ascend Money",
    period: "11/2026 - Present",
    location: "Bangkok, Thailand",
    team: "Virtual Bank",
    current: true,
  },
  {
    id: 2,
    title: "Innovation Engineer",
    company: "KBTG",
    period: "04/2022 - 10/2026",
    location: "Nonthaburi, Thailand",
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "RV Connex Co., Ltd",
    period: "07/2020 - 02/2022",
    location: "Pathum Thani, Thailand",
  },
  {
    id: 4,
    title: "Backend Developer",
    company: "Bluewind Solution",
    period: "06/2019 - 10/2019",
    location: "Pathum Thani, Thailand",
  },
];

export const education: Education = {
  degree: "Bachelor of Computer Engineering",
  institution: "Rajamangala University of Technology Thanyaburi",
  period: "08/2016 - 04/2020",
  gpa: 3.44,
  location: "Pathum Thani, Thailand",
  achievements: [
    "Senior project: developed full-stack web and mobile applications with Node.js and Express.js, deployed on Firebase Cloud Functions, using Firestore and Realtime Database.",
  ],
};

export const currentTools = [
  {
    name: "Kotlin",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
  },
  {
    name: "Spring Boot",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg",
  },
];

export const stacks: Stack[] = [
  {
    title: "Frontend",
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    ],
  },
  {
    title: "Backend",
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gin/gin-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fiber/fiber-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
    ],
  },
  {
    title: "Database",
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
    ],
  },
  {
    title: "Cloud",
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
    ],
  },
];
