import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ListausuarioComponent } from './listausuario/listausuario.component';
import {ListausuarioService} from './listausuario.service';
import {FormsModule} from '@angular/forms';
import { StartComponent } from './start/start.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsuarioComponent,
    ListausuarioComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ListausuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
