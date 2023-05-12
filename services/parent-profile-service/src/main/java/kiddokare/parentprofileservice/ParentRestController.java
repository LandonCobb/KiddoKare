package kiddokare.parentprofileservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/parent")
public class ParentRestController {
    @Autowired
    private ParentRepository parentRepo;

    // Create
    @PostMapping("")
    @ResponseStatus(code = HttpStatus.CREATED)
    public void createParentProfile() {

    }

    // Find
    @GetMapping("")
    @ResponseStatus(code = HttpStatus.OK)
    public void getParentProfile() {

    }

    // Update
    @PatchMapping("")
    @ResponseStatus(code = HttpStatus.OK)
    public void updateParentProfile() {

    }

    // Delete
    @DeleteMapping("")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void deleteParentProfile() {

    }
}
