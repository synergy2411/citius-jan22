import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { USER_DATA } from '../../model/mocks';

@Component({
  selector : "app-users",
  templateUrl : `./users.component.html`,
  styleUrls : [`./users.component.css`],
  encapsulation : ViewEncapsulation.Emulated
})
export class UsersComponent implements OnInit{
  user : User;

  constructor(){}

  ngOnInit(): void {
      this.user = USER_DATA;
  }

  onMoreInfo(lastName : string, company : string){
    alert(`Mr. ${lastName} is working with ${company}`)
  }
}
