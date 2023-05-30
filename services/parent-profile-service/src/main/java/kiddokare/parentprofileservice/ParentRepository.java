package kiddokare.parentprofileservice;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface ParentRepository extends JpaRepository<Parent, UUID> {
    public Optional<Parent> findByEmailContaining(String email);

    public void deleteByEmailContaining(String email);

    public boolean existsByEmailContaining(String email);
}
