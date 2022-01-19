import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { CounterService } from 'src/app/services/counter.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector : "app-users",
  templateUrl : `./users.component.html`,
  styleUrls : [`./users.component.css`],
  encapsulation : ViewEncapsulation.Emulated,
  providers :   [ CounterService ]
})
export class UsersComponent implements OnInit{
  users : User[];

  constructor(
    private userService : UserService,
    private counterService : CounterService
    ){}

    getCounter(){
      return this.counterService.counter;
    }

  ngOnInit(): void {
    this.users = this.userService.getUserData()
  }

  onMoreInfo(lastName : string, company : string){
    alert(`Mr. ${lastName} is working with ${company}`)
  }
}
