import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeetypeComponent } from './employeetype.component';

describe('EmployeetypeComponent', () => {
  let component: EmployeetypeComponent;
  let fixture: ComponentFixture<EmployeetypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeetypeComponent]
    });
    fixture = TestBed.createComponent(EmployeetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
