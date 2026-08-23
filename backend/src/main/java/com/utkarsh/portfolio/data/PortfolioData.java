package com.utkarsh.portfolio.data;

import com.utkarsh.portfolio.model.*;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Central place holding the portfolio content. Edit the values below to
 * update what the site shows -- no database required for a personal
 * portfolio. If you outgrow this later, swap this class for a JPA
 * repository backed by MySQL/Postgres without touching the controllers.
 */
@Component
public class PortfolioData {

    public Profile getProfile() {
        return new Profile(
                "Utkarsh Morwal",
                "Java Developer (SDE-1)",
                "Gurugram, Haryana, India",
                "morwalbuilds@gmail.com",
                "+91-7988948775",
                "Results-driven Java full-stack developer with hands-on experience building, scaling, " +
                        "and deploying secure web applications using Java, Spring Boot, Hibernate, and React.js. " +
                        "Strong foundation in OOP, Data Structures & Algorithms, and DBMS. Skilled in designing " +
                        "REST APIs, optimizing backend performance, and implementing JWT-based authentication " +
                        "to deliver production-ready software.",
                "https://linkedin.com/in/your-handle",
                "https://github.com/your-handle",
                "https://leetcode.com/your-handle",
                "B.Tech in Computer Science and Engineering, Guru Jambheshwar University of Science and Technology (2021 - 2025)",
                "7.0/10"
        );
    }

    public List<Project> getProjects() {
        return List.of(
                new Project(
                        "auren",
                        "Auren -- Full-Stack E-Commerce Platform",
                        "A production-style storefront with secure payments and an admin dashboard.",
                        List.of("Java", "Spring Boot", "React.js", "MySQL", "JWT", "Razorpay"),
                        List.of(
                                "Built and deployed a full-stack e-commerce platform with a Spring Boot REST API backend and a React.js frontend, using MySQL for persistent data storage across independently deployed services.",
                                "Applied JWT-based authentication, OTP verification and Spring Security with role-based authorization to secure protected routes for product management, orders, reviews, and inventory.",
                                "Developed an admin dashboard supporting product, stock, order, and user-role management; integrated Razorpay for end-to-end payment processing and transaction verification.",
                                "Configured Brevo/Gmail SMTP for transactional OTP and email notifications, set up CORS policies and environment-based configuration, and deployed the React.js frontend on Vercel with the Spring Boot backend on Railway."
                        ),
                        "https://github.com/your-handle/auren",
                        "",
                        null
                ),
                new Project(
                        "banking-system",
                        "Banking System Application",
                        "A secure account and transaction manager tuned for throughput.",
                        List.of("Java", "Spring Boot", "MySQL", "Hibernate"),
                        List.of(
                                "Built a secure, scalable banking application that includes user authentication, fund transactions, and full account management, reducing backend response latency by 25% through query optimization.",
                                "Enhanced overall application performance through backend optimization and efficient MySQL indexing strategies, achieving a 40% increase in throughput under simulated load testing."
                        ),
                        "https://github.com/your-handle/banking-system",
                        "",
                        null
                ),
                new Project(
                        "edu-nft",
                        "EDU-NFT -- Blockchain Certificate Verification Platform",
                        "Tamper-proof academic credentials, verified on-chain.",
                        List.of("NEAR Protocol", "Smart Contracts", "Blockchain"),
                        List.of(
                                "Designed and developed a blockchain-based certificate verification platform using the NEAR Protocol and smart contracts."
                        ),
                        "https://github.com/your-handle/edu-nft",
                        "",
                        "1st place, NEAR Protocol web development competition"
                )
        );
    }

    public List<ExperienceEntry> getExperience() {
        return List.of(
                new ExperienceEntry(
                        "Java Full Stack Trainee",
                        "CETPA Infotech Pvt. Ltd.",
                        "Noida, India",
                        "October 2025 -- July 2026",
                        List.of(
                                "Architected scalable full-stack web applications using Java, Spring Boot, and relational databases, improving backend processing efficiency by 15%.",
                                "Integrated backend REST APIs with frontend applications, enabling seamless data flow and database-driven functionality."
                        )
                ),
                new ExperienceEntry(
                        "Web Development Intern",
                        "CSRBOX -- IBM SkillsBuild",
                        "Hisar, India",
                        "June 2024 -- August 2024",
                        List.of(
                                "Created responsive web interfaces using HTML, CSS, JavaScript, and modern UI/UX principles.",
                                "Implemented frontend features, debugged interface issues, and improved website usability and overall user experience."
                        )
                )
        );
    }

    public List<SkillGroup> getSkills() {
        return List.of(
                new SkillGroup("languages", List.of("Java", "JavaScript", "SQL", "HTML5", "CSS3")),
                new SkillGroup("java", List.of("Core Java", "OOP", "Collections Framework", "Exception Handling", "Multithreading", "JDBC", "Java 8")),
                new SkillGroup("spring", List.of("Spring Boot", "Spring MVC", "Spring Security", "Spring Data JPA", "REST APIs", "Dependency Injection", "IoC")),
                new SkillGroup("persistence", List.of("Hibernate", "JPA", "Spring Data JPA", "Entity Mapping", "CRUD Operations")),
                new SkillGroup("frontend", List.of("React.js", "React Router", "Axios", "HTML5", "CSS3", "Responsive Design")),
                new SkillGroup("databases", List.of("MySQL", "SQL", "Relational Databases", "Database Design", "Joins", "Query Optimization")),
                new SkillGroup("security", List.of("JWT Authentication", "Authorization", "RBAC", "OTP Verification", "CORS")),
                new SkillGroup("tools", List.of("Git", "GitHub", "Maven", "Postman", "IntelliJ IDEA", "Eclipse", "VS Code")),
                new SkillGroup("concepts", List.of("MVC Architecture", "Layered Architecture", "REST Architecture", "DBMS", "DSA", "OS", "Computer Networks", "SDLC")),
                new SkillGroup("deployment", List.of("Vercel", "Railway", "Environment Variables", "SMTP", "API Configuration"))
        );
    }

    public List<Certification> getCertifications() {
        return List.of(
                new Certification("NEAR Protocol Web Development Competition", "NEAR Protocol", "Winner", null),
                new Certification("LeetCode -- 250+ DSA problems solved, 2 badges", "LeetCode", null, null),
                new Certification("GfG 160 -- 160 Days of Problem Solving", "GeeksforGeeks", "August 2026", null),
                new Certification("Introduction to Generative AI Studio", "Google Cloud / Simplilearn SkillUp", "August 2026", "10619059")
        );
    }
}
