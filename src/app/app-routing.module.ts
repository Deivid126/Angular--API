import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListausuarioComponent } from './listausuario/listausuario.component';
import { StartComponent } from './start/start.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  
  {
    path: "Home",
    component:StartComponent 
  },
 
  {
    path: "Lista-Usuarios",
    component: ListausuarioComponent

  },
  {
    path: "Editar-Usuario",
    component:UsuarioComponent
  },
  {
    path: "",
    component:HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
