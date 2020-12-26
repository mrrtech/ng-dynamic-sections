import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionStepsComponent } from './action-steps.component';

describe('ActionStepsComponent', () => {
  let component: ActionStepsComponent;
  let fixture: ComponentFixture<ActionStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionStepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
