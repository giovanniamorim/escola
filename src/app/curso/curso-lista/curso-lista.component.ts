import { Component, OnInit } from '@angular/core';
import { ICurso } from '../curso.model';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-curso-lista',
  templateUrl: './curso-lista.component.html',
  styleUrls: ['./curso-lista.component.css']
})
export class CursoListaComponent implements OnInit {

  cursos: ICurso[] = []

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.listarCursos();
  }

  listarCursos(): void {
    this.cursoService.getCursos().subscribe(c => {
      this.cursos = c
    })
    console.log("listar cursos:" , this.cursos);
  }

}
