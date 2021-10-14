import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CURSOS } from './curso.mock';
import { ICurso } from './curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor() { }

  getCursos(): Observable<ICurso[]> {
    const cursos = of(CURSOS);
    return cursos;
  }
}
