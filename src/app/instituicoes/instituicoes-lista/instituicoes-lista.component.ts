import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import { IInstituicao } from '../instituicao.model';
import { InstituicoesService } from '../instituicoes.service';

@Component({
  selector: 'app-instituicoes-lista',
  templateUrl: './instituicoes-lista.component.html',
  styleUrls: ['./instituicoes-lista.component.css']
})
export class InstituicoesListaComponent implements OnInit {

  instituicoes: IInstituicao[] = []

  constructor(private instituicoesService: InstituicoesService) {
   }

  ngOnInit(): void {
    this.listarInstituicoes();
  }

  listarInstituicoes(): void {
    this.instituicoesService.getInstituicoes()
      .subscribe( i => {
        this.instituicoes = i
      })
  }

  
}

