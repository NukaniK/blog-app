import { Component } from '@angular/core';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  imports:[FormsModule],
  styleUrls: ['./blog-create.component.scss']
})
export class BlogCreateComponent {
  title: string = '';
  body: string = '';

  constructor(private blogService: BlogService, private router: Router) { }

  createPost(): void {
    const newPost = { title: this.title, body: this.body };
    this.blogService.createPost(newPost).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}