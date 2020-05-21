import { Component, OnInit } from '@angular/core';
import { Ruta } from 'src/app/modelo/ruta';
import { Router, ActivatedRoute } from '@angular/router';
import { Estacion } from 'src/app/modelo/estacion';
import { RutaService } from 'src/app/servicios/ruta.service';
import { switchMap } from 'rxjs/operators';
import { Bus } from 'src/app/modelo/bus';
import { BusService } from 'src/app/servicios/bus.service';

@Component({
  selector: 'app-route-view',
  templateUrl: './route-view.component.html',
  styleUrls: ['./route-view.component.css']
})
export class RouteViewComponent implements OnInit {

  ruta: Ruta ;

  buses: Bus[] = [];

  errorBus: boolean=false;

  constructor(
    private router: Router,
    private rutaService: RutaService,
    private route: ActivatedRoute,
    private busService: BusService
  ) { }

  ngOnInit(): void {

    this.descargarBuses();

    this.route.paramMap.pipe(
      switchMap(params => this.rutaService.buscarPorId(+params.get('id'))))
      .subscribe(result => {
        this.ruta = result;
      });
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

  eliminarRuta(id: number){
    this.rutaService.eliminarRuta(id).subscribe(
      data => {
        console.log(data);
        this.router.navigate(["administrador/routeList"]);
      },
      error => console.log(error));
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

  editarRuta(id:number){
    this.router.navigate(["administrador/route/edit/"+id])
  }
  volverALaLista(){
    this.router.navigate(["administrador/routeList"]);
  }

}
