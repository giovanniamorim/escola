import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InstituicoesListaComponent } from "./instituicoes-lista/instituicoes-lista.component";
import {MatCardModule} from '@angular/material/card'; 

const routesInstituicoes: Routes = [
    { path: 'instituicoes', component: InstituicoesListaComponent }
]

@NgModule({
    imports: [CommonModule, MatCardModule, RouterModule.forChild(routesInstituicoes)],
    exports: [RouterModule]
})
export class InstituicoesRoutingModule {}