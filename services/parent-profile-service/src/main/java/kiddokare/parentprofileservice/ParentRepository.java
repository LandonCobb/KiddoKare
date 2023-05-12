package kiddokare.parentprofileservice;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface ParentRepository extends MongoRepository<Parent, UUID> {

}
