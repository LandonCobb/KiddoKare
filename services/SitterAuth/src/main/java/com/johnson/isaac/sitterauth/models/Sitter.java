package com.johnson.isaac.sitterauth.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Document(collation = "")
public class Sitter {

    @Id
    private UUID sitterUUID;

    private String name;

    private String email;

    private String password;

    private String address;

    private String bio;

    private String scheduleId;

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

    public String getScheduleId() {
        return scheduleId;
    }

    public void setScheduleId(String scheduleId) {
        this.scheduleId = scheduleId;
    }
}
