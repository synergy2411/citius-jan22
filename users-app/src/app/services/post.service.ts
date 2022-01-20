import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts = []
  private baseURL : string =  "http://localhost:3000";

  constructor(private http : HttpClient) { }

  getPosts() : Observable<Post[]>{
    return this.http.get<Post[]>(`${this.baseURL}/posts`)
  }

  createPost(post : Post){
    this.posts.push(post);
  }


}
