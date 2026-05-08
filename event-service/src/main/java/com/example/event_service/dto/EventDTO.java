package com.example.event_service.dto;


import jakarta.validation.constraints.NotBlank;

public class EventDTO {

    @NotBlank(message = "Title is required")
    public String title;

    @NotBlank(message = "Location is required")
    public String location;
}