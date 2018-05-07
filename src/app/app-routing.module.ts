import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BodegaComponent } from './bodega/bodega.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'bodega', component: BodegaComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
