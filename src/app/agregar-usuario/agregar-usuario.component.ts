import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {
  private logueado: boolean;
  private loading: boolean = false;
  private model: any = [];

  constructor(private user: UsuarioService) { }

  ngOnInit() {
  }

  crearUsuario(){
    this.loading = true
    this.user.crear(this.model).subscribe();
    this.loading = false;
  }
}
