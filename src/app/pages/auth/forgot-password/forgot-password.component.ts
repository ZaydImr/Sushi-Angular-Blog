import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { HelperService } from '@services/helper.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {

  forgotForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  isFormSubmited = false;

  constructor(private authSrv: AuthService, private helper: HelperService) {
  }

  public getFormControlError(controlName: string, label?: string): string {
    return this.helper.getFormControlError(this.forgotForm, controlName, this.isFormSubmited, label);
  }

  public forgotPassword(): void {
    this.isFormSubmited = true;
    if (this.forgotForm.valid) {
      this.authSrv.forgotPassword(this.forgotForm.controls.email.value || '')
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      this.isFormSubmited = false;
    }
  }

}
