import { Component, OnInit } from '@angular/core';
import { Ruta } from 'src/app/modelo/ruta';
import { Router } from '@angular/router';
import { RutaService } from 'src/app/servicios/ruta.service';
import { BusService } from 'src/app/servicios/bus.service';
import { Bus } from 'src/app/modelo/bus';

@Component({
  selector: 'app-route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.css']
})
export class RouteListComponent implements OnInit {

  routes: Ruta[] =[];

  buses: Bus[] = [];

  errorBus: boolean = false;

  constructor(
    private router: Router,
    private rutaService: RutaService,
    private busService: BusService
  ) { }

  ngOnInit(): void {
    this.descargarRutas();
  }

  editarRuta(id:number){
    this.router.navigate(["administrador/route/edit/"+id]);
  }

  verRuta(id:number){
    this.router.navigate(["administrador/route/view/"+id]);
  }

  validarEliminacion(id: number){

    for(let i=0;i<this.buses.length;i++){
      for(let j =0;j<this.buses[i].rutas.length;j++){
          if(this.buses[i].rutas[j].id == id){
            console.log("ENTRE");
            this.errorBus = true;
            return;
          }
      }
    }

    this.eliminarRuta(id);
  }

  eliminarRuta(id:number){
    this.rutaService.eliminarRuta(id).subscribe(
      data => {
        console.log(data);
        window.location.reload();
      },
      error => console.log(error));
  }

  descargarRutas(){
    this.rutaService.descargarRutas().subscribe(
    results => {
      this.routes = results
      this.descargarBuses();
    },
    error => {
      console.log(error)
    });
  }
  descargarBuses(){
    this.busService.descargarBusesAdmin().subscribe(
      results => {
        this.buses = results;
      },
      error => {
        console.log(error);
      }
    )
  }

}
