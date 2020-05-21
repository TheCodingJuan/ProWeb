import { Component, OnInit } from '@angular/core';
import { Ruta } from 'src/app/modelo/ruta';
import { RutaService } from 'src/app/servicios/ruta.service';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-inicio-route-view',
  templateUrl: './inicio-route-view.component.html',
  styleUrls: ['./inicio-route-view.component.css']
})
export class InicioRouteViewComponent implements OnInit {

  ruta : Ruta;

  constructor(
    private rutaService: RutaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
    this.route.paramMap.pipe(
      switchMap(params => this.rutaService.buscarPorId(+params.get('id'))))
      .subscribe(result => {
        this.ruta = result;
      });

  }

  volverALaLista(){
    this.router.navigate(["public/routeList"]);
  }

}
