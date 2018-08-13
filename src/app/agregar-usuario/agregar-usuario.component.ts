import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {
  public logueado: boolean;
  public nombre: string = '';
  public apellido: string = '';
  public descripcion: string = '';
  public pass: string = '';
  public cargo: number;

  constructor() { }

  ngOnInit() {
  }

}
