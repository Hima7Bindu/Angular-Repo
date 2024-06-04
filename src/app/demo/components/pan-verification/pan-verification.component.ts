import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PanVerificationService } from './pan-verification.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-pan-verification',
  templateUrl: './pan-verification.component.html',
  styleUrls: ['./pan-verification.component.scss']
})
export class PanVerificationComponent {
  panForm: FormGroup;
  msgs: any[] = [];

  constructor(
    private fb: FormBuilder,
    private panVerificationService: PanVerificationService,
    private msgService: MessageService
  ) {
    this.panForm = this.fb.group({
      pan: ['', [Validators.required, Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')]]
    });
  }

  verifyPan() {
    console.log('Form Submitted');
    if (this.panForm.invalid) {
      console.log('Form is invalid:', this.panForm.errors);
      this.msgs = [];
      this.msgs.push({ severity: 'warn', summary: 'Warning', detail: 'Please enter a valid PAN number.' });
      return;
    }

    const pan = this.panForm.value.pan;
    console.log('PAN:', pan);
    this.panVerificationService.verifyPan(pan).subscribe(
      (isValid: boolean) => {
        console.log('PAN is valid:', isValid);
        this.msgs = [];
        if (isValid) {
          this.msgs.push({ severity: 'success', summary: 'Success', detail: 'PAN is valid.' });
        } else {
          this.msgs.push({ severity: 'error', summary: 'Error', detail: 'PAN is invalid.' });
        }
      },
      (error: any) => {
        console.error('Verification failed:', error);
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Error', detail: 'Verification failed. Please try again later.' });
      }
    );
  }

}
