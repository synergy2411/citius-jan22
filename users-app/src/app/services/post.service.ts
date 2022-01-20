import { Injectable } from '@angular/core';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts =  [
    {id : '101', title : "grocery", body : "to buy the pulses", published : true},
    {id : '102', title : "shopping", body : "to buy the jeans", published : false},
    {id : '103', title : "insurance", body : "to renew car insurance", published : false},
  ]

  getPosts(){
    return [...this.posts];
  }

  createPost(post : Post){
    this.posts.push(post);
  }

  constructor() { }
}
