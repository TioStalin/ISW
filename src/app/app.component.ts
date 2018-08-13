import { Component, DoCheck } from '@angular/core';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  title = 'app';
  public login = false;
  public cargo: number;
  constructor(private loginService:LoginService){
  }
  ngDoCheck(){
    var data = this.loginService.estarLogin();
    if(data != null){
      this.login = true;
      this.cargo = data.cargo;
    }
  }
  salir(){
    this.loginService.logout();
    this.login = false;
  }
}
