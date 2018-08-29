import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


@Injectable()
export class SolicitarcompraService {

  constructor(private http: Http) { }

  encontrarEC(id: any){
    return this.http.post('/api/encontrar_ec', {"id": id});
  }


  encontrarBC2(id: any){
    return this.http.post('/api/encontrar_bc2', {"id": id});
  }


  solicitarCompra(model: any){
    return this.http.post('/api/solicitud_compra', {
      "id_ec": model.id_ec,
      "nombre": model.nombre,
      "descripcion": model.descripcion,
      "cantidad": model.cantidad,
      "id_bc": model.id_bc,
      "fecha": model.date
    });
  }

}
