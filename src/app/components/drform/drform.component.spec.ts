import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrformComponent } from './drform.component';

describe('DrformComponent', () => {
  let component: DrformComponent;
  let fixture: ComponentFixture<DrformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrformComponent]
    });
    fixture = TestBed.createComponent(DrformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
