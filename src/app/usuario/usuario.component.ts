import { Component, OnInit } from '@angular/core';
import { ListausuarioService } from '../listausuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor( private modificar: ListausuarioService) { }

  ngOnInit(): void {
  }


  deleteUser(dados:any){
    this.modificar.ApagarUsuario(dados);
  }

}
