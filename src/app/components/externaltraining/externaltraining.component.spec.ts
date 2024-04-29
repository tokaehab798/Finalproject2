import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternaltrainingComponent } from './externaltraining.component';

describe('ExternaltrainingComponent', () => {
  let component: ExternaltrainingComponent;
  let fixture: ComponentFixture<ExternaltrainingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExternaltrainingComponent]
    });
    fixture = TestBed.createComponent(ExternaltrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
