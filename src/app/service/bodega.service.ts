import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class BodegaService {

  constructor(private http: Http) { }

  aux: any = [];

  obtenerBodega(){
    return this.http.get('/api/bodega');
  }

  crearMaterial(nombre: String, cantidad: Number, descripcion: String){
    return this.http.post('/api/bodega', {"nombre": nombre, "cantidad": cantidad, "descripcion": descripcion});
  }

  borrarMaterial(ID: Number){
    return this.http.post('/api/bodega/borrar', {"ID": ID});
  }
}
