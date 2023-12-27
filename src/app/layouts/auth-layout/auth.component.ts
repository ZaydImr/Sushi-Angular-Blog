import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnInit {

  constructor(private router: Router, private authSrv: AuthService) { }

  async ngOnInit(): Promise<void> {
    this.authSrv.authenticated.subscribe((loggedIn) => {
      if (loggedIn) {
        this.router.navigate(['/']);
      }
    });
  }

}