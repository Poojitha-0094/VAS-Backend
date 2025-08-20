package com.famshield.VAS.FSPC.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.famshield.VAS.FSPC.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}