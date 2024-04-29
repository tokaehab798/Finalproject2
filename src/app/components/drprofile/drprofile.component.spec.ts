import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrprofileComponent } from './drprofile.component';

describe('DrprofileComponent', () => {
  let component: DrprofileComponent;
  let fixture: ComponentFixture<DrprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrprofileComponent]
    });
    fixture = TestBed.createComponent(DrprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
