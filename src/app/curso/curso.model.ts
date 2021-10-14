import { IInstituicao } from "../instituicoes/instituicao.model";

export interface ICurso {
    id: number,
    nome: string,
    instituicoesOfertadas: IInstituicao[]
}