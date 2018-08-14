import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {
  public nombre: string = '';
  public apellido: string = '';
  public password: string = '';
  public email: string = '';
  public cargo: number;

  constructor(public loginService:LoginService, private router:Router, private http: Http) { }

  ngOnInit(){
    var data = this.loginService.estarLogin();
    if(data == null){
      this.router.navigate(['./home']);
    }
    else if(data != null && data.cargo != 1){
      this.router.navigate(['./home']);
    }
  }

  crearUsuario(){
    if(this.nombre == null || this.apellido == null || this.password == null || this.email == null || this.cargo == null){
      alert('Uno de los campos está vacio');
    }
    else{
      this.http.post('/api/agregar', {"nombre": this.nombre, "apellido": this.apellido, "password": this.password, "email": this.email, "cargo": this.cargo})
      .subscribe(res => console.log(res));
    }
  }
}
