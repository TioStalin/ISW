import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';
import { ObraService } from '../service/obra.service';
@Component({
  selector: 'app-crearobra',
  templateUrl: './crearobra.component.html',
  styleUrls: ['./crearobra.component.css']
})
export class CrearobraComponent implements OnInit {
  private loading: boolean = false;
  private model: any = [];

  constructor(public loginService: LoginService,
              private router: Router,
              private obrita: ObraService
              ) { }

  ngOnInit(){
    var data = this.loginService.estarLogin();
    if(data == null){
      this.router.navigate(['./home']);
    }
    else if(data != null && data.cargo != 1){
      this.router.navigate(['./home']);
    }
  }

  crearObra(){
    this.loading=true;
    this.obrita.crearob(this.model).subscribe();
    this.loading = false;
  }

}
