import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {
  private loading: boolean = false;
  private model: any = [];
  private text: any = "";

  constructor(public loginService: LoginService,
              private router: Router,
              private user: UsuarioService) { }

  ngOnInit(){
    var data = this.loginService.estarLogin();
    if(data == null){
      this.router.navigate(['./home']);
    }
    else if(data != null && data.cargo != 1){
      this.router.navigate(['./home']);
    }
  }

  crearUsuario(){
    this.loading = true
    this.user.crear(this.model).subscribe(data => this.text = data.text());
    this.loading = false;
  }
}
