import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CursoModule } from './curso/curso.module';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InstituicoesRoutingModule } from './instituicoes/instituicoes-routing.module';
import { InstituicoesModule } from './instituicoes/instituicoes.module';


@NgModule({
  declarations: [
    AppComponent, DashboardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    CursoModule,
    InstituicoesModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InstituicoesRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
