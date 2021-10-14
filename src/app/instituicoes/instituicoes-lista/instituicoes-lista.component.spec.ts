import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituicoesListaComponent } from './instituicoes-lista.component';

describe('InstituicoesListaComponent', () => {
  let component: InstituicoesListaComponent;
  let fixture: ComponentFixture<InstituicoesListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituicoesListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituicoesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
