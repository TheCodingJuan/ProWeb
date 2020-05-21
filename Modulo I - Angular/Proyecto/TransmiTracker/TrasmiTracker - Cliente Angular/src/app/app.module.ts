import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteViewComponent } from './administrador/route/route-view/route-view.component';
import { RouteListComponent } from './administrador/route/route-list/route-list.component';
import { RouteCreateComponent } from './administrador/route/route-create/route-create.component';
import { RouteEditComponent } from './administrador/route/route-edit/route-edit.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DriverViewComponent } from './coordinador/driver/driver-view/driver-view.component';
import { DriverListComponent } from './coordinador/driver/driver-list/driver-list.component';
import { DriverCreateComponent } from './coordinador/driver/driver-create/driver-create.component';
import { DriverEditComponent } from './coordinador/driver/driver-edit/driver-edit.component';
import { BusEditComponent } from './coordinador/bus/bus-edit/bus-edit.component';
import { BusCreateComponent } from './coordinador/bus/bus-create/bus-create.component';
import { BusListComponent } from './coordinador/bus/bus-list/bus-list.component';
import { BusViewComponent } from './coordinador/bus/bus-view/bus-view.component';
import { InicioComponent } from './public/inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { InicioConductorComponent } from './coordinador/inicio-conductor/inicio-conductor.component';
import { InicioRouteViewComponent } from './public/inicio-route-view/inicio-route-view.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteViewComponent,
    RouteListComponent,
    RouteCreateComponent,
    RouteEditComponent,
    FooterComponent,
    HeaderComponent,
    DriverViewComponent,
    DriverListComponent,
    DriverCreateComponent,
    DriverEditComponent,
    BusEditComponent,
    BusCreateComponent,
    BusListComponent,
    BusViewComponent,
    InicioComponent,
    LoginComponent,
    InicioConductorComponent,
    InicioRouteViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
