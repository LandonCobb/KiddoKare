package com.johnson.isaac.parentauth.repos;

import com.johnson.isaac.parentauth.models.Parent;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;
import java.util.UUID;

public interface ParentRepository extends MongoRepository<Parent, UUID> {
    Optional<Parent> findParentByEmail(String email);
    boolean existsByEmail(String email);
}
