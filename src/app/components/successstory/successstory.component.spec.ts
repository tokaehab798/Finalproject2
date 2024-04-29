import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessstoryComponent } from './successstory.component';

describe('SuccessstoryComponent', () => {
  let component: SuccessstoryComponent;
  let fixture: ComponentFixture<SuccessstoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessstoryComponent]
    });
    fixture = TestBed.createComponent(SuccessstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
