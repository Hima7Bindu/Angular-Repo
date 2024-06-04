import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-qualifying-form',
  templateUrl: './qualifying-form.component.html',
  styleUrls: ['./qualifying-form.component.scss']
})
export class QualifyingFormComponent {
  form: FormGroup;
    submitted = false;
  
    constructor(private fb: FormBuilder) {
      this.form = this.fb.group({
        cibil: ['', [Validators.required, this.cibilScoreValidator]],
        modeOfSalary: ['', [Validators.required, this.modeOfSalaryValidator]],
        netSalary: ['', [Validators.required, this.netSalaryValidator]], 
        existingEmi: ['', [Validators.required]],
        doj: ['', [Validators.required]],
        pincode: ['', [Validators.required]]
      });
    }
  
    ngOnInit(): void {}
  
    onSubmit(): void {
      this.submitted = true;
  
      if (this.form.valid) {
        // Process the form data
        console.log(this.form.value);
      } else {
        // Handle invalid form
        console.log('Form is invalid');
      }
    }
  
    cibilScoreValidator(control) {
      if (control.value < 680) {
        return { cibilScore: true };
      }
      return null;
    }
  
    modeOfSalaryValidator(control) {
      if (control.value.toLowerCase() !== 'bank') {
        return { modeOfSalary: true };
      }
      return null;
    }

    netSalaryValidator(control) {
      const netSalary = control.value;
      const existingEmi = control.parent ? control.parent.get('existingEmi').value : null;
    
      if (netSalary < 15000 || (existingEmi && netSalary <= existingEmi)) {
        return { netSalary: true };
      }
      
      return null;
    }
  }



