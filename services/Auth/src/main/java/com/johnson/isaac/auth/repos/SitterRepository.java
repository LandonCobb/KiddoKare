package com.johnson.isaac.auth.repos;


import com.johnson.isaac.auth.models.Sitter;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;
import java.util.UUID;

public interface SitterRepository extends MongoRepository<Sitter, UUID> {
    Optional<Sitter> findSitterByEmail(String email);
    boolean existsByEmail(String email);
}
