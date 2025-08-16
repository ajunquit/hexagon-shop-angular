import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterRequest } from '../../models/register-request.model';
import { RegisterConfig } from '../../models/register-config.model';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './template/register-page.html',
  styleUrl: './register-page.scss',
})
export class RegisterPage {
  public registerForm: FormGroup;

  public registerConfig: RegisterConfig = {
    title: 'Register',
    userNamelabel: 'Username',
    emailLabel: 'Email',
    passwordLabel: 'Password',
    confirmPasswordLabel: 'Confirm Password',
    submitButtonLabel: 'Register',
    userNameValidation: 'Username is required',
    emailValidation: 'Enter a valid email address',
    passwordValidation: 'Password is required',
    confirmPasswordValidation: 'The passwords do not match',
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

  private passwordsMatch(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const { username, email, password } = this.registerForm.value;
      const request: RegisterRequest = { username, email, password };

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
