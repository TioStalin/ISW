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
  private id: any;
  private bc: any;

  constructor(public loginService: LoginService,
              private router: Router,
              private solicitarService: SolicitarService) { }

  ngOnInit(){
    var data = this.loginService.estarLogin();
    if(data == null){
      this.router.navigate(['./home']);
    }
    this.cargo = data.cargo;
    this.id = data.id;
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
      this.solicitarService.encontrarBC(this.id)
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          this.model.id_bc = data['0'].bc_id;
          console.log(this.model.id_bc);
      });

    }
  }

}
