import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentmembersComponent } from './departmentmembers.component';

describe('DepartmentmembersComponent', () => {
  let component: DepartmentmembersComponent;
  let fixture: ComponentFixture<DepartmentmembersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentmembersComponent]
    });
    fixture = TestBed.createComponent(DepartmentmembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
