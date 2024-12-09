import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.scss'],
  imports:[CommonModule,FormsModule]
})
export class CommentEditComponent implements OnInit {
  @Input() comment: any;
  updatedComment: any = {};

  constructor(private commentService: CommentService, private router: Router) { }

  ngOnInit(): void {
    this.updatedComment = { ...this.comment };
  }

  updateComment(): void {
    this.commentService.updateComment(this.updatedComment).subscribe(() => {
      this.router.navigate(['/post', this.comment.postId]);
    });
  }
}