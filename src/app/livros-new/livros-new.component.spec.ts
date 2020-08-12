import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosNewComponent } from './livros-new.component';

describe('LivrosNewComponent', () => {
  let component: LivrosNewComponent;
  let fixture: ComponentFixture<LivrosNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivrosNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivrosNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
