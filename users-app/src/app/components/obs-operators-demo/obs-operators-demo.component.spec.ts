import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsOperatorsDemoComponent } from './obs-operators-demo.component';

describe('ObsOperatorsDemoComponent', () => {
  let component: ObsOperatorsDemoComponent;
  let fixture: ComponentFixture<ObsOperatorsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObsOperatorsDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsOperatorsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
