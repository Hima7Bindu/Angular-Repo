import { Component, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { StorageService } from '.././../../service/storage.service';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Password } from 'primeng/password';
import { FormGroup } from '@angular/forms';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None 
  
})
export class LoginComponent {
  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];
  showPassword = false; 
  resetPasswordPopupVisible: boolean = false;
  value!: string;
  otpValue: string;
  formGroup: FormGroup;
  submitted = false;



  openForgotPasswordDialog() {
    this.resetPasswordPopupVisible = true;
    document.body.classList.add('blur-background'); // Add blur to the background
  }

  closeDialog() {
    this.resetPasswordPopupVisible = false;
    document.body.classList.remove('blur-background'); // Remove blur from the background
  }

  @ViewChild('password') password: Password;
  @ViewChild('slashIcon') slashIcon: ElementRef;

  constructor( 
    private authService: AuthService, 
    private storageService: StorageService,
    private router: Router,
    private messageService: MessageService
  ) { }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
}

resendCode(): void {
  // Implement logic to resend OTP code
  console.log('Resend code');
}

submitCode(): void {
  // Implement logic to submit OTP code
  console.log('Submit code:', this.otpValue);
}



  onSubmit(): void {
    const { email, password } = this.form;

    this.authService.login(email, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.messageService.add({severity:'success', summary:'Success', detail:'You have successfully logged in.'});
        this.roles = this.storageService.getUser().roles;
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 3000);
      },
      error: err => {
        this.isLoggedIn = false;
        this.isLoginFailed = true;
        let errorMessage = 'Login failed. Please check your email and password and try again.';

        if (err.error && err.error.message) {
          errorMessage = `Login failed. ${err.error.message}`;
        }

        this.messageService.add({severity:'error', summary:'Error', detail: errorMessage});
      }
    });
  }
}
