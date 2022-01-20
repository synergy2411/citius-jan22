import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment'
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseURL : string;

  constructor(private http : HttpClient) {
    this.baseURL = environment.JSONServerURL;
  }

  getPosts() : Observable<Post[]>{
    return this.http.get<Post[]>(`${this.baseURL}/post`)
      .pipe(catchError(err => {
        // Handle the error
        return throwError(err)
      }))
  }

  createPost(post : Post) : Observable<any>{
    return this.http.post(`${this.baseURL}/posts`, post)
  }

  deletePost(id: string){
    return this.http.delete(`${this.baseURL}/posts/${id}`)
  }

  editPost(id : string, body : string, published : boolean){
    return this.http.patch(`${this.baseURL}/posts/${id}`,{body, published})
  }

}
