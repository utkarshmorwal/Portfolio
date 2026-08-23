package com.utkarsh.portfolio.service;

import com.utkarsh.portfolio.model.ContactMessage;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.List;
import java.util.Map;

@Service
public class BrevoEmailService {

    private final RestClient restClient;

    @Value("${brevo.api-key:}")
    private String apiKey;

    @Value("${brevo.sender.email:}")
    private String senderEmail;

    @Value("${brevo.sender.name:Utkarsh Portfolio}")
    private String senderName;

    @Value("${contact.notify.to:}")
    private String notifyTo;

    public BrevoEmailService() {
        this.restClient = RestClient.builder()
                .baseUrl("https://api.brevo.com/v3")
                .build();
    }

    public boolean isConfigured() {
        return apiKey != null && !apiKey.isBlank()
                && senderEmail != null && !senderEmail.isBlank()
                && notifyTo != null && !notifyTo.isBlank();
    }

    public void sendContactEmail(ContactMessage message) {

        Map<String, Object> requestBody = Map.of(
                "sender", Map.of(
                        "name", senderName,
                        "email", senderEmail
                ),

                "to", List.of(
                        Map.of(
                                "email", notifyTo,
                                "name", "Utkarsh Morwal"
                        )
                ),

                "replyTo", Map.of(
                        "email", message.email(),
                        "name", message.name()
                ),

                "subject",
                "Portfolio contact form: " + message.name(),

                "textContent",
                """
                New message from your portfolio website.

                Name: %s
                Email: %s

                Message:
                %s
                """.formatted(
                        message.name(),
                        message.email(),
                        message.message()
                )
        );

        restClient.post()
                .uri("/smtp/email")
                .header("api-key", apiKey)
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .body(requestBody)
                .retrieve()
                .toBodilessEntity();
    }
}