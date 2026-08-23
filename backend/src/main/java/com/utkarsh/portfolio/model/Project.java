package com.utkarsh.portfolio.model;

import java.util.List;

public record Project(
        String id,
        String name,
        String tagline,
        List<String> techStack,
        List<String> highlights,
        String repoUrl,
        String liveUrl,
        String award
) {}
