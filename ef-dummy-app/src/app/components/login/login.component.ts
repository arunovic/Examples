import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('kminchelle', Validators.required),
      password: new FormControl('0lelplR', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  get username() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    console.log(this.loginForm.valid)
    console.log(this.loginForm.value)

    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (res: any) => {
          this.authService.setToken(res.token);
          this.router.navigate(['/products']);
        },
        error: (err) => {
          console.error(err);
          alert(err.error.message)
        }
      });
    }
  }
}
