import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { SolicitudesMaterialService } from '../service/solicitudes-material.service';
import { BodegaService } from '../service/bodega.service';
import { ObraService } from '../service/obra.service';

@Component({
  selector: 'app-solicitudes-material',
  templateUrl: './solicitudes-material.component.html',
  styleUrls: ['./solicitudes-material.component.css']
})
export class SolicitudesMaterialComponent implements OnInit {

  private solicitudes: any;
  private asignar: any = [];

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
        this.solicitudesMaterial.encontrarSolicitudes(data['0'].id_bodeguero_central)
          .map(res => res.json())
          .subscribe(data => {
            this.solicitudes = data;
            console.log(this.solicitudes);
          });
      });
  }

  asignarMaterial(){
    console.log(this.asignar);
  }
}
