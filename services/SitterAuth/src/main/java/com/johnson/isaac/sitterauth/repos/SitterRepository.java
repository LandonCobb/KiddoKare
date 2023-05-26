package com.johnson.isaac.sitterauth.repos;


import com.johnson.isaac.sitterauth.models.Sitter;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;
import java.util.UUID;

public interface SitterRepository extends MongoRepository<Sitter, UUID> {
    Optional<Sitter> findSitterByEmail(String email);
    boolean existsByEmail(String email);
}
