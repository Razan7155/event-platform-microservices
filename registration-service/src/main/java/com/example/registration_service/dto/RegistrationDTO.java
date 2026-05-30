package com.example.registration_service.dto;

import jakarta.validation.constraints.NotNull;
public class RegistrationDTO {

    @NotNull
    private Long eventId;

    public Long getEventId() {
        return eventId;
    }

    public void setEventId(Long eventId) {
        this.eventId = eventId;
    }
}