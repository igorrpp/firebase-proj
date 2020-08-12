import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosViewComponent } from './livros-view.component';

describe('LivrosViewComponent', () => {
  let component: LivrosViewComponent;
  let fixture: ComponentFixture<LivrosViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivrosViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivrosViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
