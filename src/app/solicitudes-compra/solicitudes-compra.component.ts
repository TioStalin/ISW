import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { SolicitudesCompraService } from '../service/solicitudes-compra.service';
import { BodegaService } from '../service/bodega.service';
import _ from 'lodash';
import { FilterByStatusPipe } from './filtra.pipe';


@Component({
  selector: 'app-solicitudes-compra',
  templateUrl: './solicitudes-compra.component.html',
  styleUrls: ['./solicitudes-compra.component.css']
})

export class SolicitudesCompraComponent implements OnInit {

  private solicitudes: any;
  private bodega: any;
  private materiales: any;
  private proveedores: any;
  private aux: any;
  private nombre_material: any;
  private model: any = [];
  private prov_prec: any;

  constructor(public loginService: LoginService,
              private router: Router,
              private solicitudesCompra: SolicitudesCompraService,
              private bodegaService:BodegaService) { }

  ngOnInit(){
    var data = this.loginService.estarLogin();
    if(data == null){
      this.router.navigate(['./home']);
    }
    else if(data != null && data.cargo != 4){
      this.router.navigate(['./home']);
    }
    this.solicitudesCompra.encontrarID2(data.id)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        this.solicitudesCompra.encontrarSolicitudesCompra(data['0'].id_encargado_compra)
          .map(res => res.json())
          .subscribe(data => {
            this.solicitudes = data;
            console.log(this.solicitudes);
          });
      });
    this.bodegaService.obtenerMateriales()
      .map(res => res.json())
      .subscribe(bodega => {
        this.bodega = bodega;
      });
    this.solicitudesCompra.encontrarProveedores()
      .map(res => res.json())
      .subscribe(data => this.proveedores = data);

    this.solicitudesCompra.encontrarMateriales()
      .map(res => res.json())
      .subscribe(data => {
        this.materiales = data;
        console.log(this.materiales);
        this.aux = _.uniqBy(this.materiales, 'nombre');
        console.log(this.aux);
      });

  }
  enviar(){
    console.log(this.model);
    this.solicitudesCompra.enviarOrden(this.model).subscribe();
  }

}
