package com.example.registration_service.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.registration_service.dto.UserDTO;



@FeignClient(
    name = "user-service",
    configuration = com.example.registration_service.config.FeignConfig.class
)
public interface UserClient {

    @GetMapping("/users/{id}")
    Object getUserById(@PathVariable("id") Long id);

    @GetMapping("/users/email/{email}")
    UserDTO getUserByEmail(
        @PathVariable("email") String email
);
    
}
