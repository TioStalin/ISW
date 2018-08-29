import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { SolicitudesMaterialService } from '../service/solicitudes-material.service';
import _ from "lodash";
@Component({
  selector: 'app-solicitudes-material',
  templateUrl: './solicitudes-material.component.html',
  styleUrls: ['./solicitudes-material.component.css']
})
export class SolicitudesMaterialComponent implements OnInit {

  private solicitudes: any;
  private asignar: any = [];
  private error_cantidad: any;
  private loading: boolean = false;
  private text: any;
  private id_bodeguero_central: any;

  constructor(public loginService: LoginService,
              private router: Router,
              private solicitudesMaterial: SolicitudesMaterialService) { }

  ngOnInit(){
    var data = this.loginService.estarLogin();
    if(data == null){
      this.router.navigate(['./home']);
    }
    else if(data != null && data.cargo != 2){
      this.router.navigate(['./home']);
    }
    this.solicitudesMaterial.encontrarID(data.id)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        this.id_bodeguero_central = data['0'].id_bodeguero_central;
        this.solicitudesMaterial.encontrarSolicitudes(this.id_bodeguero_central)
          .map(res => res.json())
          .subscribe(data => {
            this.solicitudes = data;
            console.log(this.solicitudes);
            /*this.materiales = _.uniqBy(this.solicitudes, 'nombre_material');
            this.obras = _.uniqBy(this.solicitudes, 'nombre_obra'); */
          });
      });
  }

  formulario(){
    this.loading = true;
    if(this.asignar.cantidad > this.asignar.solicitud.cantidad_bodega){
      this.error_cantidad = "Cantidad seleccionada es mayor a la cantidad en bodega";
    }
    else{
      this.error_cantidad = false;
      this.asignar.update_material = this.asignar.solicitud.cantidad_bodega - this.asignar.cantidad;
      this.asignar.update_solicitud = this.asignar.solicitud.cantidad_solicitud - this.asignar.cantidad;
      this.solicitudesMaterial.asignarMaterial(this.asignar).subscribe(data =>{
          this.text = data.text();
          this.solicitudesMaterial.encontrarSolicitudes(this.id_bodeguero_central)
            .map(res => res.json())
            .subscribe(data => {
              this.solicitudes = data;
              console.log(this.solicitudes);
          });
      });
    }
    this.loading = false;
  }
}
