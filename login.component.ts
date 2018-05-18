import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: string;
  public pass: string;

  constructor(private router:Router) {

  }

  obtenerUsuario(){
    console.log(this.user)
    console.log(this.pass)
    // Confirmar la existencia del usuario
    this.router.navigate(['./home'])
  }

  ngOnInit() {
  }
}
