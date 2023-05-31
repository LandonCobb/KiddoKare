package com.johnson.isaac.parentauth.repos;

import com.johnson.isaac.parentauth.models.Parent;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface ParentRepository extends JpaRepository<Parent, UUID> {
    Optional<Parent> findParentByEmail(String email);
    boolean existsByEmail(String email);
}
