package montalto.domenico.sitterprofile;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.ResponseStatusException;

//change the port number with the port of our frontend
//@CrossOrigin("http://localhost:8090")
@RestController
@RequestMapping("/sitter")
public class SitterRestController {

    // this is an instance of the mongoDB
    @Autowired
    private SitterRepository sitterRepo;

    // GET
    // localhost:8081/sitter
    @GetMapping(path = "")
    @ResponseStatus(code = HttpStatus.OK)
    public List<Sitter> findAllSitters() {
        return sitterRepo.findAll();
    }

    // GET
    // localhost:8081/sitter/search/byEmail/ (YOU NEED AN email as a Header)
    @GetMapping(path = "/search/byEmail")
    @ResponseStatus(code = HttpStatus.OK)
    public Sitter searchSitterByEmail(@RequestHeader("X-Email") String email) {
        return sitterRepo.findByEmailContaining(email);
    }

    @GetMapping("/search/searchForSitter/{term}")
    @ResponseStatus(code = HttpStatus.OK)
    public List<Sitter> searchForSitter(@PathVariable String term) {
        return sitterRepo.findSittersByBioOrAddressContainingIgnoreCase(term, term);
    }

    // Post
    // localhost:8081/sitter (YOU NEED A BODY WITH A SITTER OBJ)
    @PostMapping(path = "/signup")
    @ResponseStatus(HttpStatus.CREATED)
    public String createSitter(@RequestBody Sitter sitter) {

        Sitter sitterAlreadyExisting = sitterRepo.findByEmailContaining(sitter.getEmail());

        if (sitterAlreadyExisting == null) {
            String host;

            if (System.getenv().containsKey("GATEWAY_SERVICE")) {
                host = System.getenv("GATEWAY_SERVICE");
            } else {
                host = "localhost";
            }

            String url = "http://" + host + ":8080/schedule";

            System.out.println(url);

            RestTemplate rest = new RestTemplate();

            HttpHeaders headers = new HttpHeaders();
            headers.add("X-Email", sitter.getEmail());

            HttpEntity<String> entity = new HttpEntity<>(null, headers);

            String response = rest.postForObject(url, entity, String.class);

            sitter.setSitterUUID(UUID.randomUUID());
            sitter.setScheduleId(response);
            sitterRepo.save(sitter);
            return response;
        } else {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Email already registered");
        }
    }

    // Post
    // localhost:8081/sitter/addSitters (YOU NEED A BODY WITH A LIST OF SITTER OBJS)

    @PostMapping(path = "/addSitters")
    @ResponseStatus(HttpStatus.CREATED)
    public void createSitters(@RequestBody List<Sitter> sitters) {
        for (Sitter sitter : sitters) {
            createSitter(sitter);
        }
    }

    // Put
    // localhost:8081/sitter

    @PutMapping(path = "")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateSitter(@RequestHeader("X-Email") String email, @RequestBody Sitter sitter) {

        Sitter oldSitter = sitterRepo.findByEmailContaining(email);

        if (sitter.getEmail() != null) {
            oldSitter.setEmail(sitter.getEmail());
        }
        if (sitter.getPassword() != null) {
            oldSitter.setPassword(sitter.getPassword());
        }
        if (sitter.getName() != null) {
            oldSitter.setName(sitter.getName());
        }
        if (sitter.getAddress() != null) {
            oldSitter.setAddress(sitter.getAddress());
        }
        if (sitter.getBio() != null) {
            oldSitter.setBio(sitter.getBio());
        }
        sitterRepo.save(oldSitter);
    }

    // Delete
    // localhost:8081/sitter

    @DeleteMapping("")
    @ResponseStatus(code = HttpStatus.OK)
    public void deleteSitter(@RequestHeader("X-Email") String email) {
        sitterRepo.deleteByEmail(email);
    }
}
