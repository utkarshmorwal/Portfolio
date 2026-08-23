package com.utkarsh.portfolio.controller;

import com.utkarsh.portfolio.data.PortfolioData;
import com.utkarsh.portfolio.model.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PortfolioController {

    private final PortfolioData data;

    public PortfolioController(PortfolioData data) {
        this.data = data;
    }

    @GetMapping("/profile")
    public Profile profile() {
        return data.getProfile();
    }

    @GetMapping("/projects")
    public List<Project> projects() {
        return data.getProjects();
    }

    @GetMapping("/experience")
    public List<ExperienceEntry> experience() {
        return data.getExperience();
    }

    @GetMapping("/skills")
    public List<SkillGroup> skills() {
        return data.getSkills();
    }

    @GetMapping("/certifications")
    public List<Certification> certifications() {
        return data.getCertifications();
    }
}
