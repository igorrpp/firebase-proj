import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroImagemComponent } from './livro-imagem.component';

describe('LivroImagemComponent', () => {
  let component: LivroImagemComponent;
  let fixture: ComponentFixture<LivroImagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivroImagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroImagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
