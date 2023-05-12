package kiddokare.parentprofileservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
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
    @PostMapping("")
    @ResponseStatus(code = HttpStatus.CREATED)
    public void createParentProfile(@RequestBody Parent parent) {
        if (parentRepo.existsByEmailContaining(parent.getEmail())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Email is already registered!");
        }

        parent.setParentUUID(UUID.randomUUID()); // Generate UUID
        parent.setCreationDate(LocalDate.now()); // Generate creation date
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
        return parentRepo.findByEmailContaining(email).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Parent does not exist!"));
    }

    // Update
    @PatchMapping("")
    @ResponseStatus(code = HttpStatus.OK)
    public void updateParentProfile(@RequestHeader("X-Email") String email, @RequestBody Parent newParent) {
        Optional<Parent> requestedParent = parentRepo.findByEmailContaining(email); // Search for the old parent
        if (requestedParent.isPresent()) {
            Parent oldParent = requestedParent.get(); // Store old parent

            // If the new parent body is missing a field, it will replace it with old parent body's field
            if (newParent.getName() == null) {
                newParent.setName(oldParent.getName());
            }

            if (newParent.getPassword() == null) {
                newParent.setPassword(oldParent.getPassword());
            }

            if (newParent.getEmail() == null) {
                newParent.setEmail(oldParent.getEmail());
            }

            if (newParent.getAddress() == null) {
                newParent.setAddress(oldParent.getAddress());
            }

            newParent.setParentUUID(oldParent.getParentUUID()); // UUID should never change
            newParent.setCreationDate(oldParent.getCreationDate()); // Creation date should never change

            parentRepo.save(newParent);
        } else {
            throw new NoSuchElementException(
                    "Parent does not exist!"
            );
        }
    }

    // Delete
    @DeleteMapping("")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void deleteParentProfile(@RequestHeader("X-Email") String email) {
        parentRepo.deleteByEmailContaining(email);
    }
}