import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsDemoComponent } from './subjects-demo.component';

describe('SubjectsDemoComponent', () => {
  let component: SubjectsDemoComponent;
  let fixture: ComponentFixture<SubjectsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectsDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
