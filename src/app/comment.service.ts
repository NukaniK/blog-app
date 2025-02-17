import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getComments(postId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/posts/${postId}/comments`);
  }

  createComment(comment: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/comments`, comment);
  }
  updateComment(comment: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/comments/${comment.id}`, comment);
  }
}