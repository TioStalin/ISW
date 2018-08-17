import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class UsuarioService {

  constructor(private http: Http) { }

  crear(model: any){
    return this.http.post('/api/agregar_usuario',
    {
      "nombre": model.nombre,
      "apellido": model.apellido,
      "email": model.email,
      "password": model.password,
      "cargo": model.cargo
    });
  }

}
