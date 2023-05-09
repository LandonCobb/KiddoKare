package montalto.domenico.sitterprofile;

import org.springframework.data.annotation.Id;

import java.util.*;
import org.springframework.data.annotation.*;


public class Sitter {

    @Id
    private UUID sitterUUID;

    private String name;

    private String email;

    private String password;

    private String address;

}
