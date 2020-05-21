import { Component, OnInit } from '@angular/core';
import { Runner } from 'protractor';
import { Ruta } from 'src/app/modelo/ruta';
import { Estacion } from 'src/app/modelo/estacion';
import { Router } from '@angular/router';
import { EstacionService } from 'src/app/servicios/estacion.service';
import { RutaService } from 'src/app/servicios/ruta.service';
import { Dia } from 'src/app/modelo/dia';

@Component({
  selector: 'app-route-create',
  templateUrl: './route-create.component.html',
  styleUrls: ['./route-create.component.css']
})
export class RouteCreateComponent implements OnInit {

  ruta: Ruta = new Ruta(undefined,"",[],[],"","");
  
  estaciones: Estacion[] = [];

  dias: Dia[] = [];

  horaInicio: number = undefined;
  horaFinal: number = undefined;
  lunes: boolean ;
  martes: boolean ;
  miercoles: boolean;
  jueves: boolean;
  viernes: boolean;
  sabado: boolean;
  domingo : boolean;

  constructor( 
    private router: Router,
    private estacionService: EstacionService,
    private rutaService: RutaService
  ) { }

  ngOnInit(): void {
    this.descargarEstaciones();
    this.descargarDias();
  }

  guardarRuta(){ 
    this.ruta.horaInicio = this.horaInicio+":00:00";

    this.ruta.horaFin = this.horaFinal+":00:00";

    if(this.lunes){
      this.ruta.dias.push(this.dias[6]);
    }
    if(this.martes){
      this.ruta.dias.push(this.dias[5]);
    }
    if(this.miercoles){
      this.ruta.dias.push(this.dias[4]);
    }
    if(this.jueves){
      this.ruta.dias.push(this.dias[3]);
    }
    if(this.viernes){
      this.ruta.dias.push(this.dias[2]);
    }
    if(this.sabado){
      this.ruta.dias.push(this.dias[1]);
    }
    if(this.domingo){
      this.ruta.dias.push(this.dias[0]);
    }

    this.rutaService.crearRuta(this.ruta).subscribe(
      result => {
        console.log(result);
        this.router.navigate(["administrador/routeList"]);
      },
      error =>{
        console.error(error);
      }
    );

    
  }

  agregarEstacion(index: number){
    this.ruta.estaciones.push(this.estaciones[index]);
    this.estaciones.splice(index,1);
  }

  quitarEstacion(index: number){
    this.estaciones.push(this.ruta.estaciones[index]);
    this.ruta.estaciones.splice(index, 1);
  }

  cancelar(){
    this.router.navigate(["administrador/routeList"]);
  }

  descargarEstaciones(){
    this.estacionService.descargarEstaciones().subscribe(
      results => {
        console.log(results);
        this.estaciones = results;
      },
      error => {
        console.log(error)
      });
  }

  descargarDias(){
    this.rutaService.descargarDias().subscribe(
      results => {
        console.log(results);
        this.dias = results;
      },
      error => {
        console.log(error)
      });
  }

}
