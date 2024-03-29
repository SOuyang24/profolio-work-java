const techStackIconBaseURL = "https://raw.githubusercontent.com/SOuyang24/skill-icons-example/main/icons/"
const userData = {
  githubUsername: "souyang",
  linkedin: "https://www.linkedin.com/in/xi-ouyang/",
  name: "Simon Ouyang",
  designation: {
    frontend: "Senior Frontend Engineer and Tech Lead",
    backend: "Senior Backend Engineer and Tech Lead",
    fullstack: "Senior Full Stack Engineer and Tech Lead"
  },
  avatarUrl: "/avatar.jpeg",
  email: "simonouyang@gmail.com",
  phone: "+1 4244759376",
  address: "Los Angeles, California, USA",

  favouriteCertifications: [
    {
      title: "Certified Jenkins Engineer",
      link: "https://certificates.cloudbees.com/fc894af2-c74f-485f-8466-39561d474596",
      imageUrl: "/certificates/jenkins.png"
    },
    {
      title: "Enterprise Blockchain Professional",
      link: "https://www.credential.net/1847ea65-047f-453b-926a-d27fdfef2608",
      imageUrl: "/certificates/enterprise-blockchain-professional.png"
    },
    {
      title: "Certified Scrum Master",
      link: "https://certification.scrumalliance.org/accounts/1241022-xi-ouyang/certifications/1436305-csm",
      imageUrl: "/certificates/scrum-master.png"
    },
  ],
  techstacks: [
    {
      id:"javascript",
      name: "JavaScript",
      tag: "javascript",
      imageUrl: `${techStackIconBaseURL}/JavaScript.svg`,
    },
    {
      id: "typescript",
      name: "TypeScript",
      tag: "javascript",
      imageUrl: `${techStackIconBaseURL}/TypeScript.svg`,
    },
    {
      id: "nodejs",
      name: "NodeJS",
      tag: "javascript",
      imageUrl: `${techStackIconBaseURL}/NodeJS-Dark.svg`,
    },
    {
      id: "python",
      name: "Python",
      tag: "python",
      imageUrl: `${techStackIconBaseURL}/Python-Dark.svg`,
    },
    {
      id: "java",
      name: "Java",
      tag: "java",
      imageUrl: `${techStackIconBaseURL}/Java-Dark.svg`,
    },

    {
      id: "css",
      name: "CSS",
      tag: "frontend",
      imageUrl: `${techStackIconBaseURL}/CSS.svg`,
    },
    {
      id: "sass",
      name: "Sass",
      tag: "frontend",
      imageUrl: `${techStackIconBaseURL}/Sass.svg`,
    },
    {
      id: "Spring Boot",
      name: "Spring",
      tag: "java",
      imageUrl: `${techStackIconBaseURL}/Spring-Dark.svg`,
    },
    {
      id: "Django",
      name: "Django",
      tag: "python",
      imageUrl: `${techStackIconBaseURL}/Django.svg`,
    },
    {
      id: "html",
      name: "HTML",
      tag: "frontend",
      imageUrl: `${techStackIconBaseURL}/HTML.svg`,
    },
    {
      id: "react",
      name: "React",
      tag: "frontend",
      imageUrl: `${techStackIconBaseURL}/React-Dark.svg`,
    },
    {
      id: "nextjs",
      name: "NextJS",
      tag: "frontend",
      imageUrl: `${techStackIconBaseURL}/NextJS-Dark.svg`,
    },
    {
      id: "gatsby",
      name: "GatsbyJS",
      tag: "frontend",
      imageUrl: `${techStackIconBaseURL}/Gatsby.svg`,
    },
    {
      id: "redux",
      name: "Redux Toolkit",
      tag: "frontend",
      imageUrl: `${techStackIconBaseURL}/Redux.svg`,
    },
    {
      id: "d3",
      name: "D3",
      tag: "frontend",
      imageUrl: `${techStackIconBaseURL}/D3-Dark.svg`,
    },
    {
      id: "figma",
      name: "Figma",
      tag: "frontend",
      imageUrl: `${techStackIconBaseURL}/Figma-Dark.svg`,
    },
    {
      id: "materialui",
      name: "Material UI",
      tag: "frontend",
      imageUrl: `${techStackIconBaseURL}/MaterialUI-Dark.svg`,
    },
    {
      id: "tailwindcss",
      name: "TailwindCSS",
      tag: "frontend",
      imageUrl: `${techStackIconBaseURL}/TailwindCSS-Dark.svg`,
    },
    {
     id: "shadcnui",
     name: "ShadcnUI",
     tag: "frontend",
     imageUrl: `${techStackIconBaseURL}/shadcnui.svg`, 
    },
    {
      id: "vercel",
      name: "Vercel",
      tag: "fullstack",
      imageUrl: `${techStackIconBaseURL}/Vercel-Dark.svg`,
    },
    {
      id: "vite",
      name: "Vite",
      tag: "fullstack",
      imageUrl: `${techStackIconBaseURL}/Vite-Dark.svg`,     
    },
    {
      id: "webpack",
      name: "Webpack",
      tag: "fullstack",
      imageUrl: `${techStackIconBaseURL}/Webpack-Dark.svg`,     
    },
    {
      id: "express",
      name: "ExpressJS",
      tag: "backend",
      imageUrl: `${techStackIconBaseURL}/ExpressJS-Dark.svg`,
    },
    {
      id: "graphql",
      name: "GraphQL",
      tag: "fullstack",
      imageUrl: `${techStackIconBaseURL}/GraphQL-Dark.svg`,
    },
    {
      id: "prisma",
      name: "Prisma",
      tag: "backend",
      imageUrl: `${techStackIconBaseURL}/Prisma.svg`,
    },
    {
      id: "sequelize",
      name: "Sequelize",
      tag: "backend",
      imageUrl: `${techStackIconBaseURL}/Sequelize-Dark.svg`,
    },
    {
      id: "mysql",
      name: "MySQL",
      tag: "backend",
      imageUrl: `${techStackIconBaseURL}/MySQL-Dark.svg`,
    },
    {
      id: "postgresql",
      name: "PostgreSQL",
      tag: "backend",
      imageUrl: `${techStackIconBaseURL}/PostgreSQL-Dark.svg`,
    },
    
    {
      id: "mongodb",
      name: "MongoDB",
      tag: "backend",
      imageUrl: `${techStackIconBaseURL}/MongoDB.svg`,
    },
    {
      id: "redis",
      name: "Redis",
      tag: "backend",
      imageUrl: `${techStackIconBaseURL}/Redis-Dark.svg`,     
    },
    {
      id: "rabbitmq",
      name: "RabbitMQ",
      tag: "backend",
      imageUrl: `${techStackIconBaseURL}/RabbitMQ-Dark.svg`,     
    },
    {
      id: "kafka",
      name: "Kafka",
      tag: "backend",
      imageUrl: `${techStackIconBaseURL}/Kafka.svg`,
    }, {
      id: "aws",
      name: "AWS",
      tag: "fullstack",
      imageUrl: `${techStackIconBaseURL}/AWS-Dark.svg`,
    }, {
      id: "azure",
      name: "Azure",
      tag: "fullstack",
      imageUrl: `${techStackIconBaseURL}/Azure-Dark.svg`,
    },
    {
      id: "docker",
      name: "Docker",
      tag: "fullstack",
      imageUrl: `${techStackIconBaseURL}/Docker.svg`,
    },
    {
      id: "kubernetes",
      name: "Kubernetes",
      tag: "fullstack",
      imageUrl: `${techStackIconBaseURL}/Kubernetes.svg`,
    },
    {
      id: "npm",
      name: "NPM",
      tag: "javascript",
      imageUrl: `${techStackIconBaseURL}/Npm-Dark.svg`,
    },
    {
      id: "pnpm",
      name: "PNPM",
      tag: "javascript",
      imageUrl: `${techStackIconBaseURL}/Pnpm-Dark.svg`,
    },
    {
      id: "yarn",
      name: "Yarn",
      tag: "javascript",
      imageUrl: `${techStackIconBaseURL}/Yarn-Dark.svg`,
    },
    {
      id: "webpack",
      name: "Webpack",
      tag: "javascript",
      imageUrl: `${techStackIconBaseURL}/Webpack-Dark.svg`,
    },
    {
      id: "jenkins",
      name: "Jenkins",
      tag: "fullstack",
      imageUrl: `${techStackIconBaseURL}/Jenkins-Dark.svg`,
    },
    {
      id: "githubactions",
      name: "Github Actions",
      tag: "fullstack",
      imageUrl: `${techStackIconBaseURL}/GithubActions-Dark.svg`,
    }
  ],
  favouriteProjects: [
    {
      title: "Notes AI",
      link: "https://notesai.vercel.app/notes",
      imageUrl: "/projects/notesai.png",
    },
    {
      title: "Suzi AI",
      link: "https://suzi-ai.vercel.app/",
      imageUrl: "/projects/AI-Summarizer.png",
    },
    {
      title: "Prompt Network",
      link: "https://promptnetwork.vercel.app/",
      imageUrl: "/projects/Prompt-Network.png",
    },
  ],
  projects: [
    {
      title: "Notes AI",
      link: "https://notesai.vercel.app",
      imageUrl: "/projects/notesai.png",
    },
    {
      title: "Suzi AI",
      link: "https://suzi-ai.vercel.app/",
      imageUrl: "/projects/AI-Summarizer.png",
    },
    {
      title: "Prompt Network",
      link: "https://promptnetwork.vercel.app",
      imageUrl: "/projects/Prompt-Network.png",
    },
    {
      title: "BuddyCircle- realtime chat app",
      link: "https://buddy-circle.vercel.app",
      imageUrl: "/projects/buddy-circle.png",
    },
    {
      title: "Financial Dashboard",
      link: "https://datav-dashboard.netlify.app",
      imageUrl: "/projects/financial-dashboard.png",
    },
    {
      title: "ReturnBear",
      link: "https://numi-canada.portals.returnbear.com/",
      imageUrl: "/projects/returnbear.png",
    },
    {
      title: "Pet Name AI Generator",
      link: "https://pet-name-generator-ckd0.onrender.com/",
      imageUrl: "/projects/pet-name-generator.png",
    },
    {
      title: "MySupply Platform",
      link: "https://www.patheon.com/us/en/insights-resources/fact-sheets/mysupply-platform-an-end-to-end-digital-supply-chain-platform.html",
      imageUrl: "/projects/mysupply-platform.png",
    },
    {
      title: "Spin - mobile money transfer",
      link: "https://spinbyoxxo.com.mx/",
      imageUrl: "/projects/Spin.png",
    },
  ],
  certificates: [
    {
      title: "Enterprise Blockchain Professional",
      link: "https://www.credential.net/1847ea65-047f-453b-926a-d27fdfef2608",
      imageUrl: "/certificates/enterprise-blockchain-professional.png"
    },
    {
      title: "Certified Scrum Product Owner",
      link: "https://certification.scrumalliance.org/accounts/1241022-xi-ouyang/certifications/1438962-cspo",
      imageUrl: "/certificates/scrum-product-owner.png"
    },
    {
      title: "Certified Scrum Master",
      link: "https://certification.scrumalliance.org/accounts/1241022-xi-ouyang/certifications/1436305-csm",
      imageUrl: "/certificates/scrum-master.png"
    },
    {
      title: "Team Kanban Practitioner",
      link: "https://edu.kanban.university/user/78370/9/qualification-certificate/WGkgT3V5YW5nOlNpbW9uQDY2MDg6MTYzMjAxNjY3OA==",
      imageUrl: "/certificates/kanban.png"
    },
    {
      title: "Certified Jenkins Engineer",
      link: "https://certificates.cloudbees.com/fc894af2-c74f-485f-8466-39561d474596",
      imageUrl: "/certificates/jenkins.png"
    },
    {
      title: "Certified Python Developer for Big Data",
      link: "https://www.edureka.co/my-certificate/791122bd54499049775047642e107fd4?utm_source=linkedin&utm_medium=cert&utm_campaign=linkedincert",
      imageUrl: "/certificates/python.png"
    },
    {
      title: "Oracle Certified Java EE 5 Web Service Developer",
      link: "https://drive.google.com/file/d/1E0fYbame7e1VkW1_9ugU5lxIuCMGkTpU/view?usp=sharing",
      imageUrl: "/certificates/javaEE.png"
    },
    {
      title: "Cloudera Certified Developer for Apache Hadoop",
      link: "https://drive.google.com/file/d/1udc12KuhXXWlWgqHlHoifGbOLgzMJ8Z4/view?usp=sharing",
      imageUrl: "/certificates/hadoop.png"
    },
    {
      title: "Sun Certified Programmer for Java 5",
      link: "https://drive.google.com/file/d/0B4Z2LFqnx6n0VjFKemRycXRIVFMwTGhyODZLQnV5d182N2VB/view?usp=sharing&resourcekey=0-sLVxFRSycOtNuD4Qbz2-Ew",
      imageUrl: "/certificates/java.png"
    },
  ],
  description: {
    frontend: [
      `With a keen focus on crafting exceptional user experiences, I excel in building and optimizing responsive websites and mobile applications with cutting-edge modern technologies and frameworks. `,`Leveraging my expertise in JavaScript, TypeScript, CSS, Sass, HTML and frameworks including React.js, React Native, Next.js, MUI, I seamlessly integrate advanced state management with Redux, React Context and Apollo Reactive Variables, data visualization with D3, Chart.js and HighCharts ensuring interactive, smooth and efficient application flow.
      `,
      `Beyond technical expertise, I bring a deep understanding of UI/UX design principles to the table. I Collaborate closely with designers and transform design prototype into visually appealing interfaces using UI frameworks including Tailwind, Ant Design, React Native Paper, and Material UI.`,
      'Meanwhile, I helped the team to improve the CI/CD flow through test automation integration using Jest, React Testing Library and Playwright with Jenkins and Github Actions for pipelines setup.'
    ],
    javascript_backend: [
      `With a keen focus on crafting exceptional user experiences, I excel in building and optimizing web services with cutting-edge modern technologies and frameworks.`,
      `I am proficient in building scalable, performant and secure API using JavaScript and TypeScript, Express.js, Node.js, Apollo GraphQL with microservies, messaging queue and serverless architectures`,
      'Meanwhile, I helped the team to improve the CI/CD flow through test automation integration using Jest, Newman CLI and Playwright via Jenkins and Github Actions for pipelines setup.',
      `In addition to techical expertise, I am recognized for strong leadership via fostering teamwork and collaboration among teams and clients. I prioritize transparent communication with colleagues, cross-functional teams, leadership, and clients to ensure the successful delivery of projects with the highest quality.`
    ],
    javascript_fullstack: [
      `With a keen focus on crafting exceptional user experiences, I excel in building and optimizing responsive web and mobile applications with cutting-edge modern technologies and frameworks.`,
      `Regarding backend skills, I am proficient in building scalable, performant and secure API using JavaScript and TypeScript, Express.js, Node.js, Apollo GraphQL with microservies, messaging queue and serverless architectures`,
      `Regarding frontend skills, I mainly use JavaScript, TypeScript, CSS, Sass, HTML and frameworks including React.js, React Native, Next.js, MUI. I seamlessly integrate advanced state management with Redux, React Context and Apollo Reactive Variables, data visualization with D3, Chart.js and HighCharts ensuring interactive, smooth and efficient application flow.`,
      `In addition to techical expertise, I am recognized for strong leadership via fostering teamwork and collaboration among teams and clients. I prioritize transparent communication with colleagues, cross-functional teams, leadership, and clients to ensure the successful delivery of projects with the highest quality.`
    ],
    python_backend: [
      `With a keen focus on crafting exceptional user experiences, I excel in building and optimizing web services with cutting-edge modern technologies and frameworks.`,
      `As a Python backend engineer, I excel in designing, building, and optimizing highly scalable Restful and GraphQL APIs utilizing microservices and serverless architecture in AWS and Azure cloud environments. My proficiency spans from conceptualization to launch, leveraging Python, SQL, Django, Redis, Postgres, DynamoDB and MongoDB.`,
      'Meanwhile, I helped the team to improve the CI/CD flow through test automation integration using Jest, Newman CLI and Playwright via Jenkins and Github Actions for pipelines setup.',
      `In addition to techical expertise, I am recognized for strong leadership via fostering teamwork and collaboration among teams and clients. I prioritize transparent communication with colleagues, cross-functional teams, leadership, and clients to ensure the successful delivery of projects with the highest quality.`, 
    ],
    python_fullstack: [
      `With a keen focus on crafting exceptional user experiences, I excel in building and optimizing web services with cutting-edge modern technologies and frameworks.`,
      `Regarding backend skills, I am proficient in building scalable, performant and secure Restful or GraphQL API using Python, Django, Postgres and DynamoDB with microservies, messaging queue and serverless architectures`,
      `Regarding frontend skills, I mainly use JavaScript, TypeScript, CSS, Sass, HTML and frameworks including React.js, React Native, Next.js, MUI. I seamlessly integrate advanced state management with Redux, React Context and Apollo Reactive Variables, data visualization with D3, Chart.js and HighCharts ensuring interactive, smooth and efficient application flow.`,
      `In addition to techical expertise, I am recognized for strong leadership via fostering teamwork and collaboration among teams and clients. I prioritize transparent communication with colleagues, cross-functional teams, leadership, and clients to ensure the successful delivery of projects with the highest quality.`
    ],
    java_backend: [
      `With a keen focus on crafting exceptional user experiences, I excel in building and optimizing web services with cutting-edge modern technologies and frameworks.`,
      `As a Java backend engineer, I excel in designing, building, and optimizing highly scalable Restful and GraphQL APIs utilizing microservices and serverless architecture in AWS and Azure cloud environments. My proficiency spans from conceptualization to launch, leveraging Java, SQL, Spring Boot, Spring Cloud, Redis, Postgres, DynamoDB and MongoDB.`,
      'Meanwhile, I helped the team to improve the CI/CD flow through test automation integration using Jest, Newman CLI and Playwright via Jenkins and Github Actions for pipelines setup.',
      `In addition to techical expertise, I am recognized for strong leadership via fostering teamwork and collaboration among teams and clients. I prioritize transparent communication with colleagues, cross-functional teams, leadership, and clients to ensure the successful delivery of projects with the highest quality.`,
  
    ],
    java_fullstack: [
      `With a keen focus on crafting exceptional user experiences, I excel in building and optimizing web services with cutting-edge modern technologies and frameworks.`,
      `Regarding backend skills, I am proficient in building scalable, performant and secure Restful or GraphQL API using Java, Spring Boot, Spring Cloud, Postgres and DynamoDB with microservies, messaging queue and serverless architectures`,
      `Regarding frontend skills, I mainly use JavaScript, TypeScript, CSS, Sass, HTML and frameworks including React.js, React Native, Next.js, MUI. I seamlessly integrate advanced state management with Redux, React Context and Apollo Reactive Variables, data visualization with D3, Chart.js and HighCharts ensuring interactive, smooth and efficient application flow.`,
      `In addition to techical expertise, I am recognized for strong leadership via fostering teamwork and collaboration among teams and clients. I prioritize transparent communication with colleagues, cross-functional teams, leadership, and clients to ensure the successful delivery of projects with the highest quality.`
    ]
  },
  title: {
    fullstack: "10+ years experience as a Full Stack Engineer and tech lead on architecting, designing and developing large-scale web and mobile applications across diverse industries for startups and fortune 100 companies, including Fintech, Healthcare, E-commerce, Supply Chain.",
    backend: "10+ years experience as a Backend Engineer and tech lead on architecting, designing and developing restful and graphql web services for web and mobile applications across diverse industries for startups and fortune 100 companies, including Fintech, Healthcare, E-commerce, Supply Chain.",
    frontend: "8+ years experience as a Frontend Engineer and tech lead on architecting, designing and developing responsive, interactive and visual appealing website and mobile apps across diverse industries for startups and fortune 100 companies, including Fintech, Healthcare, E-commerce, Supply Chain.",
  },
  about: {
    currentCompany: "Boston Consulting Group",
    currentCompanyUrl: "https://bcg.com",
  },
  experience: [
    {
      title: "Founding Engineer",
      company: "Boston Consulting Group",
      year: "2019.4 - Present",
      companyLink: "https://bcg.com",
      desc: "Led the architectural design and implementation of balance management and money transfer features for a mobile payment app, resulting in averaging 6 million daily active users and 42 million monthly transactions.",
    },
    {
      title: "Founding Engineer",
      company: "Boston Consulting Group",
      year: "2019.4 - Present",
      companyLink: "https://bcg.com",
      desc: "Directed and implemented the branded consumer return portal for startup Return Bear, slashing up to 70% shipping cost reduction and shortening refund process from two weeks to 30 minutes for millions of consumers in five retailers",
    },
    {
      title: "Founding Engineer",
      company: "Boston Consulting Group",
      year: "2019.4 - Present",
      companyLink: "https://bcg.com",
      desc: "Oversaw and incorporated observability tools including Amplitude and Google Analytics for Ascension informing data-driven decisions to improve the user experience, resulting in 30% increase on customer engagement.",
    },
    {
      title: "Founding Engineer",
      company: "Boston Consulting Group",
      year: "2019.4 - Present",
      companyLink: "https://bcg.com",
      desc: "Optimized supply chain platform for Thermofisher by replacing manual forecast submission and review with automated processes, leveraging D3.js for data visualization, achieved a 25% increase in forecast submission productivity.",
    },
    {
      title: "BCG X Hackathon Winner",
      company: "Boston Consulting Group",
      year: "2019.4 - Present",
      companyLink: "https://bcg.com",
      desc: "Attained a top 3 placement in the BCG X Generative AI Hackathon, showcasing the `SMS AI Assistant` project to 100+ engineers in BCG X Generative AI Team.",
    },
    {
      title: "Scrum Master (Part Time)",
      company: "Boston Consulting Group",
      year: "2019.4 - Present",
      companyLink: "https://www.rsidelivers.com/",
      desc: "Volunteered as Scrum Master for an 8-week project and boosted team productivity by 25% by implementing Agile best practices and removed impediments to the team’s progress",
    },
    {
      title: "Tech Lead and Senior Engineer",
      company: "Revenue Solutions Inc.",
      year: "2012.12 - 2019.4",
      companyLink: "https://www.rsidelivers.com/",
      desc: "Led and revamped the transformation of core monolithic system features into 8 microservices, elevating scalability and resilience in tax processing application. Accomplished a 60% reduction in deployment time, 40% reduction in feature releases.",
    },
    {
      title: "Tech Lead and Senior Engineer",
      company: "Revenue Solutions Inc.",
      year: "2012.12 - 2019.4",
      companyLink: "https://www.rsidelivers.com/",
      desc: "Improved website load times by implementing performance optimization techniques, resulting in a 30% reduction in page load speed and enhanced user satisfaction and 40% decrease in above-the-fold render time for key web pages.",
    },  
    {
      title: "Tech Lead and Senior Engineer",
      company: "Revenue Solutions Inc.",
      year: "2012.12 - 2019.4",
      companyLink: "https://www.rsidelivers.com/",
      desc: "Proposed and established error, user event and performance metric tracking in AWS and reduced QA bug by 30% and shortened production bug triage time by 60% in one month.",
    }, 
    {
        title: "Tech Lead and Senior Engineer",
        company: "Revenue Solutions Inc.",
        year: "2012.12 - 2019.4",
        companyLink: "https://www.rsidelivers.com/",
        desc: "Proposed and established error, user event and performance metric tracking in AWS and reduced QA bug by 30% and shortened production bug triage time by 60% in one month.",
    }, 
    {
      title: "Tech Lead and Senior Engineer",
      company: "Revenue Solutions Inc.",
      year: "2012.12 - 2019.4",
      companyLink: "https://www.rsidelivers.com/",
      desc: "Owned feature migrations from on-premises infrastructure to AWS and reduce cost on infrastructure maintenance by 30%.",
  },    
  {
    title: "Tech Lead and Senior Engineer",
    company: "Revenue Solutions Inc.",
    year: "2012.12 - 2019.4",
    companyLink: "https://www.rsidelivers.com/",
    desc: "Collaborated with DevOps team and integrated SonarQube and Selenium into the existing Jenkins-based CI/CD pipeline, resulting in 80% reduction in production bugs in consecutive 3 sprints.",
},     
    {
      title: "Master of Computer Science",
      company: "Rochester Institute of Technology",
      year: "2009 - 2012",
      companyLink: "https://www.rit.edu",
      desc: "Major in Computer Science with GPA of 3.87.",
    },
    {
      title: "Software Engineer",
      company: "HSBC Global Technology",
      year: "2007.6 - 2009.7",
      companyLink: "https://www.hsbc.com.cn/en-cn/",
      desc: "Executed design and development of web services for wealth management team specialized mutual fund processing, stock order processing, serving millions of investors in HongKong and Mainland China.",
    }, 
  ],
  socialLinks: {
    instagram: "",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/xi-ouyang/",
    github: "https://github.com/souyang",
  },
};

export default userData;
