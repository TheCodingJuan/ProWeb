package com.example.example2.service;

import com.example.example2.exceptions.NotFoundException;
import com.example.example2.model.Ruta;
import com.example.example2.model.RutaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * InicioService
 */
@RestController
@RequestMapping("/public")
public class InicioService {

    @Autowired
    RutaRepository repository;

    @GetMapping("/routeList")
    Iterable<Ruta> findAllRoutes() {
        return repository.findAll();
    }

    @GetMapping("/route/view/{id}")
    Ruta findRoute(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new NotFoundException("No se encontro la Ruta Solicitada"));
    }
}