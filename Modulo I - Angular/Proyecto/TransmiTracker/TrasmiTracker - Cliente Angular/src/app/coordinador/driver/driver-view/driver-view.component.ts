import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Conductor } from 'src/app/modelo/conductor';
import { ConductorService } from 'src/app/servicios/conductor.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-driver-view',
  templateUrl: './driver-view.component.html',
  styleUrls: ['./driver-view.component.css']
})
export class DriverViewComponent implements OnInit {


  driver: Conductor = new Conductor(undefined, '', '', undefined, '', []);

  constructor(
    private router: Router,
    private DriverService: ConductorService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => this.DriverService.buscarPorId(+params.get('id'))))
      .subscribe(result => {
        this.driver = result;
      });
  }

  editardriver(id:number){
    this.router.navigate(["coordinador/driver/edit/"+id])
  }

  volverALaLista(){
    this.router.navigate(["coordinador/driveList"]);
  }

  eliminarConductor(id_conductor:number){
    this.DriverService.eliminarConductor(id_conductor).subscribe(
      data => {
        console.log(data);
        this.router.navigate(["coordinador/driveList"]);
      },
      error => console.log(error));
  }
}
