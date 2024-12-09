import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { CommentService } from '../comment.service';
import { CommentListComponent } from '../comment-list/comment-list.component';
import { CommentEditComponent } from '../comment-edit/comment-edit.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
  imports:[CommentListComponent,CommentEditComponent,FormsModule,CommonModule]
})
export class BlogDetailComponent implements OnInit {
  post: any;
  comments: any[] = [];
  editingComment: any = null;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private commentService: CommentService
  ) { }

  ngOnInit(): void {
    const postId:any = this.route.snapshot.paramMap.get('id');
    this.blogService.getPost(postId).subscribe((data: any) => {
      this.post = data;
    });
    this.commentService.getComments(postId).subscribe((data: any[]) => {
      this.comments = data;
    });
  }

  editComment(comment: any): void {
    this.editingComment = comment;
  }

  cancelEdit(): void {
    this.editingComment = null;
  }
}