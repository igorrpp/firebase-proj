import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosUpdateComponent } from './livros-update.component';

describe('LivrosUpdateComponent', () => {
  let component: LivrosUpdateComponent;
  let fixture: ComponentFixture<LivrosUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivrosUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivrosUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
