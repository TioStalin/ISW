import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class BodegaService {

  constructor(private http: Http) { }

  obtenerMateriales(){
    return this.http.get('/api/materiales');
  }

  obtenerBodega(id: Number){
    return this.http.post('/api/bodega', {"id": id});
  }

  crearMaterial(nombre: String, cantidad: Number, descripcion: String){
    return this.http.post('/api/materiales', {"nombre": nombre, "cantidad": cantidad, "descripcion": descripcion});
  }

  borrarMaterial(ID: Number){
    return this.http.post('/api/bodega/borrar', {"ID": ID});
  }
}
