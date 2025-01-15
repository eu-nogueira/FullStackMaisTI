package com.example.api_user.model;

import jakarta.persistence.*;

public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    private String bio;

    @OneToOne(mappedBy = "profile")
    private Usuario user;
}
