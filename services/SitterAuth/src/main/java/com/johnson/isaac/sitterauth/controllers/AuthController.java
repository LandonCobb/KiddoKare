package com.johnson.isaac.sitterauth.controllers;


import com.johnson.isaac.sitterauth.models.Sitter;
import com.johnson.isaac.sitterauth.repos.SitterRepository;
import com.johnson.isaac.sitterauth.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth/sitter")
public class AuthController {

    @Autowired
    SitterRepository sitterRepo;

    @PostMapping("/login")
    public ResponseEntity<String> sitterLogin(@RequestBody Sitter login) {
        System.out.println(login.getEmail());
        System.out.println(login.getPassword());
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

}
