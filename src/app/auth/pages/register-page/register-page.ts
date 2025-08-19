import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { bootstrapHexagonHalf } from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { RegisterConfig } from '../../models/register-config.model';
import { RegisterRequest } from '../../models/register-request.model';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, NgIcon, RouterLink],
  templateUrl: './template/register-page.html',
  styleUrl: './register-page.scss',
  viewProviders: [provideIcons({ bootstrapHexagonHalf })],
})
export class RegisterPage {
  public registerForm: FormGroup;

  public registerConfig: RegisterConfig = {
    title: 'Sign Up !',
    userNamelabel: 'Username',
    emailLabel: 'Email',
    passwordLabel: 'Password',
    confirmPasswordLabel: 'Confirm Password',
    submitButtonLabel: 'Sign Up',
    userNameValidation: 'Username is required',
    emailValidation: 'Enter a valid email address',
    passwordValidation: 'Password is required',
    confirmPasswordValidation: 'The passwords do not match',
    acceptTermsLabel: 'I accept the terms and conditions',
  };

  constructor(
    private formBuilder: FormBuilder,
    /*private authService: AuthService,*/
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group(
      {
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
      },
      { validators: this.passwordsMatch }
    );
  }

  get username() {
    return this.registerForm.get('username')!;
  }

  get email() {
    return this.registerForm.get('email')!;
  }

  get password() {
    return this.registerForm.get('password')!;
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword')!;
  }

  get passwordsMatchValid(): boolean {
    return this.registerForm.errors?.['passwordMismatch'];
  }

  get acceptTerms() {
    return this.registerForm.get('acceptTerms')!;
  }

  private passwordsMatch(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onSubmit() {
    if (this.registerForm.valid && this.acceptTerms.value) {
      const { username, email, password } = this.registerForm.value;
      const request: RegisterRequest = { username, email, password };
      console.log('Register Request:', request);
      // this.authService.register(request).subscribe({
      //   next: (user: User) => {
      //     this.router.navigate(['/login']);
      //   },
      //   error: (err) => {
      //     console.error('Error al registrar:', err);
      //   },
      // });
    }
  }
}
