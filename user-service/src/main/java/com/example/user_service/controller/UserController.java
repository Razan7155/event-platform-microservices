package com.example.user_service.controller;

import com.example.user_service.dto.UserRequestDTO;
import com.example.user_service.dto.UserResponseDTO;
import com.example.user_service.service.UserService;

import io.swagger.v3.oas.annotations.Operation;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @Operation(summary = "Créer un utilisateur")
    @PostMapping
    public UserResponseDTO create(@Valid @RequestBody UserRequestDTO dto) {
        return service.create(dto);
    }

    @Operation(summary = "Récupérer tous les utilisateurs")
    @GetMapping
    public List<UserResponseDTO> getAll() {
        return service.getAll();
    }

    @Operation(summary = "Récupérer un utilisateur par ID")
    @GetMapping("/{id}")
    public UserResponseDTO getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @Operation(summary = "Modifier un utilisateur")
    @PutMapping("/{id}")
    public UserResponseDTO update(@PathVariable Long id,
                                  @RequestBody UserRequestDTO dto) {
        return service.update(id, dto);
    }

    @Operation(summary = "Supprimer un utilisateur")
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
    @GetMapping("/email/{email}")
    public UserResponseDTO getByEmail(
        @PathVariable String email
    ) {
    return service.getByEmail(email);
}
}