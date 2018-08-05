import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-bodega',
  templateUrl: './bodega.component.html',
  styleUrls: ['./bodega.component.css']
})
export class BodegaComponent implements OnInit {
  public bodega: any;
  public logueado: boolean;
  public nombre: string = '';
  public cantidad: number;
  public descripcion: string = '';

  constructor(private http: Http, public loginService:LoginService, private router:Router) { }

  ngOnInit(){
    var data = this.loginService.estarLogin();
    if(data == null){
      this.router.navigate(['./home']);
    }
    this.obtenerBodega();
  }

  obtenerBodega(){
    this.http.get('/api/bodega')
    .map(res => res.json())
    .subscribe(response => this.bodega = response);
  }

  crearMaterial(){
    if(this.cantidad == null || this.cantidad <= 0){
      alert('La cantidad tiene errores')
    }
    else if(this.nombre == ''){
      alert('Material no tiene nombre')
    }
    else{
      // AQUI HAY QUE HACER EL INSERT DEL NUEVO MATERIAL
      console.log(this.nombre)
      console.log(this.cantidad)
      console.log(this.descripcion)
    }
  }
}
