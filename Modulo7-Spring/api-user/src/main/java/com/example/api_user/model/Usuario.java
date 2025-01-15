package com.example.api_user.model;


import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.*;

public class Usuario {
    private Long id;
    private String nome;

    public Usuario(Long id, String nome, Profile profile) {
        this.id = id;
        this.nome = nome;
        this.profile = profile;
    }
    @OneToOne
    @JoinColumn private Profile profile;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    private String email;
}
