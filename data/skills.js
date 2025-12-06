export const skills = {
  programmingLanguages: {
    category: "Programming Languages",
    items: [
      { name: "Golang", level: "advanced", icon: "golang" },
      { name: "JavaScript", level: "advanced", icon: "javascript" },
      { name: "TypeScript", level: "advanced", icon: "typescript" },
      { name: "Java", level: "intermediate", icon: "java" },
      { name: "C#", level: "intermediate", icon: "csharp" }
    ]
  },
  storage: {
    category: "Storage & Databases",
    items: [
      { name: "MongoDB", level: "advanced", icon: "mongodb" },
      { name: "MySQL", level: "advanced", icon: "mysql" },
      { name: "MariaDB", level: "advanced", icon: "mariadb" },
      { name: "PostgreSQL", level: "advanced", icon: "postgresql" },
      { name: "Microsoft SQL Server", level: "intermediate", icon: "mssql" },
      { name: "Redis", level: "intermediate", icon: "redis" }
    ]
  },
  backend: {
    category: "Backend Frameworks",
    items: [
      { name: "Gin", level: "advanced", icon: "gin" },
      { name: "Fiber", level: "advanced", icon: "fiber" },
      { name: "Echo", level: "advanced", icon: "echo" },
      { name: "Express", level: "advanced", icon: "express" },
      { name: "NestJS", level: "advanced", icon: "nestjs" }
    ]
  },
  devopsCloud: {
    category: "DevOps & Cloud",
    items: [
      { name: "Google Cloud Platform", level: "advanced", icon: "gcp" },
      { name: "Docker", level: "advanced", icon: "docker" },
      { name: "Kaniko", level: "intermediate", icon: "kaniko" },
      { name: "Kubernetes", level: "advanced", icon: "kubernetes" },
      { name: "Spinnaker", level: "intermediate", icon: "spinnaker" },
      { name: "Jenkins", level: "intermediate", icon: "jenkins" },
      { name: "Terraform", level: "intermediate", icon: "terraform" }
    ]
  },
  frontend: {
    category: "Frontend",
    items: [
      { name: "React", level: "intermediate", icon: "react" },
      { name: "Next.js", level: "intermediate", icon: "nextjs" }
    ]
  },
  other: {
    category: "Other Tools",
    items: [
      { name: "K6", level: "intermediate", icon: "k6" },
      { name: "JMeter", level: "intermediate", icon: "jmeter" },
      { name: "GitLab", level: "advanced", icon: "gitlab" },
      { name: "GitHub", level: "advanced", icon: "github" },
      { name: "Jira", level: "advanced", icon: "jira" },
      { name: "Prometheus", level: "intermediate", icon: "prometheus" },
      { name: "Grafana", level: "intermediate", icon: "grafana" }
    ]
  }
};

// Helper function to get all skills as a flat array
export const getAllSkills = () => {
  return Object.values(skills).flatMap(category => category.items);
};

// Helper function to get skills by category
export const getSkillsByCategory = (categoryKey) => {
  return skills[categoryKey]?.items || [];
};

// Helper function to get skills by level
export const getSkillsByLevel = (level) => {
  return getAllSkills().filter(skill => skill.level === level);
};
