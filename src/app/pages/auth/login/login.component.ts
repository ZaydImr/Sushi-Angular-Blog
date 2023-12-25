import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { AuthService } from '../../../services/auth.service';
import { HelperService } from '../../../services/helper.service';
import { getAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  isFormSubmited = false;
  errMessage!: string;

  constructor(private authSrv: AuthService, private helper: HelperService, private router: Router) {
    console.log(getAuth());

  }

  public getFormControlError(controlName: string, label?: string): string {
    return this.helper.getFormControlError(this.loginForm, controlName, this.isFormSubmited, label);
  }

  public login(): void {
    this.isFormSubmited = true;
    if (this.loginForm.valid) {
      this.authSrv.login(this.loginForm.controls.email.value || '', this.loginForm.controls.password.value || '')
        .then(res => {
          this.router.navigate(['/']);
        })
        .catch(err => {
          this.errMessage = this.helper.convertMessage(err.code);
        });
      this.isFormSubmited = false;
    }
  }

  public loginWithGoogle(): void {
    this.authSrv.loginWithPopup()
      .then(res => {
        this.router.navigate(['/']);
      })
      .catch(err => {
        this.errMessage = this.helper.convertMessage(err.code);
      });
  }

  public loginWithFacebook(): void {
    this.authSrv.loginWithPopup('fb')
      .then(res => {
        this.router.navigate(['/']);
      })
      .catch(err => {
        this.errMessage = this.helper.convertMessage(err.code);
      });
  }

}
