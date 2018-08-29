import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BodegaComponent } from './bodega/bodega.component';
import { LoginComponent } from './login/login.component';
import { ComprasComponent } from './compras/compras.component';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { ObraComponent } from './obra/obra.component';
import { SolicitarComponent } from './solicitar/solicitar.component';
import { SolicitudesMaterialComponent } from './solicitudes-material/solicitudes-material.component';
import { SolicitarcompraComponent } from './solicitarcompra/solicitarcompra.component';
import { SolicitudesCompraComponent } from './solicitudes-compra/solicitudes-compra.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'bodega', component: BodegaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'compras', component: ComprasComponent},
  {path: 'agregar_usuario', component: AgregarUsuarioComponent},
  {path: 'obra', component: ObraComponent},
  {path: 'solicitar_material', component: SolicitarComponent},
  {path: 'solicitudes_de_material', component: SolicitudesMaterialComponent},
  {path: 'solicitar_compra', component: SolicitarcompraComponent},
  {path: 'solicitudes_de_compra', component: SolicitudesCompraComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
