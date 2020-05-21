import { Component, OnInit } from '@angular/core';
import { Bus } from '../../../modelo/bus';
import { Router, ActivatedRoute } from '@angular/router';
import { BusService } from 'src/app/servicios/bus.service';
import { switchMap } from 'rxjs/operators';
import { Conductor } from 'src/app/modelo/conductor';
import { ConductorService } from 'src/app/servicios/conductor.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {

  buses: Bus[] = [];

  busBorrar: Bus = new Bus(undefined,"","",[],[]);

  conductoresSistema: Conductor[] = [];

  message: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private busService: BusService,
    private ConductorService: ConductorService
  ) { }

  ngOnInit(): void {
    this.descargarBuses();
    this.descargarConductores();
  }

  editarBus(id: number) {
    this.router.navigate(["coordinador/bus/edit/"+id]);
  }

  verBus(id: number) {
    this.router.navigate(["coordinador/bus/view/"+id]);
  }

  descargarBuses(){
    this.busService.descargarBuses().subscribe(
    results => (this.buses = results),
    error => {
      console.log(error)
    });
  }

  descargarConductores(){
    this.ConductorService.descargarConductores().subscribe(
    results => (this.conductoresSistema = results),
    error => {
      console.log(error)
    });
  }

  eliminarBus(id_bus: number){
    this.route.paramMap.pipe(
      switchMap(params => this.busService.buscarPorId(id_bus)))
      .subscribe(result => {
        this.busBorrar = result;

        let tieneConductor: boolean = false;

        for(let i = 0; i < this.conductoresSistema.length; i++){
          for(let j = 0; j < this.conductoresSistema[i].buses.length; j++){
            if(this.conductoresSistema[i].buses[j].id == this.busBorrar.id){
              tieneConductor = true;
              break;
            }
          }
        }

        if(!tieneConductor){

          this.busService.eliminarBus(this.busBorrar.id).subscribe(
            data => {
              console.log(data);

              window.location.reload();
            },
            error => console.log(error));

        } else {
          this.message = 'Tiene conductores asociados';
          console.log('Tiene conductores asociados');
        }



      });
  }
}
