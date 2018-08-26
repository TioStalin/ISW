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
}
