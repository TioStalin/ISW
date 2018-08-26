import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { HomeComponent } from './home/home.component';
import { BodegaComponent } from './bodega/bodega.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './service/login.service';
import { BodegaService } from './service/bodega.service';
import { UsuarioService } from './service/usuario.service';
import { ObraService } from './service/obra.service';
import { SolicitarService } from './service/solicitar.service';
import { SolicitudesMaterialService } from './service/solicitudes-material.service';
import { ComprasComponent } from './compras/compras.component';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { ObraComponent } from './obra/obra.component';
import { SolicitarComponent } from './solicitar/solicitar.component';
import { SolicitudesMaterialComponent } from './solicitudes-material/solicitudes-material.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BodegaComponent,
    LoginComponent,
    ComprasComponent,
    AgregarUsuarioComponent,
    ObraComponent,
    SolicitarComponent,
    SolicitudesMaterialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [
    LoginService,
    BodegaService,
    ObraService,
    UsuarioService,
    SolicitarService,
    SolicitudesMaterialService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
