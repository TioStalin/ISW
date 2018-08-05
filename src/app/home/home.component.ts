import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public login:boolean
  public nombre:string
  public cargo:number
  public mail:string

  constructor(private loginService:LoginService){
  }
  ngOnInit(){
    var data = this.loginService.estarLogin();
    if(data != null){
      this.login = true;
      this.nombre = data.nombre;
      this.cargo = data.cargo;
      this.mail = data.mail;
    }
  }

}
