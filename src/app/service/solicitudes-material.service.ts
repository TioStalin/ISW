import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class SolicitudesMaterialService {

  constructor(private http: Http) { }

  encontrarID(id: any){
    return this.http.post('/api/encontrar_id', {"id": id});
  }

  encontrarSolicitudes(id:any){
    return this.http.post('/api/encontrar_solicitudes', {"id": id});
  }

  asignarMaterial(model: any){
    return this.http.post('/api/asignar_material', {
      "obra_id": model.solicitud.id_obra,
      "material_id": model.solicitud.id_material,
      "cantidad_asignada": model.cantidad,
      "update_material": model.update_material,
      "update_solicitud": model.update_solicitud,
      "id_solicitud_material": model.solicitud.id_solicitud_material
    });
  }
}
