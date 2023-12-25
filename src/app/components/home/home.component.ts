import { Component } from '@angular/core';
import { GenericService } from '../../services/generic.service';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private postSrv: GenericService<Post>){
    this.postSrv.setType('posts');
    this.postSrv.getAll().subscribe({
      next(value) {
        console.log(value, value[0].title);
      },
    });
  }
}
