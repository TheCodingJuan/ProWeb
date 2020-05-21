import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from 'src/app/modelo/bus';
import { BusService } from 'src/app/servicios/bus.service';
import { Ruta } from 'src/app/modelo/ruta';
import { RutaService } from 'src/app/servicios/ruta.service';

@Component({
  selector: 'app-bus-create',
  templateUrl: './bus-create.component.html',
  styleUrls: ['./bus-create.component.css']
})
export class BusCreateComponent implements OnInit {

  bus: Bus = new Bus(undefined,"","",[],[]);
  rutas: Ruta[] = [];
  aux: Ruta[] = [];

  message: string = "";

  constructor(
    private router: Router,
    private rutaService: RutaService,
    private busService: BusService
  ) { }

  ngOnInit(): void {
    this.descargarRutas();
  }
  agregarRuta(ruta: Ruta, index: number){
    if(!this.bus.rutas.includes(ruta)){

      let esDisponible: boolean = true;
      let idsNuevos: number[] = [];
      let idsExistemte: number[] = [];

      for(let i = 0; i < this.bus.rutas.length; i++){
        for(let j = 0; j < this.bus.rutas[i].dias.length; j++){
          idsExistemte.push(this.bus.rutas[i].dias[j].id);
        }

      }

      for(let i = 0; i < ruta.dias.length; i++){
        idsNuevos.push(ruta.dias[i].id);
      }

      for(let i = 0; i < idsNuevos.length; i++){
        for(let j = 0; j < idsExistemte.length; j++){
        if(idsExistemte[j] === idsNuevos[i]){
          esDisponible = false;
        }
      }
    }
      if(esDisponible === true){
        this.bus.rutas.push(ruta);
        this.rutas.splice(index,1);
        this.message = 'Ruta agregada correctamente';
      }else {
        this.message = 'Los dias estan en conflicto';
        console.error('Los dias estan en conflicto');
      }

    }
    else{
      this.message = 'Ruta ya en el bus';
      console.log('Ruta ya en el bus')
    }
  }

  quitarRuta(ruta: Ruta, index: number){
    this.bus.rutas.splice(index,1);
    this.rutas.push(ruta);
    this.message = '';
  }

  cancelar(){
    this.router.navigate(["coordinador/busList"]);
  }

  descargarRutas(){
    this.rutaService.descargarRutasPublic().subscribe(
      results => {
        console.log(results);
        this.rutas = results;
      },
      error => {
        console.log(error)
      });
  }

  crearBus() {

    this.aux = this.bus.rutas;

    for (let index = 0; index < this.aux.length; index++) {
      this.bus.rutas[index].horaInicio = this.aux[index].horaInicio+':00:00';
      this.bus.rutas[index].horaFin = this.aux[index].horaFin+':00:00';

    }

    this.busService.crearBus(this.bus).subscribe(
      result=>{
        console.log(result);
        this.router.navigate(["coordinador/busList"]);
      },
      error =>{
        console.error(error);
      }
    );
  }

}
