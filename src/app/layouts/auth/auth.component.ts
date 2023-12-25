import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements AfterViewInit {

  constructor(private router: Router){}

  ngAfterViewInit(): void {
    console.log(getAuth().currentUser?.displayName);
    
    if(getAuth().currentUser){
      this.router.navigate(['/']);
    }
  } 

}