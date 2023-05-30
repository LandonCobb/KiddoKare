package kiddokare.parentprofileservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/parent")
public class ParentRestController {
    @Autowired
    private ParentRepository parentRepo;

    // Create
    @PostMapping("/signup")
    @ResponseStatus(code = HttpStatus.CREATED)
    public void createParentProfile(@RequestBody Parent parent) {
        if (parentRepo.existsByEmailContaining(parent.getEmail())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Email is already registered!");
        }

        // no need too with mysql now
//        parent.setParentUUID(UUID.randomUUID()); // Generate UUID
        parentRepo.save(parent); // Save parent profile
    }

    // Find
    @GetMapping("")
    @ResponseStatus(code = HttpStatus.OK)
    public List<Parent> getAllParentProfiles() {
        return parentRepo.findAll();
    }

    @GetMapping("/byEmail")
    @ResponseStatus(code = HttpStatus.OK)
    public Parent getParentProfileByEmail(@RequestHeader("X-Email") String email) {
        return parentRepo.findByEmailContaining(email).get();
    }

    // Update
    @PutMapping("")
    @ResponseStatus(code = HttpStatus.OK)
    public void updateParentProfile(@RequestHeader("X-Email") String email, @RequestBody Parent newParent) {
        
        Parent oldParent = parentRepo.findByEmailContaining(email).get(); // Search for the old parent
        
        // If the new parent body is missing a field, it will replace it with old parent body's field
        if (newParent.getName() != null) {
            oldParent.setName(newParent.getName());
        }

        if (newParent.getPassword() != null) {
            oldParent.setPassword(newParent.getPassword());
        }

        if (newParent.getEmail() != null) {
            oldParent.setEmail(newParent.getEmail());
        }

        if (newParent.getAddress() != null) {
            oldParent.setAddress(newParent.getAddress());
        }

        if (newParent.getBio() != null) {
            oldParent.setBio(newParent.getBio());
        }
        parentRepo.save(oldParent);
    }

    // Delete
    @DeleteMapping("")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void deleteParentProfile(@RequestHeader("X-Email") String email) {
        parentRepo.deleteByEmailContaining(email);
    }
}
