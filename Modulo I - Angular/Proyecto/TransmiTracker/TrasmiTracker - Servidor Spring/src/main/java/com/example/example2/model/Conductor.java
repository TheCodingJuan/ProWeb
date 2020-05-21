package com.example.example2.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;


/**
 * Conductor
 */
@Entity
public class Conductor {
    @Id
    @GeneratedValue
    // @JsonView({Views.Conductor.class})
    Long id;

    // @JsonView({Views.Conductor.class})
    private String nombre;

    // @JsonView({Views.Conductor.class})
    private String cedula;

    // @JsonView({Views.Conductor.class})
    private int telefono;

    // @JsonView({Views.Conductor.class})
    private String direccion;

    @ManyToMany
    // @JsonView({Views.Conductor.class})
    private List<Bus> buses;

    /**
     * @return the address
     */
    public String getDireccion() {
        return direccion;
    }

    /**
     * @param direccion the address to set
     */
    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    /**
     * @return the name 
     */
    public String getNombre() {
        return nombre;
    }
    
    /**
     * @param nombre the name to set
     */
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    /**
     * @return the cedula to set
     */
    public String getCedula() {
        return cedula;
    }

    /**
     * @param cedula to set
     */
    public void setCedula(String cedula) {
        this.cedula = cedula;
    }

    /**
     * @return the telephone
     */
    public int getTelefono() {
        return telefono;
    }

    /**
     * @param telefono the telephone to set
     */
    public void setTelefono(int telefono) {
        this.telefono = telefono;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Bus> getBuses() {
        return buses;
    }

    public void setBuses(List<Bus> buses) {
        this.buses = buses;
    }
    
}