import { Component, ViewEncapsulation } from '@angular/core';


@Component({
  selector : "app-users",
  templateUrl : `./users.component.html`,
  styleUrls : [`./users.component.css`],
  encapsulation : ViewEncapsulation.Emulated
})
export class UsersComponent{
  user = {
    firstName : "bill",
    lastName : "gates",
    dob : new Date("Dec 21, 1965"),
    isWorking : true,
    income : 50000,
    company : "Microsoft",
    imagePath : "./assets/images/bill.jpeg",
    votes : 130
  }

  onMoreInfo(lastName : string, company : string){
    alert(`Mr. ${lastName} is working with ${company}`)
  }
}
