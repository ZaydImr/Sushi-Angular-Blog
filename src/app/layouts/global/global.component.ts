import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-global',
  standalone: true,
  imports: [],
  templateUrl: './global.component.html',
  styleUrl: './global.component.scss'
})
export class GlobalComponent{

  constructor(private authSrv : AuthService) {

  }

  logout(): void {
    this.authSrv.logout().then();
  }

}
