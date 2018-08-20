import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ObraService {

  constructor(private http: Http) { }

  crearob(model: any){
    return this.http.post('/api/crearobra',{"nombre": model.nombre,"descripcion": model.descripcion,"ubicacion": model.ubicacion});
  }

  obtenerObras(){
    return this.http.get('/api/obra');
  }

}
