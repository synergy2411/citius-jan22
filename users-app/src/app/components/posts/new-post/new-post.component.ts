import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/model/post';
import { v4 } from 'uuid';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor() { }
  @Output() postEvent = new EventEmitter<Post>()

  ngOnInit(): void {
  }

  onAddNewPost(event : Event ,postForm : NgForm){
    event.preventDefault();
    const post : Post = {
      title : postForm.value.title,
      body : postForm.value.body,
      id : v4(),
      published : false
    }
    this.postEvent.emit(post)
  }
}
