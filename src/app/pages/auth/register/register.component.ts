import { Component } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { HelperService } from '@services/helper.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  isFormSubmited = false;

  constructor(private authSrv: AuthService, private helper: HelperService) {
  }

  public getFormControlError(controlName: string, label?: string): string {
    return this.helper.getFormControlError(this.loginForm, controlName, this.isFormSubmited, label);
  }

  public login(): void {
    this.isFormSubmited = true;
    if (this.loginForm.valid) {
      this.authSrv.login(this.loginForm.controls.email.value || '', this.loginForm.controls.password.value || '')
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      this.isFormSubmited = false;
    }
  }

  public loginWithGoogle(): void {

  }

  public loginWithFacebook(): void {
    
  }

}
