import { Component, OnInit } from '@angular/core';
import { SolicitarcompraService } from '../service/solicitarcompra.service';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitarcompra',
  templateUrl: './solicitarcompra.component.html',
  styleUrls: ['./solicitarcompra.component.css']
})
export class SolicitarcompraComponent implements OnInit {

  private loading: boolean = false;
  private model: any = [];
  private cargo: number;
  private text: any = "";
  private ec: any;
  private d: any = new Date();

  constructor(public loginService: LoginService,
              private router: Router,
              private solicitarcompraService: SolicitarcompraService) {
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

  solicitarcompra(){
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
      this.solicitarcompraService.encontrarBC2(this.model.id)
        .map(res => res.json())
        .subscribe(data => {
          this.model.date = this.d.getDate()+ "/" + this.d.getMonth() + "/" + this.d.getFullYear();
          console.log(data['0'])
          this.model.id_bc = data['0'].id_bodeguero_central;
          this.realizarCompra();



      });
   }

  }

  realizarCompra(){
    this.solicitarcompraService.encontrarEC(this.model.id)
    .map(res => res.json())
    .subscribe(data => {
    console.log(data['0'])
    this.model.id_ec = data['0'].id_encargado_compra;
    this.solicitarcompraService.solicitarCompra(this.model)
    .subscribe(data => {
          this.text = data.text();
    });
    });

}

}
