package com.example.reflectongo.server.repository;

import com.example.reflectongo.server.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
