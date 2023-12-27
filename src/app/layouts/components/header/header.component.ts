import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;

  constructor(private authSrv: AuthService) { }

  async ngOnInit(): Promise<void> {
    this.authSrv.authenticated.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
  }

  async logout() : Promise<void> {
    await this.authSrv.logout();
  }

}
