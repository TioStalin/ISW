import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { BodegaService } from '../service/bodega.service';
import { LoginService } from '../service/login.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-bodega',
  templateUrl: './bodega.component.html',
  styleUrls: ['./bodega.component.css']
})
export class BodegaComponent implements OnInit {
  public bodega: any;
  public cargo: number;
  public nombre: string = '';
  public cantidad: number;
  public descripcion: string = '';
  public text: any;
  public id: any;

  constructor(public loginService:LoginService,
              private router:Router,
              private bodegaService:BodegaService) { }

  ngOnInit(){
    var data = this.loginService.estarLogin();
    if(data == null){
      this.router.navigate(['./home']);
    }
    this.cargo = data.cargo;
    this.id = data.id;
    if(this.cargo == 2 || this.cargo == 1 || this.cargo == 4){
      this.bodegaService.obtenerMateriales()
        .map(res => res.json())
        .subscribe(bodega => {
          this.bodega = bodega;
          console.log(this.bodega);
        });
    }
    if(this.cargo == 3){
      this.bodegaService.obtenerBodega(this.id)
        .map(res => res.json())
        .subscribe(bodega => {
          this.bodega = bodega;
          console.log(this.bodega);
        });
    }

  }

  crearMaterial(){
    if(this.cantidad == null || this.cantidad <= 0){
      alert('La cantidad tiene errores');
    }
    else if(this.nombre == ''){
      alert('Material no tiene nombre');
    }
    else{
      this.bodegaService.crearMaterial(this.nombre, this.cantidad, this.descripcion)
        .subscribe(data => {
          this.text = data.text();
          this.bodegaService.obtenerMateriales()
            .map(res => res.json())
            .subscribe(bodega => {
              this.bodega = bodega;
            });
        });
    }
  }
  borrarMaterial(ID: Number){
    this.bodegaService.borrarMaterial(ID)
      .subscribe(data => {
        this.text = data.text();
        this.bodegaService.obtenerMateriales()
          .map(res => res.json())
          .subscribe(bodega => {
            this.bodega = bodega;
          });
      });
  }
}
