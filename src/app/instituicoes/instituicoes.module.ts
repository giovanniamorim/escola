import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstituicoesListaComponent } from './instituicoes-lista/instituicoes-lista.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table'; 



@NgModule({
  declarations: [
    InstituicoesListaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatTableModule
  ]
})
export class InstituicoesModule { }
