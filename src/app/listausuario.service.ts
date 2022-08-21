import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { LiteralMapExpr } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class ListausuarioService {

  usuariosUrl = 'http://localhost:8080/usuarios'
  constructor(private http: HttpClient) { }

  listar () {

    return this.http.get<any[]>("http://localhost:8080/usuarios");

  }

  SalvarUsuario(data:any){
    return this.http.post(this.usuariosUrl,data).subscribe(res => console.log(res));  
  
  }

  
  ApagarUsuario(dados:any){
      let id = dados.id;
     let urlnew = "http://localhost:8080/usuarios/".concat(id);
     console.log(id);
    return this.http.delete(urlnew).subscribe(res => console.log(res));
  }
 
}
