package com.utkarsh.portfolio.model;

import java.time.LocalDateTime;

public record ContactMessage(
        String name,
        String email,
        String message,
        LocalDateTime receivedAt
) {}
