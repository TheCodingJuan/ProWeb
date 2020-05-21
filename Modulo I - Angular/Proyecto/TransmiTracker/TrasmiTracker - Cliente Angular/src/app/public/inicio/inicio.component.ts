import { Component, OnInit } from '@angular/core';
import { Ruta } from 'src/app/modelo/ruta';
import { Router } from '@angular/router';
import { RutaService } from 'src/app/servicios/ruta.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {

  routes: Ruta[] =[];
  routes2: Ruta[] = [];
  aux: Ruta[] = [];
  selectedRoute: Ruta = new Ruta(undefined, '', [], [], undefined, undefined);

  constructor(
    private router: Router,
    private rutaService: RutaService
  ) { }

  ngOnInit(): void {
    this.descargarRutas();
  }

  onSelect(id: any): void{
    for(let i = 0; i < this.routes.length; i++){
      if(this.routes[i].id == id){
        this.aux[0] = this.routes[i];
      }
    }
    this.routes2 = this.routes;
    this.routes = this.aux;
  }

  limpiar(): void {
    this.routes = this.routes2;
    this.aux = [];
  }

  verRuta(id:number) {
    this.router.navigate(["public/route/view/"+id]);
  }

  descargarRutas() {
    this.rutaService.descargarRutasPublic().subscribe(
    results => (this.routes = results),
    error => {
      console.log(error)
    });
  }
}
