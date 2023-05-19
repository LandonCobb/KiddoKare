package montalto.domenico.sitterprofile;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;


//change the port number with the port of our frontend
//@CrossOrigin("http://localhost:8090")
@RestController
@RequestMapping("/sitter")
public class SitterRestController {


    //this is an instance of the mongoDB
    @Autowired
    private SitterRepository sitterRepo;

    //GET
    //localhost:8081/sitter
    @GetMapping(path = "")
    @ResponseStatus(code = HttpStatus.OK)
    public List<Sitter> findAllSitters() {
        return sitterRepo.findAll();
    }

    //GET
    //localhost:8081/sitter/search/byEmail/ (YOU NEED AN email as a Header)
    @GetMapping(path = "/search/byEmail")
    @ResponseStatus(code = HttpStatus.OK)
    public Sitter searchSitterByEmail(@RequestHeader("X-Email") String email){
        return sitterRepo.findByEmailContaining(email);
    }

    //Post
    //localhost:8081/sitter  (YOU NEED A BODY WITH A SITTER OBJ)
    @PostMapping(path = "")
    @ResponseStatus(HttpStatus.CREATED)
    public void createSitter(@RequestBody Sitter sitter) {

        Sitter sitterAlreadyExisting = sitterRepo.findByEmailContaining(sitter.getEmail());

        if (sitterAlreadyExisting == null){
            sitter.setSitterUUID(UUID.randomUUID());
            sitterRepo.save(sitter);
        } else {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Email already registered");
        }
    }

    //Post
    //localhost:8081/sitter/addSitters (YOU NEED A BODY WITH A LIST OF SITTER OBJS)

    @PostMapping(path = "/addSitters")
    @ResponseStatus(HttpStatus.CREATED)
    public void createSitters(@RequestBody List<Sitter> sitters) {
        for(Sitter sitter : sitters) {
            createSitter(sitter);
        }
    }

    //Put
    //localhost:8081/sitter

    @PutMapping(path = "")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateSitter(@RequestHeader("X-Email") String email, @RequestBody Sitter sitter){
        if(!sitter.getEmail().equals(email)) {
            throw new RuntimeException("the two values did not match");
        }
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
        if(sitter.getAddress() != null) {
            oldSitter.setAddress(sitter.getAddress());
        }
        sitterRepo.save(oldSitter);
    }

    //Delete
    //localhost:8081/sitter

    @DeleteMapping("")
    @ResponseStatus(code = HttpStatus.OK)
    public void deleteSitter(@RequestHeader("X-Email") String email){
        sitterRepo.deleteByEmail(email);
    }
}
