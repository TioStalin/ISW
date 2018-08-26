import { Component, OnInit } from '@angular/core';
import { SolicitarService } from '../service/solicitar.service';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitar',
  templateUrl: './solicitar.component.html',
  styleUrls: ['./solicitar.component.css']
})
export class SolicitarComponent implements OnInit {

  private loading: boolean = false;
  private model: any = [];
  private cargo: number;
  private text: any = "";
  private bc: any;
  private d: any = new Date();

  constructor(public loginService: LoginService,
              private router: Router,
              private solicitarService: SolicitarService) {
                this.d.setMonth(this.d.getMonth() + 1);
  }

  ngOnInit(){
    var data = this.loginService.estarLogin();
    if(data == null){
      this.router.navigate(['./home']);
    }
    this.cargo = data.cargo;
    this.model.id = data.id;
  }

  solicitar(){
    if(this.model.cantidad <= 0){
      alert('La cantidad tiene errores');
    }
    else if(this.model.nombre == ''){
      alert('Material no tiene nombre');
    }
    else if(this.model.descripcion == ''){
      alert('Material no contiene detalles');
    }
    else{
      this.solicitarService.encontrarBC(this.model.id)
        .map(res => res.json())
        .subscribe(data => {
          this.model.date = this.d.getDate()+ "/" + this.d.getMonth() + "/" + this.d.getFullYear();
          this.model.id_bc = data['0'].bc_id;
          this.model.id_bo = data['0'].id_bodeguero_obra;
          this.solicitarService.solicitarMaterial(this.model)
            .subscribe(data => {
                  this.text = data.text();
            });
      });
   }

 }
}
