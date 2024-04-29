import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsuccessstoriesComponent } from './adminsuccessstories.component';

describe('AdminsuccessstoriesComponent', () => {
  let component: AdminsuccessstoriesComponent;
  let fixture: ComponentFixture<AdminsuccessstoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminsuccessstoriesComponent]
    });
    fixture = TestBed.createComponent(AdminsuccessstoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
