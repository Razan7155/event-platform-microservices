package com.example.user_service.service;

import com.example.user_service.dto.UserRequestDTO;
import com.example.user_service.dto.UserResponseDTO;
import com.example.user_service.model.User;
import com.example.user_service.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

@Service
public class UserService {

    private final UserRepository repo;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository repo, PasswordEncoder passwordEncoder) {
        this.repo = repo;
        this.passwordEncoder = passwordEncoder;
    }

    // =========================
    // CREATE USER
    // =========================
    public UserResponseDTO create(UserRequestDTO dto) {
        User user = new User();
        user.setName(dto.getName());
        user.setEmail(dto.getEmail());
        user.setPassword(passwordEncoder.encode(dto.getPassword()));

        User saved = repo.save(user);

        return mapToDTO(saved);
    }

    // =========================
    // GET ALL USERS
    // =========================
    public List<UserResponseDTO> getAll() {
        return repo.findAll()
                .stream()
                .map(this::mapToDTO)
                .toList();
    }

    // =========================
    // GET USER BY ID
    // =========================
    public UserResponseDTO getById(Long id) {
        User user = repo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "User not found with id " + id
                ));

        return mapToDTO(user);
    }

    // =========================
    // UPDATE USER
    // =========================
    public UserResponseDTO update(Long id, UserRequestDTO dto) {
        User user = repo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "User not found with id " + id
                ));

        user.setName(dto.getName());
        user.setEmail(dto.getEmail());
        user.setPassword(passwordEncoder.encode(dto.getPassword()));
        User updated = repo.save(user);

        return mapToDTO(updated);
    }

    // =========================
    // DELETE USER
    // =========================
    public void delete(Long id) {
        if (!repo.existsById(id)) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND,
                    "User not found with id " + id
            );
        }
        repo.deleteById(id);
    }

    // =========================
    // MAPPER (ENTITY -> DTO)
    // =========================
    private UserResponseDTO mapToDTO(User user) {
        return new UserResponseDTO(
                user.getId(),
                user.getName(),
                user.getEmail()
        );
    }
}
