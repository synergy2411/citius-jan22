import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts : Post[];
  showNewPost : boolean = false;

  constructor(private postService : PostService) { }

  ngOnInit(): void {
    this.getPosts()
  }

  private getPosts(){
    this.postService.getPosts()
      .subscribe(posts => {
        this.posts = posts;
      })
  }

  onAddNewPost(newPost : Post){
    this.postService.createPost(newPost)
      .subscribe(response => {
        this.getPosts();
        this.showNewPost = false;
      })
  }

}
