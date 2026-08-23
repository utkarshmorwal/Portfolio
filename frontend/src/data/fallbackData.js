// Mirrors the Spring Boot backend's static data (see PortfolioData.java).
// Used as an instant first paint, and as a graceful fallback if the API
// is offline or not yet deployed -- the site never shows a blank page.

export const fallbackProfile = {
  name: 'Utkarsh Morwal',
  title: 'Java Developer (SDE-1)',
  location: 'Gurugram, Haryana, India',
  email: 'morwalbuilds@gmail.com',
  phone: '+91-7988948775',
  summary:
    'Results-driven Java full-stack developer with hands-on experience building, scaling, and deploying secure web applications using Java, Spring Boot, Hibernate, and React.js. Strong foundation in OOP, Data Structures & Algorithms, and DBMS. Skilled in designing REST APIs, optimizing backend performance, and implementing JWT-based authentication to deliver production-ready software.',
  linkedin: 'https://linkedin.com/in/your-handle',
  github: 'https://github.com/your-handle',
  leetcode: 'https://leetcode.com/your-handle',
  education: 'B.Tech in Computer Science and Engineering, Guru Jambheshwar University of Science and Technology (2021 - 2025)',
  cgpa: '7.0/10',
}

export const fallbackProjects = [
  {
    id: 'auren',
    name: 'Auren — Full-Stack E-Commerce Platform',
    tagline: 'A production-style storefront with secure payments and an admin dashboard.',
    techStack: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'JWT', 'Razorpay'],
    highlights: [
      'Built and deployed a full-stack e-commerce platform with a Spring Boot REST API backend and a React.js frontend, using MySQL for persistent data storage across independently deployed services.',
      'Applied JWT-based authentication, OTP verification and Spring Security with role-based authorization to secure protected routes for product management, orders, reviews, and inventory.',
      'Developed an admin dashboard supporting product, stock, order, and user-role management; integrated Razorpay for end-to-end payment processing and transaction verification.',
      'Configured Brevo/Gmail SMTP for transactional OTP and email notifications, set up CORS policies and environment-based configuration, and deployed the React.js frontend on Vercel with the Spring Boot backend on Railway.',
    ],
    repoUrl: 'https://github.com/your-handle/auren',
    liveUrl: '',
    award: null,
  },
  {
    id: 'banking-system',
    name: 'Banking System Application',
    tagline: 'A secure account and transaction manager tuned for throughput.',
    techStack: ['Java', 'Spring Boot', 'MySQL', 'Hibernate'],
    highlights: [
      'Built a secure, scalable banking application that includes user authentication, fund transactions, and full account management, reducing backend response latency by 25% through query optimization.',
      'Enhanced overall application performance through backend optimization and efficient MySQL indexing strategies, achieving a 40% increase in throughput under simulated load testing.',
    ],
    repoUrl: 'https://github.com/your-handle/banking-system',
    liveUrl: '',
    award: null,
  },
  {
    id: 'edu-nft',
    name: 'EDU-NFT — Blockchain Certificate Verification Platform',
    tagline: 'Tamper-proof academic credentials, verified on-chain.',
    techStack: ['NEAR Protocol', 'Smart Contracts', 'Blockchain'],
    highlights: [
      'Designed and developed a blockchain-based certificate verification platform using the NEAR Protocol and smart contracts.',
    ],
    repoUrl: 'https://github.com/your-handle/edu-nft',
    liveUrl: '',
    award: '1st place, NEAR Protocol web development competition',
  },
]

export const fallbackExperience = [
  {
    role: 'Java Full Stack Trainee',
    company: 'CETPA Infotech Pvt. Ltd.',
    location: 'Noida, India',
    period: 'October 2025 — July 2026',
    highlights: [
      'Architected scalable full-stack web applications using Java, Spring Boot, and relational databases, improving backend processing efficiency by 15%.',
      'Integrated backend REST APIs with frontend applications, enabling seamless data flow and database-driven functionality.',
    ],
  },
  {
    role: 'Web Development Intern',
    company: 'CSRBOX — IBM SkillsBuild',
    location: 'Hisar, India',
    period: 'June 2024 — August 2024',
    highlights: [
      'Created responsive web interfaces using HTML, CSS, JavaScript, and modern UI/UX principles.',
      'Implemented frontend features, debugged interface issues, and improved website usability and overall user experience.',
    ],
  },
]

export const fallbackSkills = [
  { category: 'languages', items: ['Java', 'JavaScript', 'SQL', 'HTML5', 'CSS3'] },
  { category: 'java', items: ['Core Java', 'OOP', 'Collections Framework', 'Exception Handling', 'Multithreading', 'JDBC', 'Java 8'] },
  { category: 'spring', items: ['Spring Boot', 'Spring MVC', 'Spring Security', 'Spring Data JPA', 'REST APIs', 'Dependency Injection', 'IoC'] },
  { category: 'persistence', items: ['Hibernate', 'JPA', 'Spring Data JPA', 'Entity Mapping', 'CRUD Operations'] },
  { category: 'frontend', items: ['React.js', 'React Router', 'Axios', 'HTML5', 'CSS3', 'Responsive Design'] },
  { category: 'databases', items: ['MySQL', 'SQL', 'Relational Databases', 'Database Design', 'Joins', 'Query Optimization'] },
  { category: 'security', items: ['JWT Authentication', 'Authorization', 'RBAC', 'OTP Verification', 'CORS'] },
  { category: 'tools', items: ['Git', 'GitHub', 'Maven', 'Postman', 'IntelliJ IDEA', 'Eclipse', 'VS Code'] },
  { category: 'concepts', items: ['MVC Architecture', 'Layered Architecture', 'REST Architecture', 'DBMS', 'DSA', 'OS', 'Computer Networks', 'SDLC'] },
  { category: 'deployment', items: ['Vercel', 'Railway', 'Environment Variables', 'SMTP', 'API Configuration'] },
]

export const fallbackCertifications = [
  { title: 'NEAR Protocol Web Development Competition', issuer: 'NEAR Protocol', issued: 'Winner', code: null },
  { title: 'LeetCode — 250+ DSA problems solved, 2 badges', issuer: 'LeetCode', issued: null, code: null },
  { title: 'GfG 160 — 160 Days of Problem Solving', issuer: 'GeeksforGeeks', issued: 'August 2026', code: null },
  { title: 'Introduction to Generative AI Studio', issuer: 'Google Cloud / Simplilearn SkillUp', issued: 'August 2026', code: '10619059' },
]
