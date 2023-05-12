package montalto.domenico.sitterprofile;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


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
    //localhost:8081/sitter/search/byName/{name} (YOU NEED A name)
    @GetMapping(path = "/search/byName/{name}")
    @ResponseStatus(code = HttpStatus.OK)
    public List<Sitter> searchSitterByName(@PathVariable(required = true) String name){
        return sitterRepo.findByNameContaining(name);
    }

    //GET
    //localhost:8081/sitter/search/byUUID/{sitterUUID} (YOU NEED A sitterUUID)
    @GetMapping(path = "/search/byUUID/{sitterUUID}")
    @ResponseStatus(code = HttpStatus.OK)
    public Sitter searchSitterByUUID(@PathVariable UUID sitterUUID){

        return sitterRepo.findById(sitterUUID).orElseThrow(() -> new NoSuchElementException());
    }

    //Post
    //localhost:8081/sitter  (YOU NEED A BODY WITH A SITTER OBJ)
    @PostMapping(path = "")
    @ResponseStatus(HttpStatus.CREATED)
    public void createSitter(@RequestBody Sitter sitter) {
        sitter.setSitterUUID(UUID.randomUUID());
        sitterRepo.save(sitter);
    }
}
