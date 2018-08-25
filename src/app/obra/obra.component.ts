import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';
import { ObraService } from '../service/obra.service';
@Component({
  selector: 'app-obra',
  templateUrl: './obra.component.html',
  styleUrls: ['./obra.component.css']
})
export class ObraComponent implements OnInit {
  private loading: boolean = false;
  private model: any = [];
  private text: any = "";
  private text_asignar: any = "";
  private obras: any;
  private bodegueros: any;
  private bc: any;
  private asignar: any = [];

  constructor(public loginService: LoginService,
              private router: Router,
              private obrita: ObraService,
              private userService: UsuarioService) { }

  ngOnInit(){
    var data = this.loginService.estarLogin();
    if(data == null){
      this.router.navigate(['./home']);
    }
    else if(data != null && data.cargo != 1){
      this.router.navigate(['./home']);
    }
    this.obrita.obtenerObras()
      .map(res => res.json())
      .subscribe(data => {
        this.obras = data;
        console.log(this.obras);
      });
    this.userService.obtenerBodegueros()
      .map(res => res.json())
      .subscribe(data => {
        this.bodegueros = data;
        console.log(this.bodegueros);
    });
    this.obrita.obtenerBC()
      .map(res => res.json())
      .subscribe(data => {
        this.bc = data;
      });
  }

  crearObra(){
    this.loading=true;
    this.obrita.crearob(this.model).subscribe(data => this.text = data.text());
    this.obrita.obtenerObras()
      .map(res => res.json())
      .subscribe(data => {
        this.obras = data;
      });
    this.loading = false;
  }

  asignar_b(){
    this.loading=true;
    this.obrita.asignarBodeguero(this.asignar).subscribe(data => this.text_asignar = data.text());
    this.obrita.obtenerObras()
      .map(res => res.json())
      .subscribe(data => {
        this.obras = data;
      });
    this.loading = false;
  }
}
