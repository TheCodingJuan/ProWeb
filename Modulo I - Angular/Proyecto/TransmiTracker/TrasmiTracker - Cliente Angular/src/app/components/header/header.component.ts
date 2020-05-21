import { Component, OnInit } from '@angular/core';
import { RestClientService } from 'src/app/servicios/rest-client.service';
import { Router } from '@angular/router';
import { logging } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public route: Router,
    private clienteRestService: RestClientService
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.clienteRestService.logout().subscribe(data => {
      this.route.navigate(['/public/routeList']);
    }, error => {
      console.error(error);
    });
  }

  login(){
    this.route.navigate(['/login']);
  }
}
