package kiddokare.parentprofileservice;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;
import java.util.UUID;

public interface ParentRepository extends MongoRepository<Parent, UUID> {
    public Optional<Parent> findByEmailContaining(String email);

    public void deleteByEmailContaining(String email);

    public boolean existsByEmailContaining(String email);
}
