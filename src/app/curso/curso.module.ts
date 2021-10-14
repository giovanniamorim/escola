import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoRoutingModule } from './curso-routing.module';
import { CursoListaComponent } from './curso-lista/curso-lista.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CursoListaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CursoRoutingModule
  ]
})
export class CursoModule { }
