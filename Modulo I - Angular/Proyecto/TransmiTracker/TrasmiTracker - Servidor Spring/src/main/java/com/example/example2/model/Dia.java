package com.example.example2.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;



/**
 * Dia
 */
@Entity
public class Dia {
    @Id
    @GeneratedValue
    Long id;

    private String dia;

    @ManyToMany(mappedBy = "dias")
    private List<Ruta> rutas;

    /**
     * @return the day
     */
    public String getDia() {
        return dia;
    }

    /**
     * @param day
     */
    public void setDia(String d) {
        this.dia = d;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}