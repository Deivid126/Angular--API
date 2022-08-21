import { Component, OnInit } from '@angular/core';
import { ListausuarioService} from '../listausuario.service';

@Component({
  selector: 'app-listausuario',
  templateUrl: './listausuario.component.html',
  styleUrls: ['./listausuario.component.css']
})
export class ListausuarioComponent implements OnInit {

  contatos?: Array<any>;

  constructor(private listausuarioService : ListausuarioService) { }

  ngOnInit() {

    this.listar();

  }

  listar (){
    this.listausuarioService.listar().subscribe(dados => this.contatos = dados);

  }

}
