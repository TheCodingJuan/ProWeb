package com.example.example2.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * Estacion
 */
@Entity
public class Estacion {
    @Id
    @GeneratedValue
    Long id;

    private String nombre;

    @ManyToMany(mappedBy = "estaciones")
    @JsonIgnore
    private List<Ruta> ruta;

    /**
     * @return the station
     */
    public String getNombre() {
        return nombre;
    }

    /**
     * @param station
     */
    public void setNombre(String d) {
        this.nombre = d;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Ruta> getRuta() {
        return ruta;
    }

    public void setRuta(List<Ruta> ruta) {
        this.ruta = ruta;
    }
}