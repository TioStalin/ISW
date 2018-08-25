import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: string;
  public pass: string;

  constructor(public loginService:LoginService, private router:Router) {

  }

  obtenerUsuario(){
    this.loginService.acceder(this.user, this.pass).subscribe(
      response => {
        if(response[0] != null){
          localStorage.setItem('usuario', JSON.stringify({ nombre: response[0].Nombre, mail: response[0].Mail, cargo: response[0].Cargo, id: response[0].id_usuario}));
          this.router.navigate(['./home']);
        }
        else{
          alert("Hay un problema en uno de los campos");
        }
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

  ngOnInit(){
    var data = this.loginService.estarLogin();
    if(data != null){
      this.router.navigate(['./home']);
    }
  }
}
