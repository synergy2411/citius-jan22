import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Comment } from 'src/app/model/comment.model';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  comment : Comment = {author : "", body : "", stars : 0};
  @Output() addCommentEvent = new EventEmitter<Comment>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddComment(){
    console.log(this.comment)
    this.addCommentEvent.emit(this.comment);
  }

}
