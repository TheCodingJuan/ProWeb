import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-conductor',
  templateUrl: './inicio-conductor.component.html',
  styleUrls: ['./inicio-conductor.component.css']
})
export class InicioConductorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irConductores(){
    this.router.navigate(["coordinador/driveList"]);
  }

  irBuses(){
    this.router.navigate(["coordinador/busList"]);
  }

}
