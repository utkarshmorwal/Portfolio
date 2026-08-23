package com.utkarsh.portfolio.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Allows the deployed frontend (Vercel) and local dev server to call this API.
 * Set the ALLOWED_ORIGINS environment variable to a comma separated list of
 * origins in production, e.g.
 * ALLOWED_ORIGINS=https://your-portfolio.vercel.app,http://localhost:5173
 */
@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Value("${allowed.origins:http://localhost:5173,http://localhost:3000}")
    private String allowedOrigins;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins(allowedOrigins.split(","))
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .maxAge(3600);
    }
}
