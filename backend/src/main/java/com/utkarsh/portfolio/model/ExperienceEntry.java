package com.utkarsh.portfolio.model;

import java.util.List;

public record ExperienceEntry(
        String role,
        String company,
        String location,
        String period,
        List<String> highlights
) {}
