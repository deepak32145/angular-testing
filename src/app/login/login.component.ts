import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private loginService: LoginService, private router: Router) {}

  async login() {
    if (!(!!this.username && !!this.password)) {
      this.errorMessage = 'Please fill all fields';
      return;
    }

    try {
      const result = await this.loginService.login({
        username: this.username,
        password: this.password,
      });
      if (result) {
        this.router.navigateByUrl('/home');
      } else {
        this.errorMessage = 'Invalid Login';
      }
    } catch (err) {
      this.errorMessage = 'Login Failed';
    }
  }
}
