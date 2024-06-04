import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualifyingFormComponent } from './qualifying-form.component';

describe('QualifyingFormComponent', () => {
  let component: QualifyingFormComponent;
  let fixture: ComponentFixture<QualifyingFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QualifyingFormComponent]
    });
    fixture = TestBed.createComponent(QualifyingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
