import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


@Injectable()
export class SolicitarService {

  constructor(private http: Http) { }

  encontrarBC(id: any){
    return this.http.post('/api/encontrar_bc', {"id": id});
  }

  solicitarMaterial(model: any){
    return this.http.post('/api/solicitud_material', {
      "id_bo": model.id_bo,
      "nombre": model.nombre,
      "descripcion": model.descripcion,
      "cantidad": model.cantidad,
      "id_bc": model.id_bc,
      "fecha": model.date
    });
  }

}
