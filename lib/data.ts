import type { Experience, Education, Stack, Project } from "@/types";

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Software Engineer",
    company: "MAKE by KBank - KBTG",
    period: "03/2022 - Ongoing",
    location: "Nonthaburi, Thailand",
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "RV Connex Co., Ltd",
    period: "07/2020 - 02/2022",
    location: "Pathum Thani, Thailand",
  },
];

export const education: Education = {
  degree: "Bachelor of Computer Engineering",
  institution: "Rajamangala University of Technology Thanyaburi",
  period: "08/2016 - 04/2020",
  startDate: "2016-08",
  endDate: "2020-04",
  gpa: 3.44,
  location: "Pathum Thani, Thailand",
  achievements: [
    "Senior Project - Develop full-stack web/mobile apps with Node.js/Express.js, deployed on Firebase Cloud Functions, using Firestore/Realtime DB.",
  ],
  highlights: [],
};

export const stacks: Stack[] = [
  {
    title: "Frontend",
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    ],
  },
  {
    title: "Backend",
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grpc/grpc-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original-wordmark.svg",
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
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
    ],
  },
];

export const projects: Project[] = [];
