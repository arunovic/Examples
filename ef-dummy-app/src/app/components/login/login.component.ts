import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NotificationDialogComponent } from '../dialogs/notification-dialog/notification-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading: boolean = false;

  constructor(
    private authService: AuthService, 
    private router: Router,
    public dialog: MatDialog
    ) {
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
    this.loading = true;

    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (res: any) => {
          this.authService.setToken(res.token);
          this.router.navigate(['/products']);
        },
        error: (err) => {
          console.error(err);
          this.openNotificationDialog(err.error.message);
        },
        complete: () => this.loading = false
      });
    }
  }

  openNotificationDialog(data: string): void {
    const dialogRef = this.dialog.open(NotificationDialogComponent, {
      data: data,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loading = false
    });
  }
}
