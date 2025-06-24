package com.example.reflectongo.server.service;

import com.example.reflectongo.server.dto.UserRequest;
import com.example.reflectongo.server.dto.UserResponse;
import com.example.reflectongo.server.entity.User;
import com.example.reflectongo.server.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public Optional<UserResponse> getUserById(Long id) {
        return userRepository.findById(id).map(this::toResponse);
    }

    public UserResponse registerUser(UserRequest userRequest) {
        User user = User.builder().name(userRequest.getName()).build();
        User saved = userRepository.save(user);
        return toResponse(saved);
    }

    private UserResponse toResponse(User user) {
        return UserResponse.builder()
                .id(user.getId())
                .name(user.getName())
                .createdAt(user.getCreatedAt().toString())
                .build();
    }
}
