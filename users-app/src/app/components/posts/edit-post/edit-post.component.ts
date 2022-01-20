import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit {
  @Input() post: Post;
  @Output() onDeleteEvent = new EventEmitter<any>();

  constructor(private postService: PostService) {}

  ngOnInit(): void {}

  onDelete() {
    this.postService.deletePost(this.post.id).subscribe((response) => {
      this.onDeleteEvent.emit();
    });
  }

  onEdit() {
    const { id, body, published } = this.post;
    this.postService.editPost(id, body, published).subscribe((response) => {
      this.onDeleteEvent.emit();
    });
  }
}
