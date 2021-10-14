import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoListaComponent } from './curso-lista/curso-lista.component';

const cursoRoutes: Routes = [
  { path: 'cursos', component: CursoListaComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(cursoRoutes)],
  exports: [RouterModule]
})
export class CursoRoutingModule { }
