import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Bus } from 'src/app/modelo/bus';
import { BusService } from 'src/app/servicios/bus.service';
import { switchMap } from 'rxjs/operators';
import { Conductor } from 'src/app/modelo/conductor';
import { ConductorService } from 'src/app/servicios/conductor.service';

@Component({
  selector: 'app-bus-view',
  templateUrl: './bus-view.component.html',
  styleUrls: ['./bus-view.component.css']
})
export class BusViewComponent implements OnInit {

  bus: Bus;

  message: string = '';

  conductoresSistema: Conductor[] = [];

  constructor(
    private router: Router,
    private busService: BusService,
    private route: ActivatedRoute,
    private ConductorService: ConductorService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => this.busService.buscarPorId(+params.get('id'))))
      .subscribe(result => {
        this.bus = result;
      });
    this.descargarConductores();
  }

  descargarConductores(){
    this.ConductorService.descargarConductores().subscribe(
    results => (this.conductoresSistema = results),
    error => {
      console.log(error)
    });
  }

  editarbus(id:number){
    this.router.navigate(["coordinador/bus/edit/"+id])
  }

  volverALaLista(){
    this.router.navigate(["coordinador/busList"]);
  }

  eliminarBus(id_bus: number){

    let tieneConductor: boolean = false;

    for(let i = 0; i < this.conductoresSistema.length; i++){
      for(let j = 0; j < this.conductoresSistema[i].buses.length; j++){
        if(this.conductoresSistema[i].buses[j].id == id_bus){
          tieneConductor = true;
          break;
        }
      }
    }

    if(!tieneConductor){
      this.busService.eliminarBus(id_bus).subscribe(
        data => {
          console.log(data);
          this.router.navigate(["coordinador/busList"]);
        },
          error => console.log(error));
        } else {
          this.message = 'Tiene conductores asociados';
          console.log('Tiene conductores asociados');
        }
  }

}
