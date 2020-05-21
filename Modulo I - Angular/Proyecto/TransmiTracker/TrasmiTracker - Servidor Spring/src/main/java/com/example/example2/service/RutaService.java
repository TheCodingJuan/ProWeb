package com.example.example2.service;

import java.text.ParseException;

import com.example.example2.exceptions.NotFoundException;
import com.example.example2.model.Bus;
import com.example.example2.model.BusRepository;
import com.example.example2.model.Dia;
import com.example.example2.model.DiaRepository;
import com.example.example2.model.Estacion;
import com.example.example2.model.EstacionRepository;
import com.example.example2.model.Ruta;
import com.example.example2.model.RutaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * RutaService
 */
@RestController
@RequestMapping("/administrador")
public class RutaService {

    @Autowired
    RutaRepository repository;

    @Autowired
    EstacionRepository estacionRepository;

    @Autowired
    BusRepository BusRepository;

    @Autowired
    DiaRepository DiaRepository;

    @GetMapping("/routeList")
    Iterable<Ruta> findAllRoutes() {
        return repository.findAll();
    }

    @GetMapping("/busList")
    Iterable<Bus> finaAllBuses(){
        return BusRepository.findAll();
    }

    @PostMapping("/route/create")
    Ruta createRoute(@RequestBody Ruta ruta) {
        return repository.save(ruta);
    }

    @GetMapping("/route/view/{id}")
    Ruta findRoute(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new NotFoundException("No se encontro la Ruta Solicitada"));
    }

    @PutMapping("/route/edit/{id}")
    Ruta updateRoute(@PathVariable Long id, @RequestBody Ruta rutaData) throws ParseException {
        
        Ruta ruta = findRoute(id);
        
        ruta.setCodigo(rutaData.getCodigo());
        ruta.setDias(rutaData.getDias());
        ruta.setEstaciones(rutaData.getEstaciones());

        ruta.setHoraInicio(rutaData.getHoraInicio()+":00:00");
        
        ruta.setHoraFin(rutaData.getHoraFin()+":00:00");

        return repository.save(ruta);
    }

    @DeleteMapping("/route/delete/{id}")
    void deleteRuta(@PathVariable Long id){
        if(repository.existsById(id)){
            repository.deleteById(id);
        } else {
            throw new NotFoundException();
        }
    }

    @GetMapping("/estacionList")
    Iterable<Estacion> findAllEstaciones(){
        return this.estacionRepository.findAll();
    }

    @GetMapping("/diaList")
    Iterable<Dia> findAllDias(){
        return this.DiaRepository.findAll();
    }



    

    
}