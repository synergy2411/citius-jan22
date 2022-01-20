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
  selectedPost : Post;

  constructor(private postService : PostService) { }

  ngOnInit(): void {
    this.getPosts()
  }

  private getPosts(){
    this.postService.getPosts()
      .subscribe({
        next : posts => this.posts = posts,
        error : err => {throw err},
        complete :  () => console.log("COMPLETED")
      })

  }

  onAddNewPost(newPost : Post){
    this.postService.createPost(newPost)
      .subscribe(response => {
        this.getPosts();
        this.showNewPost = false;
      })
  }

  onPostSelect(post :Post){
    this.selectedPost = post;
  }

}
