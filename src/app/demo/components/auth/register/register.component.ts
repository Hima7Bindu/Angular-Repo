import { Component } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {

  form: any = {
    username: null,
    email: null,
    password: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  showPassword: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) { }





  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    const { username, email, password } = this.form;

    this.authService.register(username, email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.router.navigate(['/dashboard']);
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message || 'Signup failed. Please check your information and try again.';

        // Add error message using PrimeNG's MessageService
        this.messageService.add({severity:'error', summary:'Error', detail: this.errorMessage});

        this.isSignUpFailed = true;
      }
    });
  }
}
