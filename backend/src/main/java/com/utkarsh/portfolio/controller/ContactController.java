package com.utkarsh.portfolio.controller;

import com.utkarsh.portfolio.model.ContactMessage;
import com.utkarsh.portfolio.model.ContactRequest;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CopyOnWriteArrayList;

/**
 * Handles the "Get in touch" form on the site.
 *
 * Every message is kept in memory (fine for a personal portfolio's traffic).
 * If spring.mail.* and contact.notify.to are configured, an email copy is
 * also sent to you. If they're not configured, the form still works --
 * it just won't email you, so check your server logs / the in-memory list.
 */
@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private static final Logger log = LoggerFactory.getLogger(ContactController.class);

    private final List<ContactMessage> messages = new CopyOnWriteArrayList<>();
    private final ObjectProvider<JavaMailSender> mailSenderProvider;

    @Value("${contact.notify.to:}")
    private String notifyTo;

    @Value("${contact.mail.from:no-reply@utkarsh-portfolio.dev}")
    private String fromAddress;

    public ContactController(ObjectProvider<JavaMailSender> mailSenderProvider) {
        this.mailSenderProvider = mailSenderProvider;
    }

    @PostMapping
    public ResponseEntity<Map<String, String>> submit(@Valid @RequestBody ContactRequest request) {
        ContactMessage stored = new ContactMessage(
                request.name(), request.email(), request.message(), LocalDateTime.now()
        );
        messages.add(stored);
        log.info("New contact message from {} <{}>", stored.name(), stored.email());

        tryNotifyByEmail(stored);

        return ResponseEntity.ok(Map.of(
                "status", "success",
                "message", "Thanks " + request.name() + "! Your message has been received."
        ));
    }

    private void tryNotifyByEmail(ContactMessage msg) {
        JavaMailSender mailSender = mailSenderProvider.getIfAvailable();
        if (mailSender == null || notifyTo == null || notifyTo.isBlank()) {
            log.info("Email notifications not configured -- skipping (set spring.mail.* and contact.notify.to to enable).");
            return;
        }
        try {
            SimpleMailMessage email = new SimpleMailMessage();
            email.setTo(notifyTo);
            email.setFrom(fromAddress);
            email.setReplyTo(msg.email());
            email.setSubject("Portfolio contact form: " + msg.name());
            email.setText(msg.message() + "\n\n-- " + msg.name() + " (" + msg.email() + ")");
            mailSender.send(email);
        } catch (Exception e) {
            log.warn("Contact message was stored, but the notification email failed to send: {}", e.getMessage());
        }
    }
}
