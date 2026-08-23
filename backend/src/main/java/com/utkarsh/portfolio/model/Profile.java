package com.utkarsh.portfolio.model;

public record Profile(
        String name,
        String title,
        String location,
        String email,
        String phone,
        String summary,
        String linkedin,
        String github,
        String leetcode,
        String education,
        String cgpa
) {}
