package com.johnson.isaac.parentauth.controllers;

import com.johnson.isaac.parentauth.models.Parent;
import com.johnson.isaac.parentauth.repos.ParentRepository;
import com.johnson.isaac.parentauth.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth/parent")
public class AuthController {

    @Autowired
    ParentRepository parentRepo;

    @PostMapping("/login")
    public ResponseEntity<String> parentLogin(@RequestBody Parent login) {
        if (login.getEmail() != null && login.getPassword() != null) {
            Parent parent = parentRepo.findParentByEmail(login.getEmail()).orElse(null);
            if (parent != null && parent.getPassword().equals(login.getPassword())) {
                return ResponseEntity.ok(JwtUtil.generateToken(parent.getEmail()));
            }
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

}
