package kiddokare.parentprofileservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
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

    // Update
    @PatchMapping("/{parentUUID}")
    @ResponseStatus(code = HttpStatus.OK)
    public void updateParentProfile(@PathVariable(required = true) UUID parentUUID) {
        Optional<Parent> oldParent = parentRepo.findById(parentUUID);

        if (oldParent.isPresent()) {

        } else {

        }
    }

    // Delete
    @DeleteMapping("")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void deleteParentProfile() {

    }
}
