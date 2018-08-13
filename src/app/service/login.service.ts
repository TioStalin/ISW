import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';


@Injectable()
export class LoginService {

  constructor(private http:Http,
              private router:Router) { }

  acceder(usuario: String, pass: String){
    return this.http.post('/api/usuario', {"nombre": usuario, "contrasena": pass})
    .map(res => res.json());
  }

  estarLogin(){
    let data = JSON.parse(localStorage.getItem('usuario'));
    if(data != undefined){
        return data;
    }
    return null;
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['./login']);
  }
}
