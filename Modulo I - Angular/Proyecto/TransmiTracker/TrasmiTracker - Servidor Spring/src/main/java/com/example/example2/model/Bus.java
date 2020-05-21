package com.example.example2.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;


/**
 * Bus
 */
@Entity
public class Bus {
    @Id
    @GeneratedValue
    // @JsonView({Views.Bus.class})
    Long id;

    // @JsonView({Views.Bus.class})
    private String placa;

    // @JsonView({Views.Bus.class})
    private String modelo;

    @ManyToMany
    private List<Ruta> rutas;

    @ManyToMany(mappedBy = "buses")
    @JsonIgnore
    private List<Conductor> conductores;

    /**
     * @return the plate
     */
    public String getPlaca() {
        return placa;
    }
    /**
     * @return the model 
     */
    public String getModelo() {
        return modelo;
    }

    /**
     * @param modelo the model to set
     */
    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    /**
     * @param placa the plate to set
     */
    public void setPlaca(String placa) {
        this.placa = placa;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Ruta> getRutas() {
        return rutas;
    }

    public void setRutas(List<Ruta> rutas) {
        this.rutas = rutas;
    }

    public List<Conductor> getConductores() {
        return conductores;
    }

    public void setConductores(List<Conductor> conductores) {
        this.conductores = conductores;
    }

    
}