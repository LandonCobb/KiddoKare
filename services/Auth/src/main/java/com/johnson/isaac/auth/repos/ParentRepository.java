package com.johnson.isaac.auth.repos;

import com.johnson.isaac.auth.models.Parent;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;
import java.util.UUID;

public interface ParentRepository extends MongoRepository<Parent, UUID> {
    Optional<Parent> findParentByEmail(String email);
    boolean existsByEmail(String email);
}
