import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss'],
  imports:[CommonModule,FormsModule]
})
export class CommentListComponent implements OnInit {
  @Input() comments: any[] = [];
  @Output() edit = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void { }

  editComment(comment: any): void {
    this.edit.emit(comment);
  }
}