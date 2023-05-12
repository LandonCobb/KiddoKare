package kiddokare.parentprofileservice;

import org.springframework.data.annotation.Id;

import java.time.LocalDate;
import java.util.UUID;

public class Parent {
    @Id
    private UUID parentUUID;
    private String name;
    private String password;
    private String email;
    private String address;
    private LocalDate creationDate;

    public UUID getParentUUID() {
        return parentUUID;
    }

    public void setParentUUID(UUID parentUUID) {
        this.parentUUID = parentUUID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public LocalDate getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDate creationDate) {
        this.creationDate = creationDate;
    }
}
