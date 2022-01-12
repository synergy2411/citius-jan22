import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
  @Input()
   user : any;

   changeUserVotes(event : {target : HTMLInputElement}){
     this.user = event.target.value
   }
}
