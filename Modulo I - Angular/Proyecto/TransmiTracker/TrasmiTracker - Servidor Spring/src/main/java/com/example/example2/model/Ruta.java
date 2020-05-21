package com.example.example2.model;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;


/**
 * Ruta
 */
@Entity
public class Ruta {
    @Id
    @GeneratedValue
    Long id;

    private String codigo;
    
    private Calendar horaI;

    private Calendar horaF;

    @ManyToMany
    private List<Dia> dias;

    @ManyToMany
    private List<Estacion> estaciones;

    @ManyToMany(mappedBy = "rutas")
    @JsonIgnore
    private List<Bus> buses;

    /**
     * @return the code
     */
    public String getCodigo() {
        return codigo;
    }

    public List<Estacion> getEstaciones()
    {
        return this.estaciones;
    }

    /**
     * @return the hourI
     */
    public String getHoraInicio() {
        int hora = horaI.get(Calendar.HOUR);
        String horaIn = hora + "";
        return horaIn;
    }

    /**
     * @return the hourF
     */
    public String getHoraFin() {
        int hora = horaF.get(Calendar.HOUR_OF_DAY);
        String horaFn = hora + "";
        return horaFn;
    }

    /**
     * @param codigo
     */
    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public void setEstaciones(List<Estacion> estaciones)
    {
        this.estaciones = estaciones;
    }

    /**
     * @param dateI
     * @throws ParseException
     */
    public void setHoraInicio(String dateI) throws ParseException {
        SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");
        Date date = sdf.parse(dateI);
        Calendar nueva = GregorianCalendar.getInstance(); // creates a new calendar instance
        nueva.setTime(date);
        this.horaI = nueva;
    }

    /**
     * @param dateF
     * @throws ParseException
     */
    public void setHoraFin(String dateF) throws ParseException {
        SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");
        Date date = sdf.parse(dateF);
        Calendar nueva = GregorianCalendar.getInstance(); // creates a new calendar instance
        nueva.setTime(date);
        this.horaF = nueva;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Dia> getDias() {
        return dias;
    }

    public void setDias(List<Dia> dias) {
        this.dias = dias;
    }

    public List<Bus> getBuses() {
        return buses;
    }

    public void setBuses(List<Bus> buses) {
        this.buses = buses;
    }

    
    
}