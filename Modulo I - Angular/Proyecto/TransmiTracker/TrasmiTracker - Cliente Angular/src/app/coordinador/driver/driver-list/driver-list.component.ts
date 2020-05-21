import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConductorService } from 'src/app/servicios/conductor.service';
import { Conductor } from 'src/app/modelo/conductor';


@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {


  drivers: Conductor[] = [];

  constructor(
    private router: Router,
    private ConductorService: ConductorService
  ) { }

  ngOnInit(): void {
    this.descargarConductores();
  }

  editarConductor(id:number){
    this.router.navigate(["coordinador/driver/edit/"+id]);
  }

  verConductor(id:number){
    this.router.navigate(["coordinador/driver/view/"+id]);
  }

  descargarConductores(){
    this.ConductorService.descargarConductores().subscribe(
    results => (this.drivers = results),
    error => {
      console.log(error)
    });
  }

  eliminarConductor(id_conductor:number){
    this.ConductorService.eliminarConductor(id_conductor).subscribe(
      data => {
        console.log(data);
        window.location.reload();
      },
      error => console.log(error));
  }
}
