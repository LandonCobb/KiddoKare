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

    private String bio;

    public UUID getSitterUUID() {
        return sitterUUID;
    }

    public void setSitterUUID(UUID sitterUUID) {
        this.sitterUUID = sitterUUID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }
}
