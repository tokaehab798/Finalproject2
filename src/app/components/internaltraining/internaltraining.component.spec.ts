import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternaltrainingComponent } from './internaltraining.component';

describe('InternaltrainingComponent', () => {
  let component: InternaltrainingComponent;
  let fixture: ComponentFixture<InternaltrainingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternaltrainingComponent]
    });
    fixture = TestBed.createComponent(InternaltrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
