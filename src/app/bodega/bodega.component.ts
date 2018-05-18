import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-bodega',
  templateUrl: './bodega.component.html',
  styleUrls: ['./bodega.component.css']
})
export class BodegaComponent implements OnInit {
  public bodega: any;
  public logueado: boolean;
  constructor(private http: Http) { }

  ngOnInit() {
    this.obtenerBodega();
  }

  obtenerBodega(){
    this.http.get('/api/bodega')
    .map(res => res.json())
    .subscribe(response => this.bodega = response);
  }

}
