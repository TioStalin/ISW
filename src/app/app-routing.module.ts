import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BodegaComponent } from './bodega/bodega.component';
import { LoginComponent } from './login/login.component';
import { ComprasComponent } from './compras/compras.component';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { CrearobraComponent } from './crearobra/crearobra.component';
import { AsignarobraComponent } from './asignarobra/asignarobra.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'bodega', component: BodegaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'compras', component: ComprasComponent},
  {path: 'agregar_usuario', component: AgregarUsuarioComponent},
  {path: 'crearobra', component: CrearobraComponent},
  {path: 'asignarobra', component: AsignarobraComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
