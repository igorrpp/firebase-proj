import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosDeleteComponent } from './livros-delete.component';

describe('LivrosDeleteComponent', () => {
  let component: LivrosDeleteComponent;
  let fixture: ComponentFixture<LivrosDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivrosDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivrosDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
