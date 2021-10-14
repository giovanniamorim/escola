import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IInstituicao } from "./instituicao.model";
import { INSTITUICOES } from "./instituicoes.mock";

@Injectable({
    providedIn: 'root'
})
export class InstituicoesService {

    getInstituicoes(): Observable<IInstituicao[]> {
        const instituicoes = of(INSTITUICOES)
        return instituicoes;
    }
}