import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginRequest } from '../../models/login-request.model';
import { User } from '../../models/user.model';
import { USER_DATA_MOCK } from '../../mocks/user-data-mock';
import { LoginConfig } from '../../models/login-config.model';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroArrowRightStartOnRectangle } from '@ng-icons/heroicons/outline';
import { bootstrapHexagonHalf } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, NgIcon, RouterLink],
  templateUrl: './template/login-page.html',
  styleUrl: './login-page.scss',
  viewProviders: [provideIcons({ heroArrowRightStartOnRectangle, bootstrapHexagonHalf })],
})
export class LoginPage {
  public loginForm: FormGroup;
  private authenticatedUser!: User;

  public loginConfig: LoginConfig = {
    title: 'Hello Again !',
    emailPlaceholder: 'The email is required.',
    passwordPlaceholder: 'The password is required.',
    submitButtonLabel: 'Sign In',
    emailLabel: 'Email',
    passwordLabel: 'Password',
    registerLinkLabel: 'Sign Up',
  };

  constructor(
    private formBuilder: FormBuilder,
    /*private authService: AuthService,*/
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get email() {
    return this.loginForm.get('email')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const request: LoginRequest = this.getRequest();
      this.onSuccess(USER_DATA_MOCK);
      /*this.authService.login(request).subscribe({
        next: (user: User) => this.onSuccess(user),
        error: (err) => console.error('Error al iniciar sesión:', err),
      });*/
    }
  }

  private getRequest(): LoginRequest {
    const { email, password } = this.loginForm.value;
    return { email: email, password: password } as LoginRequest;
  }

  private onSuccess(user: User): void {
    this.authenticatedUser = user;
    this.persistToken();
    this.redirectTo('/dashboard');
  }

  private persistToken() {
    localStorage.setItem('user', JSON.stringify(this.authenticatedUser));
  }

  private redirectTo(url: string): void {
    this.router.navigate([url]);
  }
}
