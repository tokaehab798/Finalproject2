import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsuccessstoryComponent } from './adminsuccessstory.component';

describe('AdminsuccessstoryComponent', () => {
  let component: AdminsuccessstoryComponent;
  let fixture: ComponentFixture<AdminsuccessstoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminsuccessstoryComponent]
    });
    fixture = TestBed.createComponent(AdminsuccessstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
