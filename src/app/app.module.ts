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
import { ComprasComponent } from './compras/compras.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BodegaComponent,
    LoginComponent,
    ComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
