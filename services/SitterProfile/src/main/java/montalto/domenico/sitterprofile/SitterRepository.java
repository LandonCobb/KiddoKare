package montalto.domenico.sitterprofile;
import java.util.*;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SitterRepository extends MongoRepository<Sitter, UUID> {

    public List<Sitter> findByEmailContaining(String txt);

    public void deleteByEmail(String txt);

}
