import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  constructor(public loginService:LoginService, private router:Router) { }

  ngOnInit(){
    var data = this.loginService.estarLogin();
    if(data == null){
      this.router.navigate(['./home']);
    }
    else if(data != null && data.cargo != 1){
      this.router.navigate(['./home']);
    }
  }

}
