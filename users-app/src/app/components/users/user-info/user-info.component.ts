import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/model/comment.model';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
  @Input()
   user : User;

   tab : number = 0;

   changeUserVotes(event : {target : HTMLInputElement}){
     this.user.votes = Number(event.target.value)
   }

   onAddNewComment(comment : Comment){
     this.user.comments.push(comment);
     this.tab = 1;
   }
}
