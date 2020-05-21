package com.example.example2.service;

import java.text.ParseException;

import com.example.example2.exceptions.NotFoundException;
import com.example.example2.model.Bus;
import com.example.example2.model.BusRepository;


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
 * BusService
 */
@RestController
@RequestMapping("/coordinador")
public class BusService {

    @Autowired
    BusRepository repository;

    
    @GetMapping("/busList")
    Iterable<Bus> findAllBuses() {
        return repository.findAll();
    }

    @PostMapping("/bus/create")
    Bus createBus(@RequestBody Bus bus) {
        return repository.save(bus);
    }


    
    @GetMapping("/bus/view/{id}")
    Bus findBus(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new NotFoundException("Bus not found"));
    }

    @DeleteMapping("/bus/delete/{id}")
    void deleteBus(@PathVariable Long id){
        if(repository.existsById(id)){
            repository.deleteById(id);
        } else {
            throw new NotFoundException();
        }
    }

    
    @PutMapping("/bus/edit/{id}")
    Bus updateConductor(@PathVariable Long id, @RequestBody Bus busData) throws ParseException {
        
        Bus bus = findBus(id);

        bus.setModelo(busData.getModelo());
        bus.setPlaca(busData.getPlaca());

        bus.setRutas(busData.getRutas());

        return repository.save(bus);
    }
    
}