import { Component, OnInit } from '@angular/core';
import { Ruta } from 'src/app/modelo/ruta';
import { Router, ActivatedRoute } from '@angular/router';
import { Estacion } from 'src/app/modelo/estacion';
import { RutaService } from 'src/app/servicios/ruta.service';
import { EstacionService } from 'src/app/servicios/estacion.service';
import { Dia } from 'src/app/modelo/dia';
import { switchMap } from 'rxjs/operators';
import { Bus } from 'src/app/modelo/bus';
import { BusService } from 'src/app/servicios/bus.service';

@Component({
  selector: 'app-route-edit',
  templateUrl: './route-edit.component.html',
  styleUrls: ['./route-edit.component.css']
})
export class RouteEditComponent implements OnInit {

  ruta: Ruta = new Ruta(undefined,"",[],[],"","");

  estaciones: Estacion[] = [];

  dias: Dia[] = [];

  buses: Bus[] = [];

  horaInicio: number;
  horaFinal: number ;

  errorBus: boolean = false;

  lunes: boolean ;
  martes: boolean ;
  miercoles: boolean;
  jueves: boolean;
  viernes: boolean;
  sabado: boolean;
  domingo : boolean;

  constructor(
    private router: Router,
    private rutaService: RutaService,
    private estacionService: EstacionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.descargarRuta();

    for(let dia of this.dias)
    {
      if(this.ruta.dias.includes(dia))
      {
        if(dia.id == -7)
        {
          this.domingo = true;
        }
        if(dia.id == -6)
        {
          this.sabado = true;
        }
        if(dia.id == -5)
        {
          this.viernes = true;
        }
        if(dia.id == -4)
        {
          this.jueves = true;
        }
        if(dia.id == -3)
        {
          this.miercoles = true;
        }
        if(dia.id == -2)
        {
          this.martes = true;
        }
        if(dia.id == -1)
        {
          this.lunes = true;
        }
      }
    }
  }

  editarRuta(){
    this.ruta.horaInicio = this.horaInicio+":00:00";
    this.ruta.horaFin = this.horaFinal+":00:00";

    this.ruta.dias = [];

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

    console.log(this.ruta);

    this.rutaService.editarRuta(this.ruta).subscribe(
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

  descargarRuta(){
    this.route.paramMap.pipe(
      switchMap(params => this.rutaService.buscarPorId(+params.get('id'))))
      .subscribe(result => {
        this.ruta = result;

        this.horaInicio = +this.ruta.horaInicio;
        this.horaFinal = +this.ruta.horaFin;

        this.descargarEstaciones();
      }, error => {
        console.log(error)
      });
  }

  descargarEstaciones(){
    this.estacionService.descargarEstaciones().subscribe(
      results => {
        this.estaciones = results;
        this.descargarDias();
      },
      error => {
        console.log(error)
      });
  }

  descargarDias(){
    this.rutaService.descargarDias().subscribe(
      results => {
        this.dias = results;
        this.hacerVerificaciones();
      },
      error => {
        console.log(error)
      });
  }


  hacerVerificaciones(){
    for (let dia of this.dias) {
      for (let dia2 of this.ruta.dias) {
        if (dia.id == dia2.id) {
          if (dia.id == -7) {
            this.domingo = true;
          }
          if (dia.id == -6) {
            this.sabado = true;
          }
          if (dia.id == -5) {
            this.viernes = true;
          }
          if (dia.id == -4) {
            this.jueves = true;
          }
          if (dia.id == -3) {
            this.miercoles = true;
          }
          if (dia.id == -2) {
            this.martes = true;
          }
          if (dia.id == -1) {
            this.lunes = true;
          }
        }
      }
    }

    let auxiliar : Estacion[] = this.estaciones;

    for(let i=0;i<this.ruta.estaciones.length;i++){
      for(let j=0;j< this.estaciones.length;j++){
        if(this.estaciones[j].id == this.ruta.estaciones[i].id){
          auxiliar.splice(j,1);
        }
      }
    }
    this.estaciones = auxiliar;
  }

}
