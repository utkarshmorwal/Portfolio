package com.utkarsh.portfolio.controller;

import com.utkarsh.portfolio.model.ContactMessage;
import com.utkarsh.portfolio.model.ContactRequest;
import com.utkarsh.portfolio.service.BrevoEmailService;

import jakarta.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CopyOnWriteArrayList;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private static final Logger log =
            LoggerFactory.getLogger(ContactController.class);

    private final List<ContactMessage> messages =
            new CopyOnWriteArrayList<>();

    private final BrevoEmailService brevoEmailService;

    public ContactController(BrevoEmailService brevoEmailService) {
        this.brevoEmailService = brevoEmailService;
    }

    @PostMapping
    public ResponseEntity<Map<String, String>> submit(
            @Valid @RequestBody ContactRequest request) {

        ContactMessage stored = new ContactMessage(
                request.name(),
                request.email(),
                request.message(),
                LocalDateTime.now()
        );

        messages.add(stored);

        log.info(
                "New contact message from {} <{}>",
                stored.name(),
                stored.email()
        );

        try {

            if (brevoEmailService.isConfigured()) {

                brevoEmailService.sendContactEmail(stored);

                log.info(
                        "Contact notification email sent successfully"
                );

            } else {

                log.warn(
                        "Brevo email service is not configured"
                );
            }

        } catch (Exception e) {

            log.error(
                    "Failed to send Brevo notification: {}",
                    e.getMessage()
            );
        }

        return ResponseEntity.ok(
                Map.of(
                        "status", "success",
                        "message",
                        "Thanks " + request.name()
                                + "! Your message has been received."
                )
        );
    }
}