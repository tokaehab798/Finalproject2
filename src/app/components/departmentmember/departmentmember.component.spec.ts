import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentmemberComponent } from './departmentmember.component';

describe('DepartmentmemberComponent', () => {
  let component: DepartmentmemberComponent;
  let fixture: ComponentFixture<DepartmentmemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentmemberComponent]
    });
    fixture = TestBed.createComponent(DepartmentmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
