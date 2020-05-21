import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Conductor } from 'src/app/modelo/conductor';
import { ConductorService } from 'src/app/servicios/conductor.service';
import { Bus } from 'src/app/modelo/bus';
import { Ruta } from 'src/app/modelo/ruta';
import { BusService } from 'src/app/servicios/bus.service';

@Component({
  selector: 'app-driver-create',
  templateUrl: './driver-create.component.html',
  styleUrls: ['./driver-create.component.css']
})
export class DriverCreateComponent implements OnInit {

  conductor: Conductor = new Conductor(undefined, '', '', undefined, '', []);

  buses: Bus[] = [];
  auxb: Bus[] = [];
  auxr: Ruta[] = [];

  message: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private conductorService: ConductorService,
    private busService: BusService
  ) { }

  ngOnInit(): void {
    this.descargarBuses();
  }

  descargarBuses(){
    this.busService.descargarBuses().subscribe(
      results => {
        console.log(results);
        this.buses = results;
      },
      error => {
        console.log(error)
      });
  }


  agregarBus(bus: Bus, index: number){
    if(!this.conductor.buses.includes(bus)){

      let esDisponible: boolean = true;
      let idsNuevos: number[] = [];
      let idsExistemte: number[] = [];

      for(let i = 0; i < bus.rutas.length; i++) {
        for (let j = 0; j < bus.rutas[i].dias.length; j++) {
          idsNuevos.push(bus.rutas[i].dias[j].id);
        }
      }

      for (let i = 0; i < this.conductor.buses.length; i++) {
        for (let j = 0; j < this.conductor.buses[i].rutas.length; j++) {
          for(let k = 0; k < this.conductor.buses[i].rutas[j].dias.length; k++){
            idsExistemte.push(this.conductor.buses[i].rutas[j].dias[k].id)
          }
        }
      }

      for(let i = 0; i < idsNuevos.length; i++){
        if(idsExistemte.includes(idsNuevos[i])){
          esDisponible = false;
        }
      }
      if(esDisponible==true){
        this.conductor.buses.push(bus);
        this.buses.splice(index,1);
        this.message = 'Bus agregada correctamente';
      }else {
        this.message = 'Los dias estan en conflicto';
        console.error('Los dias estan en conflicto');
      }

    }
    else{
      this.message = 'Bus ya en el conductor';
      console.log('Bus ya en el conductor')
    }
  }

  quitarBus(bus: Bus, index: number){
    this.conductor.buses.splice(index,1);
    this.buses.push(bus);
    this.message = '';
  }

  cancelar(){
    this.router.navigate(["coordinador/driveList"]);
  }

  crearConductor() {

    this.auxb = this.conductor.buses;

    for (let i = 0; i < this.auxb.length; i++) {
      this.auxr = this.auxb[i].rutas;
      for (let j = 0; j < this.auxr.length; j++) {
        this.conductor.buses[i].rutas[j].horaInicio=this.auxr[j].horaInicio+':00:00';
        this.conductor.buses[i].rutas[j].horaFin=this.auxr[j].horaFin+':00:00';
      }
    }

    this.conductorService.crearConductor(this.conductor).subscribe(
      result=>{
        console.log(result);
        this.router.navigate(["coordinador/driveList"]);
      },
      error =>{
        console.error(error);
      }
    );
  }

}
