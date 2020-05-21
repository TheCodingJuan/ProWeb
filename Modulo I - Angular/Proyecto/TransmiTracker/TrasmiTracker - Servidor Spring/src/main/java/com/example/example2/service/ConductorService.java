package com.example.example2.service;

import java.text.ParseException;

import com.example.example2.exceptions.NotFoundException;
import com.example.example2.model.Conductor;
import com.example.example2.model.ConductorRepository;
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
 * ConductorService
 */
@RestController
@RequestMapping("/coordinador")
public class ConductorService {

    @Autowired
    ConductorRepository repository;

    
    @GetMapping("/driveList")
    Iterable<Conductor> findAllConductores() {
        return repository.findAll();
    }

    @PostMapping("/driver/create")
    
    Conductor createConductor(@RequestBody Conductor conductor) {
        return repository.save(conductor);
    }


    
    @GetMapping("/driver/view/{id}")
    Conductor findConductor(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new NotFoundException("Conductor not found"));
    }

    @DeleteMapping("/driver/delete/{id}")
    
    void deleteConductor(@PathVariable Long id){
        if(repository.existsById(id)){
            repository.deleteById(id);
        } else {
            throw new NotFoundException();
        }
    }

    
    @PutMapping("/driver/edit/{id}")
    Conductor updateConductor(@PathVariable Long id, @RequestBody Conductor conductorData) throws ParseException {
        
        Conductor conductor = findConductor(id);

        conductor.setNombre(conductorData.getNombre());
        conductor.setCedula(conductorData.getCedula());
        conductor.setDireccion(conductorData.getDireccion());
        conductor.setTelefono(conductorData.getTelefono());
        conductor.setBuses(conductorData.getBuses());

        return repository.save(conductor);
    }
    
}