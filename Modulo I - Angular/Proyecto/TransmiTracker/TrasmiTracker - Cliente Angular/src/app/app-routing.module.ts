import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteListComponent } from './administrador/route/route-list/route-list.component';
import { RouteViewComponent } from './administrador/route/route-view/route-view.component';
import { RouteEditComponent } from './administrador/route/route-edit/route-edit.component';
import { RouteCreateComponent } from './administrador/route/route-create/route-create.component';
import { DriverListComponent } from './coordinador/driver/driver-list/driver-list.component';
import { DriverViewComponent } from './coordinador/driver/driver-view/driver-view.component';
import { DriverEditComponent } from './coordinador/driver/driver-edit/driver-edit.component';
import { DriverCreateComponent } from './coordinador/driver/driver-create/driver-create.component';
import { BusListComponent } from './coordinador/bus/bus-list/bus-list.component';
import { BusViewComponent } from './coordinador/bus/bus-view/bus-view.component';
import { BusEditComponent } from './coordinador/bus/bus-edit/bus-edit.component';
import { BusCreateComponent } from './coordinador/bus/bus-create/bus-create.component';
import { InicioComponent } from './public/inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { InicioConductorComponent } from './coordinador/inicio-conductor/inicio-conductor.component';
import { InicioRouteViewComponent } from './public/inicio-route-view/inicio-route-view.component';


const routes: Routes = [
  {path: '',pathMatch:'full',redirectTo:'/public/routeList'},
  {path:'public/routeList', component: InicioComponent},
  {path:'public/route/view/:id', component: InicioRouteViewComponent},
  {path:'login', component: LoginComponent},
  {path:'administrador/routeList', component: RouteListComponent},
  {path:'administrador/route/view/:id', component: RouteViewComponent},
  {path:'administrador/route/edit/:id', component: RouteEditComponent},
  {path:'administrador/route/create', component: RouteCreateComponent},
  {path:'coordinador/inicio', component: InicioConductorComponent},
  {path:'coordinador/driveList', component: DriverListComponent},
  {path:'coordinador/driver/view/:id', component: DriverViewComponent},
  {path:'coordinador/driver/edit/:id', component: DriverEditComponent},
  {path:'coordinador/driver/create', component: DriverCreateComponent},
  {path:'coordinador/busList', component: BusListComponent},
  {path:'coordinador/bus/view/:id', component: BusViewComponent},
  {path:'coordinador/bus/edit/:id', component: BusEditComponent},
  {path:'coordinador/bus/create', component: BusCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
