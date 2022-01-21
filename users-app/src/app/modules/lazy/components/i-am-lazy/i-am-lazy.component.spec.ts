import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IAmLazyComponent } from './i-am-lazy.component';

describe('IAmLazyComponent', () => {
  let component: IAmLazyComponent;
  let fixture: ComponentFixture<IAmLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IAmLazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IAmLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
