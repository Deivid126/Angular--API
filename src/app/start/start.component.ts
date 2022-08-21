import { HttpClient } from '@angular/common/http';
import { LiteralMapExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ListausuarioService } from '../listausuario.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {

  
  usuariosUrl = 'http://localhost:8080/usuarios'
  constructor(private  usernew: ListausuarioService) {
   }

  

  

  getUser(data:{nome:string, email:string, senha:string, telefone:string}){

    this.usernew.SalvarUsuario(data);

  }

}
