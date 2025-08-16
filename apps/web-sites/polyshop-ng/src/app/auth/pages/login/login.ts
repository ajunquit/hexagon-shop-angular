import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from '../../models/login-request.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  public loginForm: FormGroup;
  private authenticatedUser!: User;

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
