package montalto.domenico.sitterprofile;
import java.util.*;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SitterRepository extends MongoRepository<Sitter, UUID> {

    public Sitter findByEmailContaining(String txt);

    public void deleteByEmail(String txt);

}
