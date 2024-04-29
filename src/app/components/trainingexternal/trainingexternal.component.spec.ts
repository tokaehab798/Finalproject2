import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingexternalComponent } from './trainingexternal.component';

describe('TrainingexternalComponent', () => {
  let component: TrainingexternalComponent;
  let fixture: ComponentFixture<TrainingexternalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingexternalComponent]
    });
    fixture = TestBed.createComponent(TrainingexternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
