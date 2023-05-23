package com.johnson.isaac.auth.controllers;

import com.johnson.isaac.auth.models.Parent;
import com.johnson.isaac.auth.models.Sitter;
import com.johnson.isaac.auth.repos.ParentRepository;
import com.johnson.isaac.auth.repos.SitterRepository;
import com.johnson.isaac.auth.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    SitterRepository sitterRepo;

    @Autowired
    ParentRepository parentRepo;

    @PostMapping("/sitter/login")
    public ResponseEntity<String> sitterLogin(Sitter login) {
        if (login.getEmail() != null && login.getPassword() != null) {
            Sitter sitter = sitterRepo.findSitterByEmail(login.getEmail()).orElse(null);
            if (sitter != null && sitter.getPassword().equals(login.getPassword())) {
                return ResponseEntity.ok(JwtUtil.generateToken(sitter.getEmail()));
            }
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/parent/login")
    public ResponseEntity<String> parentLogin(Parent login) {
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
