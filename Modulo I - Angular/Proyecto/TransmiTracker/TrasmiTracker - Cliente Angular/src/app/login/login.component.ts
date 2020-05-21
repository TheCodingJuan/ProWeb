import { Component, OnInit } from '@angular/core';
import { RestClientService } from '../servicios/rest-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private restClientService: RestClientService,
    private router: Router
  ) { }

  usuario: string = null;
  contrasena: string = null;

  loginIncorrecto: boolean = false;

  ngOnInit(): void {
  }

  doLogin() {
    console.log(this.usuario + ' - ' + this.contrasena);
    this.restClientService.login(this.usuario, this.contrasena).subscribe(data => {
      console.log("autenticado");
      this.loginIncorrecto = false;

      switch (this.usuario) {
        case "administrador":
          this.router.navigate(['/administrador/routeList']);
          break;
        case "coordinador":
          this.router.navigate(['/coordinador/inicio']);
          break;

      }

      }, error => {
        this.loginIncorrecto = true;
        console.error(error);
      });
  }
}
